const title = document.querySelector('.title');
const inputs = document.querySelectorAll('input');
const userScore = document.querySelector('#scoreInput');
const totalScore = document.querySelector('#scoreTotal');
const BTNcalc = document.querySelector('.buttonCalc');
const BTNreset = document.querySelector('.buttonReset');
const modal = document.querySelector('.modal');
const result = document.querySelector('#result');

const test = document.querySelector('.test');

let scores = [];

function grades(){
  let g = userScore.value;
  let s = totalScore.value;
  
  let total = ((g/s) * 100).toFixed(2);
  if(total >= 90){
    result.innerHTML = `
    <h1 class="text-win">You got ${total}% for an A!</h1>
    <i class="far fa-laugh-beam fa-5x"></i>`
  }else if(total >= 80 && total <=89){
    result.innerHTML =`
    <h1 class="text-win">You got ${total}% For a B</h1>
    <i class="far fa-smile-beam fa-5x"></i>`
  }else if(total >= 70 && total <= 79){
    result.innerHTML = `
    <h1 class="text-win">You got ${total}% for a C</h1>
    <i class="far fa-smile fa-5x"></i>`
  }else if(total >= 60 && total <= 69){
    result.innerHTML = `
    <h1 class="text-win">You got ${total}% for a D</h1>
    <i class="far fa-grimace fa-5x"></i>`
  }else{
    result.innerHTML = `
    <h1 class="text-win">You got a ${total}% and failed</h1>
    <i class="fas fa-thumbs-down fa-5x"></i>`
  }
  scores.push(total);
  getAverage();
  modal.style.display = 'block';
  
}

function getAverage(){
  const reducer = (acc, currentVal) => parseFloat(acc) + parseFloat(currentVal);
  console.log(scores.reduce(reducer));
  t = scores.reduce(reducer);
  let avg = (t / scores.length).toFixed(2);
  console.log(avg)
  // test.innerHTML = `<h1>${scores.reduce(reducer)}</h1>`
  // test.innerHTML = `<h1>Average is ${avg}</h1>`
  if(avg >= 90){
    test.innerHTML=
    `<h1 class="test"> Average is ${avg}</h1>
    <i class="far fa-laugh-beam fa-5x"></i>`
  }else if(avg >= 80 && avg <=89){
    test.innerHTML=
    `<h1 class="test"> Average is ${avg}</h1>
    <i class="far fa-smile-beam fa-5x"></i>`
  }else if(avg >= 70 && avg <=79){
    test.innerHTML=
    `<h1 class="test"> Average is ${avg}</h1>
    <i class="far fa-smile fa-5x"></i>`
  }else if(avg >= 60 && avg <=69){
    test.innerHTML=
    `<h1 class="test"> Average is ${avg}</h1>
    <i class="far fa-grimace fa-5x"></i>`
  }else{
    test.innerHTML=
    `<h1 class="test"> Average is ${avg}</h1>
    <i class="fas fa-thumbs-down fa-5x"></i>`
  }
}


// reset button
function clearInput(){
  document.querySelector('#scoreInput').value = "";
  document.querySelector('#scoreTotal').value = "";
  document.querySelector('.buttonCalc').disabled = false;
}

// This runs on the buttons to make sure there is input then it runs the main program function if conditions are met
function success(){
  if(document.querySelector('#scoreInput').value==='' ||document.querySelector('#scoreTotal').value===''){
    document.querySelector('.buttonCalc').disabled = true;
    
  }else{
    document.querySelector('.buttonCalc').disabled = false;
    grades();
  }
}

// clear modal function
function clearModal(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}

// event listeners
BTNcalc.addEventListener('click', success);

window.addEventListener('click', clearModal)

BTNreset.addEventListener('click', clearInput)


// Try adding a list underneath the buttons with 'Grade: x - Score: x' and then at the bottom add them all up and give the totals. See if youcan add event listener to update total dynamically
