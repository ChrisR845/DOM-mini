let greeting = document.getElementById("greeting");
let myName = document.getElementById("myName");
let studentName = document.getElementById("studentName");
let tag = document.getElementById("tag");

greeting.textContent = "WELCOME";
studentName.textContent = "Chris";

tag.style.backgroundColor = "orange";
studentName.style.color = "white";

myName.style.color = "red";
myName.style.backgroundColor = "green";

console.log(greeting.textContent);
console.log(studentName.textContent);

let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs.length);

paragraphs[0].style.color = "red";

paragraphs[2].style.color = "green";
paragraphs[3].style.color = "yellow";

paragraphs[1].textContent = "Gold";
paragraphs[1].style.color = "gold";

console.log(paragraphs[0].textContent);
console.log(paragraphs[1].textContent);

let heading = document.getElementsByTagName("h1");
heading.textContent = "Rainbow Words";