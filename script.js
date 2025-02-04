 const mainpageEl = document.querySelector('.main-page');
const voiletEl = document.querySelector('.voilet');
console.log(voiletEl);
 const blueEl = document.querySelector('.blue');
const indigoEl = document.querySelector('.indigo')
 const greenEl = document.querySelector('.green')
const yellowEl = document.querySelector('.yellow');
const orangeEl = document.querySelector('.orange');
 const redEl = document.querySelector('.red');
const rainbowEl = document.querySelector('.rainbow')
const resetEl = document.getElementById('reset');
const randomEl= document.getElementById('random');
const sevenEl = document.getElementById('seven');



function randomColorGeneration(){

        mainpageEl.style.backgroundColor = "";
        mainpageEl.style.background = "";
        let red;
        let green;
        let blue;
        const max = 256;
        const min = 0;
       red =  Math.random() * (max - min) + min;
       red = Math.trunc(red);


       green = Math.random() * (max - min) + min;
       green = Math.trunc(green);
   


       blue = Math.random() * (max - min) + min;
       blue = Math.trunc(blue);
   

       const color = `rgb(${red}, ${green}, ${blue})`;
       console.log(color)
       

       mainpageEl.style.backgroundColor  = color;
}



function colorChangevoilet(){
    
        mainpageEl.style.backgroundColor = "rgb(173,83,137)"; // Single color background
        mainpageEl.style.background = "linear-gradient(236deg, rgba(173,83,137,1) 0%, rgba(60,16,83,1) 35%)"; // Gradient background
    }
function colorChangeIndigo(){
    mainpageEl.style.backgroundColor=" rgb(0,78,146)";
    mainpageEl.style.background= "linear-gradient(326deg, rgba(0,78,146,1) 0%, rgba(0,4,40,1) 100%)";
}
function colorChangeBlue(){
    mainpageEl.style.backgroundColor = "rgb(2,27,121)";
    mainpageEl.style.background ="linear-gradient(236deg, rgba(2,27,121,1) 0%, rgba(5,117,230,1) 100%)";
}
function colorChangeGreen(){
    mainpageEl.style.backgroundColor =" rgb(0,0,0)";
    mainpageEl.style.background= "linear-gradient(38deg, rgba(0,0,0,1) 0%, rgba(15,155,15,1) 100%)";
}
function colorChangeYellow(){
    mainpageEl.style.backgroundColor = " rgb(255,167,81)";
mainpageEl.style.background = "linear-gradient(187deg, rgba(255,167,81,1) 0%, rgba(255,226,89,1) 100%)";
}
function colorChangeOrange(){
    mainpageEl.style.backgroundColor = " rgb(240,152,25)";
 mainpageEl.style.background= "linear-gradient(45deg, rgba(240,152,25,1) 0%, rgba(255,81,47,1) 100%)";
}
function colorChangeRed(){
    mainpageEl.style.backgroundColor = " rgb(179,18,23)";
mainpageEl.style.background= "linear-gradient(150deg, rgba(179,18,23,1) 0%, rgba(229,45,39,1) 100%)";
}

function colorChangeRainbow(){
    mainpageEl.style.backgroundColor = " rgb(131,58,180)";
mainpageEl.style.background = "linear-gradient(49deg, rgba(131,58,180,1) 0%, rgba(180,46,120,1) 17%, rgba(29,35,253,1) 35%, rgba(253,128,41,1) 60%, rgba(252,222,55,1) 74%, rgba(252,160,61,1) 86%, rgba(252,74,67,1) 97%, rgba(252,69,69,1) 100%)";
}
function resetPage(){
    mainpageEl.style.backgroundColor= "";
    mainpageEl.style.background = "";

}



let count = 1;
let  handler = null;

let clr1, clr2, clr3, clr4, clr5, clr6, clr7;




function generationSevenColor(){
   
   
        if(count == 8) {
            count = 0;
            gradientGeneration();
            clearInterval(handler);
            handler = null;

        }
        
        const max = 256;
        const min = 0;
       let  red =  Math.random() * (max - min) + min;
        red = Math.trunc(red);
      
 
        let green = Math.random() * (max - min) + min;
        green = Math.trunc(green);
   
 
 
        let blue = Math.random() * (max - min) + min;
        blue = Math.trunc(blue);

        const clr =  `rgb(${red}, ${green} , ${blue})`;

        mainpageEl.style.backgroundColor = clr;
      

        if(count == 1) {clr1 = clr;}
        else if(count == 2)  clr2 = clr;
        else if(count == 3)clr3 = clr;
        else if(count == 4)  clr4 = clr;
        else if(count == 5)  clr5 = clr;
        else if(count == 6) clr6 = clr;
        
        else { clr7 = clr}
        count++;
      

    }

    function gradientGeneration (){
        mainpageEl.style.background = `linear-gradient(45deg, ${clr1} 0%, ${clr2} 20%, ${clr3} 40%, ${clr4} 60%, ${clr5} 80%, ${clr6} 90%, ${clr7} 100%)`;

        console.log("linear -gradine work")
        console.log(clr1, clr2, clr3, clr4,clr5, clr6, clr7 )
    }
        
        
        

    
   
   function generationProcess(){
    if(handler == null){
        handler = setInterval(generationSevenColor, 500);
       
    }
    else {
        clearInterval(handler);
        

    }
   } 

   


voiletEl.addEventListener("click", colorChangevoilet);
indigoEl.addEventListener('click', colorChangeIndigo);
blueEl.addEventListener('click', colorChangeBlue);
greenEl.addEventListener('click', colorChangeGreen);
yellowEl.addEventListener('click', colorChangeYellow);
orangeEl.addEventListener('click', colorChangeOrange);
redEl.addEventListener('click', colorChangeRed);
rainbowEl.addEventListener('click', colorChangeRainbow);
resetEl.addEventListener('click',resetPage);
sevenEl.addEventListener('click', generationProcess);
randomEl.addEventListener('click', randomColorGeneration )


