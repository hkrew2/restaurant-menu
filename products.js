const PRODUCTS = [
{
    id: 1,
    name: "بيتزا تشيكن باربيكيو",
    cat: "بيتزا",
    desc: "صدور دجاج، صوص باربيكيو، موزاريلا فاخرة",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    isOffer: true, 
    isHot: true,
    sizes: [
      { name: "وسط", price: 130}, // السعر الجديد 130 والقديم 150
      { name: "كبير", price: 150  , oldPrice: 190 }
    ]
  },
  {
    id: 2,
    name: "برجر وحش المصنع",
    cat: "برجر",
    desc: "طبقتين لحم أنجوس، صوص جبنة، بيض، سلامي",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    isHot: true,
    sizes: [
      { name: "سنجل", price: 120 },
      { name: "دبل", price: 170 }
    ]
  },


  {
    id: 4,
    name: "كريب ميكس جبن",
    cat: "كريب",
    desc: "شيدر، موتزاريلا، كيري، رومي، مع صوصات مميزة",
    img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500", // رابط صورة كريب آخر
    sizes: [
      { name: "عادي", price: 80 }
    ]
  },
  {
    id: 5,
    name: "وافل نوتيلا ميكس",
    cat: "وافل",
    desc: "وافل بلجيكي أصلي غرقان نوتيلا وفواكه",
    img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400",
     isHot: true,
    sizes: [
      { name: "نص", price: 60 },
      { name: "كامل", price: 110 }
    ]
  },
  {
    id: 6,
    name: "بطاطس كيرلي",
    cat: "مقبلات",
    desc: "بطاطس كيرلي مقرمشة بالتوابل الخاصة",
    img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400",
        isNew: true,
    sizes: [
      { name: "صغير", price: 40 },
      { name: "كبير", price: 65 }
    ]
  }
];
