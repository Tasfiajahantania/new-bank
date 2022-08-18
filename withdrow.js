document.getElementById('btn withdrow').addEventListener('click', function(){
    const withdrowField = document.getElementById('withdrow-field');
    const withdrowAmountString = withdrowField.value;
    const withdrowAmount = parseFloat(withdrowAmountString);

    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowTotalAmountString = withdrowTotal.innerText;
    const withdrowTotalAmount = parseFloat(withdrowTotalAmountString);
    const nowWithdrowTotalAmount = withdrowAmount + withdrowTotalAmount;
    withdrowTotal.innerText = nowWithdrowTotalAmount;
    withdrowField.value = '';

    const totalBlance = document.getElementById('blance-total');
    const previousBlanceString = totalBlance.innerText;
    const previousBlance = parseFloat(previousBlanceString);
    const currentBlance = previousBlance - withdrowAmount;
    totalBlance.innerText = currentBlance;

})