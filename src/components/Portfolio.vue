<template>

<div id="portfolio">
    <div id="portfolio-header">
        <h2>Here are some examples of my work.</h2>
        <button @click="$router.push({path: '/resume'})">Too see my resume, click here.</button>

        <ul class="portfolio-nav">
            <li class="outer-button" v-bind:key="skill.name" v-for="skill in FrontEnd">
                {{ skill.name }}
                
                <ul>
                    <li class="middle-button" v-bind:key="middleSkill.skill" v-for="middleSkill in skill.skill" v-bind:id="middleSkill.skill" @click="keyword=middleSkill.skill" onclick="event.stopPropagation();">
                        {{ middleSkill.skill }}
                        <ul>
                            <li class="inner-button" v-bind:key="innerSkill.skill" v-for="innerSkill in middleSkill.subSkill" v-bind:id="innerSkill.skill"
                            @click="keyword=innerSkill.skill" onclick="event.stopPropagation();">
                            {{ innerSkill.skill }}
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    <ul class="portfolio-nav">
      <li class="outer-button" v-bind:key="skill.name" v-for="skill in BackEnd" v-bind:id="skill.skill" >
          {{ skill.name }}
          <ul>
            <li class="middle-button" v-bind:key="middleSkill.skill" v-for="middleSkill in skill.skill" v-bind:id="middleSkill.skill"
            @click="keyword=middleSkill.skill" onclick="event.stopPropagation();">
            {{ middleSkill.skill }}
                <ul>
                  <li class="inner-button" v-bind:key="innerSkill.skill" v-for="innerSkill in middleSkill.subSkill" v-bind:id="innerSkill.skill"
                  @click="keyword=innerSkill.skill" onclick="event.stopPropagation();">
                  {{ innerSkill.skill }}
                      <ul>
                          <li class="innermost-button" v-bind:key="innermostSkill.skill" v-for="innermostSkill in innerSkill.subSkill" v-bind:id="innermostSkill.skill"
                          @click="keyword=innermostSkill.skill" onclick="event.stopPropagation();">
                          {{ innermostSkill.skill }}
                          </li>
                      </ul>
                  </li>
                </ul>
            </li>
          </ul>
        </li>
      </ul>
      <button class="sorting-button" @click="keyword=''">Clear Filter</button>
  </div>

  <div id="portfolio-items">
      <transition-group name="fade">
          <div class="portfolio-item" v-bind:key="portfolio.name" v-for="portfolio in siteFilter">
              <a class="portfolio-img" href="">
                  <div class="browserBar">
                      <div class="browserRed">X</div>
                      <div class="browserYellow">&#x2750;</div>
                      <div class="browserGreen">-</div>
                  </div>
                  <img v-bind:src="portfolio.image" alt="">
              </a>
              <div class="portfolio-information">
                  <a :href="portfolio.link"><h3>{{ portfolio.name }}</h3></a>                           
                  <ul>
                      <li class="portfolioTech" v-bind:key="tech.name" v-for="tech in portfolio.tech">{{ tech }}</li>
                  </ul>
                  <p>{{ portfolio.desc }}</p>
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
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Vue.js'],
                image: 'src/assets/img/AlleaWard.jpg',
                desc: "You are on it right now!"
            },
            { 
                name: 'GearheadsGarage', 
                link: 'https://www.gearheadsgarageau.com/', 
                tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'jQueryValidate', 'PHP', 'Linux', 'Apache'], 
                image: 'src/assets/img/GearheadsGarage.jpg', 
                desc: "A business website for a small Gold Coast based mechanic. It was built and hosted with the LAMP stack." 
            },
            { 
                name: "Cut N' Edge", 
                link: 'https://cutnedgesunshinecoast.wardwebdevelopment.com/', 
                tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'jQueryValidate', 'PHP', 'Linux', 'Apache'], 
                image: 'src/assets/img/CutNEdge.jpg', 
                desc: 'A business website for a Sunshine Coast based Garden Maintenance business.' 
            },
            { 
                name: 'WardWebDevelopment', 
                link: 'https://wardwebdevelopment.com/', 
                tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'jQueryValidate', 'PHP', 'Linux VM', 'Apache'], 
                image: 'src/assets/img/WardWebDevelopment.jpg', 
                desc: 'An alternative website for my freelance web development business.' 
            },
            { 
                name: 'Calorie Calculator', 
                link: 'https://fitnessapp.wardwebdevelopment.com/', 
                tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'jQueryValidate', 'AJAX', 'PHP', 'MYSQL', 'AWS EC2', 'Amazon Linux Server', 'Apache'], 
                image: 'src/assets/img/FitnessApp.jpg', 
                desc: 'A fitness calculator that demonstrates: Databases, Simple User Accounts, Form Inputs and calculations using Javascript and PHP.' 
            },
            {
                name: 'VueToDo', 
                link: 'https://fitnessapp.wardwebdevelopment.com/', 
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Node.js', 'Webpack'],
                image: 'src/assets/img/VueToDo.jpg',
                desc: 'A basic to-do list built using Vue.JS / Node.js / Webpack.' 
            }
        ],
        FrontEnd: [
            {
                name: 'Front End' , skill: [
                    {
                        skill: 'HTML5', subSkill: [

                        ]
                    },
                    {
                        skill: 'CSS3', subSkill: [
                            { skill: 'SASS' },
                            { skill: 'Bootstrap' },
                            { skill: 'Materialize CSS' },
                            // { skill: 'Bulma' },
                            // { skill: 'SVG' },
                            // { skill: 'Flexbox' },
                            // { skill: 'Grid' },
                            // { skill: 'Animations' }

                        ]
                    },
                    {
                        skill: 'JavaScript', subSkill: [
                            { skill: 'jQuery' },
                            { skill: 'Vue.js' },
                            // { skill: 'React' },
                            // { skill: 'Angular' },
                            { skill: 'AJAX' }
                            // { skill: 'NPM' },
                            // { skill: 'Webpack' },
                            // { skill: 'Regex' }

                        ]
                    }
                ]
            }
        ],
        BackEnd: [
            {
                name: 'Back End', skill: [
                    // { 
                    //     skill: 'Languages' , subSkill: [
                    //         // { skill: 'Web Assembly', subSkill: [
                    //         //     { skill: '' },
                    //         //     { skill: '' }
                    //         //     ]
                    //         // },
                            { skill: 'Node.js', subSkill: [
                                { skill: 'NPM' },
                                { skill: 'Express' }
                                ]
                            },
                            { skill: 'PHP', subSkill: [
                                { skill: 'Laravel' }
                                ]
                            },
                            // { skill: 'C#', subSkill: [
                            //     // { skill: '.NET ASP MVC'}
                            //     ]
                            // },
                            // { skill: 'Python', subSkill: [
                            //     { skill: 'Django' }
                            //     ]
                            // },
                            // { skill: 'Ruby', subSkill: [
                            //         { skill: 'Ruby on Rails' }
                            //     ]
                        //     }
                        // ]
                    
                    {
                        // skill: 'Databases & Operating Systems(OS)', subSkill: [
                        //     {
                                skill: 'Databases', subSkill: [
                                    { skill: 'MySQL' },
                                    { skill: 'PostgreSQL' },
                                    // { skill: 'MSSQL' },
                                    { skill: 'MongoDB' }
                                ]
                            },
                    //         { skill: 'Operating Systems (OS)', subSkill: [
                    //             { skill: 'Windows' },
                    //             { skill: 'Linux' }
                    //             ]
                    //     //     }
                    //     // ]
                    // },

                    // { skill: 'What do i call this?', subSkill: [

                    //         { skill: 'Architectural Patterns', subSkill: [
                    //                 { skill: 'Object Oriented' }
                    //             ]
                    //         },
                    //         { skill: 'Testing Methodogies', subSkill: [
                    //                 { skill: 'Red-Green Refactor (TDD)' }
                    //             ]
                    //         }
                    //     ]
                    // },

                    { 
                        // skill: 'Servers & Hosting', subSkill: [
                        //     {
                                skill: 'Servers', subSkill: [
                                    { skill: 'Apache' },
                                    { skill: 'Nginx' },
                                    { skill: 'IIS' },
                                    { skill: 'Node.js' }
                                ]
                            // }
                        // ]

                            // {
                            //     skill: 'cPanel', subSkill: [
                            //         { skill: 'MailServer' }
                            //     ]
                            // },
                            // { skill: 'Amazon Web Services (AWS)', subSkill: [
                            //         { skill: 'EC2' },
                            //         { skill: 'S3' },
                            //         { skill: 'Route53' },
                            //         { skill: 'Load Balancing' },
                            //         { skill: 'Elastic Beanstalk' }
                            //     ]
                            // }
                    }
                ]
            }          
        ],
        // { skill: 'Gradle', catagory: 'FrontEnd', 'BackEnd' },
        // { skill: 'Jenkins', catagory: 'FrontEnd', 'BackEnd' },
        // { skill: 'Ansible', catagory: 'FrontEnd', 'BackEnd' },
        // { skill: 'Data Algorithms', catagory: 'CS' },
        // { skill: 'SVG', catagory: 'Design' }
        Misc: [
            { skill: 'Wix'},
            { skill: 'JSON'},
            { skill: 'Shopify'}
        ]
    }
  },
  computed:{
    updateKeyword(skill) {
      console.log('Keyword changing to '+skill)
      this.keyword = skill
      console.log('Keyword is now '+this.keyword)
      event.stopPropagation()
    },
    portfolioFilter() {
        // return this.portfolioList.filter(item => item.catagory.includes(this.keyword))
        // return this.portfolioList.filter(item => portfolioList.tech.includes(this.keyword))
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
#portfolio {
    max-width: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding-bottom: 200px;
    padding-top: 50px;
    background-image: url("../assets/img/creampaper.png");
    // text-align: left;
    justify-items: center;
    span{
    font-weight: bold;
    }
}

h1, h2 {
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

a {
  color: #42b983;
}

#portfolio-header{
    margin: auto;

    .portfolio-nav{
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      margin: auto;
      margin-top: 35px;
      border-radius: 12px;
      border: 0;
      // box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
      .outer-button{
        font-size: 1.2rem;
        &:hover{
          box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.5);
          // background-color: #4484CE;
          // color: white;
          transition:all 0.3s ease-in-out;
          -moz-transition:all 0.3s ease-in-out;
          -webkit-transition:all 0.3s ease-in-out;
        }
        ul{
            display: flex;
            flex-flow: row wrap;
        }
        
        .middle-button{
            font-size: 1rem;
            flex-grow: 1;
            color: black;
            list-style: none;
            background-color: #f1f1f1;
            box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);

            &:hover{
                box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.5);
                // background-color: rgb(100, 206, 68);
                // color: white;
                transition:all 0.3s ease-in-out;
                -moz-transition:all 0.3s ease-in-out;
                -webkit-transition:all 0.3s ease-in-out;
            }
        }
        .inner-button{
            font-size: .8rem;
            flex-grow: 1;
            list-style: none;
            background-color: #ebe9e9;
            box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
            &:hover{
                box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.5);
                // background-color: rgb(100, 206, 68);
                // color: white;
                transition:all 0.3s ease-in-out;
                -moz-transition:all 0.3s ease-in-out;
                -webkit-transition:all 0.3s ease-in-out;
            }
            .innermost-button{
                font-size: .8rem;
                flex-grow: 1;
                list-style: none;
                background-color: #ebe9e9;
                box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
                &:hover{
                    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.5);
                    // background-color: rgb(100, 206, 68);
                    // color: white;
                    transition:all 0.3s ease-in-out;
                    -moz-transition:all 0.3s ease-in-out;
                    -webkit-transition:all 0.3s ease-in-out;
                }
            }
        }
    }
  }
  .portfolio-active{
      background-color: #FFAB0D;
  }
    li{
        // flex-grow: 1;
        // line-height: 3em;
        text-align: center;
        padding: 5px 10px 5px 10px;
        margin: 5px 5px 5px 5px;
        background-color: white;
        border-radius: 5px;
        font-size: 12px;
        width: auto;
        white-space: nowrap;
        color: black;
        text-decoration: none;

    }
}

