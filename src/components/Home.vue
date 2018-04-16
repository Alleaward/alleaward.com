<template>
  <div id="home">
      <div class="split left">
        <!-- <h1>Resume</h1> -->
        <!-- <a href="/resume" class="button">Skills and Experience</a> -->
        <a @click="$router.push({path: '/resume'})" class="button">Resume</a>
      </div>

      <div class="split right">
        <!-- <h1>Portfolio</h1> -->
        <!-- <a href="/portfolio" class="button">Demonstrations</a> -->
        <a @click="$router.push({path: '/portfolio'})" class="button">Portfolio</a>
      </div>  
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js home'
    }
  }
}
</script>

<style lang="scss">
:root {
  --container-bg-color: #333;
  --left-bg-color: rgba(43, 43, 43, 0.8);
  --left-button-hover-color: rgba(255, 255, 255, 0.9);
  --right-bg-color: rgba(43, 43, 43, 0.8);
  --right-button-hover-color: rgba(255, 255, 255, 0.9);
  --hover-width: 70%;
  --other-width:30%;
  --speed: 1000ms;
}

html, body {
  padding:0;
  margin:0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

// h1 {
//   font-size: 4rem;
//   color: #fff;
//   position: absolute;
//   left: 50%;
//   top: 20%;
//   transform: translateX(-50%);
//   white-space: nowrap;
// }

.button {
  display: block;
  position: absolute;
  left: 50%;
  top: 40%;
  height: 10rem;
  line-height: 8rem;
  padding-top: 1.3rem;
  width: 30rem;
  text-align: center;
  color: #fff;
  border: #fff solid 0.2rem;
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transform: translateX(-50%);
}

.split.left .button:hover {
  background-color: var(--left-button-hover-color);
  border-color: var(--left-button-hover-color);
  color: rgba(55, 55, 55, 0.9);
  transition: 0.2s all ease-in-out;
}

.split.right .button:hover {
  background-color: var(--right-button-hover-color);
  border-color: var(--right-button-hover-color);
  color: rgba(55, 55, 55, 0.9);
  transition: 0.2s all ease-in-out;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--container-bg-color);
}

.split {
  position: absolute;
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.split.left {
  // left:0;
  top:0;
  // background: url('https://image.ibb.co/m56Czw/designer.jpg') center center no-repeat;
  background: url('../assets/img/resume.jpg') center center no-repeat;
  background-size: cover;
}

.split.left:before {
  position:absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: var(--left-bg-color);
}

.split.right {
  // right:0;
  bottom:0;
  // background: url('https://image.ibb.co/m3ZbRb/programmer.png') center center no-repeat;
  background: url('../assets/img/portfolio.png') center center no-repeat;
  background-size: cover;
}

.split.right:before {
  position:absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: var(--right-bg-color);
}

.split.left, .split.right, .split.right:before, .split.left:before {
  transition: var(--speed) all ease-in-out;
}

.hover-left .left {
  height: var(--hover-width);
}

.hover-left .right {
  height: var(--other-width);
}

.hover-left .right:before {
  z-index: 2;
}


.hover-right .right {
  height: var(--hover-width);
}

.hover-right .left {
  height: var(--other-width);
}

.hover-right .left:before {
  z-index: 2;
}

@media(max-width: 800px) {
  h1 {
    font-size: 2rem;
  }

  .button {
    width: 12rem;
  }
}

@media(max-height: 700px) {
  .button {
    top: 70%;
  }
}
</style>
