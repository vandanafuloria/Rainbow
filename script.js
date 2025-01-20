mainpageEl = document.querySelector('.main-page');
voiletEl = document.querySelector('.voilet');
console.log(voiletEl);
blueEl = document.querySelector('.blue');
indigoEl = document.querySelector('.indigo')
greenEl = document.querySelector('.green')
yellowEl = document.querySelector('.yellow');
orangeEl = document.querySelector('.orange');
redEl = document.querySelector('.red');
rainbowEl = document.querySelector('.rainbow')


function colorChangevoilet(){
    
        mainpageEl.style.backgroundColor = "rgb(173,83,137)"; // Single color background
        mainpageEl.style.background = "linear-gradient(236deg, rgba(173,83,137,1) 0%, rgba(60,16,83,1) 35%)"; // Gradient background
    }
function colorChangeIndigo(){
    mainpageEl.style.backgroundColor="background: rgb(0,78,146)";
    mainpageEl.style.background= "linear-gradient(326deg, rgba(0,78,146,1) 0%, rgba(0,4,40,1) 100%)";
}
function colorChangeBlue(){
    mainpageEl.style.backgroundColor = "rgb(2,27,121)";
    mainpageEl.style.background ="linear-gradient(236deg, rgba(2,27,121,1) 0%, rgba(5,117,230,1) 100%)";
}
function colorChangeGreen(){
    mainpageEl.style.backgroundColor ="background: rgb(0,0,0)";
    mainpageEl.style.background= "linear-gradient(38deg, rgba(0,0,0,1) 0%, rgba(15,155,15,1) 100%)";
}
function colorChangeYellow(){
    mainpageEl.style.backgroundColor = "background: rgb(255,167,81)";
mainpageEl.style.background = "linear-gradient(187deg, rgba(255,167,81,1) 0%, rgba(255,226,89,1) 100%)";
}
function colorChangeOrange(){
    mainpageEl.style.backgroundColor = "background: rgb(240,152,25)";
 mainpageEl.style.background= "linear-gradient(45deg, rgba(240,152,25,1) 0%, rgba(255,81,47,1) 100%)";
}
function colorChangeRed(){
    mainpageEl.style.backgroundColor = "background: rgb(179,18,23)";
mainpageEl.style.background= "linear-gradient(150deg, rgba(179,18,23,1) 0%, rgba(229,45,39,1) 100%)";
}

function colorChangeRainbow(){
    mainpageEl.style.backgroundColor = "background: rgb(131,58,180)";
mainpageEl.style.background = "linear-gradient(49deg, rgba(131,58,180,1) 0%, rgba(180,46,120,1) 17%, rgba(29,35,253,1) 35%, rgba(253,128,41,1) 60%, rgba(252,222,55,1) 74%, rgba(252,160,61,1) 86%, rgba(252,74,67,1) 97%, rgba(252,69,69,1) 100%)";
}


voiletEl.addEventListener("click", colorChangevoilet);
indigoEl.addEventListener('click', colorChangeIndigo);
blueEl.addEventListener('click', colorChangeBlue);
greenEl.addEventListener('click', colorChangeGreen);
yellowEl.addEventListener('click', colorChangeYellow);
orangeEl.addEventListener('click', colorChangeOrange);
redEl.addEventListener('click', colorChangeRed);
rainbowEl.addEventListener('click', colorChangeRainbow);

