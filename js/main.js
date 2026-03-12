/* ============================================
   Femina Glow - Main JavaScript
   ============================================ */

// ============================================
// Products Data
// ============================================
const products = [
  
  {
    id: "fg_002",
    name: "مقشر قهوة طبيعي حجم اصغر",
    description: "حجم العلبة 150m",
    price: 150,
    originalPrice: null,
    category: "skincare",
    subcategory: "moisturizers",
    skinType: ["dry", "sensitive"],
    badge: "new",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    image: "https://i.postimg.cc/HkprKgCk/AQP0vn-IIm-XAKTc3Lug-A9uylo-Ryo6h-wag-Vx03g-Vi1-Jmp-1EAUdd-Va-RXe-ZDWYglajk-Va-l-Kaf0f1-gq-MCLR1SA-2.jpg",
    // ingredients: ["Aloe Vera", "Shea Butter", "Vitamin E"],
    usage: "يُستخدم على بشرة رطبة، تُوضع كمية مناسبة وتُدلّك بلطف بحركات دائرية ثم يُغسل بالماء. يُستخدم 1–2 مرة في الأسبوع."
  },
  {
    id: "fg_0016",
    name: "صابونية بحجم اكبر",
    description: "حجم العلبة 100m",
    price: 200,
    originalPrice: null,
    category: "skincare",
    subcategory: "moisturizers",
    skinType: ["dry", "sensitive"],
    badge: "new",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    image: "https://i.postimg.cc/9FDrVk5z/AQO7r-ZWwp-PCp-KUp-Paheqem3jkld153PQk-KIbwew-COwy-Ur-JIde2u-K1t-NH7-CGGqeah6Bqev-Bj-JQM7zg4TV5TMis-I.jpg",
    // ingredients: ["Aloe Vera", "Shea Butter", "Vitamin E"],
    usage: "الصابونية:تُبلل البشرة بالماء، ثم تُفرك الصابونية باليد أو بليفة الاستحمام حتى تتكون رغوة، تُوزع على الجسم مع تدليك لطيف ثم تُغسل بالماء.المقشر:يُستخدم على بشرة رطبة، تُوضع كمية مناسبة وتُدلّك بلطف بحركات دائرية ثم يُغسل بالماء. يُستخدم 1–2 مرة في الأسبوع.المرطب:يُوضع على بشرة نظيفة وجافة ويُدلّك حتى يمتصه الجلد.كريم اليدين والقدمين:تُوضع كمية مناسبة وتُدلّك حتى الامتصاص، ويُفضل استخدامه يوميًا."
  },
  {
    id: "fg_0016",
    name: "تبريمة الجسم",
    description: "حجم العلبة 100m",
    price: 100,
    originalPrice: null,
    category: "skincare",
    subcategory: "moisturizers",
    skinType: ["dry", "sensitive"],
    badge: "new",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    image: "https://i.postimg.cc/s2Qkgpfm/AQMH9c-TEa-D4iuwfbe-Hv2s2bp2Km-TUmg-I2lqte-ZIRzs-GG7j-Tkilsy-BB-Vg48Yqgeieblb-QGNDi-IDk25-Ulhgroi2d.jpg",
    // ingredients: ["Aloe Vera", "Shea Butter", "Vitamin E"],
    usage: "ستخدم مرتين في الاسبوع مع بشرة نظيفة"
  },
  {
    id: "fg_014",
    name: "مقشر قهوة طبيعي حجم اكبر",
    description: "حجم العلبة 200ml",
    price: 200,
    originalPrice: null,
    category: "skincare",
    subcategory: "moisturizers",
    skinType: ["dry", "sensitive"],
    badge: "new",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    image: "https://i.postimg.cc/mgvQ9XnZ/AQPd-Gv-U4p-Ne-G06h-A-Tu-Yfg-Dz-Ew-T66q3z-ZT-Nmkgb-X9Va-Y-j-OMBh-Rs-SMNt0RKbt9u8Luq-Pu-PPIvp9l-H-vkn.jpg",
    ingredients: ["Aloe Vera", "Shea Butter", "Vitamin E"],
    usage: "يُستخدم على بشرة رطبة، تُوضع كمية مناسبة وتُدلّك بلطف بحركات دائرية ثم يُغسل بالماء. يُستخدم 1–2 مرة في الأسبوع."
  },
  {
    id: "fg_013",
    name: "صابونية بحجم اصغر",
    description: "حجم العلبة 150m",
    price: 150,
    originalPrice: null,
    category: "skincare",
    subcategory: "moisturizers",
    skinType: ["dry", "sensitive"],
    badge: "new",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    image: "https://i.postimg.cc/T15bhncd/AQNW2Ohl-hv-BL0ajd-UOz-SO9N8EBBYCn9X7FOh-Pj-Xq-Rz-Iri-Mpqc2JFLQk-Stf-Mo-A1xra-Fwd2-tx-BPEXIm-V6bfl58.jpg",
    ingredients: ["Aloe Vera", "Shea Butter", "Vitamin E"],
    usage: "تُبلل البشرة بالماء، ثم تُفرك الصابونية باليد أو بليفة الاستحمام حتى تتكون رغوة، تُوزع على الجسم مع تدليك لطيف ثم تُغسل بالماء."
  },
  {
    id: "fg_003",
    name: "تقسيمات عطر قصة",
    description: " طبقات عطرية متناسقة تأخذك من الانتعاش الأول إلى عمق الفخامة.",
    price: 70,
    originalPrice: 100,
    category: "perfumes",
    subcategory: "oils",
    skinType: ["all", "dry"],
    badge: null,
    rating: 4.8,
    reviews: 156,
    inStock: true,
    image: "https://i.postimg.cc/ydb7v6Dm/gemini-3-pro-image-preview-2k-a-You-must-recreate-a.png",
    ingredients: ["100% Organic Argan Oil"],
    usage: "يستخدم على البشرة الرطبة بعد التنظيف"
  },
  {
    id: "fg_003",
    name: " خليطة بودرا للجسم معطرة",
    description: " طبقات عطرية متناسقة تأخذك من الانتعاش الأول إلى عمق الفخامة.",
    price: 50,
    originalPrice: 100,
    category: "perfumes",
    subcategory: "oils",
    skinType: ["all", "dry"],
    badge: null,
    rating: 6.8,
    reviews: 125,
    inStock: true,
    image: "https://i.postimg.cc/vmXYrQrW/1772996437863-019cced1-f71a-75c3-8874-9ce3c160f5fd.png",
    ingredients: ["100% Organic Argan Oil"],
    usage: "يستخدم على البشرة الرطبة بعد التنظيف"
  },
  
  {
    id: "fg_005",
    name: "تقسيمات عطر شمس الامارات",
    description: "عطر  طبيعي برائحة الياسمين الفاخرة. ثابت وآمن على البشرة.",
    price: 70,
    originalPrice: null,
    category: "perfumes",
    subcategory: "oil-perfumes",
    skinType: ["all"],
    badge: null,
    rating: 4.9,
    reviews: 78,
    inStock: true,
    image: "https://i.postimg.cc/dt4tfks2/AQOi-Vz-Tx7YIfp-Sstz-KEzc-Wv3S-PBC500hrm-TW-IWy-Wmn-Bm-A-7Be8-g-Jm-YZe-Wk-D2iii-HG8Z-g-Hu7z-CP3Ra-WB.jpg",
    ingredients: ["Jasmine Extract", "Jojoba Oil", "Essential Oils"],
    usage: "عطر فاخر بسعر مناسب"
  },
  {
    id: "fg_019",
    name: "تقسيمات عطر  MON PARIS",
    description: "عطر زيتي طبيعي برائحة الياسمين الفاخرة. ثابت وآمن على البشرة.",
    price: 70,
    originalPrice: null,
    category: "perfumes",
    subcategory: "oil-perfumes",
    skinType: ["all"],
    badge: null,
    rating: 7.9,
    reviews: 58,
    inStock: true,
    image: "https://i.postimg.cc/BZ73ZYpb/Whats-App-Image-2026-03-06-at-12-36-19-AM.jpg",
    ingredients: ["Jasmine Extract", "Jojoba Oil", "Essential Oils"],
    usage: "تقسيمات عطر فاخر بسعر مناسب"
  },
 
  {
    id: "fg_007",
    name: "ماسك الوجه من عدة اعشاب طبيعية",
    description: "غسول لطيف بالشاي الأخضر لمكافحة الشوائب والزيوت الزائدة.",
    price: 100,
    originalPrice: null,
    category: "skincare",
    subcategory: "cleansers",
    skinType: ["oily", "combination"],
    badge: "new",
    rating: 4.7,
    reviews: 92,
    inStock: true,
    image: "https://i.postimg.cc/4yLMPRCx/AQPHy-HRYJ7RNHy-Hx3t-U6G686re-ZBy-IAcfrc96r-Hm-K-4Hyf2n7i777LBzt4FZOb-Dkm-AYQc-Iwf-LIu1Iqi-LDXs-GPMl.jpg",
    ingredients: ["Green Tea Extract", "Salicylic Acid", "Glycerin"],
    usage: "يستخدم صباحاً ومساءً"
  },
  
  {
    id: "fg_009",
    name: "بوكس مقشرات متكامل",
    description: " مرطب عميق بحمض الهيالورونيك للبشرة الجافة والمتعبة.",
    price: 400,
    originalPrice: null,
    category: "serums",
    subcategory: "serums",
    skinType: ["dry", "dull"],
    badge: null,
    rating: 4.6,
    reviews: 67,
    inStock: true,
    image: "https://i.postimg.cc/Jh42YGnk/AQP-3GT87au7f-R88e-C1Wrm-WQ9Kv9v-MCq-KS-N2i-Dd-FL-hvtvhhr-XYjlw-DNBSXMIal8b6l-JOwghiwx-Tn8m-N5To-Glc.jpg",
    ingredients: ["Hyaluronic Acid", "Glycerin", "Rose Water"],
    usage: "يستخدم صباحاً ومساءً"
  },
  
  {
    id: "fg_011",
    name: "باك تجمبعة عطور ",
    description: "مجموعة عطرية تجمع بين الفخامة والتنوع لترافقك في كل يوم.",
    price: 300,
    originalPrice: 1100,
    category: "bundles",
    subcategory: "oil-perfumes",
    skinType: ["all"],
    badge: "sale",
    rating: 4.9,
    reviews: 88,
    inStock: true,
    image: "https://i.postimg.cc/4xh6bw3X/Whats-App-3.jpg",
    ingredients: ["Damask Rose Extract", "Jojoba Oil"],
    usage: ""
  },
   {
     id: "fg_01",
     name: "تقسسيمات عطر اجمل احساس",
     description: "عطر  فاخر بخلاصة الورد الدمشقي الطبيعي.",
     price: 70,
     originalPrice: 100,
     category: "perfumes",
     subcategory: "oil-perfumes",
     skinType: ["all"],
     rating: 4.8,
    reviews: 56,
    inStock: true,
     image: "https://i.postimg.cc/L5GLKMbP/gemini-3-pro-image-preview-2k-a-You-must-recreate-a-(7).png",
     ingredients: ["Damask Rose Extract", "Jojoba Oil"],
     usage: "يوضع على نقاط النبض"
   },
  {
    id: "fg_012",
    name: "بوكس العناية بالبشرة",
    description: "مجموعة مقشر متكاملة للعناية  وبلسم طبيعي.",
    price: 500,
    originalPrice: 600,
    category: "bundles",
    subcategory: "hair-sets",
    skinType: ["all"],
    badge: "best-seller",
    rating: 4.8,
    reviews: 56,
    inStock: true,
    image: "https://i.postimg.cc/FzbfkQBb/Whats-App-Image-2026-03-06-at-12-36-35-AM.jpg",
    ingredients: ["Argan Oil", "Coconut Oil", "Aloe Vera"],
    usage: "اتبعي التعليمات المرفقة"
  },
  {
    id: "fg_014",
    name: "بوكس مقشرات متكامل",
    description: "مجموعة مقشر متكاملة للعناية  وبلسم طبيعي.",
    price: 500,
    originalPrice: 600,
    category: "bundles",
    subcategory: "hair-sets",
    skinType: ["all"],
    badge: "best-seller",
    rating: 4.8,
    reviews: 56,
    inStock: true,
    image: "https://i.postimg.cc/Jh42YGnk/AQP-3GT87au7f-R88e-C1Wrm-WQ9Kv9v-MCq-KS-N2i-Dd-FL-hvtvhhr-XYjlw-DNBSXMIal8b6l-JOwghiwx-Tn8m-N5To-Glc.jpg",
    ingredients: ["Argan Oil", "Coconut Oil", "Aloe Vera"],
    usage: "اتبعي التعليمات المرفقة"
  },
  {
    id: "fg_015",
    name: "بوكس متكامل مخفض",
    description1: "باك متكامل للعناية بالبشرة يمنحك النظافة والترطيب والنعومة في روتين واحد.",
    price: 600,
    originalPrice: 700,
    category: "bundles",
    subcategory: "hair-sets",
    skinType: ["all"],
    badge: "best-seller",
    rating: 4.8,
    reviews: 56,
    inStock: true,
    image: "https://i.postimg.cc/vBD9Kdf3/AQM4m0MIpm-Vss4bl-2d-Ggo-HEGN4gk-d0ui8Ll-MTxr34RXga-Eqq6-e-B3fth0ni-Xa-Yt6Bv-IPSa93o5ib-NOd-Aoij65-2.jpg",
    ingredients: ["Argan Oil", "Coconut Oil", "Aloe Vera"],
    usage: " تُبلل البشرة بالماء، ثم تُفرك الصابونية باليد أو بليفة الاستحمام حتى تتكون رغوة، تُوزع على الجسم مع تدليك لطيف ثم تُغسل بالماء.المقشر:يُستخدم على بشرة رطبة، تُوضع كمية مناسبة وتُدلّك بلطف بحركات دائرية ثم يُغسل بالماء. يُستخدم 1–2 مرة في الأسبوع.المرطب:يُوضع على بشرة نظيفة وجافة ويُدلّك حتى يمتصه الجلد.كريم اليدين والقدمين:تُوضع كمية مناسبة وتُدلّك حتى الامتصاص، ويُفضل استخدامه يوميًا."
  },
  {
    id: "fg_016",
    name: "بوكس مخفض جدا مناسب للجميع",
    description: "مجموعة مقشر متكاملة مخفض جدا   وبلسم طبيعي.",
    price: 400,
    originalPrice: 500,
    category: "bundles",
    subcategory: "hair-sets",
    skinType: ["all"],
    badge: "best-seller",
    rating: 4.8,
    reviews: 56,
    inStock: true,
    image: "https://i.postimg.cc/t4Q0MyZx/AQPIB7Aq-FU-4x-Bc-LKSHe-Cit2h-Eu1Sw-U4-B2B2qf-RT-YJ7v-R8t-Sl-LQ-f9Lwun-CPYu-VUJxr45q-EKfi9Hf-j-QIvfk.jpg",
    ingredients: ["Argan Oil", "Coconut Oil", "Aloe Vera"],
    usage: "اتبعي التعليمات المرفقة"
  },
];



