let aboutMe = document.getElementById('aboutme');
let education = document.getElementById('education');
let projects = document.getElementById('projects');
let achievement = document.getElementById('achievement');
 

document.getElementById('side-about').addEventListener('click', () => {
        aboutMe.style.display="block";
        education.style.display="none";
        projects.style.display="none";
        achievement.style.display="none";
})
document.getElementById('side-education').addEventListener('click', () => {
        aboutMe.style.display="none";
        education.style.display="block";
        projects.style.display="none";
        achievement.style.display="none";
})
document.getElementById('side-projects').addEventListener('click', () => {
        aboutMe.style.display="none";
        education.style.display="none";
        projects.style.display="block";
        achievement.style.display="none";
})
document.getElementById('side-achievement').addEventListener('click', () => {
        aboutMe.style.display="none";
        education.style.display="none";
        projects.style.display="none";
        achievement.style.display="block";
})
