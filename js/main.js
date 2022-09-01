import Card from './card.js'


// const selectors = {
//     boardContainer: document.querySelector('.board-container'),
//     board: document.querySelector('.board'),
//     moves: document.querySelector('.moves'),
//     timer: document.querySelector('.timer'),
//     start: document.querySelector('button'),
//     win: document.querySelector('.win')
// }

// const state = {
//     gameStarted: false,
//     flippedCards: 0,
//     totalFlips: 0,
//     totalTime: 0,
//     loop: null
// }

const startButton = document.getElementById('start_button');

startButton.addEventListener('click', () => {
    let doc = prompt("Please enter number of pairs");
      
    if (((doc % 2) == 0) || (doc.value >= 0 )|| (doc.value < 10)) {
     newGame(document.getElementById('game'), `${doc}`);
        } 
        else {
            alert("значение для поля установлено по умолчанию (4)");
            newGame(document.getElementById('game'), 4);
            }  
});


function newGame(container, cardsCount){
   //Сreated field
    let cardsNumberArray  = [],
    cardsArray =[],
    firstCard = null,
    secondCard = null;

    for (let i = 1; i <= cardsCount / 2; i++){
        cardsNumberArray.push(i);
        cardsNumberArray.push(i);
       
    }

    
     cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

   for (const cardNumber of cardsNumberArray) {
    cardsArray.push(new Card(container, cardNumber, flip));
   }
   //logic
   function flip (card){
   //console.log(card.number)
        if(firstCard!==null && secondCard!==null){
            if(firstCard.number != secondCard.number){
                firstCard.open = false;
                secondCard.open = false;
                firstCard = null;
                secondCard = null;
             }
        }
        
        if (firstCard == null){
            firstCard = card;
            }
        else {
            if(secondCard == null){
                secondCard = card;
            }

        }
       
        if(firstCard!==null && secondCard!==null){
            if(firstCard.number == secondCard.number){
                firstCard.success = true;
                secondCard.success = true;
                firstCard = null;
                secondCard = null;
            }
        }
        //reset
        if(document.querySelectorAll('.card.success').length == cardsNumberArray.length){
           // alert('pobeda');
            container.innerHTML = `<span class="win-text">
            You won!<br /></span>`,
            cardsNumberArray  = [],
            cardsArray =[],
            firstCard = null,
            secondCard = null;

            newGame(container, cardsCount)
        }
   }


 }
// newGame(cardsCount);
// newGame(document.getElementById('game'), 6);]


