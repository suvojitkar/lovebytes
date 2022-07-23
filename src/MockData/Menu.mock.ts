const mockMenu = [{
    id: 1,
    name: "Murg Tikka Masala (Red)",
    type: "veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 300,
    description: "Serves 1|Murg tikka masala is a dish consisting of roasted marinated chicken chunks (chicken tikka) in spiced curry sauce. The curry is usually creamy and orange-coloured. There are differing theories regarding the geographic origin of the dish, broadly split between those attributing it to cooks from south asia living in great britain, and those that view it as first created on the Indian subcontinent.|Served as Gravy|Served with Bone Pcs|",
    bestseller: true,
    new: true,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/itpfnzrjdkwecm8iuzym"
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
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/itpfnzrjdkwecm8iuzym"
}, {
    id: 3,
    name: "Chicken Hakka Noodles",
    type: "veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 240,
    description: "Chicken hakka noodles is a Chinese dish of cooked noodles tossed with boiled and shredded chicken and vegetables in Chinese sauces. It is an absolutely enticing street style noodles recipe consisting of colourful veggies, eggs, flavourful spicy sauces and sesame oil.",
    bestseller: true,
    new: true,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/duejvwt4wixdz1rrhjac"
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
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/y6wtgltnxkkndduo9lva"
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
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ptxxadsneei2p5hjmrgy"
}, {
    id: 6,
    name: "Tandoori Chicken(half)",
    type: "veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 360,
    description: "Tandoori chicken is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor, a cylindrical clay oven. The dish is originated from the Indian subcontinent and is popular in many other parts of the world.",
    bestseller: true,
    new: true,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qx141stoawurw0cjenct"
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
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wfqs2r2myx2n0jjqd0d7"
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
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/itpfnzrjdkwecm8iuzym"
}, {
    id: 9,
    name: "Murg Tangdi Kebab",
    type: "veg",
    cuisine: "south indian",
    availability: ['breakfast', 'lunch'],
    price: 330,
    description: "Murgh tangdi kabab is a chicken appetizer or a snack from the Punjabi cuisine. It consists of the tangdi or leg of the chicken or drumstick. The legs of the chicken are marinated in a spiced mixture and then grilled to perfection. Depending on the spices and ingredients used, the tangdi kabab different in taste and colour.",
    bestseller: true,
    new: true,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/yynlbmfazdxfjeldsvzm"
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
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/itpfnzrjdkwecm8iuzym"
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
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/itpfnzrjdkwecm8iuzym"
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
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/itpfnzrjdkwecm8iuzym"
}];

export { mockMenu };