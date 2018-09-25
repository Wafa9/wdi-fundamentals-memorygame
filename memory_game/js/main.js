



   var cards=["queen","king"];

   var cardsInPlay=[];

    function checkForMatch()
    {
        if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
     console.log("Sorry, try again.");
}

    }

     function flipCard(cardId){
        
     var cardsInPlay=[];
     console.log("User flipped " + cards);
     cardsInPlay.push(cards[cardId]);
     
     if (cardsInPlay.length ===  2) {

        if(lcardsInPlay[0]  ===  cardsInPlay[1]) {
            alert("You found a match!"); 
        }
        else{
            alert("Sorry, try again.!");
        }
     }
     
     }

     flipCard.call (cards[0]);
     flipCard.call (cards[2]);


