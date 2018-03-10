<template>
<div id="resume">
  <p><span>Name:</span> Allea Ward </p>
  <p><span>Email:</span> Allea_ward@hotmail.com </p>
  <p>
    <span>Location:</span> Gold Coast, Queensland, Australia.
    I am also willing to relocate to Europe, preferably the UK or Moscow.
  </p>
  <p><span>Current Driver's license:</span> Yes. </p>
  <p><span>Remote Work:</span> I am happy to work remotely. </p>
  <!-- <p>Blog: <a href="blog.alleaward.com">My Blog</a> </p> -->
  <p><span>About me:</span></p>
  <p>I pride myself on my ability to learn new skills and technologies, I have a solid understanding of the fundamentals behind
      programming and so I am able to seperate programming from syntax and easily transfer my skills to new languages. I have reinforced
      the fundamental principles of programming by using several languages from low level languages like C, through to high level
      languages like Python and JavaScript.
  </p>
  <p>For a more details and examples of my skills and knowledge click here to go to my portfolio below.</p>
      
  <button id="portfolioButton" @click="$router.push({path: '/portfolio'})">Portfolio</button>
      
  <p><span>Social Media:</span></p>

  <ul>
    <li>LinkedIn</li>
    <li>GitHub</li>
    <li>Stack Overflow</li>
  </ul>

  <div class="dev skills">
    <p><span>Dev Tools:</span></p>
    <p>
      <span>SSH:</span> Command Line / Bash / Putty <br>
      <span>FTP:</span> FileZilla <br>
      <span>Version Control:</span> GitHub <a href="https://github.com/Allea11">(My GitHub Profile)</a> <br>
      <span> Primary Text Editor / IDE: </span>Visual Studio / VS Code. <br>
      <span>Image Processing:</span> Photoshop / Illustrator. <br>
      <span>Browser:</span> Develop on Chrome, test on all modern browsers. <br>
      <span>Preferred Testing Method:</span> Red-Green Refactor.<br>
    </p>
  </div>

  <div id="education">
    <h2>Education</h2> 
    <span>Goldcoast Tafe, Foxwell Rd.</span> <br>
    2014 | Diploma of Interactive Digital Media <br>
    <br>
    <span>RMIT - Bachelor of Information Technology (In Progress) </span> <br>
    2014 - Ongoing (Part-time) | Bachelor of Information of Technology. <br>
    <br>
    <span>Macquarie - Bachelor of Arts (Philosophy and Politics) (In Progress) </span> <br>
    2016 - Ongoing (Part-time) | Bachelor of Arts, Majoring in Philosophy and Politics.<br>
    <br>
  </div>  

  <h1>A TIMELINE? (2011 Learned JS ---> 2012 LEarned C#)</h1>
  <h2>    
    Type: SPA<br>
    JS Frameworks: Vue<br>
    CSS Frameworks: MaterialiseCSS<br>
  </h2>

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
#resume {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  margin-top: 60px;
  // text-align: left;
  justify-items: center;
  span{
    font-weight: bold;
  }
}

h1, h2 {
  font-weight: normal;
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
#portfolioButton{
  width: 100%;
  margin-left: -50%;
  height: 50px;
  position: fixed;
  bottom: 0;
  border: 0;
  box-sizing: border;
  &:hover{
    height: calc(100vh - 50px);
    transition:all 0.8s ease-in-out;
    -moz-transition:all 0.8s ease-in-out;
    -webkit-transition:all 0.8s ease-in-out;
  }
}
</style>
