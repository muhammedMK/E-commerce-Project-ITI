let cart = [];
let priceFilter = "all";

// Attach event listeners
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", addToCart);
});

document
  .querySelector("#price-filter")
  .addEventListener("change", updateFilter);

// Define functions
function addToCart(event) {
  const item = {
    name: event.target.dataset.name,
    price: event.target.dataset.price,
  };
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartIcon = document.querySelector("#cart .fa-shopping-cart");
  const cartBadge = document.querySelector("#cart .badge");
  cartBadge.textContent = cart.length;
  cartIcon.classList.add("animate");
  setTimeout(() => cartIcon.classList.remove("animate"), 500);
}

function updateFilter(event) {
  priceFilter = event.target.value;
  renderItems();
}

function renderItems() {
  const itemList = document.querySelector("#item-list");
  const items = Array.from(itemList.children);
  items.forEach((item) => {
    const price = item.dataset.price;
    if (priceFilter === "all" || price === priceFilter) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Initialize page
updateCart();
renderItems();
