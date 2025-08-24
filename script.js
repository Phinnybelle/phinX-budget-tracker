let total= 0;

const itemInput = document.getElementById("inputItem");
const amountInput = document.getElementById("inputAmt");
const dateInput = document.getElementById("inputDate");
const categorySelect = document.getElementById("inputCategory");
const addButton = document.getElementById("addBtn");
const tableBody = document.getElementById("tableBody");
const totalAmt = document.getElementById("totalAmt");

addButton.addEventListener("click", function(){
    const item = itemInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const category = categorySelect.value;
    const date = dateInput.value;

    let displayAmount = category ==="Income" ? `+${amount.toFixed(2)}` : `-${amount.toFixed(2)}`;
    let signedAmount = category ==="Income" ? amount : -amount

    if (item && !isNaN(amount) && date){
        const row = document.createElement("tr");

        row.innerHTML = `
        <td class="border p-2">${item}</td> 
        <td class="border p-2">${displayAmount}</td>
        <td class="border p-2">${category}</td>
        <td class="border p-2">${date}</td>
        <td class="border p-2"> <button class="deleteBtn ml-10 bg-red-500 text-white px-2 py-1 rounded" >Delete</button></td>
           `;
        tableBody.appendChild(row);
        
        total += signedAmount;
        totalAmt.textContent = total.toFixed(2);

        itemInput.value = "";
        amountInput.value = "";
        dateInput.value = "";
        categorySelect.selectedIndex = 0;

        const deleteBtn = row.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", function(){
            const amtText = row.children[1].textContent;
            const amtValue = parseFloat(amtText);
        total -= amtValue;
            totalAmt.textContent = total.toFixed(2);
            row.remove();
        });

            } else {
                alert("Please fill in all fields correctly.");
            }

});