// Categories Data
const categories = [
  { id: "skincare", name: "العناية بالبشرة", icon: "🧴", count: 6 },

  { id: "perfumes", name: "العطور الطبيعية", icon: "🌸", count: 5 },
  // { id: "serums", name: "السيرومات والزيوت", icon: "🧪", count: 28 },
  { id: "bundles", name: "البوكسات الجاهزة", icon: "🎁", count: 4 }
];

// ============================================
// Wishlist Management
// ============================================
const wishlistManager = {
  getWishlist() {
    return JSON.parse(localStorage.getItem('feminaWishlist')) || [];
  },

  saveWishlist(wishlist) {
    localStorage.setItem('feminaWishlist', JSON.stringify(wishlist));
    this.updateWishlistCounter();
  },

  addItem(productId) {
    const wishlist = this.getWishlist();
    if (!wishlist.includes(productId)) {
      wishlist.push(productId);
      this.saveWishlist(wishlist);
      showToast('تمت إضافة المنتج للمفضلة');
      return true;
    }
    showToast('المنتج موجود بالفعل في المفضلة');
    return false;
  },

  removeItem(productId) {
    const wishlist = this.getWishlist().filter(id => id !== productId);
    this.saveWishlist(wishlist);
    showToast('تمت إزالة المنتج من المفضلة');
  },

  isInWishlist(productId) {
    return this.getWishlist().includes(productId);
  },

  toggleItem(productId) {
    if (this.isInWishlist(productId)) {
      this.removeItem(productId);
      return false;
    } else {
      this.addItem(productId);
      return true;
    }
  },

  updateWishlistCounter() {
    const counters = document.querySelectorAll('.wishlist-counter');
    const count = this.getWishlist().length;
    counters.forEach(counter => {
      counter.textContent = count;
      counter.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  getWishlistProducts() {
    const wishlistIds = this.getWishlist();
    return products.filter(p => wishlistIds.includes(p.id));
  }
};

// ============================================
// Cart Management
// ============================================
const cartManager = {
  getCart() {
    return JSON.parse(localStorage.getItem('feminaCart')) || [];
  },

  saveCart(cart) {
    localStorage.setItem('feminaCart', JSON.stringify(cart));
    this.updateCartCounter();
  },

  addItem(product, quantity = 1) {
    const cart = this.getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }

    this.saveCart(cart);
    showToast('تم إضافة المنتج للسلة بنجاح');
  },

  removeItem(productId) {
    const cart = this.getCart().filter(item => item.id !== productId);
    this.saveCart(cart);
    renderCartItems();
  },

  updateQuantity(productId, quantity) {
    const cart = this.getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
        return;
      }
      item.quantity = quantity;
      this.saveCart(cart);
      renderCartItems();
    }
  },

  clearCart() {
    localStorage.removeItem('feminaCart');
    this.updateCartCounter();
    renderCartItems();
    showToast('تم إفراغ السلة');
  },

  getTotal() {
    return this.getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getItemCount() {
    return this.getCart().reduce((sum, item) => sum + item.quantity, 0);
  },

  updateCartCounter() {
    const counter = document.getElementById('cartCounter');
    if (counter) {
      const count = this.getItemCount();
      counter.textContent = count;
      counter.style.display = count > 0 ? 'flex' : 'none';
    }
  }
};

// ============================================
// WhatsApp Order System
// ============================================
function generateWhatsAppMessage() {
  const cart = cartManager.getCart();
  const total = cartManager.getTotal();
  
  if (cart.length === 0) {
    showToast('السلة فارغة!', 'warning');
    return null;
  }

  let message = `مرحبا\nأرغب بطلب المنتجات التالية من Femina Glow:\n\n`;
  message += `-------------------\n`;
  
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    message += `الكمية: ${item.quantity}\n`;
    message += `السعر الوحدة: ${item.price} MUR\n`;
    message += `المجموع: ${item.price * item.quantity} MUR\n\n`;
  });
  
  message += `-------------------\n\n`;
  message += `المجموع الكلي: ${total} MUR\n\n`;
  message += `معلومات العميل:\n`;
  message += `الاسم: \n`;
  message += `المدينة: \n`;
  message += `العنوان: \n\n`;
  message += `تاريخ الطلب: ${new Date().toLocaleDateString('ar-MA')}`;
  
  return encodeURIComponent(message);
}

