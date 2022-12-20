[
  {
     "id": 1,
     "title": "Wisky Neeson",
     "price": 500.50,
     "description": "Reserva Secreta  que No sé quién la comprara, ni sé si le gustara. Si espera si espera un precio barato, le aviso de que  esto es calidad. Pero lo que si tengo es precio,",
     "category": "Licors",
     "thumbnail": [
      "https://VineriaElViejoBuo.com"
     ],
     "code": "jpg123",
     "state": true,
     "stock": 20
  },
  {
     "id": 2,
     "title": "Burbon Willis ",
     "price": 223.30,
     "description": " fuerte, dinamico  descrito en pocas palabras como el    Yippee Ki Yay, motherfucker  .",
     "category": "Licors",
     "thumbnail": [
      "https://VineriaElViejoBuo.com"
     ],
     "code": "asd234",
     "state": true,
     "stock": 15
  },
  {
     "id": 3,
     "title": "Fiction Wine by Jackson",
     "price": 99.99,
     "description": "di que no te gusta 1 vez mas !di que no te gusta 1 vez mas !Te reto 2 Veces Sr consumidor ! Di que no te gusta .",
     "category": "Licors",
     "thumbnail": [
      "https://VineriaElViejoBuo.com"
     ],
     "code": "xxx345",
     "state": true,
     "stock": 25
  },
  {
     "id": 4,
     "title": "Cerveza artesanal Alemana ",
     "price": 15.99,
     "description": " ideal para los viajes en el CHopa.",
     "category": "Licors",
     "thumbnail": [
      "https://VineriaElViejoBuo.com"
     ],
     "code": "ad456",
     "state": true,
     "stock": 1
  },
  {
     "id": 5,
     "title": "CoFfe DarkSide",
     "price": 695,
     "description": " hace ya mucho tiempo en una tierra lejana los agricultores del caffe y los licoreros locales formaron  una alianza para poder traer una Nueva esperanza al paladar .",
     "category": "licors",
     "thumbnail": [
      "https://VineriaElViejoBuo.com"
     ],
     "code": "asd567",
     "state": true,
     "stock": 5
  },
  {
     "id": 6,
     "title": "Gin Turman  ",
     "price": 168,
     "description":  "Bill Aprueba esto.",
     "category": "Licors",
     "thumbnail": [
      "https://VineriaElViejoBuo.com"
     ],
     "code": "asd678",
     "state": true,
     "stock": 36
  },
  {
     "id": 7,
     "title": "Vinos del Octavo Pasajero ",
     "price": 9.99,
     "description": "una sorpresa que sale desde el corazon .",
     "category": "Licors",
     "thumbnail": [
      "https://VineriaElViejoBuo.com"
     ],
     "code": "asd789",
     "state": true,
     "stock": 25
  },
  {
     "id": 8,
     "title": "Cerveza artesanal  Schindler ",
     "price": 10.99,
     "description": "Ideal para ponerlo en tu Lista ",
     "category": "jewelery",
     "thumbnail": [
      "https://VineriaElViejoBuo.com"
     ],
     "code": "asd890",
     "state": true,
     "stock": 10
  },
  {
     "id": 9,
     "title": "Jonny Walker Nicolson Edition ",
     "price": 64,
     "description": "HERE IS JHONNY!!",
     "category": "electronics",
     "thumbnail": [
      "https://VineriaElViejoBuo.com"
     ],
     "code": "asd901",
     "state": true,
     "stock": 18
  },
  {
     "id": 10,
     "title": "Machete´s Tequila  ",
     "price": 109,
     "description": " Madre de dios Que CHingawath.",
     "category": "electronics",
     "thumbnail": [
        "https://VineriaElViejoBuo.com"
     ],
     "code": "asd012",
     "state": true,
     "stock": 15
  }
]

const printProducts = (products) => {
  container.innerHTML = "";

  products.map((product) => {
    const card = document.createElement("div");
    card.innerHTML += `
    <div class="product__container">
      <div class="product__category">
        <span>${product.category}</span>
      </div>
      <div class="product__img--container">
        <img src=${product.thumbnail} alt=${product.title} />
      </div>
      <h4 class="product__price">PRICE: $${product.price}</h4>
      <h3 class="product__title">${product.title}</h3>
      <button>add to cart</button>
    </div>`;
    container.appendChild(card);
  });
};

printProducts(staticProducts);

socket.on("products", (data) => {
  console.log("All products printed on DOM");

  printProducts(data);
});

socket.on("addProduct", (data) => {
  console.log("Product added");

  printProducts(data);
});

socket.on("deletedProduct", (data) => {
  console.log("Product deleted");

  printProducts(data);
});