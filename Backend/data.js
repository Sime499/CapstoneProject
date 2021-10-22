import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Cory', 
      email: 'garton67@yahoo.com', 
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John', 
      email: 'user@example.com', 
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },

  ],
  products: [
    {
      name: "Roaosted Ethiopia Light",
      category:"Arabica",
      image: "/image/P1.jpg",
      price: 3,
      countInStock: 25,
      rating: 4.5,
      numReviews: 24,
      description: "Organic Coffee",
    },

    {
      name: "Roasted Ethiopia Mild",
      category: "Excelsa",
      image: "/image/P2.jpeg",
      price: 31,
      countInStock: 25,
      rating: 4.5,
      numReviews: 10,
      description: "Organic Coffee",
    },

    {
      name: "Roasted Ethiopia Dark",
      category: "Robusta",
      image: "/image/P3.png",
      price: 48,
      countInStock: 25,
      rating: 4.5,
      numReviews: 15,
      description: "Organic Coffee",
    },
    
    {
      name: "Deathwish1",
      category: "Strong",
      image: "/image/P2.jpeg",
      price: 6,
      countInStock: 3,
      rating: 4.5,
      numReviews: 15,
      description: "Extreme Coffee",
    },

    {
      name: "Deathwish2",
      category: "Strong",
      image: "/image/P2.jpeg",
      price: 6,
      countInStock: 3,
      rating: 4.5,
      numReviews: 15,
      description: "Extreme Coffee",
    },

    {
      name: "Deathwish3",
      category: "Strong",
      image: "/image/P2.jpeg",
      price: 6,
      countInStock: 3,
      rating: 4.5,
      numReviews: 15,
      description: "Extreme Coffee",
    },
  ],
};

export default data;
