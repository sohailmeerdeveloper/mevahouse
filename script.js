const asset = (name) => `assets/photos/${name}`;

const STORAGE_KEYS = {
  cart: "mevahouse-cart-v2",
  account: "mevahouse-account-v1",
  delivery: "mevahouse-delivery-v1",
};

const HERO_AUTOPLAY_MS = 3000;
const FREE_DELIVERY_LIMIT = 2500;
const SHIPPING_ZONES = [
  { keywords: ["gilgit", "hunza", "skardu", "ghizer", "astore", "nagar"], charge: 220, eta: "1-2 days inside Gilgit-Baltistan." },
  { keywords: ["islamabad", "rawalpindi", "abbottabad", "mansehra", "peshawar"], charge: 320, eta: "2-3 days for north and twin cities." },
  { keywords: ["lahore", "faisalabad", "gujranwala", "sialkot", "multan"], charge: 360, eta: "2-4 days for Punjab metro cities." },
  { keywords: ["karachi", "hyderabad", "sukkur", "nawabshah"], charge: 430, eta: "3-5 days for Sindh deliveries." },
  { keywords: ["quetta", "turbat", "khuzdar", "gwadar"], charge: 480, eta: "3-6 days for Balochistan deliveries." },
];
const SHIPPING_REMOTE_KEYWORDS = ["remote", "valley", "village", "tehsil", "bypass", "motorway", "cantt", "phase", "block"];
const DEFAULT_SHIPPING_CHARGE = 390;
const REMOTE_SURCHARGE = 70;

const DEFAULT_ACCOUNT = {
  loggedIn: false,
  name: "",
  phone: "",
  email: "",
  password: "",
  city: "Across Pakistan",
  area: "Gilgit-Baltistan",
  address: "",
  preferredPayment: "Cash on Delivery",
};

const DEFAULT_DELIVERY = {
  orderType: "Delivery",
  city: "Across Pakistan",
  area: "Gilgit-Baltistan",
  address: "",
  paymentMethod: "Cash on Delivery",
};

const paymentMethods = [
  {
    value: "Cash on Delivery",
    title: "Cash on Delivery",
    detail: "Pay when your order arrives at your doorstep.",
  },
  {
    value: "Bank Transfer",
    title: "Bank Transfer",
    detail: "Share the payment receipt on WhatsApp after confirming the order.",
  },
  {
    value: "Easypaisa / JazzCash",
    title: "Easypaisa / JazzCash",
    detail: "Fast wallet payment for quick confirmations.",
  },
];

const heroSlides = [
  {
    eyebrow: "Gift-ready northern picks",
    title: "PREMIUM<br />MEVA BOXES",
    cta: "Packed beautifully for homes and gifting",
    image: asset("mixed-nuts.jpg"),
  },
  {
    eyebrow: "Premium GB taste",
    title: "PURE MEVA,<br />FASTER DELIVERY",
    cta: "Fresh dry fruits across Pakistan",
    image: asset("dry-fruits-market.jpg"),
  },
  {
    eyebrow: "Fresh from the mountains",
    title: "HONEY,<br />SHILAJIT & KALAW",
    cta: "Signature wellness range now available",
    image: asset("wellness-banner.png"),
  },
  {
    eyebrow: "Northern orchard picks",
    title: "APRICOTS<br />& KERNELS",
    cta: "Sweet, clean, mountain-grown taste",
    image: asset("dried-apricots.jpg"),
  },
  {
    eyebrow: "Cold-pressed essentials",
    title: "PURE KERNEL<br />OILS",
    cta: "Apricot, almond, and walnut oils",
    image: asset("almond-oil.jpg"),
  },
  {
    eyebrow: "Traditional northern sweet",
    title: "DESI KALAW<br />GIFT BITES",
    cta: "Rich walnut sweetness for sharing",
    image: asset("walnut-chocolate.jpg"),
  },
];

const blogPosts = [
  {
    id: "how-to-store-dry-fruits",
    title: "How to keep dry fruits fresh for longer",
    excerpt: "Simple airtight storage, cooler shelves, and small packing habits that preserve taste and crunch.",
    tag: "Storage",
    date: "22 April 2026",
    image: asset("mixed-nuts.jpg"),
    body: [
      "Dry fruits stay fresher when they are protected from heat, direct light, and kitchen moisture. Airtight jars or sealed pouches keep flavor and texture stable for daily use.",
      "For almonds, walnuts, and raisins, divide large packs into smaller weekly portions. Open one pack at a time and keep the rest sealed in a cool cabinet or refrigerator during warmer months.",
      "Honey and shilajit should also be kept away from direct sunlight. A dry spoon and a tightly sealed lid go a long way in protecting purity and shelf life.",
    ],
  },
  {
    id: "mountain-honey-and-shilajit-guide",
    title: "Choosing pure mountain honey and authentic shilajit",
    excerpt: "What clients usually ask before ordering honey and wellness products from the north.",
    tag: "Wellness",
    date: "22 April 2026",
    image: asset("wellness-banner.png"),
    body: [
      "Pure mountain honey usually has a natural floral aroma, a rich amber tone, and a clean sweetness that does not feel overly sharp. Seasonal texture changes are normal and do not reduce quality.",
      "Shilajit is best presented with clear usage guidance, careful packing, and a clean ingredient explanation. Customers care about consistency, origin, and trust before they buy wellness products online.",
      "On a storefront, product pages should answer three things quickly: what it is, how it is packed, and how the customer will receive it. Clear delivery and payment details help conversion just as much as the product image.",
    ],
  },
  {
    id: "gift-boxes-for-family-orders",
    title: "Why curated gift boxes convert better than mixed lists",
    excerpt: "A neat order summary and ready-made bundles make gifting decisions easier for clients.",
    tag: "Gifting",
    date: "22 April 2026",
    image: asset("dry-fruits-market.jpg"),
    body: [
      "Gift buyers usually want speed and confidence. When you offer a clear gift box with visible contents, price, and delivery timing, they spend less time comparing and more time placing the order.",
      "Healthy gifting works especially well when the box mixes nuts, dried fruits, and one signature item like kalaw. It feels generous without becoming visually messy.",
      "A short blog section on your storefront helps answer these questions in advance and gives clients a reason to trust the catalog before they open WhatsApp.",
    ],
  },
];

const categories = [
  { title: "Dry Fruits", section: "DRY FRUITS", image: asset("mixed-nuts.jpg") },
  { title: "Nuts & Kernels", section: "NUTS & KERNELS", image: asset("almonds.jpg") },
  { title: "Dried Apricots", section: "DRIED FRESH FRUITS", image: asset("dried-apricots.jpg") },
  { title: "Natural Oils", section: "NATURAL OILS", image: asset("almond-oil.jpg") },
  { title: "Honey", section: "HONEY, SHILAJIT & KALAW", image: asset("mountain-honey.png") },
  { title: "Shilajit", section: "HONEY, SHILAJIT & KALAW", image: asset("shilajit-resin.png") },
  { title: "Kalaw", section: "HONEY, SHILAJIT & KALAW", image: asset("walnut-chocolate.jpg") },
  { title: "Gift Hampers", section: "MEVA GIFTING", image: asset("dry-fruits-market.jpg"), group: true },
  { title: "Walnut Chocolate", section: "WALNUT CHOCOLATE", image: asset("walnut-chocolate.jpg") },
];

