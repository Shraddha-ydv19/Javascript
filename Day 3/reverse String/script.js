let string="hello";
let arr= string.split("");
let i=0;
let j=string.length-1;
function show(){
    while(i<j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
};
let rev=arr.join("");
document.getElementById("string").innerText="Reverse string is : "+rev;

}

