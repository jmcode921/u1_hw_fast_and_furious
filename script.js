let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
document.getElementById("main-title").innerHTML = "Doms Page"
  // Part 2
document.body.style.backgroundColor = "blue";
  // Part 3
document.querySelectorAll('li')[5].remove()
  // Part 4
let newFont =document.querySelectorAll('.special-title')
  newFont.forEach((newFont)=>{
    newFont.style.fontSize = '2em';
  }) 
  // Part 5
document.querySelector('#past-races').querySelectorAll('li')[3].remove()
  // Part 6
const newList =document.createElement('li')
newList.appendChild(document.createTextNode('Atlanta'))
document.querySelector('#past-races').appendChild(newList)
  // Part 7
  const myCity =document.querySelector('.main')

  const blogPost =document.createElement('div')
  blogPost.setAttribute('class','blog-post purple')

  const h1 =document.createElement('h1')
  h1.innerText = 'Atlanta'
  blogPost.append(h1)

  myCity.appendChild(blogPost)

  const newP = document.createElement('p')
  newP.innerText = 'Atlanta is the best city in the USA!'
  blogPost.appendChild(newP)
}
