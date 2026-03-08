const PRODUCTS = [
  // --- المشاوي ---

  {
    id: 2,
    name: "شيش طاووق عالفحم",
    cat: "مشاوي",
    desc: "قطع دجاج متبلة بخلطة الحاتي السرية مشوية مع خضروات",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400",
    isOffer: true,
    sizes: [
      { name: "وجبة", price: 140, oldPrice: 170 },
      { name: "ساندوتش", price: 75 }
    ]
  },
  {
    id: 3,
    name: "ريش ضاني فاخرة",
    cat: "مشاوي",
    desc: "ريش غنم طازجة مشوية بتتبيلة الأعشاب والليمون",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
    isHot: true,
    sizes: [
      { name: "طلب فردي", price: 280 },
      { name: "كيلو ريش", price: 850 }
    ]
  },
  {
    id: 4,
    name: "دجاجة مشوية كاملة",
    cat: "مشاوي",
    desc: "دجاجة كاملة متبلة مشوية على الشواية الدوارة",
    img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400",
    isOffer: true,
    sizes: [
      { name: "نص دجاجة", price: 110 },
      { name: "دجاجة كاملة", price: 210, oldPrice: 240 }
    ]
  },
  {
    id: 5,
    name: "طرب الحاتي",
    cat: "مشاوي",
    desc: "كفتة لحم ملفوفة بمنديل ضاني مشوية بدقة",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
    isNew: true,
    sizes: [
      { name: "ربع كيلو", price: 150 },
      { name: "نص كيلو", price: 280 }
    ]
  },

  // --- المشروبات ---

  {
    id: 7,
    name: "موهيتو بلو لاجون",
    cat: "مشروبات",
    desc: "مزيج منعش من الصودا، النعناع، الليمون ونكهة البلو كوراكاو",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400",
    isNew: true,
    sizes: [
      { name: "كبير", price: 55 }
    ]
  },
  {
    id: 8,
    name: "ميلك شيك أوريو",
    cat: "مشروبات",
    desc: "أوريو مطحون مع لبن ساقط وأيس كريم فانيليا",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400",
    sizes: [
      { name: "وسط", price: 65 },
      { name: "كبير", price: 85 }
    ]
  },
  {
    id: 9,
    name: "  Iced Coffee",
    cat: "مشروبات",
    desc: "إسبريسو مع حليب بارد وثلج وصوص كراميل",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400",
    sizes: [
      { name: "عادي", price: 70 }
    ]
  },
  {
    id: 10,
    name: "ليمون نعناع فريش",
    cat: "مشروبات",
    desc: "عصير ليمون طازج مع أوراق النعناع الأخضر المنعشة",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400",
    sizes: [
      { name: "وسط", price: 35 },
      { name: "كبير", price: 50 }
    ]
  }
];