const subcategoriesBySection = {
  "DRY FRUITS": [
    { title: "Apricots", keywords: ["apricot", "khobani"] },
    { title: "Figs", keywords: ["fig", "anjeer"] },
    { title: "Raisins", keywords: ["raisin", "kishmish", "grape"] },
    { title: "Mulberry", keywords: ["mulberry", "shahtoot"] },
    { title: "Plums", keywords: ["plum", "bukhara"] },
  ],
  "NUTS & KERNELS": [
    { title: "Walnuts", keywords: ["walnut", "akhrot"] },
    { title: "Almonds", keywords: ["almond", "badaam"] },
    { title: "Apricot Kernels", keywords: ["apricot kernel", "khobani giri"] },
    { title: "Chilgoza", keywords: ["chilgoza", "pine"] },
    { title: "Pistachio", keywords: ["pistachio", "pista"] },
    { title: "Cashew", keywords: ["cashew", "kaju"] },
    { title: "Peanuts", keywords: ["peanut", "mung"] },
  ],
  "DRIED FRESH FRUITS": [
    { title: "Dried Apricot", keywords: ["apricot"] },
    { title: "Dried Apple", keywords: ["apple"] },
    { title: "Dried Pear", keywords: ["pear"] },
    { title: "Local Cherry", keywords: ["cherry"] },
    { title: "Mulberry", keywords: ["mulberry"] },
    { title: "Dry Plum", keywords: ["plum"] },
  ],
  "NATURAL OILS": [
    { title: "Apricot Oil", keywords: ["apricot"] },
    { title: "Almond Oil", keywords: ["almond"] },
    { title: "Walnut Oil", keywords: ["walnut"] },
    { title: "Gift Pairs", keywords: ["gift", "pair"] },
  ],
  "HONEY, SHILAJIT & KALAW": [
    { title: "Honey", keywords: ["honey", "shehad"] },
    { title: "Shilajit", keywords: ["shilajit", "resin"] },
    { title: "Kalaw", keywords: ["kalaw", "walnut sweet"] },
  ],
  "MEVA GIFTING": [
    { title: "Gift Baskets", keywords: ["basket", "box"] },
    { title: "Family Boxes", keywords: ["family"] },
    { title: "Premium Nuts", keywords: ["premium", "nuts"] },
    { title: "Apricot Gifts", keywords: ["apricot"] },
  ],
  "WALNUT CHOCOLATE": [
    { title: "Desi Kalaw", keywords: ["desi"] },
    { title: "China Kalaw", keywords: ["china"] },
    { title: "Gift Packs", keywords: ["gift"] },
    { title: "Sweet Mix", keywords: ["sweet", "mix"] },
  ],
};

const catalogSections = [
  {
    title: "DRY FRUITS",
    eyebrow: "From Gilgit-Baltistan",
    headline: "Dry Fruits",
    subline: "Pure energy in every bite",
    bannerClass: "banner-red",
    bannerImage: asset("mixed-nuts.jpg"),
    products: [
      product("Dried Apricot", "Soft mountain apricots", "dried-apricots.jpg", 1200, 1380, "13% OFF", "Hot"),
      product("Dried Fig", "Naturally sweet anjeer", "dried-figs.jpg", 2700, 3000, "10% OFF", "Premium"),
      product("Raisins", "Sweet kishmish", "raisins.jpg", 2500, 2850, "12% OFF", "Hot"),
      product("Dried Plum", "Aloo bukhara", "prunes.jpg", 900, 1050, "14% OFF", "New"),
      product("Dried Apple", "Clean sliced apple", "dried-apple.jpg", 900, 1100, "18% OFF", "Hot"),
      product("Dried Pear", "Local dried pear", "dried-pear.jpg", 900, 1050, "14% OFF", "Featured"),
      product("Dried Cherry", "Local dry cherry", "dried-cherries.jpg", 900, 1100, "18% OFF", "Local"),
      product("Dried Mulberry", "Sweet shahtoot", "mulberries.jpg", 900, 1000, "10% OFF", "Best Seller"),
      product("Fig & Raisin Mix", "Sweet energy mix", "dried-figs.jpg", 2600, 2900, "10% OFF", "Featured"),
    ],
  },
  {
    title: "NUTS & KERNELS",
    eyebrow: "Premium selection",
    headline: "Nuts",
    subline: "Crunchy, clean, and fresh",
    bannerClass: "banner-blue",
    bannerImage: asset("almonds.jpg"),
    products: [
      product("Walnuts", "Fresh akhrot", "walnuts.jpg", 1200, 1450, "17% OFF", "Hot"),
      product("Almonds", "Premium badaam", "almonds.jpg", 1800, 2050, "12% OFF", "Premium"),
      product("Apricot Kernels", "Khobani giri", "apricot-kernels.jpg", 1800, 2000, "10% OFF", "New"),
      product("Chilgoza", "Pine nuts", "pine-nuts.jpg", 6500, 7100, "8% OFF", "Premium"),
      product("Pistachio", "Fresh pista", "pistachios.jpg", 3600, 4100, "12% OFF", "Featured"),
      product("Cashew", "Creamy kaju", "cashews.jpg", 3600, 4200, "14% OFF", "Popular"),
      product("Peanuts", "Roasted mung phali", "peanuts.jpg", 1100, 1250, "12% OFF", "Local"),
      product("Mixed Dry Fruit", "Balanced family mix", "mixed-nuts.jpg", 2500, 2900, "14% OFF", "Best Seller"),
    ],
  },
  {
    title: "DRIED FRESH FRUITS",
    eyebrow: "Naturally preserved",
    headline: "Dried Fresh Fruits",
    subline: "A taste of northern orchards",
    bannerClass: "banner-green",
    bannerImage: asset("dried-apricots.jpg"),
    products: [
      product("Dried Apricot Pack", "For daily snacking", "dried-apricots.jpg", 1200, 1400, "14% OFF", "Hot"),
      product("Dried Apple Pack", "Light and crisp", "dried-apple-chips.jpg", 900, 1050, "14% OFF", "Hot"),
      product("Dried Pear Pack", "Naturally sweet", "dried-pear.jpg", 900, 1050, "14% OFF", "New"),
      product("Local Dry Cherry", "Tart and sweet", "dried-cherries.jpg", 900, 1050, "14% OFF", "Local"),
      product("Dry Mulberry", "Mountain shahtoot", "mulberries.jpg", 900, 1000, "10% OFF", "Best Seller"),
      product("Dry Plum Pack", "Rich aloo bukhara", "prunes.jpg", 900, 1100, "18% OFF", "Popular"),
    ],
  },
  {
    title: "NATURAL OILS",
    eyebrow: "Cold-pressed goodness",
    headline: "Oils",
    subline: "One liter pure kitchen care",
    bannerClass: "banner-teal",
    bannerImage: asset("almond-oil.jpg"),
    products: [
      product("Apricot Kernel Oil", "1 liter khobani giri oil", "dried-apricots.jpg", 3000, 3400, "12% OFF", "Premium"),
      product("Almond Kernel Oil", "1 liter badaam giri oil", "almond-oil.jpg", 3000, 3400, "12% OFF", "Premium"),
      product("Walnut Kernel Oil", "Akhrot giri oil", "walnuts.jpg", 3000, 3500, "14% OFF", "Hot"),
      product("Oil Gift Pair", "Two bottle set", "mixed-nuts.jpg", 5800, 6400, "9% OFF", "Gift"),
    ],
  },
  {
    title: "HONEY, SHILAJIT & KALAW",
    eyebrow: "Fresh from the northern mountains",
    headline: "Signature Wellness",
    subline: "Pure honey, real shilajit, and traditional kalaw",
    bannerClass: "banner-amber",
    bannerImage: asset("wellness-banner.png"),
    products: [
      product("Mountain Honey", "Pure Gilgit mountain honey", "mountain-honey.png", 1800, 2100, "14% OFF", "New"),
      product("Pure Shilajit Resin", "Natural Himalayan resin", "shilajit-resin.png", 2800, 3200, "12% OFF", "Premium"),
      product("Kalaw Gift Box", "Walnut sweet gift box", "walnut-chocolate.jpg", 3200, 3600, "11% OFF", "Featured"),
    ],
  },
  {
    title: "MEVA GIFTING",
    eyebrow: "Packed for sharing",
    headline: "Gifting",
    subline: "Healthy gifts for every home",
    bannerClass: "banner-blue",
    bannerImage: asset("dry-fruits-market.jpg"),
    products: [
      product("Family Dry Fruit Box", "Mixed nuts and fruits", "mixed-nuts.jpg", 3500, 4100, "15% OFF", "Featured"),
      product("Premium Nuts Box", "Walnut, almond, cashew", "cashews.jpg", 4200, 4900, "14% OFF", "Premium"),
      product("Apricot Lovers Box", "Apricot and kernels", "dried-apricots.jpg", 2800, 3300, "15% OFF", "Popular"),
      product("Meva House Basket", "Ready to present", "dry-fruits-market.jpg", 5000, 5800, "14% OFF", "Gift"),
    ],
    groups: [
      { title: "Meva Gift Basket", image: asset("mixed-nuts.jpg") },
      { title: "Wedding Gifts", image: asset("dry-fruits-market.jpg") },
      { title: "Customized Gifts", image: asset("almonds.jpg") },
    ],
  },
  {
    title: "WALNUT CHOCOLATE",
    eyebrow: "Traditional taste",
    headline: "Kalaw",
    subline: "Walnut chocolate from the north",
    bannerClass: "banner-violet",
    bannerImage: asset("walnut-chocolate.jpg"),
    products: [
      product("Desi Kalaw", "Walnut chocolate", "walnut-chocolate.jpg", 2500, 2900, "14% OFF", "Hot"),
      product("China Kalaw", "Imported style kalaw", "walnut-chocolate.jpg", 2600, 3000, "13% OFF", "New"),
      product("Kalaw Gift Pack", "Sweet walnut box", "walnut-chocolate.jpg", 3200, 3700, "14% OFF", "Gift"),
      product("Walnut Sweet Mix", "Chocolate and nuts", "walnut-chocolate.jpg", 2800, 3250, "13% OFF", "Featured"),
    ],
  },
];

