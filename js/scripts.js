//business logic
var player1="";
var player2="";

var rollthedice = function () {
  return Math.floor(6*Math.random())+1;
}

function Player(roll) {
  this.roll = 0;
  this.totalpoints = 0;
  this.totalscore = 0;
  this.roll = roll;
  this.playerName;
}

Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.totalpoints = 0;
  alert("Ooooops! " + this.playerName + ", you rolled a 1! Your turn is over!")
  } else {
  this.totalpoints += this.roll;
  }
}

Player.prototype.hold = function () {
  this.totalscore += this.totalpoints;
  this.totalpoints = 0;
  alert(this.playerName + ", your turn is over.It's the next players turn.");
}

Player.prototype.confirmWinner = function () {
  if (this.totalscore >= 100) {
    alert("Hoooray!"+this.playerName + " you won.");
  }
}

Player.prototype.newGame = function () {
  this.roll = 0;
  this.totalpoints = 0;
  this.totalscore = 0;
  this.playerName ="";
}

var clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}

// User Interface
$(document).ready(function() {

  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 =  new Player(false);
    $(".player-input").show();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;

  });
  $("button#play-again").click(function(event){
    $(".player-input").show();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#player1-total").empty();
    $("#player1-score").empty();
    $("#die1-roll").empty();
    $("#player2-total").empty();
    $("#player2-score").empty();
    $("#die2-roll").empty();

    $(".player-info").show();
  });

  $("button#player1-roll").click(function(event){
    player1.roll = rollthedice();
    $("#die1-roll").text(player1.roll);
    player1.rollone();
    $("#player1-total").text(player1.totalpoints);
  });

  $("button#player2-roll").click(function(event){
    player2.roll = rollthedice();
    $("#die2-roll").text(player2.roll);
    player2.rollone();
    $("#player2-total").text(player2.totalpoints);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#player1-score").text(player1.totalscore);
    $("#player1-total").empty();
    $("#die1-roll").empty();
    player1.confirmWinner();
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#player2-score").text(player1.totalscore);
    $("#player2-total").empty();
    $("#die2-roll").empty();
    player2.confirmWinner();
  });

  $("span#player1-score").confirmWinner();
  $("span#player1-score").confirmWinner();

});
