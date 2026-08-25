/* =========================================================================
   DENZEL SMART FINDS — SITE DATA FILE
   =========================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE MOST OF THE WEBSITE.

   HOW TO USE THIS FILE
   ---------------------------------------------------------------------
   1. Everything below is plain JavaScript objects and arrays — no coding
      knowledge is required beyond typing text between quotes "like this".
   2. To add a new product or article, COPY an existing entry (the whole
      { ... } block), paste it above or below, then change the text.
   3. Always keep the commas "," between entries and the curly braces
      "{ }" matching. If you're not sure, copy an existing block exactly
      and only change the words inside the quotes.
   4. Never delete the "id" of an item that's already live — other pages
      may link to it by id.
   5. Save the file and refresh the website in your browser to see changes.
      No build step, no server, no command line needed.

   WHERE THINGS SHOW UP
   ---------------------------------------------------------------------
   - SITE.*            -> site name, tagline, contact email, social links
   - CATEGORIES         -> the 6 category tiles on the homepage + nav
   - ARTICLES            -> guide/article cards on the homepage & category pages
   - PRODUCTS           -> product cards (the ones that will carry your
                           Amazon affiliate links once you're approved)

   AMAZON AFFILIATE LINKS
   ---------------------------------------------------------------------
   Every product below has:
        "amazonUrl": "AMAZON_LINK_PLACEHOLDER"
   Replace AMAZON_LINK_PLACEHOLDER with your real Amazon affiliate link,
   e.g. "https://www.amazon.com/dp/B0XXXXXXX?tag=denzelsmartfi-20"
   Your Associates tracking ID (the "?tag=...") goes at the END of every
   link. See README instructions for exactly where to paste it.

   PRICES
   ---------------------------------------------------------------------
   Never invent a live price. Leave "price": "PRICE_PLACEHOLDER" until you
   have checked the current Amazon price, then type it in, e.g. "$49.99".
   Prices change constantly on Amazon — only put a price here once you've
   verified it, and re-check it occasionally.
   ========================================================================= */

const SITE = {
  name: "Denzel Smart Finds",
  shortName: "Smart Finds",
  tagline: "Straight-talking buying guides for students, remote workers & everyday shoppers.",
  domain: "https://www.denzelsmartfinds.com", // PASTE_REAL_DOMAIN_HERE once you own it
  contactEmail: "contact@denzelsmartfinds.com",
  founderNote:
    "Built by Denzel — a product research hub focused on honest, no-fluff buying advice.",
  social: {
    tiktok: "SOCIAL_LINK_PLACEHOLDER",
    youtube: "SOCIAL_LINK_PLACEHOLDER",
    instagram: "SOCIAL_LINK_PLACEHOLDER",
    facebook: "SOCIAL_LINK_PLACEHOLDER",
  },
  newsletterProvider: "NEWSLETTER_PROVIDER_FORM_ACTION_PLACEHOLDER", // e.g. your Mailchimp/Brevo form action URL
};

/* -------------------------------------------------------------------------
   CATEGORIES — powers the homepage tiles and the main navigation menu.
   "slug" must match the filename inside /categories/ (without .html)
------------------------------------------------------------------------- */
const CATEGORIES = [
  {
    id: "tech",
    slug: "tech",
    name: "Tech & Electronics",
    icon: "laptop",
    blurb: "Laptops, phones, accessories, and the tech that actually holds up.",
  },
  {
    id: "productivity",
    slug: "productivity",
    name: "Work & Productivity",
    icon: "briefcase",
    blurb: "Tools and gear that help remote workers get more done.",
  },
  {
    id: "students",
    slug: "students",
    name: "Student Essentials",
    icon: "book",
    blurb: "What's actually worth buying for lectures, dorms, and study sessions.",
  },
  {
    id: "home-office",
    slug: "home-office",
    name: "Home Office",
    icon: "desk",
    blurb: "Comfortable, productive setups that don't cost a fortune.",
  },
  {
    id: "books",
    slug: "books",
    name: "Books & Personal Finance",
    icon: "book-open",
    blurb: "Reads and tools for building better money habits.",
  },
  {
    id: "everyday",
    slug: "everyday",
    name: "Useful Everyday Products",
    icon: "box",
    blurb: "Small, practical products that quietly make life easier.",
  },
];