let heroIndex = 1;
let heroTimer = 0;
let account = { ...DEFAULT_ACCOUNT, ...loadState(STORAGE_KEYS.account, {}) };
let deliveryDetails = { ...DEFAULT_DELIVERY, ...loadState(STORAGE_KEYS.delivery, {}) };
let cart = restoreCart(loadState(STORAGE_KEYS.cart, []));

function product(name, desc, image, price, oldPrice, discount, tag) {
  return { id: slug(name), name, desc, image: asset(image), price, oldPrice, discount, tag };
}

function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveState(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function restoreCart(savedCart) {
  if (!Array.isArray(savedCart)) return [];
  return savedCart
    .map((entry) => {
      const item = findProduct(entry.id);
      if (!item) return null;
      return { ...item, qty: Math.max(1, Number(entry.qty) || 1) };
    })
    .filter(Boolean);
}

function persistCart() {
  saveState(
    STORAGE_KEYS.cart,
    cart.map((item) => ({ id: item.id, qty: item.qty })),
  );
}

function persistDelivery() {
  saveState(STORAGE_KEYS.delivery, deliveryDetails);
}

function persistAccount() {
  saveState(STORAGE_KEYS.account, account);
}

function allProducts() {
  return catalogSections.flatMap((section) => section.products.map((item) => ({ ...item, section: section.title })));
}

function findProduct(productSlug) {
  return allProducts().find((item) => item.id === productSlug);
}

function findBlogPost(postSlug) {
  return blogPosts.find((post) => post.id === postSlug);
}

function money(value) {
  return typeof value === "number" ? `Rs. ${value.toLocaleString("en-PK")}.00` : value;
}

function numericPrice(value) {
  return typeof value === "number" ? value : Number.MAX_SAFE_INTEGER;
}

function getProductUnitPrice(productId) {
  return findProduct(productId)?.price;
}

function getCartItemCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + (typeof item.price === "number" ? item.price * item.qty : 0), 0);
}

function getDeliveryEstimate(orderType, city, area, address, subtotal = getCartSubtotal()) {
  if (!cart.length) {
    return { charge: 0, eta: "Add products to see the delivery estimate.", label: "No active order yet." };
  }
  if (orderType === "Pick-Up") {
    return { charge: 0, eta: "Pick-up can be arranged on WhatsApp after confirmation.", label: "Pick-up selected." };
  }

  const cityText = `${city || ""} ${area || ""}`.toLowerCase();
  const addressText = `${area || ""} ${address || ""}`.toLowerCase();
  const zone = SHIPPING_ZONES.find((entry) => entry.keywords.some((keyword) => cityText.includes(keyword)));
  let charge = zone?.charge || DEFAULT_SHIPPING_CHARGE;
  const extraItems = Math.max(0, getCartItemCount() - 1);
  charge += Math.min(180, extraItems * 35);
  if (SHIPPING_REMOTE_KEYWORDS.some((keyword) => addressText.includes(keyword))) {
    charge += REMOTE_SURCHARGE;
  }

  return {
    charge,
    eta: zone?.eta || "Usually 3-5 days for most Pakistan deliveries.",
    label: zone
      ? `Estimated for ${city || area} with parcel-size adjustment.`
      : "Estimated using Pakistan city-zone delivery pricing.",
  };
}

function getSelectedPaymentMethod() {
  return document.querySelector("input[name='paymentMethod']:checked")?.value || deliveryDetails.paymentMethod || account.preferredPayment;
}

function getCheckoutSnapshot() {
  const orderType = document.querySelector("input[name='checkoutOrderType']:checked")?.value || deliveryDetails.orderType;
  const city = document.getElementById("checkoutCity")?.value.trim() || account.city || deliveryDetails.city;
  const area = document.getElementById("checkoutArea")?.value.trim() || account.area || deliveryDetails.area;
  const address = document.getElementById("customerAddress")?.value.trim() || account.address || deliveryDetails.address;
  const paymentMethod = getSelectedPaymentMethod();
  const subtotal = getCartSubtotal();
  const deliveryEstimate = getDeliveryEstimate(orderType, city, area, address, subtotal);
  return {
    name: document.getElementById("customerName")?.value.trim() || account.name,
    phone: document.getElementById("customerPhone")?.value.trim() || account.phone,
    email: document.getElementById("customerEmail")?.value.trim() || account.email,
    city,
    area,
    address,
    notes: document.getElementById("checkoutNotes")?.value.trim() || "",
    orderType,
    paymentMethod,
    subtotal,
    deliveryCharge: deliveryEstimate.charge,
    total: subtotal + deliveryEstimate.charge,
    eta: deliveryEstimate.eta,
    deliveryLabel: deliveryEstimate.label,
  };
}

