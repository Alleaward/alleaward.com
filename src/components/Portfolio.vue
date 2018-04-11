<template>

<div id="portfolio">
    <div id="portfolio-header">
        <h1>Portfolio</h1>
        <ul class="portfolio-nav">
        <li class="outer-button">
            <p>Catagory 1</p>
            <p>Catagory 2</p>
        </li>
    </ul>
    <button class="sorting-button" @click="keyword=''">Clear Filter</button>
</div>

  <div id="portfolio-items">
      <transition-group name="fade">
          <div class="portfolio-item" v-bind:key="portfolio.name" v-for="portfolio in siteFilter">
            <img class="portfolio-img" v-bind:src="portfolio.image" alt="">
              <div class="portfolio-information">
                <div class="portfolio-information-header">
                  <a class="portfolio-item-title" :href="portfolio.link"><h3>{{ portfolio.name }}</h3></a>
                  <a class="portfolio-item-github" :href="portfolio.github"><i class="ion-social-github"></i></a>
                </div>
                  <p>{{ portfolio.desc }}</p>
                  <ul>
                      <li class="" v-bind:key="tech.name" v-for="tech in portfolio.tech">{{ tech }}</li>
                  </ul>
              </div>
          </div>
      </transition-group>
  </div>  
  <div class="buttonWrap">
    <button id="resumeButton"><span class="button" @click="$router.push({path: '/resume'})">Resume</span></button>
  </div>
</div> 
</template>

<script>
export default {
  name: "portfolio",
  data() {
    return {
      keyword: '',
      portfolioList: [
            {
                name: 'Allea Ward',
                link: 'https://www.alleaward.com/',
                github: 'https://www.alleaward.com/',
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Vue.js'],
                image: 'src/assets/img/AlleaWard.jpg',
                desc: "This is the website i built to hold examples of my work, You are on it right now!"
            },
            { 
                name: 'GearheadsGarage', 
                link: 'https://www.gearheadsgarageau.com/', 
                github: 'https://github.com/Alleaward/Gearheads-Garage',
                tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP', 'Linux', 'Apache'], 
                image: 'src/assets/img/GearheadsGarage.jpg', 
                desc: "Gearheadsgarageau.com is a simple business website for a Gold Coast mechanic, it was built on the LAMP stack with the Bootstrap library for some styling and a php form." 
            },
            { 
                name: "Cut N' Edge", 
                link: 'https://cutnedgesunshinecoast.wardwebdevelopment.com/', 
                github: 'https://github.com/Alleaward/Cut-N-Edge',
                tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP', 'Linux', 'Apache'], 
                image: 'src/assets/img/CutNEdge.jpg', 
                desc: 'A business website for a Sunshine Coast based Garden Maintenance business.' 
            },
            { 
                name: 'WardWebDevelopment', 
                link: 'https://wardwebdevelopment.com/', 
                github: 'https://github.com/Alleaward/Ward-Web-Development',
                tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'PHP', 'Linux VM', 'Apache'], 
                image: 'src/assets/img/WardWebDevelopment.jpg', 
                desc: 'An alternative website for my freelance web development business.' 
            },
            { 
                name: 'TDEE Calculator', 
                link: 'https://fitnessapp.wardwebdevelopment.com/', 
                github: 'https://github.com/Alleaward/TDEE-Calculator',
                tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX', 'PHP', 'MYSQL', 'AWS EC2', 'Amazon Linux Server', 'Apache'], 
                image: 'src/assets/img/FitnessApp.jpg', 
                desc: 'A fitness calculator that demonstrates: Databases, Simple User Accounts, Form Inputs and calculations using Javascript and PHP.' 
            }
        ]
    }
  },
  computed:{
    updateKeyword(skill) {
      console.log('Keyword changing to '+ skill)
      this.keyword = skill
      console.log('Keyword is now '+this.keyword)
      event.stopPropagation()
    },
    siteFilter() {
        console.log(this.keyword)
        let lowerCaseKeyWord = this.keyword.toLowerCase()
        // return this.sitelist.filter(site => site.tech.some(el => el.toLowerCase().includes(lowerCaseKeyWord)))
        return this.portfolioList.filter(site => site.tech.some(el => el.toLowerCase().includes(lowerCaseKeyWord)))
    }
  }
}
</script>

