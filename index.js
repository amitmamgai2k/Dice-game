// var randomNumber1 = Math.floor(Math.random() * 6+1);
// if (randomNumber1==6){
//         document.querySelector("img.img1").setAttribute("src","images/dice6.png");
//         document.querySelector("img.img2").setAttribute("src","images/dice6.png");
// }
// if (randomNumber1==2){
//   document.querySelector("img.img1").setAttribute("src","images/dice2.png");
//     document.querySelector("img.img2").setAttribute("src","images/dice2.png");
// }
// if (randomNumber1==1){
//   document.querySelector("img.img1").setAttribute("src","images/dice1.png");
//     document.querySelector("img.img2").setAttribute("src","images/dice1.png");
// }
// if (randomNumber1==3){
//   document.querySelector("img.img1").setAttribute("src","images/dice3.png");
//     document.querySelector("img.img2").setAttribute("src","images/dice3.png");
// }
// if (randomNumber1==4){
//   document.querySelector("img.img1").setAttribute("src","images/dice4.png");
//     document.querySelector("img.img2").setAttribute("src","images/dice4.png");
// }
// if (randomNumber1==5){
//   document.querySelector("img.img1").setAttribute("src","images/dice5.png");
//     document.querySelector("img.img2").setAttribute("src","images/dice5.png");
// }
// if (randomNumber1==1 || randomNumber1==3 || randomNumber1==5 ){
//   document.querySelector("h1").innerHTML = "Player 1 Wins"
//   }
// if (randomNumber1 ==2 || randomNumber1==4 || randomNumber1==6){
//   document.querySelector("h1").innerHTML= "Player 2 Wins"
// }
// console.log(randomNumber1)
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+randomNumber1+".png"
var randomImageSource = "images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource)
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2)
if (randomNumber1 >randomNumber2){
  document.querySelector("h1").innerHTML= "Player 1 Wins"
}
else if (randomNumber2 >randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins"

}
else{
  document.querySelector("h1").innerHTML = "No result found"
}
