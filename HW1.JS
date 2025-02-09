/* 
Name: Allan Vega
Date Created:02/08/2024
Date last modified: 02/08/2024
Version: 1.0
Description: Homework 1
*/
// Dynamic date js code
const d = new Date();
let text = new Date();
document.getElementById("today").innerHTML = text;
// name slider js code
let slider = document.getElementById("Range");
let output = document.getElementById("slider-ranger");
output.innerHTML = slider.value;

slider.oninput = function()
{
  output.innerHTML = this.value;
};
 

