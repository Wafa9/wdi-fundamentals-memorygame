



   var cards=["queen","queen","king","king"];

   var cardsInPlay=[];

    var card1=cards[0];
    cardsInPlay.push('card1'); 
    console.log("User flipped queen");

    var card2= cards[1];
    cardsInPlay.push('card2'); 
     console.log("User flipped king");
     
     
     if (cardsInPlay.length ===2) {

     	if(lcardsInPlay[0]===cardsInPlay[1]) {
     		alert("You found a match!"); 
     	}
     	else{
     		alert("Sorry, try again.!");
     	}
     }