function buildWhatsAppOrderLink() {
  const snapshot = getCheckoutSnapshot();
  const order = cart.map((item) => `${item.name} x ${item.qty}`).join(", ");
  const message = [
    "Assalam o Alaikum, I want to order from Meva House.",
    `Order: ${order || "Please share product details"}`,
    `Subtotal: ${money(snapshot.subtotal)}`,
    `Delivery charges: ${money(snapshot.deliveryCharge)}`,
    `Grand total: ${money(snapshot.total)}`,
    `Order type: ${snapshot.orderType}`,
    `Payment method: ${snapshot.paymentMethod}`,
    `City: ${snapshot.city}`,
    `Area: ${snapshot.area}`,
    `Address: ${snapshot.address || "Will share on call"}`,
    snapshot.name ? `Name: ${snapshot.name}` : "",
    snapshot.phone ? `Phone: ${snapshot.phone}` : "",
    snapshot.email ? `Email: ${snapshot.email}` : "",
    snapshot.notes ? `Notes: ${snapshot.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  return `https://wa.me/923438802989?text=${encodeURIComponent(message)}`;
}

function syncAccountUI() {
  const loginButton = document.querySelector(".login-btn");
  loginButton.textContent = account.loggedIn ? (account.name.split(" ")[0] || "My Account") : "Login";
  loginButton.setAttribute("aria-label", account.loggedIn ? "Open account" : "Open account");
  document.getElementById("deliveryText").textContent = `${deliveryDetails.area}, ${deliveryDetails.city}`;
  document.getElementById("locationCity").value = deliveryDetails.city;
  document.getElementById("locationArea").value = deliveryDetails.area;
}

function renderCategories() {
  const root = document.getElementById("categoryRail");
  root.innerHTML = categories.map(renderCategoryCard).join("");
  document.getElementById("drawerCategories").innerHTML = categories.map(renderDrawerCategory).join("");
}

function renderDrawerCategory(category) {
  const section = getSectionForCategory(category);
  const subs = subcategoriesBySection[section?.title] || [];
  return `<div class="drawer-category-group">
    <a class="drawer-category" href="#category/${slug(category.title)}">
      <img src="${category.image}" alt="${category.title}" />
      <span>${category.title}</span>
    </a>
    <div class="drawer-subcategories">
      ${subs.slice(0, 5).map((sub) => `<a href="${buildHash(`category/${slug(category.title)}`, { sub: slug(sub.title) })}">${sub.title}</a>`).join("")}
    </div>
  </div>`;
}

function renderCategoryCard(category) {
  return `<a class="category-card" href="#category/${slug(category.title)}">
    <img src="${category.image}" alt="${category.title}" />
    <strong>${category.title}</strong>
  </a>`;
}

function renderSections() {
  const root = document.getElementById("sectionsRoot");
  root.innerHTML = catalogSections.map(renderHomeSection).join("");
}

function renderHomeSection(section) {
  return `<section class="product-section wrap" id="${slug(section.title)}">
    <h2 class="product-heading">${section.title}</h2>
    ${renderBanner(section)}
    <div class="product-strip">
      <div class="products-grid">${section.products.slice(0, 8).map(renderProduct).join("")}</div>
      <a class="view-all" href="#category/${slug(section.title)}">View all</a>
    </div>
  </section>`;
}

function renderBanner(section) {
  return `<div class="section-banner ${section.bannerClass}">
    <img src="${section.bannerImage}" alt="${section.title}" />
    <div class="banner-copy">
      <p>${section.eyebrow}</p>
      <h3>${section.headline}</h3>
      <span>${section.subline}</span>
    </div>
  </div>`;
}

function renderProduct(item) {
  const oldPrice = item.oldPrice ? `<span class="old-price">${money(item.oldPrice)}</span>` : "";
  const discount = item.discount ? `<span class="discount">${item.discount}</span>` : "";
  return `<article class="product-card" data-product-id="${item.id}">
    <a class="product-link" href="#product/${item.id}" aria-label="View ${item.name}">
      <div class="image-box">
        <img src="${item.image}" alt="${item.name}" />
        ${discount}
        <span class="tag">${item.tag || "Meva"}</span>
      </div>
      <div class="product-title-row">
        <h4>${item.name}</h4>
        <button class="heart" type="button" aria-label="Add ${item.name} to wishlist">&#9825;</button>
      </div>
      <p class="desc">${item.desc}</p>
      ${oldPrice}
      <span class="price">${money(item.price)}</span>
    </a>
    <button class="add-btn" type="button" data-add="${item.id}">Add To Cart</button>
  </article>`;
}

function renderBlogPreview() {
  const root = document.getElementById("blogPreviewRoot");
  if (!root) return;
  root.innerHTML = `<section class="blog-section wrap" aria-labelledby="blogPreviewTitle">
    <div class="section-head-inline">
      <h2 id="blogPreviewTitle">From the blog</h2>
      <a href="#blog">View all posts</a>
    </div>
    <div class="blog-grid">
      ${blogPosts.map((post) => renderBlogCard(post)).join("")}
    </div>
  </section>`;
}

function renderBlogCard(post) {
  return `<article class="blog-card">
    <a href="#blog/${post.id}">
      <img src="${post.image}" alt="${post.title}" />
      <div class="blog-copy">
        <span class="blog-meta">${post.date} / ${post.tag}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
      </div>
    </a>
  </article>`;
}

function renderHero() {
  const carousel = document.getElementById("heroCarousel");
  if (!carousel.querySelector(".hero-slide-card")) {
    carousel.innerHTML = `${heroSlides.map(renderHeroSlide).join("")}
    <div class="slider-dots" aria-label="Slider dots">
      ${heroSlides.map((_, index) => `<button type="button" data-slide="${index}" aria-label="Go to banner ${index + 1}"></button>`).join("")}
    </div>`;
  }
  updateHero();
}

function renderHeroSlide(slide, index) {
  return `<article class="hero-slide-card" data-index="${index}">
    <div class="hero-slide-inner">
      <div class="hero-copy">
        <p>${slide.eyebrow}</p>
        <h1>${slide.title}</h1>
        <span>${slide.cta}</span>
      </div>
      <img src="${slide.image}" alt="${slide.eyebrow}" />
    </div>
  </article>`;
}

function updateHero() {
  document.querySelectorAll(".hero-slide-card").forEach((card) => {
    const index = Number(card.dataset.index);
    card.className = `hero-slide-card ${getHeroPosition(index)}`;
  });
  document.querySelectorAll(".slider-dots button").forEach((dot, index) => {
    dot.classList.toggle("active", index === heroIndex);
  });
}

function setHeroIndex(index, resetTimer = false) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  updateHero();
  if (resetTimer) startHeroAutoplay();
}

function moveHero(direction, resetTimer = false) {
  setHeroIndex(heroIndex + direction, resetTimer);
}

function getHeroPosition(index) {
  const total = heroSlides.length;
  const prev = (heroIndex - 1 + total) % total;
  const next = (heroIndex + 1) % total;
  if (index === heroIndex) return "is-active";
  if (index === prev) return "is-prev";
  if (index === next) return "is-next";
  const forwardDistance = (index - heroIndex + total) % total;
  return forwardDistance < total / 2 ? "is-after" : "is-before";
}

function startHeroAutoplay() {
  clearInterval(heroTimer);
  heroTimer = window.setInterval(() => {
    moveHero(1);
  }, HERO_AUTOPLAY_MS);
}

