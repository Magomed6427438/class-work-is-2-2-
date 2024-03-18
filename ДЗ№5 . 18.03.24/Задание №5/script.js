const calculateRepairCost = () => { 
    const quantity1 = parseFloat(document.querySelector('#work-1-quantity').value);
    const price1 = parseFloat(document.querySelector('#work-1-price').value);
    const quantity2 = parseFloat(document.querySelector('#work-2-quantity').value);
    const price2 = parseFloat(document.querySelector('#work-2-price').value);
    const quantity3 = parseFloat(document.querySelector('#work-3-quantity').value);
    const price3 = parseFloat(document.querySelector('#work-3-price').value);

    if (isNaN(quantity1) || isNaN(price1) || isNaN(quantity2) || isNaN(price2) || isNaN(quantity3) || isNaN(price3)) {
        alert("Введите количество и цену для всех видов работ!");
        return;
    }
    
    const totalQuantity = quantity1 + quantity2 + quantity3;
    const totalPrice = (quantity1 * price1) + (quantity2 * price2) + (quantity3 * price3);

    const totalRepairDiv = document.querySelector('#total-repair');
    totalRepairDiv.innerHTML = `
        <p>Общий объем работ: ${totalQuantity}</p>
        <p>Общая стоимость ремонта: ${totalPrice.toFixed(2)}</p>
    `;
} 
