// JavaScript voor Rock, Paper, Scissors
setInterval(RockPaperScissors, 1000);

function RockPaperScissors() {
    var img = document.getElementById("rock_paper_scissors");
    if (img.src.match("img/Steen.png")) {
        img.src = "img/Papier.png";
    } else if (img.src.match("img/Papier.png")) {
        img.src = "img/Schaar.png";
    } else {
        img.src = "img/Steen.png"
    }
}