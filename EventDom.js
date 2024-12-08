const counterValue = document.getElementById("counter-value");
const decrementBtn = document.getElementById("decre");
const incrementBtn = document.getElementById("incre");
const resetBtn = document.getElementById("reset");
let count = 0;
decrementBtn.addEventListener("click", () => {
    updateCount();
    if (count == 0) {
        alert("can't count negetive value")

    } else {
        count--;
    }
    updateCount();
})
incrementBtn.addEventListener("click", () => {
    count++;
    updateCount();
})
resetBtn.addEventListener("click", () => {
    count = 0;
    updateCount();
})
function updateCount() {
    counterValue.textContent = count
}