alert("Let's Play A Game Of Cricket");

var player1Name = prompt("Please Enter Player 1 Name");
var player2Name = prompt("Please Enter Player 2 Name");
document.querySelector("#teamName1").innerHTML= player1Name;
document.querySelector("#teamName2").innerHTML= player2Name;
alert("Welcome " + player1Name + " & " + player2Name + " to a exciting game of dice cricket");
alert("Start the game by clicking on Roll Dice");


var dice = {
  sides: 6,
  roll: function () {
    var randomNumber1 = Math.floor(Math.random() * 7);
    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomImageSource = "images/Roll/" + randomDiceImage;

    var image1 = document.querySelector("img");
    image1.setAttribute("src", randomImageSource);

    if (randomNumber1 ===0) {
      document.querySelector("h3").innerHTML="Dot Ball---No Run";

    }else if (randomNumber1 ===1) {
      document.querySelector("h3").innerHTML="No Timing---Just One Run";

    }else if (randomNumber1 ===2) {
      document.querySelector("h3").innerHTML="Pushed into the gap---Two Runs";
    }else if (randomNumber1 ===3) {
      document.querySelector("h3").innerHTML="Will have to run hard---Three Runs";
    }else if (randomNumber1===4) {
      document.querySelector("h3").innerHTML="Great Shot to the Boundary!!!!";
      var audio = new Audio("sounds/four.m4a");
        audio.play();
    }
    else if (randomNumber1===5) {
      document.querySelector("h3").innerHTML="That's Out";
      var audio = new Audio("sounds/out.mp3");
        audio.play();
    }
    else if (randomNumber1===6) {
      document.querySelector("h3").innerHTML="Fantastic Shot!!!!!!";
      var audio = new Audio("sounds/Six.m4a");
        audio.play();
    }

  }
}



//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};
//
