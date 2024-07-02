
window.onload=function(){
    show(0);
}

let questions =[

    {
        
    id: 1,
    question: "What is the full from of RAM ?",
    answer: "Random Access Memory",
    options:
    [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Accept Memory",
        "None of these"
    ]
},
{
 id: 2,
 question: "What is the full from of CPU ?",
 answer:"Central Processing Unit",
 options:[
 "Central Processing Unit",
 "Control Power Unit",
 "Central Preload Unit",
 "All of these"
 ]

},
{
 id:3,
question: "What is the full from of E-mail ",
answer:"Electronic Mail",
options:[
    "Electronic Mail",
    "Electroning Mail",
    "Electric Mail",
    "Equal mail"

]


},

{
    id:4,
    question: "Who is the father of Computers",
    answer:"Charles Babbage",
    options:[
    "James Gosling",
     "Charles Babbage",
    " Dennis Ritchie",
    "Bjarne Stroustrup"
    ]
    
    },
    {
    id:5,
    question:"Which of the following language does the computer understand?",
    answer:"Computer understands only Binary Language",
    options:
    [
        " Computer understands only C Language",
    "Computer understands only Assembly Language",
    "Computer understands only Binary Language",
    "Computer understands only BASIC"
    ]
    }


];




function submitForm(event) {
    event.preventDefault();
    let name = document.forms["welcom_form"]["name"].value;

    // storage plyaer name
    sessionStorage.setItem("name", name);
    location.href = "Quiz.html";
    
    
}

let question_count = 0;
let point = 0;

function next()  {  
    let answer = document.querySelector("li.option.active").innerHTML;

    if(answer== questions[question_count].answer){
        point += 10;
        sessionStorage.setItem("points" , point);
    }

if(question_count == questions.length - 1) {
    sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
    clearInterval(mytime);
    location.href = "end.html";
    return;
}



    question_count++;
    show(question_count);
    
    
    
    
}
function show(count){
    let question = document.getElementById("questions");
    //question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = 
    `<h2> Q${question_count + 1}.${questions[count].question}</h2>
    <ul class="option_group">
                    <li class="option">${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                    
                    
                </ul>
 `;  
 toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option"); 

for(let i=0; i< option.length; i++) {
    option[i].onclick = function() {
    for(let j=0; j< option.length; j++) {
        if(option[j].classList.contains("active")){
            option[j].classList.remove("active");
        }
    }
    
        option[i].classList.add("active");
    }
}
}

