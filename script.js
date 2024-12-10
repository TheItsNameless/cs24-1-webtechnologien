'use strict';

// Projektdetails
let projektInfos = ['Projekt 1 ist Toll!', 'Projekt 2 ist noch besser!'];

fetch(
    'https://raw.githubusercontent.com/TheItsNameless/cs24-1-webtechnologien/refs/heads/main/projects.json'
)
    .then((response) => response.text())
    .then((text) => JSON.parse(text))
    .then((data) => (projektInfos = data['projects']));

function zeigeProjektDetails(event, index, projectDetails) {
    projectDetails.textContent = projektInfos[index];
}

let projectsList = document.querySelector('#projects');
let projects = projectsList.querySelectorAll('li');
let projectDetails = document.querySelector('#details');

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', (event) =>
        zeigeProjektDetails(event, i, projectDetails)
    );
}

// Formularvalidierung
function validiereFormular() {
    let name = document.querySelector('#name');
    let nachricht = document.querySelector('#nachricht');

    if (name.value == '' || nachricht.value == '') {
        alert('Bitte fülle die Felder aus!');
        return false;
    }

    return true;
}
