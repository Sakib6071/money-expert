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
if(income>=0 && foodCost>=0 && rentCost>=0 && clothesCost>=0){
    if(totalCost<income){
        const totalCostField = document.getElementById('totalExpensesValue');
        const balanceField = document.getElementById('currentBalanceValue');
        totalCostField.innerText=totalCost;
        balanceField.innerText=balance;
    }else{
        alert('Sorry! your cost is higher than your income;')
    }

}
else{
    alert('Please Enter positive value. Income or Cost value is positive number')
}

})