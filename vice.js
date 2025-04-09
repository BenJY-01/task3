const students = [
    {Name : "Emmanuel Obioha", age : 20, course :"Web Development"},
    {Name : "Shagunna Benjamin", age : 23, course : "Web Design"}, 
    {Name : "Nelson Madu", age : 25, course : "Data Analysis"}
];

const container = document.getElementById ("studentContainer");

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const studentDiv = document.createElement("div");
studentDiv.className ="student";
    studentDiv.innerHTML =`
    <b>Name :</b> ${student.Name}<br>
    <b>Age :</b> ${student.age} <br>
    <b>Course :</b> ${student.course}
`; 

container.appendChild(studentDiv);

}