function showHome() {
  document.getElementById("homeView").hidden = false;
  document.getElementById("routeView").hidden = true;
  closeDrawers();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showRoute(html) {
  document.getElementById("homeView").hidden = true;
  const route = document.getElementById("routeView");
  route.hidden = false;
  route.innerHTML = html;
  updateDetailPrice();
  closeDrawers();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCategoryPage(categorySlug) {
  const [cleanSlug, queryString = ""] = categorySlug.split("?");
  const params = new URLSearchParams(queryString);
  const activeSub = params.get("sub") || "";
  const query = params.get("q") || "";
  const tag = params.get("tag") || "";
  const sort = params.get("sort") || "featured";
  const category = categories.find((item) => slug(item.title) === cleanSlug);
  const section = catalogSections.find((item) => slug(item.title) === cleanSlug || item.title === category?.section);
  if (!section) {
    renderSearchPage("", new URLSearchParams());
    return;
  }

  const subcategories = subcategoriesBySection[section.title] || [];
  const selectedSubcategory = subcategories.find((sub) => slug(sub.title) === activeSub);
  const filterRoute = `category/${slug(category?.title || section.title)}`;

  let products = section.products.slice();
  if (selectedSubcategory) {
    products = products.filter((item) => productMatchesSubcategory(item, selectedSubcategory));
  }
  products = filterProducts(products, { query, tag, sort });

  const body = section.groups && !selectedSubcategory
    ? `<div class="subcat-grid">${section.groups.map((item) => renderSubcategory(item, filterRoute)).join("")}</div>
       <div class="products-grid listing-grid">${renderProductsOrEmpty(products, "No products found in this category.")}</div>`
    : `<div class="products-grid listing-grid">${renderProductsOrEmpty(products, "No products found in this category.")}</div>`;

  showRoute(`<section class="route-page wrap">
    ${renderCrumbs(["Home", category?.title || section.title])}
    ${renderBanner(section)}
    <h1>${selectedSubcategory?.title || category?.title || section.title}</h1>
    <p class="route-note">Search within this category, sort results, or filter by popular tags.</p>
    ${renderSubcategoryChips(filterRoute, subcategories, activeSub, { q: query, tag, sort })}
    ${renderFilterBar({
      route: filterRoute,
      query,
      tag,
      sort,
      hidden: activeSub ? { sub: activeSub } : {},
      tags: getTagsForProducts(section.products),
      includeSectionFilter: false,
    })}
    <p class="results-copy">${products.length} product${products.length === 1 ? "" : "s"} available</p>
    ${body}
  </section>`);
}

function renderSubcategory(item, route) {
  return `<a class="subcat-card" href="${buildHash(route, {})}">
    <img src="${item.image}" alt="${item.title}" />
    <strong>${item.title}</strong>
  </a>`;
}

function renderSubcategoryChips(route, subcategories, activeSlug, baseParams) {
  if (!subcategories.length) return "";
  return `<div class="subcategory-chips">
    <a class="${!activeSlug ? "active" : ""}" href="${buildHash(route, baseParams)}">All</a>
    ${subcategories
      .map((sub) => `<a class="${slug(sub.title) === activeSlug ? "active" : ""}" href="${buildHash(route, { ...baseParams, sub: slug(sub.title) })}">${sub.title}</a>`)
      .join("")}
  </div>`;
}

function productMatchesSubcategory(item, subcategory) {
  const text = `${item.name} ${item.desc}`.toLowerCase();
  return subcategory.keywords.some((keyword) => text.includes(keyword.toLowerCase()));
}

function getSectionForCategory(category) {
  return catalogSections.find((section) => section.title === category.section || slug(section.title) === slug(category.title));
}

function renderProductPage(productSlug) {
  const item = findProduct(productSlug);
  if (!item) {
    renderSearchPage(productSlug.replace(/-/g, " "), new URLSearchParams());
    return;
  }
  const related = allProducts()
    .filter((productItem) => productItem.section === item.section && productItem.id !== item.id)
    .slice(0, 4);
  const boughtTogether = allProducts().filter((productItem) => productItem.id !== item.id).slice(0, 5);

  showRoute(`<section class="route-page wrap">
    ${renderCrumbs(["Home", item.section, item.name])}
    <div class="product-detail">
      <div class="product-gallery">
        <img class="main-detail-image" src="${item.image}" alt="${item.name}" />
        <div class="thumb-row">
          ${[item.image, ...boughtTogether.slice(0, 2).map((productItem) => productItem.image)]
            .map((image) => `<button type="button" class="thumb-btn"><img src="${image}" alt="${item.name}" /></button>`)
            .join("")}
        </div>
      </div>
      <div class="detail-info">
        <div class="detail-title-row">
          <h1>${item.name}</h1>
          <button class="heart detail-heart" type="button">&#9825;</button>
        </div>
        <span class="tag detail-tag">${item.tag || "Meva"}</span>
        <p class="stock-line">&#9745; In Stock</p>
        <p class="detail-desc">Experience the difference with our high-quality ${item.desc.toLowerCase()} from Meva House.</p>
        <div class="bundle-box">
          <strong>Frequently bought together</strong>
          ${boughtTogether.map(renderBundleItem).join("")}
        </div>
        <label class="instructions">
          Instructions
          <textarea placeholder="Any special requests?"></textarea>
        </label>
        <div class="qty-row">
          <button type="button" data-qty="-1">-</button>
          <input id="detailQty" value="1" inputmode="numeric" />
          <button type="button" data-qty="1">+</button>
        </div>
        <button class="detail-add" id="detailAddButton" type="button" data-add="${item.id}" data-unit-price="${item.price}">
          <span id="detailAddPrice">${money(item.price)}</span>
          <span>Add To Cart</span>
        </button>
        <div class="service-boxes">
          <div><strong>Payment methods</strong><span>Cash on delivery, bank transfer, and Easypaisa/JazzCash.</span></div>
          <div><strong>Delivery info</strong><span>Free shipping over ${money(FREE_DELIVERY_LIMIT)} and 60-72 hour ETA.</span></div>
          <div><strong>Account save</strong><span>Save your details once and reuse them at checkout.</span></div>
        </div>
      </div>
    </div>
    <h2 class="product-heading">More in ${item.section}</h2>
    <div class="products-grid related-grid">${related.map(renderProduct).join("")}</div>
  </section>`);
}

function renderBundleItem(item) {
  return `<label class="bundle-item">
    <input type="checkbox" />
    <img src="${item.image}" alt="${item.name}" />
    <span>${item.name}</span>
    <small>${money(item.price)}</small>
  </label>`;
}

function renderSearchPage(query = "", params = new URLSearchParams()) {
  const cleanQuery = (query || params.get("q") || "").trim();
  const sectionFilter = params.get("section") || "";
  const tag = params.get("tag") || "";
  const sort = params.get("sort") || "featured";
  let results = allProducts();

  if (sectionFilter) {
    results = results.filter((item) => slug(item.section) === sectionFilter);
  }
  results = filterProducts(results, { query: cleanQuery, tag, sort });

  showRoute(`<section class="route-page wrap">
    ${renderCrumbs(["Home", "Search"])}
    <h1>${cleanQuery ? `Search: ${escapeHtml(cleanQuery)}` : "Search products"}</h1>
    <p class="route-note">Search the catalog and filter results by section, popular tag, or sorting.</p>
    ${renderFilterBar({
      route: "search",
      query: cleanQuery,
      section: sectionFilter,
      tag,
      sort,
      tags: getTagsForProducts(allProducts()),
      includeSectionFilter: true,
    })}
    <p class="results-copy">${results.length} result${results.length === 1 ? "" : "s"} found</p>
    <div class="products-grid listing-grid">${renderProductsOrEmpty(results, "No products found.")}</div>
  </section>`);
}

function renderCheckoutPage() {
  const snapshot = {
    ...getCheckoutSnapshot(),
    name: account.name,
    phone: account.phone,
    email: account.email,
    city: account.city || deliveryDetails.city,
    area: account.area || deliveryDetails.area,
    address: account.address || deliveryDetails.address,
    paymentMethod: deliveryDetails.paymentMethod || account.preferredPayment,
  };

  showRoute(`<section class="route-page wrap">
    ${renderCrumbs(["Home", "Checkout"])}
    <h1>Checkout</h1>
    <div class="checkout-layout">
      <form class="checkout-form" id="checkoutForm">
        <h2>Your details</h2>
        <div class="checkout-grid-two">
          <label>Full name<input id="customerName" type="text" placeholder="Your name" value="${escapeHtml(snapshot.name || "")}" /></label>
          <label>Phone number<input id="customerPhone" type="tel" placeholder="+92 343 8802989" value="${escapeHtml(snapshot.phone || "")}" /></label>
        </div>
        <label>Email<input id="customerEmail" type="email" placeholder="name@example.com" value="${escapeHtml(snapshot.email || "")}" /></label>
        <h3>Delivery information</h3>
        <div class="order-type-grid checkout-types">
          <label><input type="radio" name="checkoutOrderType" value="Delivery" ${deliveryDetails.orderType === "Delivery" ? "checked" : ""} /> Delivery</label>
          <label><input type="radio" name="checkoutOrderType" value="Pick-Up" ${deliveryDetails.orderType === "Pick-Up" ? "checked" : ""} /> Pick-Up</label>
        </div>
        <div class="checkout-grid-two">
          <label>City / Region<input id="checkoutCity" type="text" value="${escapeHtml(snapshot.city || deliveryDetails.city)}" /></label>
          <label>Area / Sub Region<input id="checkoutArea" type="text" value="${escapeHtml(snapshot.area || deliveryDetails.area)}" /></label>
        </div>
        <label>House / street / complete address<textarea id="customerAddress" placeholder="House, street, area">${escapeHtml(snapshot.address || "")}</textarea></label>
        <h3>Payment method</h3>
        <div class="payment-options">
          ${paymentMethods
            .map(
              (method) => `<label class="payment-option">
                <input type="radio" name="paymentMethod" value="${method.value}" ${(snapshot.paymentMethod || account.preferredPayment || DEFAULT_DELIVERY.paymentMethod) === method.value ? "checked" : ""} />
                <strong>${method.title}</strong>
                <span>${method.detail}</span>
              </label>`,
            )
            .join("")}
        </div>
        <div class="payment-note" id="paymentMethodHelp">
          <strong>${escapeHtml((paymentMethods.find((method) => method.value === snapshot.paymentMethod) || paymentMethods[0]).title)}</strong>
          <span>${escapeHtml((paymentMethods.find((method) => method.value === snapshot.paymentMethod) || paymentMethods[0]).detail)}</span>
        </div>
        <label>Order notes<textarea id="checkoutNotes" placeholder="Any special request?"></textarea></label>
        <p class="checkout-hint">Shipping is estimated from the entered city, area, address zone, and parcel size inside Pakistan.</p>
      </form>
      <aside class="order-summary">
        <h2>Order summary</h2>
        <div id="checkoutRows">${renderCheckoutRows()}</div>
        <div class="checkout-row"><span>Subtotal</span><strong id="checkoutSubtotal">${money(snapshot.subtotal)}</strong></div>
        <div class="checkout-row"><span>Delivery charges</span><strong id="checkoutDelivery">${money(snapshot.deliveryCharge)}</strong></div>
        <div class="checkout-total"><span>Total payable</span><strong id="checkoutGrandTotal">${money(snapshot.total)}</strong></div>
        <a class="checkout-btn ${cart.length ? "" : "is-disabled"}" id="placeOrderLink" href="${buildWhatsAppOrderLink()}">Place order on WhatsApp</a>
        <p id="deliveryLabel">${escapeHtml(snapshot.deliveryLabel)}</p>
        <p id="deliveryEta">${escapeHtml(snapshot.eta)}</p>
      </aside>
    </div>
  </section>`);
  updateCheckoutSummary();
}

function renderCheckoutRows() {
  if (!cart.length) {
    return `<p>Your cart is empty. Add products before placing an order.</p>`;
  }
  return cart
    .map(
      (item) => `<div class="checkout-row line-item">
        <span>${item.name} x ${item.qty}</span>
        <strong>${money(item.price * item.qty)}</strong>
      </div>`,
    )
    .join("");
}

function renderInfoPage(type) {
  const pages = {
    about: {
      title: "About Meva House",
      body: `<p>Meva House is built for premium dry fruits, nuts, kernels, oils, honey, shilajit, and traditional kalaw from Gilgit-Baltistan. We focus on fresh packing, honest weight, clean taste, and delivery across Pakistan.</p>
      <p>Our catalog includes walnuts, almonds, dried apricot, apricot kernels, chilgoza, dried figs, raisins, pistachio, cashew, dried fruits, natural oils, honey, shilajit, and kalaw gift packs.</p>`,
    },
    contact: {
      title: "Contact Meva House",
      body: `<p>For orders, delivery updates, bulk gifts, or product questions, contact us directly.</p>
      <div class="info-links">
        <a href="tel:+923438802989">Call: +92 343 8802989</a>
        <a href="https://wa.me/923438802989">WhatsApp: +92 343 8802989</a>
        <a href="mailto:mevahousegb@gmail.com">Email: mevahousegb@gmail.com</a>
        <a href="#account">Account and saved details</a>
      </div>`,
    },
    delivery: {
      title: "Delivery Information",
      body: `<p>Meva House delivers across Pakistan. Standard delivery usually takes 60-72 hours after your order is confirmed.</p>
      <p>Orders above ${money(FREE_DELIVERY_LIMIT)} qualify for free delivery. Smaller orders use a delivery charge based on city and order type. Pick-up orders carry no delivery charge.</p>
      <p>Delivery and payment preferences can be saved in your account so checkout becomes faster on repeat orders.</p>`,
    },
    terms: {
      title: "Terms and Conditions",
      body: `<p>By placing an order with Meva House, you agree to provide correct contact, address, and product details so your order can be confirmed and delivered.</p>
      <p>Product prices and availability can change with season, quality grade, and stock. Orders are confirmed on WhatsApp before dispatch.</p>
      <p>Delivery timelines are estimates. Across Pakistan delivery usually takes 60-72 hours after confirmation.</p>`,
    },
    privacy: {
      title: "Privacy Policy",
      body: `<p>Meva House only uses customer information for account saving, order confirmation, delivery, support, and service updates.</p>
      <p>Your name, phone number, email, address, and order notes are used to process your order. We do not sell customer information.</p>
      <p>Messages sent through WhatsApp, email, or phone are handled only for Meva House customer support and order service.</p>`,
    },
  };
  const page = pages[type] || pages.about;
  showRoute(`<section class="route-page wrap info-page">
    ${renderCrumbs(["Home", page.title])}
    <h1>${page.title}</h1>
    <div class="info-card">${page.body}</div>
  </section>`);
}

function renderAccountPage() {
  if (!account.loggedIn) {
    showRoute(`<section class="route-page wrap">
      ${renderCrumbs(["Home", "Account"])}
      <h1>Create or sign in</h1>
      <p class="route-note">This static storefront saves your account only in the current browser, so repeat customers can reuse checkout details quickly.</p>
      <div class="account-layout">
        <form class="account-card" id="accountSignupForm">
          <h2>Create account</h2>
          <label>Full name<input name="name" type="text" placeholder="Your full name" required /></label>
          <label>Phone<input name="phone" type="tel" placeholder="+92 343 8802989" required /></label>
          <label>Email<input name="email" type="email" placeholder="name@example.com" required /></label>
          <label>Password<input name="password" type="password" placeholder="Create a password" required /></label>
          <div class="checkout-grid-two">
            <label>City<input name="city" type="text" value="${escapeHtml(deliveryDetails.city)}" /></label>
            <label>Area<input name="area" type="text" value="${escapeHtml(deliveryDetails.area)}" /></label>
          </div>
          <label>Address<textarea name="address" placeholder="House, street, area"></textarea></label>
          <label>Preferred payment method
            <select name="preferredPayment">
              ${paymentMethods.map((method) => `<option value="${method.value}">${method.title}</option>`).join("")}
            </select>
          </label>
          <button class="checkout-btn" type="submit">Create account</button>
        </form>
        <form class="account-card" id="accountLoginForm">
          <h2>Sign in</h2>
          <label>Phone or email<input name="identity" type="text" placeholder="+92 343 8802989 or name@example.com" required /></label>
          <label>Password<input name="password" type="password" placeholder="Enter your password" required /></label>
          <button class="checkout-btn" type="submit">Sign in</button>
          <p>Use the details saved in this browser. After sign in, your checkout form fills automatically.</p>
        </form>
      </div>
    </section>`);
    return;
  }

  showRoute(`<section class="route-page wrap">
    ${renderCrumbs(["Home", "My account"])}
    <h1>My account</h1>
    <div class="account-layout">
      <form class="account-card" id="accountProfileForm">
        <h2>Saved profile</h2>
        <label>Full name<input name="name" type="text" value="${escapeHtml(account.name)}" required /></label>
        <div class="checkout-grid-two">
          <label>Phone<input name="phone" type="tel" value="${escapeHtml(account.phone)}" required /></label>
          <label>Email<input name="email" type="email" value="${escapeHtml(account.email)}" required /></label>
        </div>
        <div class="checkout-grid-two">
          <label>City<input name="city" type="text" value="${escapeHtml(account.city)}" /></label>
          <label>Area<input name="area" type="text" value="${escapeHtml(account.area)}" /></label>
        </div>
        <label>Address<textarea name="address">${escapeHtml(account.address)}</textarea></label>
        <label>Preferred payment method
          <select name="preferredPayment">
            ${paymentMethods
              .map((method) => `<option value="${method.value}" ${account.preferredPayment === method.value ? "selected" : ""}>${method.title}</option>`)
              .join("")}
          </select>
        </label>
        <button class="checkout-btn" type="submit">Save changes</button>
      </form>
      <aside class="account-card account-summary-card">
        <h2>Account summary</h2>
        <div class="account-metrics">
          <div><strong>${cart.reduce((sum, item) => sum + item.qty, 0)}</strong><span>Items in cart</span></div>
          <div><strong>${money(getCartSubtotal())}</strong><span>Current subtotal</span></div>
        </div>
        <div class="account-info-list">
          <div><strong>Saved city</strong><span>${escapeHtml(account.city || "Across Pakistan")}</span></div>
          <div><strong>Saved area</strong><span>${escapeHtml(account.area || "Gilgit-Baltistan")}</span></div>
          <div><strong>Preferred payment</strong><span>${escapeHtml(account.preferredPayment)}</span></div>
        </div>
        <a class="checkout-btn" href="#checkout">Continue to checkout</a>
        <button class="secondary-btn" id="accountLogoutButton" type="button">Sign out</button>
      </aside>
    </div>
  </section>`);
}

function renderBlogPage() {
  showRoute(`<section class="route-page wrap">
    ${renderCrumbs(["Home", "Blog"])}
    <h1>Blog</h1>
    <p class="route-note">Short buying guides, storage tips, and product education for dry fruits, honey, shilajit, and gifting.</p>
    <div class="blog-grid blog-grid-route">
      ${blogPosts.map((post) => renderBlogCard(post)).join("")}
    </div>
  </section>`);
}

function renderBlogPostPage(postSlug) {
  const post = findBlogPost(postSlug);
  if (!post) {
    renderBlogPage();
    return;
  }
  showRoute(`<section class="route-page wrap">
    ${renderCrumbs(["Home", "Blog", post.title])}
    <article class="blog-post">
      <img class="blog-hero" src="${post.image}" alt="${post.title}" />
      <div class="blog-post-copy">
        <span class="blog-meta">${post.date} / ${post.tag}</span>
        <h1>${post.title}</h1>
        ${post.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    </article>
    <div class="section-head-inline">
      <h2>More from the blog</h2>
      <a href="#blog">Back to blog</a>
    </div>
    <div class="blog-grid blog-grid-route">
      ${blogPosts.filter((entry) => entry.id !== post.id).map((entry) => renderBlogCard(entry)).join("")}
    </div>
  </section>`);
}

function renderCrumbs(items) {
  return `<nav class="breadcrumbs">${items.map((item, index) => (index ? `<span>${item}</span>` : `<a href="#home">${item}</a>`)).join(" / ")}</nav>`;
}

function renderProductsOrEmpty(products, emptyMessage) {
  return products.map(renderProduct).join("") || `<p>${emptyMessage}</p>`;
}

function getTagsForProducts(products) {
  return [...new Set(products.map((item) => item.tag).filter(Boolean))];
}

function renderFilterBar({ route, query = "", section = "", tag = "", sort = "featured", hidden = {}, tags = [], includeSectionFilter = false }) {
  return `<form class="filter-bar" data-filter-form="${route}">
    ${Object.entries(hidden).map(([key, value]) => `<input type="hidden" name="${key}" value="${escapeHtml(value)}" />`).join("")}
    <div class="filter-field filter-field-search">
      <label for="filterQuery">Search</label>
      <input id="filterQuery" name="q" value="${escapeHtml(query)}" placeholder="Search dry fruits, honey, shilajit..." />
    </div>
    ${includeSectionFilter ? `<div class="filter-field">
      <label for="filterSection">Section</label>
      <select id="filterSection" name="section">
        <option value="">All sections</option>
        ${catalogSections.map((entry) => `<option value="${slug(entry.title)}" ${section === slug(entry.title) ? "selected" : ""}>${entry.title}</option>`).join("")}
      </select>
    </div>` : ""}
    <div class="filter-field">
      <label for="filterTag">Tag</label>
      <select id="filterTag" name="tag">
        <option value="">All tags</option>
        ${tags.map((entry) => `<option value="${slug(entry)}" ${tag === slug(entry) ? "selected" : ""}>${entry}</option>`).join("")}
      </select>
    </div>
    <div class="filter-field">
      <label for="filterSort">Sort</label>
      <select id="filterSort" name="sort">
        <option value="featured" ${sort === "featured" ? "selected" : ""}>Featured</option>
        <option value="price-low" ${sort === "price-low" ? "selected" : ""}>Price: Low to High</option>
        <option value="price-high" ${sort === "price-high" ? "selected" : ""}>Price: High to Low</option>
        <option value="name" ${sort === "name" ? "selected" : ""}>Name A-Z</option>
      </select>
    </div>
    <button type="submit">Apply</button>
  </form>`;
}

function filterProducts(products, { query = "", tag = "", sort = "featured" }) {
  let filtered = products.slice();
  if (query.trim()) {
    const cleanQuery = query.trim().toLowerCase();
    filtered = filtered.filter((item) => {
      const text = `${item.name} ${item.desc} ${item.tag || ""} ${item.section || ""}`.toLowerCase();
      return text.includes(cleanQuery);
    });
  }
  if (tag) {
    filtered = filtered.filter((item) => slug(item.tag || "") === tag);
  }
  return sortProducts(filtered, sort);
}

function sortProducts(products, sort) {
  const sorted = products.slice();
  if (sort === "price-low") {
    return sorted.sort((a, b) => numericPrice(a.price) - numericPrice(b.price));
  }
  if (sort === "price-high") {
    return sorted.sort((a, b) => numericPrice(b.price) - numericPrice(a.price));
  }
  if (sort === "name") {
    return sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
  return sorted;
}

function buildHash(route, values) {
  const params = new URLSearchParams();
  Object.entries(values || {}).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });
  const suffix = params.toString();
  return `#${route}${suffix ? `?${suffix}` : ""}`;
}

function openDrawer(id) {
  document.getElementById("drawerBackdrop").hidden = false;
  document.getElementById(id).hidden = false;
}

function closeDrawers() {
  document.getElementById("drawerBackdrop").hidden = true;
  document.querySelectorAll(".app-drawer").forEach((drawer) => {
    drawer.hidden = true;
  });
}

function addToCart(productId, qty = 1) {
  const item = findProduct(productId);
  if (!item) return;
  const existing = cart.find((cartItem) => cartItem.id === productId);
  if (existing) existing.qty += qty;
  else cart.push({ ...item, qty });
  persistCart();
  updateCart();
  updateCheckoutSummary();
  showToast(`${item.name} added to cart`);
}

function updateCartQuantity(productId, delta) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  persistCart();
  updateCart();
  updateCheckoutSummary();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  persistCart();
  updateCart();
  updateCheckoutSummary();
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").textContent = String(count);
  document.getElementById("cartItems").innerHTML =
    cart
      .map(
        (item) => `<div class="cart-line">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <strong>${item.name}</strong>
            <span>${money(item.price)} each</span>
            <div class="cart-qty-controls">
              <button type="button" data-cart-qty="-1" data-id="${item.id}" aria-label="Decrease quantity">-</button>
              <b>${item.qty}</b>
              <button type="button" data-cart-qty="1" data-id="${item.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button type="button" data-remove="${item.id}" aria-label="Remove ${item.name}">&times;</button>
        </div>`,
      )
      .join("") || `<p class="empty-cart">Your cart is empty.</p>`;
  document.getElementById("cartTotal").textContent = money(getCartSubtotal());
  document.getElementById("checkoutLink").href = "#checkout";
}

