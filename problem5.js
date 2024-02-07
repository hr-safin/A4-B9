//Monthly Savings of a Freelancer

function monthlySavings(arr, livingCost) {
    
  let savings = 0;
  let sum = 0
  if(!Array.isArray(arr) && typeof livingCost !== Number){
    return "Invalid Input"
  }
  for (let value of arr) {
    if (value >= 3000) {
       value = 3000 - value * 20/100
    }
    sum = sum + value
  }
  savings = livingCost - sum
  if(savings === 0 || savings > 0){
    return savings
  }
  else{
    return "Earn More"
  }
}

console.log(monthlySavings([200, 2000, 3000], 5400));
console.log(monthlySavings([200, 2000, 3000], 4400));
console.log(monthlySavings(300, [4400]));
console.log(monthlySavings(300, 4400));
