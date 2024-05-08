let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let month = now.getMonth();
let date = now.getDate();
let day = now.getDay();
let fullYear = now.getFullYear();
let hrs = now.getHours();
let mins = now.getMinutes();
let secs = now.getSeconds();
let ampm;

if(hrs > 12){
    hrs = hrs-12;
    ampm = "PM";
}
else{
    ampm = "AM";
}

if (hrs < 10) {
    hrs = "0" + hrs;
}
if (mins < 10) {
    mins = "0" + mins;
}
if (secs < 10) {
    secs = "0" + secs;
}
if (month < 10) {
    month = "0" + month;
}
if (date < 10) {
    date = "0" + date;
}

var answer = document.getElementById("answer");
var question = document.getElementById('question');
var q1Btn = document.getElementById('question1');

q1Btn.addEventListener('click', function(){
    question.innerHTML = "Question 1: Write a Javascript program to display the current day and time";
    answer.innerHTML = `Answer: <br/> Today is: <b> ${weekdays[day]} </b> <br/> Current Time is: <b> ${hrs}:${mins}:${secs} ${ampm} </b>`;
})


var q2Btn = document.getElementById('question2');
q2Btn.addEventListener('click', function(){
    question.innerHTML = "Question 2: Write a Javascript program to get the Current Date";
    answer.innerHTML = `Answer: Today date is: <b> ${date}-${month}-${fullYear} </b>`;
})



var q3Btn = document.getElementById('question3');
q3Btn.addEventListener('click', function(){
    question.innerHTML = "Question 3: Write a Javascript program to find out if 1st January will be a Sunday between 2024 and 2050";
    // answer.innerHTML = "";
    answer.innerHTML = "Answer:";
    for (let year = 2024; year < 2050; year++){
        let today = new Date(year, 0, 1);
        if (today.getDay() === 0) {
            answer.innerHTML += `<br/> 1st January <b> ${year} </b> will be on Sunday`;
        }
    }

})

 
var q4Btn = document.getElementById('question4');
q4Btn.addEventListener('click', function(){
    question.innerHTML = "Question 4: Write a Javascript program whether the program takes a random integar between 1 and 10, and the user then prompted to input a guess number";

    let rand = Math.floor(Math.random()*10+1);
    let uInput = +prompt("Question No.4: Please Enter a Number between 1 and 10 for guessing the random number");
    
    if (rand == uInput) {
        answer.innerHTML = `Answer: Good Work! your input ${uInput} matches the random number ${rand}`;
    }
    else{
        answer.innerHTML = `Answer: Try again! the random number was ${rand}`;
    }
})

var q5Btn = document.getElementById('question5');
q5Btn.addEventListener('click', function(){
    question.innerHTML = "Question 5: Write a Javascript program to calculate the days left before 14 August"

    let expDate = new Date(now.getFullYear(), 7, 14);
    let diff = expDate.getTime() - now.getTime();
    let daysLeft = Math.round(diff / (1000*3600*24));
    answer.innerHTML = `Answer: <b> ${daysLeft} </b> days left until 14th August 2024`;
})


var q6Btn = document.getElementById('question6');
q6Btn.addEventListener('click', function(){
    question.innerHTML = "Question 6: Write a Javascript program to remove a character at the specified position in a given string and return the modified string";

    let string = "Pakistan Zindabad"
    let position =  +prompt("Question No.6: Enter an index number to remove a character from that index");
    let modifiedStr = string.slice(0, position)  + string.slice(position+1) //+ position+2;
    answer.innerHTML = `Answer: Original String was <b> ${string} </b> <br/> and after removal of indexed ${position} character, modified string is <b> ${modifiedStr} </b>`;
    
})



var q7Btn = document.getElementById('question7');
q7Btn.addEventListener('click', function(){
    question.innerHTML = "Question 7: Write a javascript program to check whether a given positive number is a multiple of 3 or 7";
    let userInput = +prompt("Question No.10: Enter a positive number");

    if(userInput %3 == 0){
        if(userInput % 7 == 0){
            answer.innerHTML = `Answer: Given number <b> ${userInput} </b> is multiple of both 3 and 7`;
        }
        else{
            answer.innerHTML = `Answer: Given number <b> ${userInput} </b> is multiple of 3`;
        }
    }
    else if(userInput % 7 == 0){
        answer.innerHTML = `Answer: Given number <b> ${userInput} </b> is multiple of 7`;
    }
    else{
        answer.innerHTML = `Answer: Given number <b> ${userInput} </b> is neither multiple of 3 nor of 7`;
    }

})



