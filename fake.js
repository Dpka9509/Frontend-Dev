const container = document.getElementById("product-container");

async function loadProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${product.image}" alt="">
                <h3>${product.title}</h3>
                <p class="price">$${product.price}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.log("Error:", error);
        container.innerHTML = "<h2>Failed to load products!</h2>";
    }
}

loadProducts();
