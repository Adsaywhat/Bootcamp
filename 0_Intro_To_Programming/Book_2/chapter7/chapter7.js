document.getElementById("lefteye").style.backgroundColor = "purple";
//document.getElementById("head").style.transform = "rotate(15deg)";
document.getElementById("body").style.border = "2px black solid";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "5px black solid";
//document.getElementById("head").style.transform = "rotate(-35deg)";
document.getElementById("nose").style.borderRadius = "50%";
document.getElementById("rightarm").style.backgroundColor = "green";
document.getElementById("mouth").style.backgroundColor = "pink";

//starting animation

// var righteye = document.getElementById("righteye");
// righteye.addEventListener("click", moveUpDown);

// function moveUpDown(e) {
//     var robotPart = e.target;
//     var top = 0;
//     var animation = setInterval(frame, 10) //draw every 10ms

//     function frame() {
//         robotPart.style.top = top + "%";
//         top++;
//         if (top === 20) {
//             clearInterval(animation);
//         }
//     }
// }

// var lefteye = document.getElementById("lefteye");
// lefteye.addEventListener("click", moveUpDown);

// //move arm

// var leftArm = document.getElementById("leftarm");
// leftArm.addEventListener("click", moveRightLeft);

// function moveRightLeft (e) {
//     var robotPart = e.target;
//     var left = 0;
//     var id = setInterval (frame, 10) //draw every 10ms
//     function frame() {
//         robotPart.style.left = left + '%';
//         left++;
//         if (left === 71) {
//         clearInterval(id);
//         }
//     }
// }

// //rotate head
// var head = document.getElementById("head");
// head.addEventListener("click", rotate);

// function rotate (e) {
//     var robotPart = e.target;
//     var perc = 0;
//     var id = setInterval (frame, 10) //draw every 10ms
//     function frame() {
//         robotPart.style.transform = "rotate(" + perc + "deg)";
//         perc += 15;
//         if (perc === 375) {
//         clearInterval(id);
//         }
//     }
// }
