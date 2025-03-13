
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


boxes.forEach((boxs) =>{
  boxs.addEventListener("click",() =>{
    if(turnO){
      boxs.innerText = "O";
      turnO = false;
    }
    else{
      boxs.innerText = "X";
      turnO = true;
    }
    boxs.disabled = true;
    count++;
    let isWinner = checkWinner()

    
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  })
 
})
const enableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
  
}

const resetGame = () =>{
  turnO = true;
  count = 0;
  msgContainer.classList.add("hide");
  enableBoxes()

}
resetBtn.addEventListener("click",resetGame)
newGameBtn.addEventListener("click", resetGame);

const showwinner = (winner) =>{
  msg.innerText = `winner is ${winner}`
  msgContainer.classList.remove('hide')
  disableBoxes()
}
const disableBoxes = () => {
     for (let box of boxes) {
       box.disabled = true;
     }
   };
const checkWinner =() => {
for(let pattern of winPatterns){
  let p1 = boxes[pattern[0]].innerText;
  let p2 = boxes[pattern[1]].innerText;
  let p3 = boxes[pattern[2]].innerText;

   if(p1 != "" && p2 !="" && p3!= ""){
    if(p1==p2 && p2 == p3){
      showwinner(p1)
      return true;
    }
   }
}
}




const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
