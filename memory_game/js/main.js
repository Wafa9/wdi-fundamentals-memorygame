



   var cards=[];
   var myArray = [
{
    rank:'queen',
    suit:'hearts',
    cardImage:'images/queen-of-hearts.png',
},
{
    rank:'queen',
    suit:'diamonds',
    cardImage:'images/queen-of-diamonds.png',
},
{
    rank:'king',
    suit:'hearts',
    cardImage:'images/king-of-hearts.png',
},
{
    rank:'king',
    suit:'diamonds',
    cardImage:'images/king-of-diamonds.png',
},
];

   var cardsInPlay=[];

    function checkForMatch()
    {
        this.setAttribute('cards[cardId].cardImage');
        if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
     console.log("Sorry, try again.");
}

    }

     function flipCard(){
    this.getAttribute('data-id');

        
     var cardsInPlay=[];
     console.log("User flipped " + cards[cardId].rank);
     cardsInPlay.push(cards[cardId].rank);
     
     console.log(" " + cards[cardId].cardImage);
     cardsInPlay.push(cards[cardId].cardImage);

     
     console.log(" " + cards[cardId].suit);
     cardsInPlay.push(cards[cardId].suit);

     if (cardsInPlay.length ===  2) {

        if(lcardsInPlay[0]  ===  cardsInPlay[1]) {
            alert("You found a match!"); 
        }
        else{
            alert("Sorry, try again.!");
        }
     }
     
     }

     
     var new = document.createElement('img'); 

      function createBoard(){
      for (var i = 0; i < cards.length; i++) {
      
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', 'i');
      document.getElementById("ame-board'").appendChild(node);

}

      }
     
     document.getElementById('game-board').addEventListener('click',flipCard(cardId));
     createBoard();







