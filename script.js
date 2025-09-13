let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let compscr=document.querySelector("#comp-score");
let userscr=document.querySelector("#user-score");

const compchoice=()=>{
    let options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
};

const drawmatch=()=>{
    msg.innerText="It's a Draw!";
    msg.style.backgroundColor="black";
};

const showWinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscr.innerText=`${userscore}`;
        msg.innerText="You Win!";
        msg.style.backgroundColor="Green";
    }
    else{
        compscore++;
        compscr.innerText=`${compscore}`;
        msg.innerText="You Lose!";
        msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>{
    const compvalue=compchoice();

    if(userchoice=== compvalue){
        drawmatch();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors,paper
            userwin=compvalue==="paper"? false : true;
        }
        else if(userchoice==="paper"){
            //rock,scissors
            userwin=compvalue==="scissors"? false: true;
        }
        else{
            //rock,paper
            userwin=compvalue==="rock"? false: true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});