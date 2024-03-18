const calculateMaterials = () => { 
    const quantity1 = parseFloat(document.querySelector('#material-1-quantity').value);
    const price1 = parseFloat(document.querySelector('#material-1-price').value);
    const quantity2 = parseFloat(document.querySelector('#material-2-quantity').value);
    const price2 = parseFloat(document.querySelector('#material-2-price').value);
    const quantity3 = parseFloat(document.querySelector('#material-3-quantity').value);
    const price3 = parseFloat(document.querySelector('#material-3-price').value);

    if (isNaN(quantity1) || isNaN(price1) || isNaN(quantity2) || isNaN(price2) || isNaN(quantity3) || isNaN(price3)) {
        alert("Введите количество и цену для всех материалов!");
        return;
    }
    
    const totalCost = (quantity1 * price1) + (quantity2 * price2) + (quantity3 * price3);

    const totalMaterialsDiv = document.querySelector('#total-materials');
    totalMaterialsDiv.innerHTML = `
        <p>Общая стоимость материалов: ${totalCost.toFixed(2)}</p>
    `;
} 
