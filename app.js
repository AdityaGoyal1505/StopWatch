let minutes=document.querySelector('#minutes');
let seconds=document.querySelector('#seconds');
let start=document.querySelector('#Start');
let Stop=document.querySelector('#Stop');
let Reset=document.querySelector("#reset");
let theTimer=0;
let theTimer2=0;

let myTimer;
let myTimer2;
Stop.disabled=true;
Reset.disabled=true;
start.addEventListener("click",function(){

    start.disabled=true;
    Stop.disabled=false;
    Reset.disabled=false;
    myTimer2=setInterval(function(){
        if(theTimer2<9){
            theTimer2++;
            seconds.innerHTML="0"+ theTimer2;
        }
        else{
            if(theTimer2<59){
                theTimer2++;
                seconds.innerHTML=theTimer2;
            }
            else if(theTimer2=59){
                theTimer2=0;
                seconds.innerHTML="0"+0;
            }
    }
    },1000);
    myTimer=setInterval(function(){
        if(theTimer<9){
            theTimer++;
            minutes.innerHTML="0"+theTimer;
        }
        else{
            theTimer++;
            minutes.innerHTML=theTimer;
        }
    },60000);
})

Stop.addEventListener("click",function(){
    clearInterval(myTimer);
    clearInterval(myTimer2);
    start.disabled=false;
    Stop.disabled=true;
    Reset.disabled=false;
})

Reset.addEventListener("click",function(){
    clearInterval(myTimer);
    clearInterval(myTimer2);
    theTimer=0;
    theTimer2=0;
    seconds.innerHTML="0"+0;
    minutes.innerHTML="0"+0;
    start.disabled=false;
    Stop.disabled=true;
Reset.disabled=true;
})