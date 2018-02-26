<template>

<div id="portfolio">
    <div id="portfolio-header">
        <h2>Here are some examples of my work.</h2>
        <ul class="portfolio-nav">
            <li class="outer-button" v-bind:key="FrontEnd.name" v-for="skill in FrontEnd" v-bind:id="skill.skill">
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
      <li class="outer-button" v-bind:key="BackEnd.name" v-for="skill in BackEnd" v-bind:id="skill.skill" >
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
      <button class="sorting-button"@click="keyword=''">Clear Filter</button>
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
                      <li class="portfolioTech" v-for="tech in portfolio.tech">{{ tech }}</li>
                  </ul>
                  <p>{{ portfolio.desc }}</p>
              </div>
          </div>
      </transition-group>
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
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
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
                            { skill: 'Node.js (JavaScript)', subSkill: [
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
                                skill: 'Web/HTTP Servers', subSkill: [
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

</style>
