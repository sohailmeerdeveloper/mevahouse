const asset = (name) => `assets/photos/${name}`;

const heroSlides = [
  {
    eyebrow: "Gift-ready dry fruits",
    title: "MEVA GIFT<br />BASKETS",
    cta: "Packed for sharing",
    image: asset("mixed-nuts.jpg"),
  },
  {
    eyebrow: "Premium GB Taste",
    title: "FREE SHIPPING<br />+ PURE MEVA",
    cta: "All across Pakistan",
    image: asset("dry-fruits-market.jpg"),
  },
  {
    eyebrow: "Dried apricots",
    title: "DRIED APRICOTS<br />& KERNELS",
    cta: "Northern orchard taste",
    image: asset("dried-apricots.jpg"),
  },
  {
    eyebrow: "Fresh Northern Nuts",
    title: "WALNUTS<br />ALMONDS & KAJU",
    cta: "Packed fresh daily",
    image: asset("almonds.jpg"),
  },
  {
    eyebrow: "Natural Oils",
    title: "PURE KERNEL<br />OILS",
    cta: "Apricot, almond, walnut",
    image: asset("almond-oil.jpg"),
  },
  {
    eyebrow: "Walnut chocolate",
    title: "DESI KALAW<br />SWEET BITES",
    cta: "Traditional northern taste",
    image: asset("walnut-chocolate.jpg"),
  },
];

const categories = [
  { title: "Dry Fruits", section: "DRY FRUITS", image: asset("mixed-nuts.jpg") },
  { title: "Nuts & Kernels", section: "NUTS & KERNELS", image: asset("almonds.jpg") },
  { title: "Dried Apricots", section: "DRIED FRESH FRUITS", image: asset("dried-apricots.jpg") },
  { title: "Premium Figs", section: "DRY FRUITS", image: asset("dried-figs.jpg") },
  { title: "Natural Oils", section: "NATURAL OILS", image: asset("almond-oil.jpg") },
  { title: "Gift Hampers", section: "MEVA GIFTING", image: asset("dry-fruits-market.jpg"), group: true },
  { title: "Local Cherries", section: "DRIED FRESH FRUITS", image: asset("dried-cherries.jpg") },
  { title: "Walnut Chocolate", section: "WALNUT CHOCOLATE", image: asset("walnut-chocolate.jpg") },
];

