const askCandidate = require("readline-sync")

let numberCorrect = 0

function askForName() {
  let candidateName = "";
  candidateName = askCandidate.question("Candidate Name:");
  return candidateName;
}

let candidateName = askForName();

function askQuestion1() {
  let question = "1) Who was the first American woman in space?"
  let correctanswer = "Sally Ride"
  let candidateanswer = ""
  candidateanswer = askCandidate.question(question)
  let lowerCaseAns = correctanswer.toLowerCase()
  let lowerCasecandidateanswer = candidateanswer.toLowerCase()
  if(lowerCasecandidateanswer === lowerCaseAns) {console.log("You are Correct"); numberCorrect +=1} else {console.log("Incorrect")}

  console.log(numberCorrect)

  return candidateanswer;
}

function askQuestion2() {
  let question2 = "2) True or False 5 kilometer= 5000 meters?"
  let correctanswer2 = "True"
  let candidateanswer2 = ""
  candidateanswer2 = askCandidate.question(question2)
  let lowerCaseAns2 = correctanswer2.toLowerCase()
  let lowerCasecandidateanswer2 = candidateanswer2.toLowerCase()
  if(lowerCasecandidateanswer2 === lowerCaseAns2) {console.log("You are Correct"); numberCorrect +=1} else {console.log("Incorrect")}

  console.log(numberCorrect)

  return candidateanswer2;
}

function askQuestion3() {
  let question3 = "(5+3)/2*10=?"
  let correctanswer3 = "40"
  let candidateanswer3 = ""
  candidateanswer3 = askCandidate.question(question3)
  if(candidateanswer3 === correctanswer3) {console.log("You are Correct"); numberCorrect +=1} else {console.log("Incorrect")}

  console.log(numberCorrect)
  
  return candidateanswer3;
}

function askQuestion4() {
  let question4 = "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?"
  let correctanswer4 = "Trajectory"
  let candidateanswer4 = ""
  candidateanswer4 = askCandidate.question(question4)
  let lowerCaseAns4 = correctanswer4.toLowerCase()
  let lowerCasecandidateanswer4 = candidateanswer4.toLowerCase()
  if(lowerCasecandidateanswer4 === lowerCaseAns4) {console.log("You are Correct"); numberCorrect +=1} else {console.log("Incorrect")}

  console.log(numberCorrect)

  return candidateanswer4;
}

function askQuestion5() {
  let question5 = "5) What is the minimum crew size for the ISS?"
  let correctanswer5 = "3"
  let candidateanswer5 = ""
  candidateanswer5 = askCandidate.question(question5)
  if(candidateanswer5 === correctanswer5) {console.log("You are Correct"); numberCorrect +=1} else {console.log("Incorrect")}

  console.log(numberCorrect)

  return candidateanswer5;
}


askQuestion1()

askQuestion2()

askQuestion3()

askQuestion4()

askQuestion5()



function gradeQuiz(candidateanswer) {
  let grade =  numberCorrect/5*100
  console.log(`Your Grade is ${grade}%(${numberCorrect} of 5 Answers Correct`)
  for (let i=0; i < 5; i++) {}
  if(numberCorrect > 3) {console.log("Pass")} else {console.log("Fail")}
}

gradeQuiz()