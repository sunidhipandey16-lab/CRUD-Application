let students = []

function addStudent(){

let name = document.getElementById("name").value
let course = document.getElementById("course").value

if(name === "" || course === ""){
alert("Please fill all fields")
return
}

students.push({name,course})

displayStudents()

document.getElementById("name").value=""
document.getElementById("course").value=""
}

function displayStudents(){

let table = document.querySelector("#studentTable tbody")

table.innerHTML=""

students.forEach((student,index)=>{

let row = `<tr>

<td>${student.name}</td>

<td>${student.course}</td>

<td>

<button class="edit" onclick="editStudent(${index})">Edit</button>

<button class="delete" onclick="deleteStudent(${index})">Delete</button>

</td>

</tr>`

table.innerHTML += row

})

}

function deleteStudent(index){

students.splice(index,1)

displayStudents()

}

function editStudent(index){

let newName = prompt("Enter new name",students[index].name)

let newCourse = prompt("Enter new course",students[index].course)

students[index].name = newName
students[index].course = newCourse

displayStudents()

}