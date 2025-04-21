// const students = [
//     {Name : "Emmanuel Obioha", age : 20, course :"Web Development"},
//     {Name : "Shagunna Benjamin", age : 23, course : "Web Design"}, 
//     {Name : "Nelson Madu", age : 25, course : "Data Analysis"}
// ];

// const container = document.getElementById ("studentContainer");

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const studentDiv = document.createElement("div");
// studentDiv.className ="student";
//     studentDiv.innerHTML =`
//     <b>STUDENT INFO</b><br><br>
//     <b>Name :</b> ${student.Name}<br>
//     <b>Age :</b> ${student.age} <br>
//     <b>Course :</b> ${student.course}
//     <button onclick="greetStudent('${student.Name}')">Greet</button>
//     <hr />
// `; 

// container.appendChild(studentDiv);

// }
// function greetStudent(name) {
//     alert (`Hello, ${name}!`);
// }

// const person = {}

// person.firstName = "Benjamin";
// person.lastName = "Shagunna";
// person.age = 22;
// person.eyeColor = "Brown";
// person.nationality = "Nigerian";
// delete person.eyeColor

// document.write(person.firstName); 
// document.write(person.lastName);
// document.write(person.eyeColor);
// document.write(person.age);
// document.write(person.nationality);


//ARRAY TASK

const images = [
    "images/31charger.webp",
    "images/amazfit.webp",
    "images/iPhone-17-Air-Size-Feature.jpg",
    "images/oneplus.webp",
    "images/vivo-y03-with-premium-colors-mobi.jpg",
    "images/vivo-y03.jpg",
    "images/vivoy03.jpeg",
    "images/istockphoto-1316372316-612x612.jpg",
]

let currentImage = 0
function nextImage() {
    const imgElement = document.getElementById("image");
    imgElement.src = images[currentImage];
    currentImage = (currentImage + 1) % images.length;
  }