/* -------------------------------------------------------------------------
   ARTICLES — guides and editorial content. "type" controls the small
   badge shown on the card:
     "editorial"  = general information / explainer, no product testing claim
     "research"   = based on desk research (specs, reviews, comparisons)
     "tested"     = ONLY use this if a real product was personally tested.
                    Do not use "tested" unless that's actually true.
   "url" is where the article page lives.
------------------------------------------------------------------------- */
const ARTICLES = [
  {
    id: "laptop-buying-guide",
    title: "Best Laptops for Students: What to Look For Before Buying",
    category: "students",
    type: "research",
    excerpt:
      "The specs that actually matter for lectures, essays, and light coding — and the ones you can safely ignore.",
    url: "articles/laptop-buying-guide.html",
    date: "2026-06-01",
    author: "Denzel",
  },
  {
    id: "ram-guide",
    title: "How Much RAM Do You Really Need?",
    category: "tech",
    type: "editorial",
    excerpt:
      "A plain-English breakdown of 8GB vs 16GB vs 32GB, and who each option actually suits.",
    url: "articles/ram-guide.html",
    date: "2026-06-05",
    author: "Denzel",
  },
  {
    id: "home-office-accessories",
    title: "Best Accessories for a Productive Home Office",
    category: "home-office",
    type: "research",
    excerpt:
      "The small upgrades that make the biggest difference to comfort and focus.",
    url: "articles/home-office.html",
    date: "2026-06-10",
    author: "Denzel",
  },
  {
    id: "beginner-laptop-guide",
    title: "Laptop Buying Guide for Beginners",
    category: "tech",
    type: "editorial",
    excerpt:
      "New to buying tech? Start here before you spend a cedi or a dollar.",
    url: "articles/beginner-laptop-guide.html",
    date: "2026-06-14",
    author: "Denzel",
  },
  {
    id: "student-tech",
    title: "Essential Tech Accessories for University Students",
    category: "students",
    type: "research",
    excerpt:
      "What's genuinely useful in lecture halls and dorm rooms — and what's a waste of money.",
    url: "articles/student-tech.html",
    date: "2026-06-18",
    author: "Denzel",
  },
  {
    id: "power-bank-guide",
    title: "How to Choose a Power Bank",
    category: "everyday",
    type: "editorial",
    excerpt:
      "Capacity, output, and charging speed explained without the jargon.",
    url: "articles/power-bank-guide.html",
    date: "2026-06-21",
    author: "Denzel",
  },
  {
    id: "remote-work-tools",
    title: "Best Productivity Tools for Remote Workers",
    category: "productivity",
    type: "editorial",
    excerpt:
      "Software and hardware that make working from anywhere less chaotic.",
    url: "articles/remote-work-tools.html",
    date: "2026-06-25",
    author: "Denzel",
  },
  {
    id: "headphones-guide",
    title: "What to Check Before Buying Headphones",
    category: "everyday",
    type: "editorial",
    excerpt:
      "Fit, noise isolation, and battery life — the checklist before you check out.",
    url: "articles/headphones-guide.html",
    date: "2026-06-28",
    author: "Denzel",
  },
];

