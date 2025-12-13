const restaurants = [
  {
    slug: "nik-bakers",
    title: "Nik Baker's",
    location: "Greater Kailash (GK) 2",
    address: "M Block Market, Greater Kailash II, New Delhi, Delhi 110048",
    categories: ["Bakery", "Cafe", "Desserts"],
    phone: "+91 98765 43210",
    email: "info@nikbakers.com",
    rating: 4.0,

    // Main image for listing
    img: "/assets/images/most-popular-img1.png",

    // Gallery images (big + thumbnails can use same for simplicity)
    gallery: [
      "/assets/images/restaurant-detail-big-img1-1.jpg",
      "/assets/images/restaurant-detail-big-img1-2.jpg",
      "/assets/images/restaurant-detail-big-img1-3.jpg",
      "/assets/images/restaurant-detail-big-img1-4.jpg",
    ],

    // Full Menu with Categories
    menuCategories: [
      {
        name: "Pizza",
        rating: "4.25",
        items: [
          {
            name: "Pizza Takeaway",
            price: 85,
            img: "/assets/images/dish-img1-1.jpg",
            desc: "Classic margherita with fresh mozzarella and basil",
          },
          {
            name: "Extra Cheese Pizza",
            price: 95,
            img: "/assets/images/dish-img1-2.jpg",
            desc: "Loaded with extra mozzarella and cheddar",
          },
          {
            name: "Pizza Oven Testing Pronto",
            price: 110,
            img: "/assets/images/dish-img1-3.jpg",
            desc: "Wood-fired perfection with premium toppings",
          },
          {
            name: "Chicken Bacon Ranch",
            price: 125,
            img: "/assets/images/dish-img1-4.jpg",
            desc: "Grilled chicken, crispy bacon, ranch drizzle",
          },
        ],
      },
      {
        name: "Burgers",
        rating: "4.5",
        items: [
          {
            name: "Bacon Gouda Burger",
            price: 115,
            img: "/assets/images/dish-img2-1.jpg",
            desc: "Smoked gouda, crispy bacon, caramelized onions",
          },
          {
            name: "Tribeca Chicken Burger",
            price: 105,
            img: "/assets/images/dish-img2-2.jpg",
            desc: "Crispy chicken, lettuce, mayo, brioche bun",
          },
          {
            name: "Charburger",
            price: 99,
            img: "/assets/images/dish-img2-3.jpg",
            desc: "Classic chargrilled beef patty with all fixings",
          },
          {
            name: "Salads & Veggies Burger",
            price: 89,
            img: "/assets/images/dish-img2-4.jpg",
            desc: "Grilled veggies, hummus, fresh greens",
          },
        ],
      },
      {
        name: "Desserts",
        rating: "4.8",
        items: [
          {
            name: "Chocolate Truffle Cake",
            price: 75,
            img: "/assets/images/dessert1.jpg",
            desc: "Rich Belgian chocolate layered cake",
          },
          {
            name: "Red Velvet Pastry",
            price: 65,
            img: "/assets/images/dessert2.jpg",
            desc: "Cream cheese frosting, moist red velvet",
          },
        ],
      },
    ],
  },

  {
    slug: "dominos-pizza-connaught-place",
    title: "Domino's Pizza",
    location: "Connaught Place",
    address: "N Block, Connaught Place, New Delhi 110001",
    categories: ["Pizza", "Fast Food", "Italian"],
    phone: "+91 98765 43211",
    rating: 4.2,
    img: "/assets/images/most-popular-img2.png",
    gallery: [
      "/assets/images/dominos1.jpg",
      "/assets/images/dominos2.jpg",
      "/assets/images/dominos3.jpg",
      "/assets/images/dominos4.jpg",
    ],
    menuCategories: [
      {
        name: "Classic Pizzas",
        rating: "4.6",
        items: [
          {
            name: "Margherita",
            price: 79,
            img: "/assets/images/pizza1.jpg",
            desc: "Cheese burst crust available",
          },
          {
            name: "Pepperoni Feast",
            price: 129,
            img: "/assets/images/pizza2.jpg",
            desc: "Loaded with pepperoni",
          },
        ],
      },
    ],
  },

  {
    slug: "burger-king-saket",
    title: "Burger King",
    location: "Select Citywalk Mall, Saket",
    address: "Select Citywalk, Saket, New Delhi 110017",
    categories: ["Burgers", "Fast Food", "American"],
    phone: "+91 98765 43212",
    rating: 4.1,
    img: "/assets/images/most-popular-img3.png",
    gallery: ["/images/bk1.jpg", "/images/bk2.jpg", "/images/bk3.jpg"],
    menuCategories: [
      {
        name: "Whopper Series",
        rating: "4.7",
        items: [
          {
            name: "Whopper",
            price: 149,
            img: "/assets/images/whopper.jpg",
            desc: "Flame-grilled perfection",
          },
          {
            name: "Cheese Whopper",
            price: 169,
            img: "/assets/images/cheese-whopper.jpg",
            desc: "Extra melted cheese",
          },
        ],
      },
    ],
  },

  {
    slug: "dominos-pizza",
    img: "/assets/images/most-popular-img1.png",
    title: "Domino's Pizza",
    address: "5th Avenue New York 68",
    delay: "0.2s",
  },
  {
    slug: "burger-king",
    img: "/assets/images/most-popular-img2.png",
    title: "Burger King",
    address: "5th Avenue New York 68",
    delay: "0.3s",
  },
  {
    slug: "wendy's-cafe",
    img: "/assets/images/most-popular-img3.png",
    title: "Wendy's Cafe",
    address: "5th Avenue New York 68",
    delay: "0.4s",
  },
  {
    slug: "restaurant-item",
    img: "/assets/images/most-popular-img4.png",
    title: "Restaurant",
    address: "5th Avenue New York 68",
    delay: "0.5s",
  },
  {
    slug: "dominos-pizza",
    img: "/assets/images/most-popular-img5.png",
    title: "Domino's Pizza",
    address: "5th Avenue New York 68",
    delay: "0.6s",
  },
  {
    slug: "burger-king",
    img: "/assets/images/most-popular-img6.png",
    title: "Domino's Pizza",
    address: "5th Avenue New York 68",
    delay: "0.7s",
  },
  {
    slug: "dominos-pizza",
    img: "/assets/images/most-popular-img7.png",
    title: "Domino's Pizza",
    address: "5th Avenue New York 68",
    delay: "0.8s",
  },
//   {
//     slug: "burger-king",
//     img: "/assets/images/most-popular-img8.png",
//     title: "Domino's Pizza",
//     address: "5th Avenue New York 68",
//     delay: "0.9s",
//   },
];

export default restaurants;
