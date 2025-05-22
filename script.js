

//about event listener

const aboutAbout = document.getElementById("about");
const aboutSkills = document.getElementById("skills");
const aboutEducation = document.getElementById("education");
const aboutExp = document.getElementById("Experience");

aboutHeading = document.getElementById("aboutHeading");
aboutPassage = document.getElementById("aboutPassage");
aboutPassage2 = document.getElementById("aboutPassage2");





aboutAbout.addEventListener("click", event =>{
    aboutHeading.textContent = "About ME";
    aboutPassage.textContent = "Hi, I'm Tinashe, a passionate web developer with a knack for creating beautiful and functional websites. I love turning complex problems into simple, beautiful, and intuitive designs. My goal is to make the web a better place, one line of code at a time.";
    aboutPassage2.textContent = "With a background in computer science and years of experience in the industry, I have honed my skills in various programming languages and frameworks. I am always eager to learn new technologies and improve my craft.";
});

aboutSkills.addEventListener("click", event =>{
    aboutHeading.textContent = " About ME";
    aboutPassage.textContent = "Hi, I'm Tinashe, a passionate web developer with a knack for creating beautiful and functional websites. I love turning complex problems into simple, beautiful, and intuitive designs. My goal is to make the web a better place, one line of code at a time.";
    aboutPassage2.textContent = "With a background in computer science and years of experience in the industry, I have honed my skills in various programming languages and frameworks. I am always eager to learn new technologies and improve my craft.";
});