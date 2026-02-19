let plindrome= "madammm";
function PalindromeChecker(){
    let reverse=plindrome.split("").reverse().join("");
    if(plindrome===reverse){
        document.getElementById("palindrome").innerText= plindrome +" is a palindrome"; 
    }
    else{
        document.getElementById("palindrome").innerText= plindrome +" is not a palindrome"; 

    }
}