function updateCheckoutSummary() {
  const rows = document.getElementById("checkoutRows");
  if (rows) rows.innerHTML = renderCheckoutRows();

  const snapshot = getCheckoutSnapshot();
  const subtotal = document.getElementById("checkoutSubtotal");
  const delivery = document.getElementById("checkoutDelivery");
  const total = document.getElementById("checkoutGrandTotal");
  const eta = document.getElementById("deliveryEta");
  const deliveryLabel = document.getElementById("deliveryLabel");
  const link = document.getElementById("placeOrderLink");
  const paymentHelp = document.getElementById("paymentMethodHelp");

  if (subtotal) subtotal.textContent = money(snapshot.subtotal);
  if (delivery) delivery.textContent = money(snapshot.deliveryCharge);
  if (total) total.textContent = money(snapshot.total);
  if (deliveryLabel) deliveryLabel.textContent = snapshot.deliveryLabel;
  if (eta) eta.textContent = snapshot.eta;
  if (link) {
    link.href = cart.length ? buildWhatsAppOrderLink() : "#search";
    link.classList.toggle("is-disabled", !cart.length);
  }
  if (paymentHelp) {
    const method = paymentMethods.find((entry) => entry.value === snapshot.paymentMethod) || paymentMethods[0];
    paymentHelp.innerHTML = `<strong>${method.title}</strong><span>${method.detail}</span>`;
  }

  deliveryDetails = {
    orderType: snapshot.orderType,
    city: snapshot.city || deliveryDetails.city,
    area: snapshot.area || deliveryDetails.area,
    address: snapshot.address || deliveryDetails.address,
    paymentMethod: snapshot.paymentMethod,
  };
  persistDelivery();
  syncAccountUI();
}

