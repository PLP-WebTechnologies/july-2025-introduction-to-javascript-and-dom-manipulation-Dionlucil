// JavaScript - 100 lines
// PART 1: Variables and Conditionals
function checkStudent() {
    var name = document.getElementById("studentName").value;
    var age = parseInt(document.getElementById("studentAge").value);
    var result = document.getElementById("studentResult");
    
    if (name === "" || isNaN(age)) {
        result.textContent = "Please enter both name and age.";
        result.className = "result error";
        return;
    }
    
    if (age >= 18) {
        result.textContent = "Hello " + name + "! You are eligible for college.";
        result.className = "result success";
    } else {
        result.textContent = "Hi " + name + "! You need to wait " + (18 - age) + " more years.";
        result.className = "result info";
    }
}

// PART 2: Functions
function calculateGrade() {
    var marks = parseInt(document.getElementById("marks").value);
    var result = document.getElementById("gradeResult");
    
    if (isNaN(marks) || marks < 0 || marks > 100) {
        result.textContent = "Please enter valid marks between 0-100.";
        result.className = "result error";
        return;
    }
    
    var grade = getGrade(marks);
    result.textContent = "Your grade is: " + grade;
    result.className = "result success";
}

function getGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 80) return "B";
    else if (marks >= 70) return "C";
    else if (marks >= 60) return "D";
    else return "F";
}

function formatText() {
    var text = document.getElementById("textInput").value;
    var result = document.getElementById("textResult");
    
    if (text === "") {
        result.textContent = "Please enter some text.";
        result.className = "result error";
        return;
    }
    
    var formatted = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    result.textContent = "Formatted: " + formatted;
    result.className = "result info";
}

// PART 3: Loops
function showSubjects() {
    var subjects = ["Mathematics", "English", "Science", "History"];
    var list = document.getElementById("subjectList");
    list.innerHTML = "";
    
    for (var i = 0; i < subjects.length; i++) {
        var li = document.createElement("li");
        li.textContent = (i + 1) + ". " + subjects[i];
        list.appendChild(li);
    }
}

function startCountdown() {
    var countdownElement = document.getElementById("countdown");
    var count = 5;
    countdownElement.classList.remove("hidden");
    
    var timer = setInterval(function() {
        countdownElement.textContent = count;
        count--;
        
        if (count < 0) {
            countdownElement.textContent = "Done!";
            clearInterval(timer);
            setTimeout(function() {
                countdownElement.classList.add("hidden");
            }, 2000);
        }
    }, 1000);
}

function displayNumbers() {
    var result = document.getElementById("numbersResult");
    var numbers = "";
    var i = 1;
    
    while (i <= 10) {
        numbers += i;
        if (i < 10) numbers += ", ";
        i++;
    }
    
    result.textContent = "Numbers: " + numbers;
    result.className = "result info";
}

// PART 4: DOM Manipulation
var messageVisible = false;
var colorChanged = false;

function toggleMessage() {
    var message = document.getElementById("toggleMessage");
    
    if (messageVisible) {
        message.classList.add("hidden");
        messageVisible = false;
    } else {
        message.classList.remove("hidden");
        messageVisible = true;
    }
}

function changeColors() {
    var sections = document.querySelectorAll(".section");
    
    for (var i = 0; i < sections.length; i++) {
        if (colorChanged) {
            sections[i].classList.remove("highlight");
        } else {
            sections[i].classList.add("highlight");
        }
    }
    colorChanged = !colorChanged;
}

function addElement() {
    var container = document.getElementById("dynamicContent");
    var newElement = document.createElement("div");
    var count = container.children.length + 1;
    
    newElement.className = "result info";
    newElement.textContent = "New element #" + count + " created!";
    container.appendChild(newElement);
}
