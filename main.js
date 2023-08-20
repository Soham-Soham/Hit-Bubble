
let rn =0;
let score=0;
let timer = 60;

const makebubble = ()=>{
    let content = "";
    for(let i=1;i<=104;i++){
         content += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    document.getElementById("btmpanel").innerHTML= content;
}

const changeTime = ()=>{

    const timeInt = setInterval(()=>{
        if(timer>0){
            timer--;
            document.getElementById("timer").innerText = timer;
        }
        else{
            clearInterval(timeInt);
            document.getElementById("btmpanel").innerHTML= `<h1>Your Time is Up !!! You can
            <button id="restart" onClick=restart()>Restart</button> OR close your window</h1>`;
        }
    },1000);
}

const ranHit = ()=>{
    rn=Math.floor(Math.random()*10);
    document.getElementById("hit").innerText = rn;
    
}


const increaseScore=()=>{
    score +=10;
    document.getElementById("score").innerText = score;
}

document.querySelector("#btmpanel").addEventListener("click",(details)=>{
    let clickedNumber = Number(details.target.innerText);
    if(clickedNumber == rn){
        increaseScore();
        ranHit();
        makebubble();
    }
})


 function restart(){
    window.location.reload();
 }



makebubble();
changeTime();