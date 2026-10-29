
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceText = document.createElement("p");
  priceText.classList.add("price");
  priceText.textContent = `${price} EGP`;

  card.append(heading, priceText);
  document.querySelector("#list").append(card);
}

function findProduct(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));

  return cards.find(
    (card) => card.querySelector("h3").textContent === name
  );
}

export function removeProduct(name) {
  const card = findProduct(name);

  if (card) {
    card.remove();
  }
}

export function markSoldOut(name) {
  const card = findProduct(name);

  if (card) {
    card.classList.add("sold-out");
  }
}

export function clearProducts() {
  const cards = document.querySelectorAll("#list .card");

  cards.forEach((card) => card.remove());
}

export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