function updateDetailPrice() {
  const qtyInput = document.getElementById("detailQty");
  const addButton = document.getElementById("detailAddButton");
  const priceNode = document.getElementById("detailAddPrice");
  if (!qtyInput || !addButton || !priceNode) return;

  const quantity = Math.max(1, Number(qtyInput.value || 1));
  qtyInput.value = String(quantity);
  const unitPrice = Number(addButton.dataset.unitPrice || 0);
  priceNode.textContent = money(unitPrice * quantity);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.hidden = true;
  }, 1800);
}

function applyFilterForm(form) {
  const route = form.dataset.filterForm;
  const values = {};
  new FormData(form).forEach((value, key) => {
    const cleanValue = String(value).trim();
    if (cleanValue && cleanValue !== "featured") {
      values[key] = cleanValue;
    }
  });
  window.location.hash = buildHash(route, values).slice(1);
}

function handleAccountSignup(form) {
  const formData = new FormData(form);
  account = {
    loggedIn: true,
    name: String(formData.get("name") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    password: String(formData.get("password") || "").trim(),
    city: String(formData.get("city") || "").trim() || deliveryDetails.city,
    area: String(formData.get("area") || "").trim() || deliveryDetails.area,
    address: String(formData.get("address") || "").trim(),
    preferredPayment: String(formData.get("preferredPayment") || DEFAULT_ACCOUNT.preferredPayment),
  };
  deliveryDetails = {
    ...deliveryDetails,
    city: account.city,
    area: account.area,
    address: account.address,
    paymentMethod: account.preferredPayment,
  };
  persistAccount();
  persistDelivery();
  syncAccountUI();
  showToast("Account created");
  renderAccountPage();
}

function handleAccountLogin(form) {
  const formData = new FormData(form);
  const identity = String(formData.get("identity") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "").trim();
  if (!account.email && !account.phone) {
    showToast("Create an account first");
    return;
  }
  const matchesIdentity = [account.email.toLowerCase(), account.phone.toLowerCase()].includes(identity);
  if (!matchesIdentity || account.password !== password) {
    showToast("Details do not match the saved account");
    return;
  }
  account.loggedIn = true;
  persistAccount();
  syncAccountUI();
  showToast("Signed in");
  renderAccountPage();
}

function handleAccountSave(form) {
  const formData = new FormData(form);
  account = {
    ...account,
    loggedIn: true,
    name: String(formData.get("name") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    city: String(formData.get("city") || "").trim(),
    area: String(formData.get("area") || "").trim(),
    address: String(formData.get("address") || "").trim(),
    preferredPayment: String(formData.get("preferredPayment") || account.preferredPayment),
  };
  deliveryDetails = {
    ...deliveryDetails,
    city: account.city || deliveryDetails.city,
    area: account.area || deliveryDetails.area,
    address: account.address || deliveryDetails.address,
    paymentMethod: account.preferredPayment,
  };
  persistAccount();
  persistDelivery();
  syncAccountUI();
  showToast("Account updated");
  renderAccountPage();
}

function handleHash() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash || hash === "home") {
    showHome();
    return;
  }
  if (hash === "cart") {
    openDrawer("cartDrawer");
    return;
  }
  if (hash === "checkout") {
    renderCheckoutPage();
    return;
  }
  if (hash === "account") {
    renderAccountPage();
    return;
  }
  if (hash === "blog") {
    renderBlogPage();
    return;
  }
  if (hash.startsWith("blog/")) {
    renderBlogPostPage(hash.split("/")[1]);
    return;
  }
  if (["about", "contact", "terms", "privacy", "delivery"].includes(hash)) {
    renderInfoPage(hash);
    return;
  }
  if (hash === "search") {
    renderSearchPage("", new URLSearchParams());
    return;
  }
  if (hash.startsWith("search")) {
    const params = new URLSearchParams(hash.split("?")[1] || "");
    renderSearchPage(params.get("q") || "", params);
    return;
  }
  if (hash.startsWith("category/")) {
    renderCategoryPage(hash.slice("category/".length));
    return;
  }
  if (hash.startsWith("product/")) {
    renderProductPage(hash.split("/")[1]);
    return;
  }
  showHome();
}

