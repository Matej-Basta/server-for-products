export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Classic Sneakers",
        price: 599.99,
        description: "Timeless style meets comfort in these classic sneakers.",
        image: "http://localhost:8080/sneakers.jpg",
        longDescription: "Step out in style with these versatile sneakers, perfect for any occasion."
      },
      {
        id: 2,
        name: "Running Shoes",
        price: 799.99,
        description: "Enhance your runs with these lightweight and supportive shoes.",
        image: "http://localhost:8080/running-shoes.jpg",
        longDescription: "Engineered for speed and performance, these running shoes will take your workouts to the next level."
      },
      {
        id: 3,
        name: "Casual Slip-Ons",
        price: 499.99,
        description: "Effortlessly stylish slip-ons for everyday wear.",
        image: "http://localhost:8080/slip-ons.jpg",
        longDescription: "Slip into comfort with these casual shoes, perfect for a day out with friends or a leisurely stroll."
      },
      {
        id: 4,
        name: "Hiking Boots",
        price: 999.99,
        description: "Conquer any trail with these durable and rugged hiking boots.",
        image: "http://localhost:8080/hiking-shoes.jpg",
        longDescription: "Designed for the great outdoors, these hiking boots provide exceptional traction and support for all your adventures."
      },
      {
        id: 5,
        name: "Basketball Shoes",
        price: 699.99,
        description: "Take your training to new heights with these high-performance basketball shoes.",
        image: "http://localhost:8080/basketball-shoes.jpg",
        longDescription: "Push your limits with these advanced trainers, engineered to maximize your basketball game."
      },
      {
        id: 6,
        name: "Leather Oxfords",
        price: 899.99,
        description: "Elevate your formal attire with these sophisticated leather oxfords.",
        image: "http://localhost:8080/oxfords.jpg",
        longDescription: "Make a statement with these timeless oxfords, crafted from premium leather for unparalleled style and comfort."
      },
];

export default products;