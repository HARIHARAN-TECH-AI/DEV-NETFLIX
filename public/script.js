const dishes = [
  { name: "Margherita Pizza", image: "https://img.taste.com.au/DhThzPm9/taste/2016/11/eat-pray-love-39581-3.jpeg", price: "₹250" },
  { name: "Cheese Burger", image: "https://s3.ca-central-1.amazonaws.com/files.exceldor.ca/files/recettes/Catherine_Cote_Classique_Fume_Burger_Exceldor_Vu_Face_H_LR.jpg", price: "₹180" },
  { name: "White Sauce Pasta", image: "https://www.cookwithmanali.com/wp-content/uploads/2018/12/White-Sauce-Pasta-676x1024.jpg", price: "₹200" },
  { name: "Chocolate Cake", image: "https://i.pinimg.com/474x/b2/c4/03/b2c40300ceeeda36d5be71ab5b41273f.jpg", price: "₹150" },
  { name: "Tandoori Chicken", image: "https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-34.jpg", price: "₹300" },
  { name: "Veggie Wrap", image: "https://c.ndtvimg.com/2023-08/b575c5qo_kathi-roll_625x300_10_August_23.jpg", price: "₹120" },
  { name: "French Fries", image: "https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-1.jpg", price: "₹90" },
  { name: "Ice Cream", image: "https://carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg", price: "₹100" },
  { name: "Butter Naan", image: "https://www.cookwithmanali.com/wp-content/uploads/2014/11/Restaurant-Style-Naan.jpg", price: "₹40" },
  { name: "Paneer Tikka", image: "https://www.eitanbernath.com/wp-content/uploads/2020/05/Butter-Paneer-1-4x5-LOW-RES-819x1024.jpeg", price: "₹220" },
  { name: "Chicken Shawarma", image: "https://lifeloveandgoodfood.com/wp-content/uploads/2020/04/Chicken-Shawarma_09_1200x1200.jpg", price: "₹180" },
  { name: "Cold Coffee", image: "https://cdn.cnn.com/cnnnext/dam/assets/150929101049-black-coffee-stock-super-tease.jpg", price: "₹80" }
];
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = '';
  dishes.forEach(dish => {
    const card = document.createElement("div");
    card.className = "menu-item";
    card.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}">
      <h3>${dish.name}</h3>
      <p>${dish.price}</p>
    `;
    grid.appendChild(card);
  });
}

function showLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function hideLogin() {
  document.getElementById("loginModal").style.display = "none";
}

document.getElementById("searchInput").addEventListener("input", function() {
  const value = this.value.toLowerCase();
  const filtered = dishes.filter(d => d.name.toLowerCase().includes(value));
  renderFilteredMenu(filtered);
});

function renderFilteredMenu(list) {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = '';
  list.forEach(dish => {
    const card = document.createElement("div");
    card.className = "menu-item";
    card.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}">
      <h3>${dish.name}</h3>
      <p>${dish.price}</p>
    `;
    grid.appendChild(card);
  });
}

window.onload = renderMenu;
