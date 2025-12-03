//  List of Recipes
const recipes = [
  { name: "Vegetable Biryani", image: "VegBiryani.webp", link: "recipes/veg-biryani.html" },
  { name: "Paneer Butter Masala", image: "paneerbuttermasala.jpg", link: "recipes/paneer-butter-masala.html" },
  { name: "Aloo Gobi", image: "Aloo-Gobi.jpg", link: "recipes/aloo-gobi.html" },
  { name: "Masala Dosa", image: "masaladosa.jpeg", link: "recipes/masala-dosa.html" },
  { name: "Chole Masala", image: "chole.jpeg", link: "recipes/chole.html" },
  { name: "Pav Bhaji", image: "pav-bhaji.jpg", link: "recipes/pav-bhaji.html" },
  { name: "Dal Makhani", image: "dal-makhani.jpg", link: "recipes/dal-makhani.html" },
  { name: "Mix Veg", image: "mixed-vegetable.jpg", link: "recipes/mix-veg.html" },
  { name: "Bhindi Masala", image: "bhindi-masala.jpg", link: "recipes/bhindi-masala.html" },
  { name: "Veg Kofta", image: "kofta.jpeg", link: "recipes/veg-kofta.html" },
  { name: "Kadhi Pakora", image: "kadhi.jpg", link: "recipes/kadhi.html" },
  { name: "White Sauce Pasta", image: "White-Sauce-Pasta.jpg", link: "recipes/White-Sauce-Pasta.html" },
  { name: "Vegetable Cuttlet", image: "cutlet.jpeg", link: "recipes/vegetable-cutlet.html" },
  { name: "Suji Halwa", image: "halwa.jpeg", link: "recipes/halwa.html" },
  { name: "Paneer Bhurji", image: "paneer-bhurji.jpeg", link: "recipes/paneer-bhurji.html" },
  { name: "Baingan Bharta", image: "baingan-bharta.jpg", link: "recipes/baingan-bharta.html" },
  { name: "Vegetable Hakka Noodles", image: "hakka-noodles.jpg", link: "recipes/hakka-noodles.html" },
  { name: "Gajar Halwa", image: "Gajar-Halwa.jpg", link: "recipes/gajar-halwa.html" },
  { name: "Dhokla", image: "dhokla.jpeg", link: "recipes/dhokla.html" },
  { name: "Banana Pancakes", image: "pancake.jpg", link: "recipes/pancakes.html" }
];

// 🔍 Search & Display Logic
const recipeContainer = document.getElementById("recipe-list");
const searchInput = document.getElementById("search-input");

function displayRecipes(recipesToShow) {
  recipeContainer.innerHTML = "";
  recipesToShow.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="images/${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
    `;
    card.onclick = () => window.location.href = recipe.link;
    recipeContainer.appendChild(card);
  });
}

// 🔎 Search filter
searchInput.addEventListener("input", () => {
  const filtered = recipes.filter(r =>
    r.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  displayRecipes(filtered);
});

// Initial Display
displayRecipes(recipes);

// 🚪 Logout Functionality
const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    // Optional: localStorage.removeItem("veggieUser");
    window.location.href = "login.html";
  });
}



