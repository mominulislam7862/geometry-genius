// *******trinangle funtion*******
function calculateTrinangleArea(){
    // get trinangle base value
    const baseField = document.getElementById('Trinangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);
    // get trinangle heigth value
    const heigthField = document.getElementById('Trinangle-heigth');
    const heigthValueText = heigthField.value;
    const heigth = parseFloat(heigthValueText);
    console.log(heigth);
    // get area
    const area = 0.5 * base * heigth;
    console.log(area)

    // show trinangle area
    const areaSpan = document.getElementById('Trinangle-area');
    areaSpan.innerText = area;
    // add To Calculation Entry
 addToCalculationEntry('Trinangle',area)
   
}
// *******rectangle funtion*******
function calculateRectangleArea(){
    // get rectangle width value
   const widthField = document.getElementById('Rectangle-width');
   const widthValueText = widthField.value;
   const width = parseFloat(widthValueText);
// problem
// if(isNaN(width) || isNaN(length)){
//    alert('please insert a number');
//    return;
// }

//get rectangle length value
const lengthField = document.getElementById('Rectangle-length');
const lengthValueText = lengthField.value;
const length = parseFloat(lengthValueText);
console.log(length);
// get area
const area = width * length;

// show rectangle area
const areaSpan = document.getElementById('Rectangle-area');
areaSpan.innerText = area;
 // add To Calculation Entry
 addToCalculationEntry('Rectangle',area)

}
// *******parallelogram  funtion*******

function calculateParallelogramArea(){
   const height = getInputValue('parallelogram-height');
console.log(height)
   const length = getInputValue('parallelogram-length');
   console.log(length)
   const area = height * length;
   setElementInnerText('parallelogram-area',area);
 
   // add To Calculation Entry
   addToCalculationEntry('parallelogram',area)

}

// ***********Ellipse funtion ******
function calculateEllipseArea(){
   const major = getInputValue('ellipse-major-radius');
   const minor = getInputValue('ellipse-minor-radius');
   const area = 3.14 * major * minor;
   const areaTwoDecimal = area.toFixed(2);
setElementInnerText('ellipse-area',areaTwoDecimal);
addToCalculationEntry('ellipse',areaTwoDecimal)
}

// reuseble get input value field in number
function getInputValue(fieldId){
const inputField = document.getElementById(fieldId);
const inputValueText = inputField.value;
const value = parseFloat(inputValueText);
return value;
}


// reuseble set span,p,div,
function setElementInnerText(elementId,area){
const element = document.getElementById(elementId);
element.innerText = area;
}
// add to calculation entry
function addToCalculationEntry(areaType,area){
   console.log(areaType + '' + area);
   const calculationEntry = document.getElementById('calculation-entry');
   const count = calculationEntry.childElementCount;

   const p = document.createElement('p');
   p.classList.add('my-4');
   p.innerHTML = `${count +1}. ${areaType} ${area} cm <sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;


   calculationEntry.appendChild(p);

}