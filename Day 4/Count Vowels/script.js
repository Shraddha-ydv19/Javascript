let vowels = "javscript is fun";
let count =0;
function showCount(){
    for(let i=0;i<vowels.length;i++){
        if(vowels[i]==='a'|| vowels[i]==='e'||vowels[i]==='i'||vowels[i]==='o'||vowels[i]==='u'){
            count++;
        }
    }
    alert(count);
    document.getElementById("vowels").innerText="Count of vowels: javascript is fun "+count;

}