function stringToFloat(input){
    const inputField=document.getElementById(input);
    const inputFieldText=inputField.value;
    const inputValue = parseFloat(inputFieldText);
    inputField.value='';
    return inputValue;
}


document.getElementById('calculate-btn').addEventListener('click', function(){
const income=stringToFloat('mainSalary');
const foodCost=stringToFloat('foodCost');
const rentCost=stringToFloat('rentCost');
const clothesCost=stringToFloat('clothesCost');
const totalCost=foodCost+rentCost+clothesCost;
const balance=income-totalCost;
const totalCostField = document.getElementById('totalExpensesValue');
const balanceField = document.getElementById('currentBalanceValue');
totalCostField.innerText=totalCost;
balanceField.innerText=balance;
})