<style lang="scss">
html{
  background-image: url("../assets/img/creampaper.png");
}
body {
  margin: 0;
}
#portfolio {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1,
h2 {
  font-weight: normal;
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
#portfolio-header {
  position: fixed;
  top: 50px;
  right: 50px;
  background-color: white;
  border-radius: 30px;
  border: 5px solid black;
}

.fade-enter-active {
  transition: all 1s ease-out;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s ease-out;
  position: absolute;
  /*IMPORTANT*/
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-move {
  transition: all 1s ease-out;
}
.fade-item {
  transition: all 1s ease-out;
}

#portfolio-items {
  border: 3px solid green;
  width: 80%;
  padding-top: 50px;
  padding-left: 50px;
  padding-bottom: 200px;

  span {
    background-color: pink;
    border: 3px solid red;

    display: flex;
    flex-flow: row wrap;

    .portfolio-item {
      border: 3px solid yellow;

      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 30px;
      justify-content: space-around;
      .portfolio-img {
          border: 3px solid orange;

          height: auto;
      }
      .portfolio-information {
        border: 3px solid blue;

        display: flex;
        flex-flow: row wrap;
        align-content: space-around;
        .ion-social-github{

          &:hover{
            color: blue;
          }
        }
        .portfolio-information-header{
          border: 3px solid red;

          width: 100%;
          display: flex;
          justify-content: center;
          .portfolio-item-title{
            border: 3px solid gold;
            
            color: black;
            font-size: 20px;
            text-transform: uppercase;
            font-weight: 400;
            &:hover{
              color: lightgreen;
            }
          }
          .portfolio-item-github{
            border: 3px solid greenyellow;

            color: black;
            font-size: 50px;
            i{
              &:hover {
                color: #5245AC;
                transition: all 0.3s ease-in-out;
                -moz-transition: all 0.3s ease-in-out;
                -webkit-transition: all 0.3s ease-in-out;
              }
            }
          }
        }
        p {
          border: 3px solid green;

          width: 80%;
          margin: auto;
        }
        ul {
          border: 3px solid darkblue;

          width: 90%;
          display: flex;
          flex-flow: row wrap;
          margin: auto;
          padding: 0;
          li {
            border: 3px solid red;

            flex-grow: 1;
            background-color: white;
            color: black;
            list-style: none;
            text-align: center;
            border-radius: 10px;
            padding: 6px 10px;
            margin: 5px;
          }
        }
      }
    }
  }
}

#resumeButton {
  box-shadow: inset 0 0 0 1000px rgba(43, 43, 43, 0.8);
  position: fixed;
  width: 100vw; // margin-left: -50vw;
  height: 200px;
  bottom: 0;
  left: 0;
  border: 0;
  box-sizing: border;
  background: url('../assets/img/resume.jpg') center center no-repeat;
  background-size: cover;
  transition: all 0.8s ease-in-out;
  -moz-transition: all 0.8s ease-in-out;
  -webkit-transition: all 0.8s ease-in-out;
  &:hover {
    .button {
      color: #fff;
      border: #fff solid 0.2rem;
    }
  }
  .button {
    display: block;
    position: absolute;
    left: 50%;
    top: 40%;
    height: 2.5rem;
    padding-top: 1.3rem;
    width: 15rem;
    text-align: center;
    color: rgba(155, 155, 155, 0.8);
    border: rgba(155, 155, 155, 0.8) solid 0.2rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    transform: translateX(-50%);
    transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    &:hover {
      background-color: rgba(255, 255, 255, 1);
      color: rgba(55, 55, 55, 0.9);
    }
  }
  &:hover {
    height: 60vh;
  }
}

</style>
