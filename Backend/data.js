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
      name: "rosted Eth1",
      category: "Arabica",
      image: "/image/P1.jpg",
      price: 3,
      CountInStock: 25,
      rating: 4.5,
      numReviews: 24,
      description: "organic Coffee",
    },

    {
      name: "rosted Eth2",
      category: "Excelsa",
      image: "/image/P2.jpeg",
      price: 31,
      CountInStock: 25,
      rating: 4.5,
      numReviews: 10,
      description: "organic Coffee",
    },

    {
      name: "rosted Eth3",
      category: "Robusta",
      image: "/image/P3.png",
      price: 48,
      CountInStock: 25,
      rating: 4.5,
      numReviews: 15,
      description: "organic Coffee",
    },
  ],
};

export default data;