function bindInteractions() {
  document.querySelector(".hero-next").addEventListener("click", () => {
    moveHero(1, true);
  });
  document.querySelector(".hero-prev").addEventListener("click", () => {
    moveHero(-1, true);
  });

  const heroCarousel = document.getElementById("heroCarousel");
  heroCarousel.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-slide]");
    if (dot) {
      setHeroIndex(Number(dot.dataset.slide), true);
      return;
    }

    const card = event.target.closest(".hero-slide-card");
    if (card?.classList.contains("is-prev")) moveHero(-1, true);
    if (card?.classList.contains("is-next")) moveHero(1, true);
  });
  heroCarousel.addEventListener("mouseenter", () => clearInterval(heroTimer));
  heroCarousel.addEventListener("mouseleave", startHeroAutoplay);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearInterval(heroTimer);
    else startHeroAutoplay();
  });

  document.querySelector(".category-toggle").addEventListener("click", () => openDrawer("categoryDrawer"));
  document.querySelector(".cart-btn").addEventListener("click", () => openDrawer("cartDrawer"));
  document.querySelector(".login-btn").addEventListener("click", () => {
    window.location.hash = "account";
  });
  document.querySelector(".floating-call").addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash && window.location.hash !== "#home") {
      history.replaceState(null, "", "#home");
    }
  });
  document.getElementById("locationButton").addEventListener("click", () => {
    document.getElementById("locationDialog").showModal();
  });
  document.getElementById("drawerBackdrop").addEventListener("click", closeDrawers);

  document.getElementById("locationForm").addEventListener("submit", (event) => {
    event.preventDefault();
    deliveryDetails = {
      ...deliveryDetails,
      orderType: document.querySelector("input[name='orderType']:checked")?.value || "Delivery",
      city: document.getElementById("locationCity").value.trim() || "Across Pakistan",
      area: document.getElementById("locationArea").value.trim() || "Gilgit-Baltistan",
    };
    persistDelivery();
    syncAccountUI();
    document.getElementById("locationDialog").close();
    showToast(`${deliveryDetails.orderType} details saved`);
  });

  document.getElementById("searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = document.getElementById("searchInput").value.trim();
    window.location.hash = buildHash("search", { q: query }).slice(1);
  });

  document.addEventListener("submit", (event) => {
    const filterForm = event.target.closest("[data-filter-form]");
    if (filterForm) {
      event.preventDefault();
      applyFilterForm(filterForm);
      return;
    }

    if (event.target.id === "accountSignupForm") {
      event.preventDefault();
      handleAccountSignup(event.target);
      return;
    }

    if (event.target.id === "accountLoginForm") {
      event.preventDefault();
      handleAccountLogin(event.target);
      return;
    }

    if (event.target.id === "accountProfileForm") {
      event.preventDefault();
      handleAccountSave(event.target);
    }
  });

  document.addEventListener("click", (event) => {
    const close = event.target.closest("[data-close-drawer]");
    if (close) closeDrawers();

    const addButton = event.target.closest("[data-add]");
    if (addButton) {
      event.preventDefault();
      const qtyInput = document.getElementById("detailQty");
      const qty = Math.max(1, Number(qtyInput?.value || 1));
      addToCart(addButton.dataset.add, qty);
    }

    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) {
      removeFromCart(removeButton.dataset.remove);
    }

    const qtyButton = event.target.closest("[data-cart-qty]");
    if (qtyButton) {
      updateCartQuantity(qtyButton.dataset.id, Number(qtyButton.dataset.cartQty));
    }

    const heart = event.target.closest(".heart");
    if (heart) {
      event.preventDefault();
      const active = heart.dataset.active === "true";
      heart.dataset.active = String(!active);
      heart.innerHTML = active ? "&#9825;" : "&#9829;";
    }

    const thumb = event.target.closest(".thumb-btn");
    if (thumb) {
      const image = thumb.querySelector("img").src;
      document.querySelector(".main-detail-image").src = image;
    }

    const detailQtyButton = event.target.closest("[data-qty]");
    if (detailQtyButton) {
      const input = document.getElementById("detailQty");
      input.value = Math.max(1, Number(input.value || 1) + Number(detailQtyButton.dataset.qty));
      updateDetailPrice();
    }

    if (event.target.id === "accountLogoutButton") {
      account.loggedIn = false;
      persistAccount();
      syncAccountUI();
      showToast("Signed out");
      renderAccountPage();
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.closest("#checkoutForm")) {
      updateCheckoutSummary();
    }
    const filterForm = event.target.closest("[data-filter-form]");
    if (filterForm && event.target.tagName === "SELECT") {
      applyFilterForm(filterForm);
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.id === "detailQty") {
      updateDetailPrice();
    }
    if (event.target.closest("#checkoutForm")) {
      updateCheckoutSummary();
    }
  });

  window.addEventListener("hashchange", handleHash);
  startHeroAutoplay();
}

function slug(text) {
  return text.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

renderCategories();
renderSections();
renderBlogPreview();
renderHero();
updateCart();
syncAccountUI();
bindInteractions();
handleHash();
