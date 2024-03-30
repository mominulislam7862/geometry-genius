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
   
}

function calculateRectangleArea(){
    // get rectangle width value
   const widthField = document.getElementById('Rectangle-width');
   const widthValueText = widthField.value;
   const width = parseFloat(widthValueText);
   console.log(width);
//get rectangle length value
const lengthField = document.getElementById('Rectangle-length');
const lengthValueText = lengthField.value;
const length = parseFloat(lengthValueText);
console.log(length);
// get area
const area = width * length;
console.log(area);
// show rectangle area
const areaSpan = document.getElementById('Rectangle-area');
areaSpan.innerText = area;
}