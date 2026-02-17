
let random= Math.floor(Math.random()*10)+1;
let button = document.getElementById("checkbtn");
button.addEventListener ("click",function(){
    let user = Number(document.getElementById("randomNumber").value);
    let result=document.getElementById("result");
    if(user===random){
    result.innerText="win";
     
}
else{
    result.innerText = "You Lose 😢. Correct No. was " + random;
}


})
//let user=Number(prompt("enter number 1 to 10"));

