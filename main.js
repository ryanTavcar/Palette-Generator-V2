//===================  GLOBAL VARIABLES  ===================

const gridSquare = document.getElementsByClassName('grid-sqr');
const p = document.querySelector('p');

//===================  FUNCTIONS  ===================

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
};

const colorGenerate = (e) => {
    let random = getRandomInt(0,255);
    p.innerHTML = 'R: ' +e.offsetX+ '<br> G: '+e.offsetY+ '<br> B: ' +random;
    Array.from(gridSquare).forEach(function(item){
        if (e.target == item){
            item.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", "+random+")"; 
        }
    });
};

//===================  EVENT LISTENERS  ===================

for (let i = 0; i < gridSquare.length; i++){
    gridSquare[i].addEventListener('mousemove', colorGenerate);
    // gridSquare[i].addEventListener('click', colorGenerate);
};