function sendOrderToWhatsApp() {
  const message = generateWhatsAppMessage();
  if (message) {
    const whatsappUrl = `https://wa.me/+22243087944?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
}

// ============================================
// Toast Notifications
// ============================================
function showToast(message, type = 'success') {
  const container = document.querySelector('.toast-container') || createToastContainer();
  
  const icons = {
    success: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    error: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
    warning: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'
  };
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `${icons[type] || icons.success}<span>${message}</span>`;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

// ============================================
// Cart Sidebar
// ============================================
function openCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  
  if (sidebar && overlay) {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
  }
}

function closeCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  
  if (sidebar && overlay) {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotalElement = document.getElementById('cartTotal');
  
  if (!cartItemsContainer) return;
  
  const cart = cartManager.getCart();
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h4>السلة فارغة</h4>
        <p>أضفي بعض المنتجات للسلة</p>
      </div>
    `;
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-price">${item.price} MUR</p>
          <div class="cart-item-actions">
            <div class="quantity-control">
              <button class="quantity-btn" onclick="cartManager.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
              <span class="quantity-value">${item.quantity}</span>
              <button class="quantity-btn" onclick="cartManager.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
            </div>
            <button class="remove-item" onclick="cartManager.removeItem('${item.id}')">حذف</button>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  if (cartTotalElement) {
    cartTotalElement.textContent = `${cartManager.getTotal()} MUR`;
  }
}

// ============================================
// Product Rendering
// ============================================
function renderProducts(containerId, filterFn = null, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  let filteredProducts = filterFn ? products.filter(filterFn) : products;
  if (limit) filteredProducts = filteredProducts.slice(0, limit);
  
  container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
  const badgeClass = product.badge ? `badge-${product.badge}` : '';
  const badgeText = product.badge === 'best-seller' ? 'الأكثر مبيعاً' : 
                    product.badge === 'new' ? 'جديد' : 
                    product.badge === 'sale' ? 'خصم' : '';
  const isInWishlist = wishlistManager.isInWishlist(product.id);
  
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<div class="product-badges"><span class="badge ${badgeClass}">${badgeText}</span></div>` : ''}
        <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist('${product.id}', this)" title="أضفي للمفضلة">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${isInWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        </button>
        <button class="quick-add" onclick="addToCart('${product.id}')" title="أضفي للسلة">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        </button>
      </div>
      <div class="product-info">
        <p class="product-category">${getCategoryName(product.category)}</p>
        <h3 class="product-name"><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <div class="product-rating">
          <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="current-price">${product.price} MUR</span>
          ${product.originalPrice ? `<span class="original-price">${product.originalPrice} MUR</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

function toggleWishlist(productId, btn) {
  const isAdded = wishlistManager.toggleItem(productId);
  btn.innerHTML = isAdded 
    ? '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>';
  btn.classList.toggle('active', isAdded);
}

function getCategoryName(categoryId) {
  const category = categories.find(c => c.id === categoryId);
  return category ? category.name : categoryId;
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cartManager.addItem(product);
  }
}

// ============================================
// Categories Rendering
// ============================================
function renderCategories(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = categories.map(cat => `
    <a href="products.html?category=${cat.id}" class="category-card">
      <div class="category-icon">${cat.icon}</div>
      <h3 class="category-name">${cat.name}</h3>
      <p class="category-count">${cat.count} منتج</p>
    </a>
  `).join('');
}

// ============================================
// Search Functionality
// ============================================
function openSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (overlay) {
    overlay.classList.add('active');
    document.getElementById('searchInput')?.focus();
  }
}

function closeSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

function searchProducts(query) {
  const resultsContainer = document.getElementById('searchResults');
  if (!resultsContainer) return;
  
  if (!query.trim()) {
    resultsContainer.innerHTML = '';
    return;
  }
  
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );
  
  if (filtered.length === 0) {
    resultsContainer.innerHTML = '<div class="search-result-item">لا توجد نتائج</div>';
  } else {
    resultsContainer.innerHTML = filtered.map(p => `
      <a href="product.html?id=${p.id}" class="search-result-item" onclick="closeSearch()">
        <img src="${p.image}" alt="${p.name}">
        <div>
          <h4>${p.name}</h4>
          <p>${p.price} MUR</p>
        </div>
      </a>
    `).join('');
  }
}

// ============================================
// Dark Mode
// ============================================
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  updateDarkModeIcon(isDark);
}

function updateDarkModeIcon(isDark) {
  const icon = document.getElementById('darkModeIcon');
  if (icon) {
    icon.innerHTML = isDark 
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>';
  }
}

function initDarkMode() {
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) {
    document.body.classList.add('dark-mode');
  }
  updateDarkModeIcon(isDark);
}

// ============================================
// Mobile Menu
// ============================================
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  const toggle = document.getElementById('menuToggle');
  
  if (menu && toggle) {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
  }
}

