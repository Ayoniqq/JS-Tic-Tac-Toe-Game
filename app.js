/* TIC TAC TOE*/


//Get every click from the players to know which box is clicked
const box1 = document.querySelector('#box-1');
const box2 = document.querySelector('#box-2');
const box3 = document.querySelector('#box-3');
const box4 = document.querySelector('#box-4');
const box5 = document.querySelector('#box-5');
const box6 = document.querySelector('#box-6');
const box7 = document.querySelector('#box-7');
const box8 = document.querySelector('#box-8');
const box9 = document.querySelector('#box-9');


//Array of Clicks
let boxPicker = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
let counter = 0;

//Loop over Clicks
for (let box of boxPicker) {
    box.addEventListener('click', () => {
        counter++;
        if (counter < 10) {
            if (counter % 2 === 1) {
                box.textContent = "X";
                box.classList.add('bigger');
                //row 1
                if ((box2.textContent !== ".") && (box1.textContent === box2.textContent) && (box2.textContent === box3.textContent)) {
                    box1.classList.add('gameWon');
                    box2.classList.add('gameWon');
                    box3.classList.add('gameWon');
                    gameWon();
                    //gameWon(box1, box2, box3);
                }
                //row 2
                else if ((box5.textContent !== ".") && (box4.textContent === box5.textContent) && (box5.textContent === box6.textContent)) {
                    box4.classList.add('gameWon');
                    box5.classList.add('gameWon');
                    box6.classList.add('gameWon');
                    gameWon();
                }
                //row 3
                else if ((box8.textContent !== ".") && (box7.textContent === box8.textContent) && (box8.textContent === box9.textContent)) {
                    box7.classList.add('gameWon');
                    box8.classList.add('gameWon');
                    box9.classList.add('gameWon');
                    gameWon();
                }
                //diagonal 1
                else if ((box5.textContent !== ".") && (box1.textContent === box5.textContent) && (box5.textContent === box9.textContent)) {
                    box1.classList.add('gameWon');
                    box5.classList.add('gameWon');
                    box9.classList.add('gameWon');
                    gameWon();
                }
                //diagonal 2
                else if ((box5.textContent !== ".") && (box3.textContent === box5.textContent) && (box5.textContent === box7.textContent)) {
                    box3.classList.add('gameWon');
                    box5.classList.add('gameWon');
                    box7.classList.add('gameWon');
                    gameWon();
                }
                //column 1
                else if ((box4.textContent !== ".") && (box1.textContent === box4.textContent) && (box4.textContent === box7.textContent)) {
                    box1.classList.add('gameWon');
                    box4.classList.add('gameWon');
                    box7.classList.add('gameWon');
                    gameWon();
                }
                //column 2
                else if ((box5.textContent !== ".") && (box2.textContent === box5.textContent) && (box5.textContent === box8.textContent)) {
                    box2.classList.add('gameWon');
                    box5.classList.add('gameWon');
                    box8.classList.add('gameWon');
                    gameWon();
                }
                //column 3
                else if ((box6.textContent !== ".") && (box3.textContent === box6.textContent) && (box6.textContent === box9.textContent)) {
                    box3.classList.add('gameWon');
                    box6.classList.add('gameWon');
                    box9.classList.add('gameWon');
                    gameWon();
                }
                else {
                    //alert("keep playing");
                }
                // if (box1.textContent === box2.textContent === box3.textContent) {
                //     alert("Its Game over" + box.textContent + " wins.");
                // }
                // else {

                // }
                //alert(box.textContent);
            }
            else {
                box.textContent = "O";
                box.classList.add('bigger');
                //alert(box.textContent);

                //row 1
                if ((box2.textContent !== ".") && (box1.textContent === box2.textContent) && (box2.textContent === box3.textContent)) {
                    box1.classList.add('gameWon');
                    box2.classList.add('gameWon');
                    box3.classList.add('gameWon');
                    gameWon();
                    //gameWon(box1, box2, box3);
                }
                //row 2
                else if ((box5.textContent !== ".") && (box4.textContent === box5.textContent) && (box5.textContent === box6.textContent)) {
                    box4.classList.add('gameWon');
                    box5.classList.add('gameWon');
                    box6.classList.add('gameWon');
                    gameWon();
                }
                //row 3
                else if ((box8.textContent !== ".") && (box7.textContent === box8.textContent) && (box8.textContent === box9.textContent)) {
                    box7.classList.add('gameWon');
                    box8.classList.add('gameWon');
                    box9.classList.add('gameWon');
                    gameWon();
                }
                //diagonal 1
                else if ((box5.textContent !== ".") && (box1.textContent === box5.textContent) && (box5.textContent === box9.textContent)) {
                    box1.classList.add('gameWon');
                    box5.classList.add('gameWon');
                    box9.classList.add('gameWon');
                    gameWon();
                }
                //diagonal 2
                else if ((box5.textContent !== ".") && (box3.textContent === box5.textContent) && (box5.textContent === box7.textContent)) {
                    box3.classList.add('gameWon');
                    box5.classList.add('gameWon');
                    box7.classList.add('gameWon');
                    gameWon();
                }
                //column 1
                else if ((box4.textContent !== ".") && (box1.textContent === box4.textContent) && (box4.textContent === box7.textContent)) {
                    box1.classList.add('gameWon');
                    box4.classList.add('gameWon');
                    box7.classList.add('gameWon');
                    gameWon();
                }
                //column 2
                else if ((box5.textContent !== ".") && (box2.textContent === box5.textContent) && (box5.textContent === box8.textContent)) {
                    box2.classList.add('gameWon');
                    box5.classList.add('gameWon');
                    box8.classList.add('gameWon');
                    gameWon();
                }
                //column 3
                else if ((box6.textContent !== ".") && (box3.textContent === box6.textContent) && (box6.textContent === box9.textContent)) {
                    box3.classList.add('gameWon');
                    box6.classList.add('gameWon');
                    box9.classList.add('gameWon');
                    gameWon();
                }
            }
        }
        else {
            alert("GAME OVER");
            // gameWon();
        }



    })
}

//Execute Game over and terminate game
function gameWon() {
    counter = 10;
}