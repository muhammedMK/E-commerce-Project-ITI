fetch("categories.json")
  .then((response) => response.json())
  .then((data) => {
    // Create category items
    const categoryContainer = document.querySelector(".category-container");
    data.categories.forEach((category) => {
      const categoryItem = document.createElement("div");
      categoryItem.classList.add("category-item");
      categoryItem.classList.add(category.id);
      categoryItem.innerHTML = `
        <img src="${category.photo}" alt="${category.name}">
        <h3>${category.name}</h3>
        <p>${category.description}</p>
        <button>Shop ${category.name}</button>
      `;
      categoryContainer.appendChild(categoryItem);
    });

    // Filter categories
    const filterButtons = document.querySelectorAll(".filter");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");
        const categoryItems = document.querySelectorAll(".category-item");
        categoryItems.forEach((item) => {
          if (filterValue === "all" || item.classList.contains(filterValue)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
        filterButtons.forEach((button) => button.classList.remove("active"));
        button.classList.add("active");
      });
    });
  });
