<template>

<div id="portfolio">

  <div id="portfolio-header">
    <ul class="portfolio-nav">
      <li class="nav-skill" id="html" @click="keyword='HTML'"><p>HTML</p></li>
      <li class="nav-skill" id="css" @click="keyword='CSS'"><p>CSS</p></li>
      <li class="nav-skill" id="javascript" @click="keyword='JavaScript'"><p>JavaScript</p></li>
      <li class="nav-skill" id="jquery" @click="keyword='jQuery'"><p>jQuery</p></li>
      <li class="nav-skill" id="nodejs" @click="keyword='Node'"><p>Node.js</p></li>
      <li class="nav-skill" id="vue" @click="keyword='Vue'"><p>Vue</p></li>
      <li class="nav-skill" id="php" @click="keyword='PHP'"><p>PHP</p></li>
      <li class="nav-skill" id="show-all" @click="keyword=''"><p>Show All</p></li>
    </ul>
    <!-- <button class="sorting-button" @click="keyword=''">Clear Filter</button> -->
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
                      <li :class="tech" v-bind:key="tech.name" v-for="tech in portfolio.tech">{{ tech }}</li>
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
                tech: ['html', 'css', 'javascript', 'node', 'vue'],
                image: 'src/assets/img/AlleaWard.jpg',
                desc: "This is the website i built to hold examples of my work, you are on it right now. This website was built using Node.js and Vue."
            },
            { 
                name: 'Gearheads Garage', 
                link: 'https://www.gearheadsgarageau.com/', 
                github: 'https://github.com/Alleaward/Gearheads-Garage',
                tech: ['html', 'css', 'bootstrap', 'javascript', 'jquery', 'php', 'linux', 'apache'], 
                image: 'src/assets/img/GearheadsGarage.jpg', 
                desc: "Gearheadsgarageau.com is a simple business website for a Gold Coast mechanic, it was built on the LAMP stack with the Bootstrap library for some styling and a php form." 
            },
            { 
                name: 'PHP Store', 
                link: 'http://phpstore.wardwebdevelopment.com/products.php', 
                github: 'https://github.com/Alleaward/PHP-Online-Store',
                tech: ['html', 'css', 'javascript', 'php', 'linux', 'apache'], 
                image: 'src/assets/img/PhpStore.jpg', 
                desc: "An online store written in PHP, by loading products from a CSV it creates an easily scaleable online store." 
            },
            { 
                name: "Cut N' Edge", 
                link: 'https://cutnedgesunshinecoast.wardwebdevelopment.com/', 
                github: 'https://github.com/Alleaward/Cut-N-Edge',
                tech: ['html', 'css', 'bootstrap', 'javascript', 'jquery', 'php', 'linux', 'apache'], 
                image: 'src/assets/img/CutNEdge.jpg', 
                desc: 'A business website for a Sunshine Coast based Garden Maintenance business.' 
            },
            { 
                name: 'Ward Web Development', 
                link: 'https://wardwebdevelopment.com/', 
                github: 'https://github.com/Alleaward/Ward-Web-Development',
                tech: ['html', 'css', 'bootstrap', 'javascript', 'jquery', 'php', 'linux', 'apache'], 
                image: 'src/assets/img/WardWebDevelopment.jpg', 
                desc: 'An alternative website for my freelance web development business.' 
            },
            { 
                name: 'TDEE Calculator', 
                link: 'https://fitnessapp.wardwebdevelopment.com/', 
                github: 'https://github.com/Alleaward/TDEE-Calculator',
                tech: ['html', 'css', 'materializecss', 'javascript', 'ajax', 'jquery', 'php', 'mysql', 'apache'], 
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
  display: flex;
  flex-flow: row nowrap;
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
  top: 20px;
  width: 100%;
  height: auto;
  max-height: 100px;
  display: flex;
  justify-content: left;
  ul{
    border: #484848 solid 1px;
    box-shadow: 0 3px 3px rgba(10, 10, 10, .4), 0 0 0 1px rgba(10, 10, 10, .2);
    background-color: #91896E;
    display: flex;
    flex-flow: row wrap;
    width: 88%;
    padding: 5px 0.5%;
    border-radius: 15px;
    margin: auto;
    li:first-child{
      p{
        padding-left: 15px;
      }
      border-radius: 15px 0px 0px 15px;
    }
    li:last-child{
      border-radius: 0px 15px 15px 0px;
    }
    .nav-skill{
      border: #484848 solid 1px;
      min-width: 60px;
      height: 40px;
      line-height: 35px;
      font-size: 20px;
      margin: 2px;
      flex-grow: 1;
      display: block;
      transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      overflow: hidden;
      border-radius: 0px;
      &:hover, &:active, &:focus{
        // flex-grow: 2;
        height: 80px;
        border-radius: 10px;
      }
      p{
        text-transform: uppercase;
        font-weight: bold;
        padding-left: 5px;
        margin-top: 0;
        height: 100%;
        width: 100%;
        // background-color: rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        &:hover, &:active, &:focus{
          background-color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
}
#html{
  background-color: #f5672a;
  &:hover{
  background: url('../assets/img/html.png') no-repeat center center;
  background-size: contain;
  background-position: 90% 50%;
  background-color: #f5672a;
    color: black;
  }
}
#css{
  background-color: #29a8dd;
  &:hover{
  background: url('../assets/img/css.png') no-repeat center center;
  background-size: contain;
  background-position: 90% 50%;
  background-color: #29a8dd;
    color: black;
  }
}
#javascript{
  background-color: #F0DB4F;
  &:hover{
  background: url('../assets/img/javascript.png') no-repeat center center;
  background-size: contain;
  background-position: 90% 50%;
  background-color: #F0DB4F;
    color: black;
  }
}
#jquery{
  background-color: #1069AE;
  &:hover{
  background: url('../assets/img/jquery.png') no-repeat center center;
  background-size: contain;
  background-position: 90% 50%;
  background-color: #1069AE;
    color: black;
  }
}
#vue{
  background-color: #41B883;
  &:hover{
  background: url('../assets/img/vue.png') no-repeat center center;
  background-size: contain;
  background-position: 90% 50%;
  background-color: #41B883;
    color: black;
  }
}
#php{
  background-color: #8993BE;
  &:hover{
  background: url('../assets/img/php.png') no-repeat center center;
  background-size: contain;
  background-position: 90% 50%;
  background-color: #8993BE;
    color: black;
  }
}
#mysql{
  background-color: #E38D1A;
  &:hover{
  background: url('../assets/img/mysql.png') no-repeat center center;
  background-size: contain;
  background-position: 90% 50%;
  background-color: #E38D1A;
    color: black;
  }
}
#nodejs{
  background-color: #7EB341;
  &:hover{
  background: url('../assets/img/nodejs.png') no-repeat center center;
  background-size: contain;
  background-position: 90% 50%;
  background-color: #7EB341;
    color: black;
  }
}
#linux{
  background-color: #404040;
  &:hover{
  background: url('../assets/img/linux.png') no-repeat center center;
  background-size: contain;
  background-position: 90% 50%;
  background-color: #404040;
    color: black;
  }
}
#show-all{
  background-color: #D62829;
  &:hover{
  background: url('../assets/img/show-all.png') no-repeat center center;
  background-size: contain;
  background-position: 90% 50%;
  background-color: #D62829;
    color: black;
  }
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
  // border: 3px solid green;
  min-width: 90%;
  margin: auto;
  padding-top: 120px;
  padding-bottom: 200px;

  span {
    // border: 3px solid red;

    display: flex;
    flex-flow: row wrap;
    .portfolio-item {
      // border: 3px dashed black;
      border-radius: 15px;
      border: #484848 solid 1px;
      background-color: #f1f1f1;
      margin: auto;
      width: 90%;
      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 30px;
      justify-content: space-around;
      box-shadow: 0 3px 3px rgba(10, 10, 10, .4), 0 0 0 1px rgba(10, 10, 10, .2);
      .portfolio-img {
          // border: 3px solid orange;
          border-radius: 15px 0px 0px 15px;
          border-right: #484848 solid 1px;
          height: auto;
      }
      .portfolio-information {
        // border: 3px solid blue;

        display: flex;
        flex-flow: row wrap;
        align-content: space-around;
        padding-bottom: 10px;
        .portfolio-information-header{
          // border: 3px solid red;

          width: 100%;
          display: flex;
          justify-content: center;
          .portfolio-item-title{
            // border: 3px solid gold;
            
            color: black;
            text-decoration: none;
            font-size: 30px;
            text-transform: uppercase;
            font-weight: 400;
            line-height: 70px;
            padding-right: 20px;
            h3{
              margin: 0;
              &:hover{
                color: rgb(0, 153, 255);
                  transition: all 0.3s ease-in-out;
                  -moz-transition: all 0.3s ease-in-out;
                  -webkit-transition: all 0.3s ease-in-out;
              }
            }
          }
          .portfolio-item-github{
            // border: 3px solid greenyellow;
            background-color: white;
            width: 60px;
            height: 60px;
            border: 3px solid black;
            border-radius: 100%;
            text-align: center;
            color: black;
            font-size: 50px;
            &:hover {
              background-color: #5245AC;
              color: white;
              border-color: white;
              transition: all 0.3s ease-in-out;
              -moz-transition: all 0.3s ease-in-out;
              -webkit-transition: all 0.3s ease-in-out;
            }
          }
        }
        p {
          // border: 3px solid green;
          font-size: 18px;
          width: 80%;
          margin: auto;
          text-align: center;
        }
        ul {
          // border: 3px solid darkblue;

          width: 90%;
          display: flex;
          flex-flow: row wrap;
          margin: auto;
          padding: 0;
          li {
            box-shadow: 0 3px 3px rgba(10, 10, 10, .4), 0 0 0 1px rgba(10, 10, 10, .2);
            flex-grow: 1;
            // background-color: white;
            text-transform: uppercase;
            font-weight: bold;
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
.html{
  background-color:#f5672a;
}
.css, .bootstrap, .materializecss, .bulma{
  background-color:#29a8dd;
}
.javascript, .ajax{
  background-color:#F0DB4F;
}
.jquery{
  background-color:#1069AE;
}
.node{
  background-color:#7EB341;
}
.vue{
  background-color:#41B883;
}
.php{
  background-color:#8993BE;
}
.linux{
  background-color:#686868;
}
.apache{
  background-color:#D94A51;
}
.mysql{
  background-color:#E38D1A;
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
