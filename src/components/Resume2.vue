<template>
<div id="resume">

  <section id="details">
    <h1>Allea Ward – Web Developer</h1>
    <div id="social-banner">
      <ul id="social-link">
        <li class="twitter"><a href=""><i class="ion-social-twitter"></i></a></li>
        <li class="facebook"><a href=""><i class="ion-social-facebook"></i></a></li>
        <li class="pinterest"><a href=""><i class="ion-social-pinterest"></i></a></li>
        <li class="gplus"><a href=""><i class="ion-social-googleplus"></i></a></li>
        <li class="dribbble"><a href=""><i class="ion-social-dribbble-outline"></i></a></li>
      </ul>
    </div>

    <p><span>Location:</span> Pimpama, Gold Coast</p>
    <p><span>Phone:</span> +61490324716</p>
    <p><span>Age:</span> 23</p>
    <p><span>Email:</span> Allea_ward@hotmail.com</p>
    <p><span>Website:</span> www.alleaward.com </p>
    <p><span>GitHub:</span> www.github.com/alleaward 	</p>
    <p><span>LinkedIn:</span> www.linkedin.com/alleaward</p>
    <p><span>Current Driver's license:</span> Yes. </p>
    <p><span>Remote Work:</span> I am happy to work remotely. </p>
    <!-- <p>Blog: <a href="blog.alleaward.com">My Blog</a> </p> -->

    <h2>Objective</h2>
    <p>My objective is to learn how to make software that is pixel perfect and as computationally efficient as possible. 
      I have been extremely passionate about IT, the web, programming and digital media my entire life, ever since I got my first Gameboy I had no doubt I would one day be creating digital media professionally. This lifelong passion for all things digital has translated into a broad range of knowledge on subjects ranging from 3D modeling, graphic design, animation and game design to computer science, programming, and web development. 
      My primary strength is that I am a fast learner, I have learnt a wide range of skills, and each skill allows me to more quickly contextualize and learn future skills faster. I am actively pursuing technical, personal and professional development.
    </p>
  </section>

  <section id="skills">
    <h3>Skills</h3>
    <section class="html skillSection">
        <p class="skillHeading">
          HTML
          <i class="ion-android-star"></i>
          <i class="ion-android-star"></i>
          <i class="ion-android-star"></i>
          <i class="ion-android-star"></i>
          <i class="ion-android-star-outline"></i>
          </p>
          <p>I have an advanced grasp of HTML with most of its functionality committed to memory. I know how to make a properly formed and validated HTML page.</p>

      </section>
      <section class="css skillSection">
        <p class="skillHeading">
          CSS
          <i class="ion-android-star"></i>
          <i class="ion-android-star"></i>
          <i class="ion-android-star"></i>
          <i class="ion-android-star"></i>
          <i class="ion-android-star-outline"></i>
          </p>
      </section>
      <section class="javascript skillSection">
        <p class="skillHeading">
          JavaScript
          <i class="ion-android-star"></i>
          <i class="ion-android-star"></i>
          <i class="ion-android-star"></i>
          <i class="ion-android-star"></i>
          <i class="ion-android-star-outline"></i>
          </p>
      </section>
      <section class="php skillSection">
        <p class="skillHeading">
          PHP
          <i class="ion-android-star"></i>
          <i class="ion-android-star"></i>
          <i class="ion-android-star"></i>
          <i class="ion-android-star"></i>
          <i class="ion-android-star-outline"></i>
          </p>
      </section>
  </section>
</div>
</template>

