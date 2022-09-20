const countEl = document.getElementById("countEl");
const displayEl = document.getElementById("displayEl");


const butOne = document.getElementById("1");
const butTwo = document.getElementById("2");
const butThree = document.getElementById("3");
const butFour = document.getElementById("4");
const butFive = document.getElementById("5");
const butSix = document.getElementById("6");
const butSeven = document.getElementById("7");
const butEight = document.getElementById("8");
const butNine = document.getElementById("9");
const butZero = document.getElementById("0");
const butClear = document.getElementById("clear");
const butEqual = document.getElementById("equal");
const butMultiply = document.getElementById("multiply");
const butDivide = document.getElementById("divide");

butMultiply.addEventListener("click", ()=>{

})

butOne.addEventListener("click", function logOne(){
    
    console.log(butOne.textContent);
    countEl.textContent += butOne.textContent;
    countEl = countEl.toString().replace(/^0+/, '');
    
} );
butEqual.addEventListener("click", ()=>{
    evaluate();
})

butTwo.addEventListener("click", () =>{
    console.log(butTwo.textContent);
    countEl.textContent += butTwo.textContent;
});

butThree.addEventListener("click", function logOne(){
    countEl.textContent += butThree.textContent;
} );
butFour.addEventListener("click", function logOne(){
    countEl.textContent += butFour.textContent;
} );
butFive.addEventListener("click", function logOne(){
    countEl.textContent += butFive.textContent;
} );
butSix.addEventListener("click", function logOne(){
    countEl.textContent += butSix.textContent;
} );
butSeven.addEventListener("click", function logOne(){
    countEl.textContent += butSeven.textContent;
} );
butEight.addEventListener("click", function logOne(){
    countEl.textContent += butEight.textContent;
} );
butNine.addEventListener("click", function logOne(){
    countEl.textContent += butNine.textContent;
} );
butClear.addEventListener("click", ()=> {
    countEl.textContent = "";
});
butZero.addEventListener("click", ()=> {
    countEl.textContent += butZero.textContent;
});

function clear(){
    countEl.textContent = 0;
}
function add(){
    if(countEl.textContent === 0){
        countEl.textContent = "";
    }
    countEl.textContent += '+';
    
}
function evaluate(){
   let answer = eval(countEl.textContent);
   countEl.textContent = answer;

}

function subtract(){
    countEl.textContent += '-';
}
function multiply(){
    countEl.textContent += '*'
}

