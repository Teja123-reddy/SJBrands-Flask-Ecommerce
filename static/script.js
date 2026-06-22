let count = 0;

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        count++;
        document.getElementById("cart-count").innerText = count;

        alert("Product Added To Cart 🛒");
    });
});
const darkBtn = document.getElementById("dark-mode-btn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});