<script>
export default {
  name: 'resume',
  data () {
    return {
      msg: 'Welcome to Your Vue.js resume'
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
}
#resume {
  // max-width: 760px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  margin-top: 60px;
  padding-bottom: 200px;
  // text-align: left;
  justify-items: center;
  display: flex;
  flex-flow: row wrap;
  span{
    font-weight: bold;
  }
}

//SOCIAL BANNER-----SOCIAL BANNER-----SOCIAL BANNER-----SOCIAL BANNER-----SOCIAL BANNER-----SOCIAL BANNER
#social-banner {
  background-color: #4484CE;
  #social-link {
    padding: 30px 0;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding-left: 0;
    width: 60%;
    margin-top: 20;
    margin: auto;
  }
  #social-link li {
    text-align: center;
    font-size: 30px;
    line-height: 60px;
    height: 60px;
    width: 60px;
    background-color: black;
    border-radius: 50%;
  }
  #social-link li a {
    color: #fff;
  }
  #social-link .twitter:hover {
    background-color: #56ACEE;
    transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
  }
  #social-link .facebook:hover {
    background-color: #39548C;
    transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
  }
  #social-link .pinterest:hover {
    background-color: #CB2127;
    transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
  }
  #social-link .gplus:hover {
    background-color: #D74B39;
    transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
  }
  #social-link .dribbble:hover {
    background-color: #EA4D89;
    transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
  }
}

//Details-----Details-----Details-----Details-----Details-----Details-----Details-----Details
#details{
  width: 760px;
  margin: auto;
}

#skills{
  width: 760px;
  margin: auto;
}

.skillSection{
  // flex-grow: 1;
  // flex-basis: 12.5%;
  width: 100%;
  max-height: 100px;
  min-height: 100px;
  transform: scaleY(1);
  text-align: center;
  color: transparent;
  transition: max-height 3s ease-in-out;
  -moz-transition:  max-height 3s ease-in-out;
  -webkit-transition: max-height 3s ease-in-out;  
  transition:all 0.4s ease-in-out 0.4s;
  -moz-transition:all 0.4s ease-in-out 0.4s;
  -webkit-transition:all 0.4s ease-in-out 0.4s;    
  .skillHeading{
    color: black;
  }
  &:hover, &:active, &:focus{
    // flex-basis: 100%;
    // width: 50%;
    max-height: 1000px;
    transform: scaleY(1);
  }
  p{
    margin: 0;
  }
}
.skillHeading{
  text-align: left;
  text-transform: uppercase;
  font-size: 1.5rem;
  width: 100%;
}
#html, .html{
  background: url('../assets/img/html.png') no-repeat center center;
  background-size: contain;
  background-color: #f5672a;
  &:hover{
    background-position: 90% 50%;
    color: black;
  }
}
#css, .css{
  background: url('../assets/img/css.png') no-repeat center center;
  background-size: contain;
  background-color: #29a8dd;
  &:hover{
    background-position: 90% 50%;
    color: black;
  }
}
#javascript, .javascript{
  background: url('../assets/img/javascript.png') no-repeat center center;
  background-size: contain;
  background-color: #F0DB4F;
  &:hover{
    background-position: 90% 50%;
    color: black;
  }
}
#php, .php{
  background: url('../assets/img/php.png') no-repeat center center;
  background-size: contain;
  background-color: #8993BE;
  &:hover{
    background-position: 90% 50%;
    color: black;
  }
}
#mysql{
  background: url('../assets/img/mysql.png') no-repeat center center;
  background-size: contain;
  background-color: #E38D1A;
  &:hover{
    background-position: 90% 50%;
    color: black;
  }
}
#nodejs{
  background: url('../assets/img/nodejs.png') no-repeat center center;
  background-size: contain;
  background-color: #7EB341;
  &:hover{
    background-position: 90% 50%;
    color: black;
  }
}
#linux{
  background: url('../assets/img/linux.png') no-repeat center center;
  background-size: contain;
  background-color: #404040;
  &:hover{
    background-position: 90% 50%;
    color: black;
  }
}
#windows{
  background: url('../assets/img/windows.png') no-repeat center center;
  background-size: contain;
  background-color: #0077DB;
  &:hover{
    background-position: 90% 50%;
    color: black;
  }
}

</style>
