const mockMenu = [{
    id: 1,
    name: "Murg Tikka Masala (Red)",
    type: "non-veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 300,
    description: "Serves 1|Murg tikka masala is a dish consisting of roasted marinated chicken chunks (chicken tikka) in spiced curry sauce. The curry is usually creamy and orange-coloured. There are differing theories regarding the geographic origin of the dish, broadly split between those attributing it to cooks from south asia living in great britain, and those that view it as first created on the Indian subcontinent.|Served as Gravy|Served with Bone Pcs|",
    bestseller: true,
    new: true,
    image: "https://b.zmtcdn.com/data/dish_photos/5a6/ed0ddb6c1d8737749d71b60de4a885a6.jpeg?output-format=webp"
}, {
    id: 2,
    name: "Kulcha Stuffed",
    type: "veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 80,
    description: "Serves 1|Murg tikka masala is a dish consisting of roasted marinated chicken chunks (chicken tikka) in spiced curry sauce. The curry is usually creamy and orange-coloured. There are differing theories regarding the geographic origin of the dish, broadly split between those attributing it to cooks from south asia living in great britain, and those that view it as first created on the Indian subcontinent.|Served as Gravy|Served with Bone Pcs|",
    bestseller: true,
    new: true,
    image: "https://b.zmtcdn.com/data/dish_photos/49c/16d275927544a115864cceea635fe49c.jpg?output-format=webp"
}, {
    id: 3,
    name: "Chicken Hakka Noodles",
    type: "non-veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 240,
    description: "Chicken hakka noodles is a Chinese dish of cooked noodles tossed with boiled and shredded chicken and vegetables in Chinese sauces. It is an absolutely enticing street style noodles recipe consisting of colourful veggies, eggs, flavourful spicy sauces and sesame oil.",
    bestseller: true,
    new: true,
    image: "https://b.zmtcdn.com/data/dish_photos/7a4/edc3acd7c6f8307214fcc4c6284167a4.jpg?output-format=webp"
}, {
    id: 4,
    name: "Paneer Tikka",
    type: "veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 290,
    description: "Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor.It is a popular dish that is widely available in India and countries with an Indian diaspora.",
    bestseller: true,
    new: true,
    image: "https://b.zmtcdn.com/data/dish_photos/380/f9f23b4ea7a32e3595b9b12315370380.jpeg?output-format=webp"
}, {
    id: 5,
    name: "Mushroom Rangeela Tikka",
    type: "veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 300,
    description: "Serves 1|Murg tikka masala is a dish consisting of roasted marinated chicken chunks (chicken tikka) in spiced curry sauce. The curry is usually creamy and orange-coloured. There are differing theories regarding the geographic origin of the dish, broadly split between those attributing it to cooks from south asia living in great britain, and those that view it as first created on the Indian subcontinent.|Served as Gravy|Served with Bone Pcs|",
    bestseller: true,
    new: true,
    image: "https://b.zmtcdn.com/data/dish_photos/cf8/672942eef7bb0d830d4b1e9f6deadcf8.jpg?output-format=webp"
}, {
    id: 6,
    name: "Tandoori Chicken(half)",
    type: "non-veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 360,
    description: "Tandoori chicken is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor, a cylindrical clay oven. The dish is originated from the Indian subcontinent and is popular in many other parts of the world.",
    bestseller: true,
    new: true,
    image: "https://b.zmtcdn.com/data/dish_photos/4db/a9319d83a4cdedb960dc5812580934db.jpg?output-format=webp"
}, {
    id: 7,
    name: "Dum Aloo Punjabi (Red)",
    type: "veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 290,
    description: "Serves 1|Murg tikka masala is a dish consisting of roasted marinated chicken chunks (chicken tikka) in spiced curry sauce. The curry is usually creamy and orange-coloured. There are differing theories regarding the geographic origin of the dish, broadly split between those attributing it to cooks from south asia living in great britain, and those that view it as first created on the Indian subcontinent.|Served as Gravy|Served with Bone Pcs|",
    bestseller: true,
    new: true,
    image: "https://b.zmtcdn.com/data/dish_photos/08d/f5ce9ec48244fb7ffeb30e19308d108d.jpg?output-format=webp"
}, {
    id: 8,
    name: "Veg Fried Rice",
    type: "veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 180,
    description: "Serves 1|Murg tikka masala is a dish consisting of roasted marinated chicken chunks (chicken tikka) in spiced curry sauce. The curry is usually creamy and orange-coloured. There are differing theories regarding the geographic origin of the dish, broadly split between those attributing it to cooks from south asia living in great britain, and those that view it as first created on the Indian subcontinent.|Served as Gravy|Served with Bone Pcs|",
    bestseller: true,
    new: true,
    image: "https://b.zmtcdn.com/data/dish_photos/a14/d4a85759ef4215233032c1fade007a14.jpeg?output-format=webp"
}, {
    id: 9,
    name: "Murg Tangdi Kebab",
    type: "non-veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 330,
    description: "Murgh tangdi kabab is a chicken appetizer or a snack from the Punjabi cuisine. It consists of the tangdi or leg of the chicken or drumstick. The legs of the chicken are marinated in a spiced mixture and then grilled to perfection. Depending on the spices and ingredients used, the tangdi kabab different in taste and colour.",
    bestseller: true,
    new: true,
    image: "https://b.zmtcdn.com/data/dish_photos/03c/c1a471c84eff84730b9bb6b2c5dbb03c.jpg?output-format=webp"
}, {
    id: 10,
    name: "Paratha Laccha (1 Pc)",
    type: "veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 60,
    description: "Serves 1|Murg tikka masala is a dish consisting of roasted marinated chicken chunks (chicken tikka) in spiced curry sauce. The curry is usually creamy and orange-coloured. There are differing theories regarding the geographic origin of the dish, broadly split between those attributing it to cooks from south asia living in great britain, and those that view it as first created on the Indian subcontinent.|Served as Gravy|Served with Bone Pcs|",
    bestseller: true,
    new: true,
    image: "https://b.zmtcdn.com/data/dish_photos/49c/16d275927544a115864cceea635fe49c.jpg?output-format=webp"
}, {
    id: 11,
    name: "Roti (1 Pc)",
    type: "veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 30,
    description: "Serves 1|Murg tikka masala is a dish consisting of roasted marinated chicken chunks (chicken tikka) in spiced curry sauce. The curry is usually creamy and orange-coloured. There are differing theories regarding the geographic origin of the dish, broadly split between those attributing it to cooks from south asia living in great britain, and those that view it as first created on the Indian subcontinent.|Served as Gravy|Served with Bone Pcs|",
    bestseller: true,
    new: true,
    image: "https://b.zmtcdn.com/data/dish_photos/35b/0e332ca9bc8c0f4e53e6c1de60dd335b.jpg?output-format=webp"
},{
    id: 12,
    name: "Paratha Paneer",
    type: "veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 80,
    description: "Serves 1|Murg tikka masala is a dish consisting of roasted marinated chicken chunks (chicken tikka) in spiced curry sauce. The curry is usually creamy and orange-coloured. There are differing theories regarding the geographic origin of the dish, broadly split between those attributing it to cooks from south asia living in great britain, and those that view it as first created on the Indian subcontinent.|Served as Gravy|Served with Bone Pcs|",
    bestseller: true,
    new: true,
    image: "https://b.zmtcdn.com/data/dish_photos/49c/16d275927544a115864cceea635fe49c.jpg?output-format=webp"
}];

export { mockMenu };