.fade-enter-active{
    transition: all 1s ease-out;
}
.fade-enter-to{
    opacity: 1;
}
.fade-leave{
    opacity: 1;
}
.fade-leave-active{
    transition: all 1s ease-out;
    position: absolute; /*IMPORTANT*/
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
.fade-move {
    transition: all 1s ease-out;
}
.fade-item {
    transition: all 1s ease-out;
}

#portfolio-items{
    // width: 48%;
    max-width: 400px;
    // min-width: 400px;
    padding-top: 30px;
    span{
        display: flex;
        flex-flow: row wrap;
        margin: auto;
        .portfolio-item{
            text-align: center;
            margin: 30px;
            padding: 20px;
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            border-bottom: 3px solid white;
            .portfolio-img{
                width: 100%;
                display: flex;
                flex-flow: row wrap;
                img{
                    width: 100%;
                    height: auto;
                }
                .browserBar{
                    width: 100%;
                    background-color: #a8a8a8;
                    height: 15px;
                    font-family: Arial, Helvetica, sans-serif;
                    font-weight: bold;
                    font-size: 50%;
                    .browserRed, .browserYellow, .browserGreen{
                        height: 10px;
                        width: 15px;
                        float: right;
                        border: 1px solid black;
                        margin: 0px 0px 3px 0px;
                    }
                    .browserRed{
                        background-color: #FF0000;
                    }
                    .browserYellow{
                        background-color: #FFFF00;
                    }
                    .browserGreen{
                        background-color: #00ff00;
                        border-radius: 0px 0px 0px 3px;
                    }
                }
            }   
            .portfolio-information{
                max-width: 100%;
                text-align: center;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
                h3{
                    // font-family: $font-two;
                    font-size: 14px;
                    text-transform: uppercase;
                    font-weight: 400;
                    margin-bottom: 0px;
                }
                p{
                    font-size: 12px;
                    // font-family: $font-one;
                    font-weight: normal;
                    color: grey;
                    margin: 0;
                }
                ul{
                    display: flex;
                    flex-flow: row wrap;
                    padding: 0;
                    width: 100%;
                    .portfolioTech{
                        flex-grow: 1;
                        background-color: white;
                        color: black;
                        list-style: none;
                        border-radius: 10px;
                        padding: 6px 10px;
                        margin: 5px;
                    }
                }
            }
        }
    }
}
#resumeButton{
    box-shadow: inset 0 0 0 1000px rgba(43, 43, 43, 0.8);
  position: fixed;
  width: 100vw;
  // margin-left: -50vw;
  height: 200px;
  bottom: 0;
  left: 0;
  border: 0;
  box-sizing: border;
  background: url('../assets/img/resume.jpg') center center no-repeat;
  background-size: cover;
  transition:all 0.8s ease-in-out;
  -moz-transition:all 0.8s ease-in-out;
  -webkit-transition:all 0.8s ease-in-out;
    &:hover{
        .button{
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
    transition:all 0.4s ease-in-out;
    -moz-transition:all 0.4s ease-in-out;
    -webkit-transition:all 0.4s ease-in-out;
    &:hover {
        background-color: rgba(255, 255, 255, 1);
        color: rgba(55, 55, 55, 0.9);  
    }
  }

  &:hover{
    height: 60vh;
  }
}
</style>
