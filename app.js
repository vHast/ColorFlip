const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Button setup

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click' , function(){
  // Get random number between 0 - 3 for colors[0-3]
  const randomNumber = getRandomNumber();
  console.log(randomNumber)
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
// Randomizer, will multiply with the length of colors
function getRandomNumber(){
  return Math.floor(Math.random() * colors.length)
}