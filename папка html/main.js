const companies = {
    "Google": {
        people: ["John", "Alice", "Bob"]
    },
    "Microsoft": {
        people: ["Anna", "James", "Peter"]
    },
    "Facebook": {
        people: ["Emma", "Olivia", "Ava"]
    }
};

for (const companyName in companies) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>Сотрудники компании ${companyName}:</p>`;

    for (const peopleName of companies[companyName].people) {
        outputDiv.innerHTML += `<p>${peopleName}</p>`;
    }
}
