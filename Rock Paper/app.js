userscore=0;
compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userscorepara =document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame = () => {
    //  console.log("game was draw");
    msg.innerText = "DRAW PLAY AGAIN";
    msg.style.backgroundColor="#001524";
}

const showWinner = (userwin,userChoice,compChoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText=userscore
        console.log("You Win!");
        msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else {
        console.log("You Lose");
        compscore++;
        compscorepara.innerText=compscore
        msg.innerText = `YOU LOSE ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}
const playgame = (userChoice) => {
    console.log("user choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);

    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        }
        else {
            userwin = compChoice === "rock" ? false : true;
        }

        showWinner(userwin ,userChoice,compChoice);
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log(userChoice);
        playgame(userChoice);
    });
});

