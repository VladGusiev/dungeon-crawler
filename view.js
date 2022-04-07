const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ctx.fillStyle = "#3A2508";

//game name
// const textX = canvas.width;

// ctx.font = "70px MedievalSharp";
// ctx.fillText("Dungeon Crawler", 10, 100)


//////////////////////// button
//Function to get the mouse position
// function getMousePos(canvas, event) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//         x: event.clientX - rect.left,
//         y: event.clientY - rect.top
//     };
// }
// //Function to check whether a point is inside a rectangle
// function isInside(pos, rect){
//     return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
// }

// //The rectangle should have x,y,width,height properties
// var rect = {
//     x:300,
//     y:300,
//     width:200,
//     height:100
// };

// //Binding the click event on the canvas
// canvas.addEventListener('click', function(evt) {
//     var mousePos = getMousePos(canvas, evt);

//     if (isInside(mousePos,rect)) {
//         alert('clicked inside rect');
//     }else{
//         alert('clicked outside rect');
//     }   
// }, false);