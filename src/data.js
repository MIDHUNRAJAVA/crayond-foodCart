const data =  [
  {
    id: "1",
    qty:1,
    price:400,
    type:"pizza",
    name: "Chicken BBQ pizza",
    description: "2 variants",
    image: "https://b.zmtcdn.com/data/pictures/4/20940414/0527c967e911d810f5e1dcc574b5a8b4_o2_featured_v2.jpg?output-format=webp",
    variants: [
      {
        id: "1-1",
        name: "Chicken BBQ pizza with Mexican flavoured toppings",
        image: "https://b.zmtcdn.com/data/pictures/4/20940414/0527c967e911d810f5e1dcc574b5a8b4_o2_featured_v2.jpg?output-format=webp",
        sizes: [
          {
            size: "Large",
            price: 800.00,
            quantity: 5
          },
          {
            size: "Medium",
            price: "SAR 500.00",
            quantity: 10
          },
          {
            size: "Small",
            price: "SAR 300.00",
            quantity: 15
          }
        ]
      }
    ]
  },
  {
    id: "2",
    type:"french fries",
    qty:1,
    price:150,
    name: "French fries combo",
    description: "",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcREN7fgJ4n2DGH_TutrrgVtY28IRzMadNCzJvjyUqMX7Rvq4Qzz",
    variants: [
      {
        id: "2-1",
        name: "French Fries",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcREN7fgJ4n2DGH_TutrrgVtY28IRzMadNCzJvjyUqMX7Rvq4Qzz",
        sizes: [
          {
            size: "Standard",
            price: "SAR 100.00",
            quantity: 20
          }
        ]
      }
    ]
  },
  {
    id: "3",
    type:"pizza",
    qty:1,
    price:250,
    name: "Pan pizza",
    description: "2 variants",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHMRJ8vGja_nbGUPg1uGEMOctrZcxBWu7SPmR7X_EioSxtHk1k",
    variants: [
      {
        id: "3-1",
        name: "Spicy Pan pizza",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHMRJ8vGja_nbGUPg1uGEMOctrZcxBWu7SPmR7X_EioSxtHk1k",
        sizes: [
          {
            size: "Large",
            price: "SAR 750.00",
            quantity: 7
          },
          {
            size: "Medium",
            price: "SAR 450.00",
            quantity: 10
          }
        ]
      },
      {
        id: "3-2",
        name: "Classic Pan pizza",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHMRJ8vGja_nbGUPg1uGEMOctrZcxBWu7SPmR7X_EioSxtHk1k",
        sizes: [
          {
            size: "Medium",
            price: "SAR 400.00",
            quantity: 12
          },
          {
            size: "Small",
            price: "SAR 250.00",
            quantity: 8
          }
        ]
      }
    ]
  },
  {
    id: "4",
    type:"sandwich",
    qty:1,
    price:80,
    name: "Mushroom Sandwich",
    description: "2 variants",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwd3ku85R2ODTSv2Mz80rZheBbR8DWhg-pyJZpnrIeODdNe4H4",
    variants: [
      {
        id: "4-1",
        name: "Grilled Mushroom Sandwich",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwd3ku85R2ODTSv2Mz80rZheBbR8DWhg-pyJZpnrIeODdNe4H4",
        sizes: [
          {
            size: "Standard",
            price: "SAR 200.00",
            quantity: 15
          }
        ]
      },
      {
        id: "4-2",
        name: "Spicy Mushroom Sandwich",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwd3ku85R2ODTSv2Mz80rZheBbR8DWhg-pyJZpnrIeODdNe4H4",
        sizes: [
          {
            size: "Standard",
            price: "SAR 250.00",
            quantity: 8
          }
        ]
      }
    ]
  },
  {
    id: "5",
    type:"juice",
    qty:1,
    price:50,
    name: "Watermelon juice",
    description: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyPbtuMoC80J5qghd0hh8l_xAcrEgiHqZoyv6-IIilg2LbEQr",
    variants: [
      {
        id: "5-1",
        name: "Fresh Watermelon Juice",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyPbtuMoC80J5qghd0hh8l_xAcrEgiHqZoyv6-IIilg2LbEQr",
        sizes: [
          {
            size: "Standard",
            price: "SAR 30.00",
            quantity: 25
          }
        ]
      }
    ]
  },
  {
    id: "6",
    type:"nachos",
    qty:1,
    price:120,
    name: "Plain Nachos",
    description: "2 variants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpKA1yjE6E-pN6I6QQin8DgdsMwAmVhGcP73DYBM9Tbsnt06U",
    variants: [
      {
        id: "6-1",
        name: "Nachos with Cheese",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpKA1yjE6E-pN6I6QQin8DgdsMwAmVhGcP73DYBM9Tbsnt06U",
        sizes: [
          {
            size: "Standard",
            price: "SAR 100.00",
            quantity: 30
          }
        ]
      },
      {
        id: "6-2",
        name: "Nachos with Jalapeno",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpKA1yjE6E-pN6I6QQin8DgdsMwAmVhGcP73DYBM9Tbsnt06U",
        sizes: [
          {
            size: "Standard",
            price: "SAR 120.00",
            quantity: 20
          }
        ]
      }
    ]
  },
  {
    id: "7",
    type:"nachos",
    qty:1,
    price:140,
    name: "Mexican Nachos with salsa",
    description: "",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSdw9h276tkPcAjmeiPfOagluBMo6S4usvkYcCPY2_eAqBFSeVm",
    variants: [
      {
        id: "7-1",
        name: "Mexican Nachos",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSdw9h276tkPcAjmeiPfOagluBMo6S4usvkYcCPY2_eAqBFSeVm",
        sizes: [
          {
            size: "Standard",
            price: "SAR 150.00",
            quantity: 18
          }
        ]
      }
    ]
  },
  {
    id: "8",
    type:"juice",
    qty:1,
    price:40,
    name: "Grape juice",
    description: "2 variants",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5EHmfOnfQA1HwSibR5TWbDWmKH6cXrdC-pHj5RVYOTW5y8Al",
    variants: [
      {
        id: "8-1",
        name: "Pure Grape juice",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5EHmfOnfQA1HwSibR5TWbDWmKH6cXrdC-pHj5RVYOTW5y8Al",
        sizes: [
          {
            size: "Small",
            price: "SAR 30.00",
            quantity: 20
          },
          {
            size: "Medium",
            price: "SAR 50.00",
            quantity: 15
          }
        ]
      },
      {
        id: "8-2",
        name: "Mixed Fruit Grape juice",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5EHmfOnfQA1HwSibR5TWbDWmKH6cXrdC-pHj5RVYOTW5y8Al",
        sizes: [
          {
            size: "Small",
            price: "SAR 40.00",
            quantity: 25
          },
          {
            size: "Medium",
            price: "SAR 60.00",
            quantity: 18
          }
        ]
      }
    ]
  },
  {
    id: "9",
    type:"juice",
    qty:1,
    price:95,
    name: "Mango juice with salad",
    description: "",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPMnfvL_y_1RdKb0AA2FzlG7kYql3C-bfyqs5Tk3bLxg225o8A",
    variants: [
      {
        id: "9-1",
        name: "Mango Juice",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPMnfvL_y_1RdKb0AA2FzlG7kYql3C-bfyqs5Tk3bLxg225o8A",
        sizes: [
          {
            size: "Standard",
            price: "SAR 20.00",
            quantity: 12
          }
        ]
      }
    ]
  }
]

export default data;
