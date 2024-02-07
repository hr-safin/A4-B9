//a, y, i , e , o , u, w

let vowelList = ["a","y","i","e","u","w"]
function checkName(name){
   if(typeof name !== "string"){
    return "Invalid"
   } 
   for(let vowel of vowelList){
    if(name.includes(vowel)){
        return "Good Name"
    }
    else{
        return "Bad Name"
    }
   } 
  
}

console.log(checkName("sfn"))
console.log(checkName(12))
console.log(checkName(["s"]))