// ============================================
// Header Scroll Effect
// ============================================
function handleHeaderScroll() {
  const header = document.getElementById('header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}

// ============================================
// Countdown Timer
// ============================================
function startCountdown() {
  const countdownElements = document.querySelectorAll('.countdown');
  
  countdownElements.forEach(countdown => {
    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 24);
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = endDate - now;
      
      if (diff <= 0) {
        countdown.innerHTML = '<div class="countdown-item"><span class="countdown-number">00</span><span class="countdown-label">منتهي</span></div>';
        return;
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      countdown.innerHTML = `
        <div class="countdown-item">
          <span class="countdown-number">${String(hours).padStart(2, '0')}</span>
          <span class="countdown-label">ساعة</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${String(minutes).padStart(2, '0')}</span>
          <span class="countdown-label">دقيقة</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${String(seconds).padStart(2, '0')}</span>
          <span class="countdown-label">ثانية</span>
        </div>
      `;
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
}

// ============================================
// Intersection Observer for Animations
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.product-card, .category-card, .testimonial-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  cartManager.updateCartCounter();
  wishlistManager.updateWishlistCounter();
  initDarkMode();
  startCountdown();
  initScrollAnimations();
  
  window.addEventListener('scroll', handleHeaderScroll);
  
  // Search input listener
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => searchProducts(e.target.value));
  }
  
  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeSearch();
    }
  });
});

// ============================================
// Newsletter Subscription
// ============================================
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  if (email) {
    // Create WhatsApp message for newsletter subscription
    const message = encodeURIComponent(`مرحباً Femina Glow،\n\nأرغب بالاشتراك في النشرة البريدية.\n\nبريدي الإلكتروني: ${email}`);
    window.open(`https://wa.me/22243087944?text=${message}`, '_blank');
    showToast('✅ سيتم تحويلكِ لواتساب لتأكيد الاشتراك');
    e.target.reset();
  }
}