/* -------------------------------------------------------------------------
   PRODUCTS — the affiliate product cards. Add as many as you like by
   copying a block. "category" must match a CATEGORIES id above.
------------------------------------------------------------------------- */
const PRODUCTS = [
  {
    id: "prod-laptop-01",
    name: "PRODUCT_NAME_PLACEHOLDER — Student Laptop",
    category: "students",
    description:
      "PRODUCT_DESCRIPTION_PLACEHOLDER — a short, honest summary of what this laptop is good for.",
    features: [
      "FEATURE_PLACEHOLDER — screen size / resolution",
      "FEATURE_PLACEHOLDER — processor / RAM",
      "FEATURE_PLACEHOLDER — battery life",
      "FEATURE_PLACEHOLDER — weight / portability",
    ],
    price: "PRICE_PLACEHOLDER",
    rating: "RATING_PLACEHOLDER", // e.g. "4.5" — only fill in once verified on Amazon
    image: "PRODUCT_IMAGE_PLACEHOLDER",
    amazonUrl: "AMAZON_LINK_PLACEHOLDER",
  },
  {
    id: "prod-tech-01",
    name: "PRODUCT_NAME_PLACEHOLDER — Wireless Mouse",
    category: "tech",
    description: "PRODUCT_DESCRIPTION_PLACEHOLDER — compact everyday mouse.",
    features: [
      "FEATURE_PLACEHOLDER — connection type",
      "FEATURE_PLACEHOLDER — battery life",
      "FEATURE_PLACEHOLDER — DPI range",
    ],
    price: "PRICE_PLACEHOLDER",
    rating: "RATING_PLACEHOLDER",
    image: "PRODUCT_IMAGE_PLACEHOLDER",
    amazonUrl: "AMAZON_LINK_PLACEHOLDER",
  },
  {
    id: "prod-productivity-01",
    name: "PRODUCT_NAME_PLACEHOLDER — Laptop Stand",
    category: "productivity",
    description: "PRODUCT_DESCRIPTION_PLACEHOLDER — adjustable ergonomic stand for desk work.",
    features: [
      "FEATURE_PLACEHOLDER — height adjustment range",
      "FEATURE_PLACEHOLDER — materials",
      "FEATURE_PLACEHOLDER — portability / folding",
    ],
    price: "PRICE_PLACEHOLDER",
    rating: "RATING_PLACEHOLDER",
    image: "PRODUCT_IMAGE_PLACEHOLDER",
    amazonUrl: "AMAZON_LINK_PLACEHOLDER",
  },
  {
    id: "prod-homeoffice-01",
    name: "PRODUCT_NAME_PLACEHOLDER — Desk Lamp with USB Port",
    category: "home-office",
    description: "PRODUCT_DESCRIPTION_PLACEHOLDER — adjustable lighting for a home workspace.",
    features: [
      "FEATURE_PLACEHOLDER — brightness levels",
      "FEATURE_PLACEHOLDER — power source",
      "FEATURE_PLACEHOLDER — footprint / size",
    ],
    price: "PRICE_PLACEHOLDER",
    rating: "RATING_PLACEHOLDER",
    image: "PRODUCT_IMAGE_PLACEHOLDER",
    amazonUrl: "AMAZON_LINK_PLACEHOLDER",
  },
  {
    id: "prod-books-01",
    name: "PRODUCT_NAME_PLACEHOLDER — Personal Finance Book",
    category: "books",
    description: "PRODUCT_DESCRIPTION_PLACEHOLDER — a widely recommended starting point for money basics.",
    features: [
      "FEATURE_PLACEHOLDER — format (paperback/kindle/audiobook)",
      "FEATURE_PLACEHOLDER — page count",
      "FEATURE_PLACEHOLDER — edition / year",
    ],
    price: "PRICE_PLACEHOLDER",
    rating: "RATING_PLACEHOLDER",
    image: "PRODUCT_IMAGE_PLACEHOLDER",
    amazonUrl: "AMAZON_LINK_PLACEHOLDER",
  },
  {
    id: "prod-everyday-01",
    name: "PRODUCT_NAME_PLACEHOLDER — Portable Power Bank",
    category: "everyday",
    description: "PRODUCT_DESCRIPTION_PLACEHOLDER — everyday backup charging for phones and small devices.",
    features: [
      "FEATURE_PLACEHOLDER — capacity (mAh)",
      "FEATURE_PLACEHOLDER — output ports",
      "FEATURE_PLACEHOLDER — charging speed",
    ],
    price: "PRICE_PLACEHOLDER",
    rating: "RATING_PLACEHOLDER",
    image: "PRODUCT_IMAGE_PLACEHOLDER",
    amazonUrl: "AMAZON_LINK_PLACEHOLDER",
  },
  {
    id: "prod-tech-02",
    name: "PRODUCT_NAME_PLACEHOLDER — Over-Ear Headphones",
    category: "everyday",
    description: "PRODUCT_DESCRIPTION_PLACEHOLDER — noise-isolating headphones for study or commuting.",
    features: [
      "FEATURE_PLACEHOLDER — battery life",
      "FEATURE_PLACEHOLDER — noise cancellation (yes/no)",
      "FEATURE_PLACEHOLDER — connection type",
    ],
    price: "PRICE_PLACEHOLDER",
    rating: "RATING_PLACEHOLDER",
    image: "PRODUCT_IMAGE_PLACEHOLDER",
    amazonUrl: "AMAZON_LINK_PLACEHOLDER",
  },
  {
    id: "prod-students-02",
    name: "PRODUCT_NAME_PLACEHOLDER — Notebook & Pen Set",
    category: "students",
    description: "PRODUCT_DESCRIPTION_PLACEHOLDER — reliable everyday stationery for lectures and notes.",
    features: [
      "FEATURE_PLACEHOLDER — paper quality / page count",
      "FEATURE_PLACEHOLDER — binding type",
      "FEATURE_PLACEHOLDER — set contents",
    ],
    price: "PRICE_PLACEHOLDER",
    rating: "RATING_PLACEHOLDER",
    image: "PRODUCT_IMAGE_PLACEHOLDER",
    amazonUrl: "AMAZON_LINK_PLACEHOLDER",
  },
];

/* Make everything available to other scripts */
if (typeof module !== "undefined") {
  module.exports = { SITE, CATEGORIES, ARTICLES, PRODUCTS };
}