const subcategoriesBySection = {
  "DRY FRUITS": [
    { title: "Walnuts", keywords: ["walnut", "akhrot"] },
    { title: "Almonds", keywords: ["almond", "badaam"] },
    { title: "Raisins", keywords: ["raisin", "kishmish", "grape"] },
    { title: "Figs", keywords: ["fig", "anjeer"] },
    { title: "Mulberry", keywords: ["mulberry", "shahtoot"] },
    { title: "Plums", keywords: ["plum", "bukhara"] },
  ],
  "NUTS & KERNELS": [
    { title: "Walnuts", keywords: ["walnut"] },
    { title: "Almonds", keywords: ["almond"] },
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
      product("Dry Grapes", "Traditional dry grapes", "raisins.jpg", "Call for price", "", "", "Seasonal"),
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
      product("Peanuts", "Roasted mung phali", "peanuts.jpg", "Call for price", "", "", "Local"),
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
let cart = [];
let deliveryDetails = {
  orderType: "Delivery",
  city: "Across Pakistan",
  area: "Gilgit-Baltistan",
};

const allProducts = () =>
  catalogSections.flatMap((section) => section.products.map((item) => ({ ...item, section: section.title })));

function product(name, desc, image, price, oldPrice, discount, tag) {
  return { id: slug(name), name, desc, image: asset(image), price, oldPrice, discount, tag };
}

function money(value) {
  return typeof value === "number" ? `Rs. ${value.toLocaleString("en-PK")}.00` : value;
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
      ${subs.slice(0, 5).map((sub) => `<a href="#category/${slug(category.title)}?sub=${slug(sub.title)}">${sub.title}</a>`).join("")}
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

function moveHero(direction) {
  heroIndex = (heroIndex + direction + heroSlides.length) % heroSlides.length;
  updateHero();
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

function showHome() {
  document.getElementById("homeView").hidden = false;
  document.getElementById("routeView").hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showRoute(html) {
  document.getElementById("homeView").hidden = true;
  const route = document.getElementById("routeView");
  route.hidden = false;
  route.innerHTML = html;
  closeDrawers();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCategoryPage(categorySlug) {
  const [cleanSlug, queryString = ""] = categorySlug.split("?");
  const filterSlug = new URLSearchParams(queryString).get("sub");
  const category = categories.find((item) => slug(item.title) === cleanSlug);
  const section = catalogSections.find((item) => slug(item.title) === cleanSlug || item.title === category?.section);
  if (!section) {
    renderSearchPage("");
    return;
  }

  const subcategories = subcategoriesBySection[section.title] || [];
  const selectedSubcategory = subcategories.find((sub) => slug(sub.title) === filterSlug);
  const products = selectedSubcategory
    ? section.products.filter((item) => productMatchesSubcategory(item, selectedSubcategory))
    : section.products;
  const body = section.groups && !selectedSubcategory
    ? `<div class="subcat-grid">${section.groups.map(renderSubcategory).join("")}</div>
       <div class="products-grid listing-grid">${products.map(renderProduct).join("")}</div>`
    : `<div class="products-grid listing-grid">${products.map(renderProduct).join("") || `<p>No products found in this subcategory.</p>`}</div>`;

  showRoute(`<section class="route-page wrap">
    ${renderCrumbs(["Home", category?.title || section.title])}
    ${renderBanner(section)}
    <h1>${selectedSubcategory?.title || category?.title || section.title}</h1>
    ${renderSubcategoryChips(category || { title: section.title }, subcategories, filterSlug)}
    ${body}
  </section>`);
}

function renderSubcategory(item) {
  return `<a class="subcat-card" href="#category/meva-gifting">
    <img src="${item.image}" alt="${item.title}" />
    <strong>${item.title}</strong>
  </a>`;
}

function renderSubcategoryChips(category, subcategories, activeSlug) {
  if (!subcategories.length) return "";
  return `<div class="subcategory-chips">
    <a class="${!activeSlug ? "active" : ""}" href="#category/${slug(category.title)}">All</a>
    ${subcategories.map((sub) => `<a class="${slug(sub.title) === activeSlug ? "active" : ""}" href="#category/${slug(category.title)}?sub=${slug(sub.title)}">${sub.title}</a>`).join("")}
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
    renderSearchPage(productSlug.replace(/-/g, " "));
    return;
  }
  const related = allProducts().filter((productItem) => productItem.section === item.section && productItem.id !== item.id).slice(0, 4);
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
        <button class="detail-add" type="button" data-add="${item.id}">${money(item.price)} &nbsp;&nbsp; Add To Cart</button>
        <div class="service-boxes">
          <div><strong>Cash and Online payments</strong><span>Pay COD or online, hassle-free.</span></div>
          <div><strong>Delivery ETA</strong><span>Delivery ETA is 60-72 hours.</span></div>
          <div><strong>Customer Support</strong><span>Connect with us 24/7.</span></div>
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

function renderSearchPage(query) {
  const cleanQuery = query.trim().toLowerCase();
  const results = allProducts().filter((item) => {
    const text = `${item.name} ${item.desc} ${item.section}`.toLowerCase();
    return !cleanQuery || text.includes(cleanQuery);
  });
  showRoute(`<section class="route-page wrap">
    ${renderCrumbs(["Home", "Search"])}
    <h1>${cleanQuery ? `Search: ${escapeHtml(query)}` : "Search products"}</h1>
    <div class="route-search">
      <input id="routeSearchInput" value="${escapeHtml(query)}" placeholder="Search dry fruits, nuts, oils..." />
      <button id="routeSearchButton" type="button">Search</button>
    </div>
    <div class="products-grid listing-grid">${results.map(renderProduct).join("") || `<p>No products found.</p>`}</div>
  </section>`);
}

function renderCheckoutPage() {
  const cartRows = cart
    .map((item) => `<div class="checkout-row">
      <span>${item.name} x ${item.qty}</span>
      <strong>${typeof item.price === "number" ? money(item.price * item.qty) : item.price}</strong>
    </div>`)
    .join("") || `<p>Your cart is empty. Add products before placing an order.</p>`;
  showRoute(`<section class="route-page wrap">
    ${renderCrumbs(["Home", "Checkout"])}
    <h1>Checkout</h1>
    <div class="checkout-layout">
      <form class="checkout-form" id="checkoutForm">
        <h2>Customer details</h2>
        <label>Name<input id="customerName" type="text" placeholder="Your name" /></label>
        <label>Phone<input id="customerPhone" type="tel" placeholder="+92 343 8802989" /></label>
        <label>City / Region<input id="checkoutCity" type="text" value="${escapeHtml(deliveryDetails.city)}" /></label>
        <label>Area / Address<textarea id="customerAddress" placeholder="House, street, area">${escapeHtml(deliveryDetails.area)}</textarea></label>
        <label>Order notes<textarea id="checkoutNotes" placeholder="Any special request?"></textarea></label>
        <div class="order-type-grid checkout-types">
          <label><input type="radio" name="checkoutOrderType" value="Delivery" ${deliveryDetails.orderType === "Delivery" ? "checked" : ""} /> Delivery</label>
          <label><input type="radio" name="checkoutOrderType" value="Pick-Up" ${deliveryDetails.orderType === "Pick-Up" ? "checked" : ""} /> Pick-Up</label>
        </div>
        <div class="payment-note">
          <strong>Cash and online payments</strong>
          <span>Cash on delivery is available. Online payment details can be shared on WhatsApp.</span>
        </div>
      </form>
      <aside class="order-summary">
        <h2>Order summary</h2>
        ${cartRows}
        <div class="checkout-total"><span>Total</span><strong>${money(getCartTotal())}</strong></div>
        <a class="checkout-btn" id="placeOrderLink" href="${buildWhatsAppOrderLink()}">Place order on WhatsApp</a>
        <p>Delivery across Pakistan usually takes 60-72 hours after confirmation.</p>
      </aside>
    </div>
  </section>`);
  updatePlaceOrderLink();
}

function renderInfoPage(type) {
  const pages = {
    about: {
      title: "About Meva House",
      body: `<p>Meva House is built for premium dry fruits, nuts, kernels, oils, and traditional walnut chocolate from Gilgit-Baltistan. We focus on fresh packing, honest weight, clean taste, and delivery across Pakistan.</p>
      <p>Our catalog includes walnuts, almonds, dried apricot, apricot kernels, chilgoza, dried figs, raisins, pistachio, cashew, dried fruits, natural oils, and Kalaw.</p>`,
    },
    contact: {
      title: "Contact Meva House",
      body: `<p>For orders, delivery updates, bulk gifts, or product questions, contact us directly.</p>
      <div class="info-links">
        <a href="tel:+923438802989">Call: +92 343 8802989</a>
        <a href="https://wa.me/923438802989">WhatsApp: +92 343 8802989</a>
        <a href="mailto:mevahousegb@gmail.com">Email: mevahousegb@gmail.com</a>
        <a href="https://mevahouse.com">Website: mevahouse.com</a>
      </div>`,
    },
    terms: {
      title: "Terms and Conditions",
      body: `<p>By placing an order with Meva House, you agree to provide correct contact, address, and product details so your order can be confirmed and delivered.</p>
      <p>Product prices and availability can change with season, quality grade, and stock. Orders are confirmed on WhatsApp before dispatch.</p>
      <p>Delivery timelines are estimates. Across Pakistan delivery usually takes 60-72 hours after confirmation.</p>`,
    },
    privacy: {
      title: "Privacy Policy",
      body: `<p>Meva House only uses customer information for order confirmation, delivery, support, and service updates.</p>
      <p>Your name, phone number, address, and order notes are used to process your order. We do not sell customer information.</p>
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

function renderCrumbs(items) {
  return `<nav class="breadcrumbs">${items.map((item, index) => (index ? `<span>${item}</span>` : `<a href="#home">${item}</a>`)).join(" / ")}</nav>`;
}

function findProduct(productSlug) {
  return allProducts().find((item) => item.id === productSlug);
}

function addToCart(productId, qty = 1) {
  const item = findProduct(productId);
  if (!item) return;
  const existing = cart.find((cartItem) => cartItem.id === productId);
  if (existing) existing.qty += qty;
  else cart.push({ ...item, qty });
  updateCart();
  showToast(`${item.name} added to cart`);
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").textContent = String(count);
  document.getElementById("cartItems").innerHTML =
    cart
      .map(
        (item) => `<div class="cart-line">
          <img src="${item.image}" alt="${item.name}" />
          <div><strong>${item.name}</strong><span>${money(item.price)} x ${item.qty}</span></div>
          <button type="button" data-remove="${item.id}">&times;</button>
        </div>`,
      )
      .join("") || `<p class="empty-cart">Your cart is empty.</p>`;
  const total = cart.reduce((sum, item) => sum + (typeof item.price === "number" ? item.price * item.qty : 0), 0);
  document.getElementById("cartTotal").textContent = money(total);
  document.getElementById("checkoutLink").href = "#checkout";
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (typeof item.price === "number" ? item.price * item.qty : 0), 0);
}

function buildWhatsAppOrderLink() {
  const order = cart.map((item) => `${item.name} x ${item.qty}`).join(", ");
  const name = document.getElementById("customerName")?.value.trim();
  const phone = document.getElementById("customerPhone")?.value.trim();
  const city = document.getElementById("checkoutCity")?.value.trim() || deliveryDetails.city;
  const address = document.getElementById("customerAddress")?.value.trim() || deliveryDetails.area;
  const notes = document.getElementById("checkoutNotes")?.value.trim();
  const orderType = document.querySelector("input[name='checkoutOrderType']:checked")?.value || deliveryDetails.orderType;
  const message = [
    "Assalam o Alaikum, I want to order from Meva House.",
    `Order: ${order || "Please share product details"}`,
    `Total: ${money(getCartTotal())}`,
    `Order type: ${orderType}`,
    `City: ${city}`,
    `Address/Area: ${address}`,
    name ? `Name: ${name}` : "",
    phone ? `Phone: ${phone}` : "",
    notes ? `Notes: ${notes}` : "",
  ].filter(Boolean).join("\n");
  return `https://wa.me/923438802989?text=${encodeURIComponent(message)}`;
}

function updatePlaceOrderLink() {
  const link = document.getElementById("placeOrderLink");
  if (link) link.href = buildWhatsAppOrderLink();
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

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.hidden = true;
  }, 1800);
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
    closeDrawers();
    return;
  }
  if (["about", "contact", "terms", "privacy"].includes(hash)) {
    renderInfoPage(hash);
    return;
  }
  if (hash.startsWith("search")) {
    const query = new URLSearchParams(hash.split("?")[1] || "").get("q") || "";
    renderSearchPage(query);
    return;
  }
  if (hash.startsWith("category/")) {
    renderCategoryPage(hash.split("/")[1]);
    return;
  }
  if (hash.startsWith("product/")) {
    renderProductPage(hash.split("/")[1]);
    return;
  }
  if (hash.startsWith("social-")) {
    showToast("Add the client's real social profile URL here.");
    history.replaceState(null, "", "#home");
  }
}

function bindInteractions() {
  document.querySelector(".hero-next").addEventListener("click", () => {
    moveHero(1);
  });
  document.querySelector(".hero-prev").addEventListener("click", () => {
    moveHero(-1);
  });
  const heroCarousel = document.getElementById("heroCarousel");
  heroCarousel.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-slide]");
    if (dot) {
      heroIndex = Number(dot.dataset.slide);
      updateHero();
      return;
    }

    const card = event.target.closest(".hero-slide-card");
    if (card?.classList.contains("is-prev")) {
      moveHero(-1);
    }
    if (card?.classList.contains("is-next")) {
      moveHero(1);
    }
  });

  document.querySelector(".category-toggle").addEventListener("click", () => openDrawer("categoryDrawer"));
  document.querySelector(".cart-btn").addEventListener("click", () => openDrawer("cartDrawer"));
  document.querySelector(".login-btn").addEventListener("click", () => document.getElementById("loginDialog").showModal());
  document.getElementById("locationButton").addEventListener("click", () => document.getElementById("locationDialog").showModal());
  document.getElementById("drawerBackdrop").addEventListener("click", closeDrawers);

  document.getElementById("locationForm").addEventListener("submit", () => {
    deliveryDetails = {
      orderType: document.querySelector("input[name='orderType']:checked")?.value || "Delivery",
      city: document.getElementById("locationCity").value.trim() || "Across Pakistan",
      area: document.getElementById("locationArea").value.trim() || "Gilgit-Baltistan",
    };
    document.getElementById("deliveryText").textContent = `${deliveryDetails.area}, ${deliveryDetails.city}`;
    showToast(`${deliveryDetails.orderType} location saved`);
  });

  document.getElementById("searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = document.getElementById("searchInput").value.trim();
    window.location.hash = `search?q=${encodeURIComponent(query)}`;
    renderSearchPage(query);
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
      cart = cart.filter((item) => item.id !== removeButton.dataset.remove);
      updateCart();
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

    const qtyButton = event.target.closest("[data-qty]");
    if (qtyButton) {
      const input = document.getElementById("detailQty");
      input.value = Math.max(1, Number(input.value || 1) + Number(qtyButton.dataset.qty));
    }

    const routeSearch = event.target.closest("#routeSearchButton");
    if (routeSearch) {
      const query = document.getElementById("routeSearchInput").value.trim();
      renderSearchPage(query);
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.closest("#checkoutForm")) {
      updatePlaceOrderLink();
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.closest("#checkoutForm")) {
      updatePlaceOrderLink();
    }
  });

  window.addEventListener("hashchange", handleHash);
}

function slug(text) {
  return text.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

renderCategories();
renderSections();
renderHero();
updateCart();
bindInteractions();
handleHash();