var q8Btn = document.getElementById('question8');
q8Btn.addEventListener('click', function(){
    question.innerHTML = "Question 8: Write a Javascript program to check whether a string starts with 'Java'";

    let str = "Javascript is a scripting language";
    if (str.startsWith("Java")) {
        answer.innerHTML = `Answer:  Given String is <b> <i> ${str} </i> </b> and it starts with <b> Java <b/>`;
    }
    else{
        answer.innerHTML = `Answer: Given String is <b> <i> ${str} </i> </b> and it does not start with <b> Java <b/>`;
    }
})


var q9Btn = document.getElementById('question9');
q9Btn.addEventListener('click', function(){

    question.innerHTML = "Question 9: Write a Javascript program to check whether three given integar values are in the range 50..99 (inclusive)";

    let firstNum  = +prompt("Question No.9: Enter First Number to check whether it is between 50 and 99");
    let secondNum = +prompt("Question No.9: Enter Second Number to check whether it is between 50 and 99");
    
    if (firstNum >= 50 && firstNum <= 99) {
        if (secondNum >= 50 && secondNum <=99) {
            answer.innerHTML = `Answer: Both input number ${firstNum}, ${secondNum} are between 50 and 99 (inclusive)`;
        }
        else{
            answer.innerHTML = `Answer: First input number ${firstNum} falls between 50 and 99 (inclusive)`;
        }
    }
    else if(secondNum >= 50 && secondNum <=99){
        answer.innerHTML = `Answer: Second input number ${secondNum} is between 50 and 99 (inclusive)`;
    }
    
    else {
        answer.innerHTML = `Answer: None of the input numbers ${firstNum}, ${secondNum} is between 50 and 99 (inclusive)`;
    }
})



var q10Btn = document.getElementById("question10");

q10Btn.addEventListener("click", function () {

  let firstNumber = +prompt("Question No.10: Enter First Number to check if it ranges between 50 and 99");
  let secondNumber = +prompt("Question No.10: Enter Second Number to check if it ranges between 50 and 99");
  let thirdNumber = +prompt("Question No.10: Enter Third Number to check if it ranges between 50 and 99");

  question.innerHTML = "Question 10: Write a Javascript program to check whether three given integar values are in the range 50..99 (inclusive)";

  if (firstNumber >= 50 && firstNumber <= 99 && secondNumber >= 50 && secondNumber <= 99 && thirdNumber >= 50 && thirdNumber <= 99) {
    answer.innerHTML = `Answer: All input numbers <b> ${firstNumber}, ${secondNumber} and ${thirdNumber} </b> are between 50 and 99 (inclusive)`;
  }
  else if (firstNumber >= 50 && firstNumber <= 99 && secondNumber >= 50 && secondNumber <= 99 && !(thirdNumber >= 50 && thirdNumber <= 99)) {
    answer.innerHTML = `Answer: First & Second input numbers <b> ${firstNumber} and ${secondNumber} </b> are between 50 and 99 (inclusive)`;
  }
  else if (firstNumber >= 50 && firstNumber <= 99 && thirdNumber >= 50 && thirdNumber <= 99 && !(secondNumber >= 50 && secondNumber <= 99)) {
    answer.innerHTML = `Answer: First & Third input numbers <b> ${firstNumber} and ${thirdNumber} </b> are between 50 and 99 (inclusive)`;
  }
  else if (secondNumber >= 50 && secondNumber <= 99 && thirdNumber >= 50 && thirdNumber <= 99 && !(firstNumber >= 50 && firstNumber <= 99)) {
    answer.innerHTML = `Answer: Second & Third input numbers <b> ${secondNumber} and ${thirdNumber} </b> are between 50 and 99 (inclusive)`;
  }
  else if (firstNumber >= 50 && firstNumber <= 99 && !(secondNumber >= 50 && secondNumber <= 99) && !(thirdNumber >= 50 && thirdNumber <= 99)) {
    answer.innerHTML = `Answer: First input numbers <b> ${firstNumber} </b> is between 50 and 99 (inclusive)`;
  }
  else if (secondNumber >= 50 && secondNumber <= 99 && !(firstNumber >= 50 && firstNumber <= 99) && !(thirdNumber >= 50 && thirdNumber <= 99)) {
    answer.innerHTML = `Answer: Second input numbers <b> ${secondNumber} </b> is between 50 and 99 (inclusive)`;
  }
  else if (thirdNumber >= 50 && thirdNumber <= 99 && !(secondNumber >= 50 && secondNumber <= 99) && !(firstNumber >= 50 && firstNumber <= 99)) {
    answer.innerHTML = `Answer: Third input numbers <b> ${thirdNumber} </b> is between 50 and 99 (inclusive)`;
  }
  else {
    answer.innerHTML = `Answer: None of the input numbers <b> ${firstNumber}, ${secondNumber} and ${thirdNumber} </b> is between 50 and 99 (inclusive)`;
  }

});
