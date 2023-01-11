const dateofBirth = document.querySelector("#date0fBirth");
const luckyNumber = document.querySelector("#luckyNumber");
const checkButton = document.querySelector(".btn");
const outputDiv = document.querySelector(".output");

checkButton.addEventListener("click", function checkBirthDateIsLucky(){
   const sum = calculateDate(dateofBirth.value);

   if(luckyNumber < 0){
    outputDiv.innerText = "Lucky number should not be negative"
   }

   if(sum % luckyNumber.value !== 0){
    outputDiv.innerText = "NOOOO..!! Its not Lucky..!! Do try it in next Life.!! 😋😛";
   }
   else{
    outputDiv.innerText = "Yeah its you lucky year .... 🥰"
   }
})

function calculateDate(date){
    // replace all function will do the job for us
    date = date.replaceAll("-","");
    let sum = 0;
    for(let i = 0; i < date.length; i++){
        sum += Number(date.charAt(i));
    }
    console.log(sum);
    return sum;
}