let userScore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");


// Function to known the winner of the win
const playGame = (userchoice) =>{
     console.log("Users choice =" , userchoice);
     let compchoice = getComputerChoice();
     console.log("Computer choice =", compchoice);

     if(userchoice == compchoice){
        // Draw Game
        document.getElementById("msg").innerHTML = "Game Draw";
        document.getElementById("msg-container").style.backgroundColor= "yellow";
     }

     else{
        let userwin = true;
        if(userchoice === "rock" ){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false: true;
        }

        showinner(userwin, userchoice, compchoice);
     }

};

// showing the winner

const  showinner = (userwin, userchoice, compchoice) => {
     if(userwin){
        document.getElementById("msg").innerHTML = `You Win, Your ${userchoice} beat's ${compchoice} !!`;
        document.getElementById("user-score").innerHTML = ++userScore;

        document.getElementById("msg-container").style.backgroundColor= "green";
     }
     else{
        document.getElementById("msg").innerHTML = `You Loose, Computers ${compchoice} beat's ${userchoice}`;
        document.getElementById("comp-score").innerHTML = ++comscore;
        document.getElementById("msg-container").style.backgroundColor= "red";
     }
}

// Function to known the choice of the user
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        console.log("Choice was clicked");
        playGame(userchoice);
    })
});


// Function to known the chice of the computer
const getComputerChoice = () =>{
        // rock, paper , scissors
        let options = ["rock", "paper", "scissor"];
        const randomchoice = Math.floor(Math.random() * 3);
        return options[randomchoice];
}
