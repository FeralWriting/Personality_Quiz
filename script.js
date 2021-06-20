//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
let questionCount = 0;

let bamboo = 0;
let succulent = 0;
let mint = 0;
let tobacco = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
let q1a1 = document.getElementById("q1a1");
let q1a2 = document.getElementById("q1a2");
let q1a3 = document.getElementById("q1a3");
let q1a4 = document.getElementById("q1a4");
let q2a1 = document.getElementById("q2a1");
let q2a2 = document.getElementById("q2a2");
let q2a3 = document.getElementById("q2a3");
let q2a4 = document.getElementById("q2a4");
let q3a1 = document.getElementById("q3a1");
let q3a2 = document.getElementById("q3a2");
let q3a3 = document.getElementById("q3a3");
let q3a4 = document.getElementById("q3a4");

let restart1 = document.getElementById("r1");
let restart2 = document.getElementById("r2");
let restart3 = document.getElementById("r3");

let clearButton = document.getElementById("clear");

let baPlant = document.getElementById("baplant");
let boPlant = document.getElementById("boplant");
let tPlant = document.getElementById("tplant");
let mPlant = document.getElementById("mplant");
let sPlant = document.getElementById("splant");

let result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", tobaccoPlant);
q1a2.addEventListener("click", succulentPlant);
q1a3.addEventListener("click", bambooPlant);
q1a4.addEventListener("click", mintPlant);
q2a1.addEventListener("click", mintPlant);
q2a2.addEventListener("click", succulentPlant);
q2a3.addEventListener("click", tobaccoPlant);
q2a4.addEventListener("click", bambooPlant);
q3a1.addEventListener("click", bambooPlant);
q3a2.addEventListener("click", tobaccoPlant);
q3a3.addEventListener("click", mintPlant);
q3a4.addEventListener("click", succulentPlant);
restart1.addEventListener("click", clearAnswers1);
restart2.addEventListener("click", clearAnswers2);
restart3.addEventListener("click", clearAnswers3);
clearButton.addEventListener("click", clearQuiz);

//#TODO: Define quiz functions here
function clearQuiz() {
  questionCount = 0;
  bamboo = 0;
  succulent = 0;
  mint = 0;
  tobacco = 0;
  result.innerHTML = "Your result is...";
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q1a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q2a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q3a1.disabled = false;

  tPlant.style.visibility = "hidden";
  mPlant.style.visibility = "hidden";
  sPlant.style.visibility = "hidden";
  baPlant.style.visibility = "hidden";
  boPlant.style.visibility = "hidden";
}

function clearAnswers1() {
  questionCount--;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q1a1.disabled = false;
  if (q1a1.clicked === true) {
    tobacco--;
  } else if (q1a2.clicked === true) {
    succulent--;
  } else if (q1a3.clicked === true) {
    bamboo--;
  } else if (q1a4.clicked === true) {
    mint--;
  }
}
function clearAnswers2() {
  questionCount--;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q2a1.disabled = false;
  if (q2a1.clicked === true) {
    mint--;
  } else if (q2a2.clicked === true) {
    succulent--;
  } else if (q2a3.clicked === true) {
    tobacco--;
  } else if (q2a4.clicked === true) {
    bamboo--;
  }
}
function clearAnswers3() {
  questionCount--;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q3a1.disabled = false;
  tPlant.style.visibility = "hidden";
  mPlant.style.visibility = "hidden";
  sPlant.style.visibility = "hidden";
  baPlant.style.visibility = "hidden";
  boPlant.style.visibility = "hidden";
  result.innerHTML = "Your result is...";
  if (q3a1.clicked === true) {
    bamboo--;
  } else if (q3a2.clicked === true) {
    tobacco--;
  } else if (q3a3.clicked === true) {
    mint--;
  } else if (q3a4.clicked === true) {
    succulent--;
  }
}

q1a1.onclick = function() {
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
  q1a1.disabled = true;
};
q1a2.onclick = function() {
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
  q1a1.disabled = true;
};
q1a3.onclick = function() {
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
  q1a1.disabled = true;
};
q1a4.onclick = function() {
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
  q1a1.disabled = true;
};

q2a1.onclick = function() {
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
  q2a1.disabled = true;
};
q2a2.onclick = function() {
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
  q2a1.disabled = true;
};
q2a3.onclick = function() {
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
  q2a1.disabled = true;
};
q2a4.onclick = function() {
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
  q2a1.disabled = true;
};
q3a1.onclick = function() {
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
  q3a1.disabled = true;
};
q3a2.onclick = function() {
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
  q3a1.disabled = true;
};
q3a3.onclick = function() {
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
  q3a1.disabled = true;
};
q3a4.onclick = function() {
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
  q3a1.disabled = true;
};

function tobaccoPlant() {
  tobacco += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function succulentPlant() {
  succulent += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function bambooPlant() {
  bamboo += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}
function mintPlant() {
  mint += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}

function updateResult() {
  if (tobacco >= 2) {
    result.innerHTML = "A Tobacco Plant!";
    tPlant.style.visibility = "visible";
  } else if (succulent >= 2) {
    result.innerHTML = "A Succulent Plant!";
    sPlant.style.visibility = "visible";
  } else if (mint >= 2) {
    result.innerHTML = "A Mint Plant!";
    mPlant.style.visibility = "visible";
  } else if (bamboo >= 2) {
    result.innerHTML = "A Bamboo Plant!";
    baPlant.style.visibility = "visible";
  } else {
    result.innerHTML = "A Bonsai Tree!";
    boPlant.style.visibility = "visible";
  }
}
