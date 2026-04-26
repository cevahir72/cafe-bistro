export type NavItem = {
  label: string;
  href: string;
  match?: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type BusinessInfo = {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  addressLine: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
  latitude: number;
  longitude: number;
  mapEmbedUrl: string;
  directionsUrl: string;
};

export type MenuItem = {
  name: string;
  price: string;
  description: string;
};

export type MenuSectionLayout = "showcase" | "compact" | "protein" | "grid";

export type MenuGroupLayout = "showcase" | "paired" | "protein-pair" | "grid";

export type MenuSection = {
  id: string;
  title: string;
  navLabel?: string;
  eyebrow?: string;
  description?: string;
  icon?: string;
  image?: string;
  layout: MenuSectionLayout;
  items: MenuItem[];
};

export type MenuSectionGroup = {
  id: string;
  layout: MenuGroupLayout;
  sectionIds: string[];
  title?: string;
  eyebrow?: string;
  description?: string;
  surface?: "base" | "low";
};

export type GalleryItem = {
  id: string;
  title?: string;
  eyebrow?: string;
  image: string;
  alt: string;
  icon?: string;
  spanV?: 2 | 3;
  spanH?: 2;
  overlay?: "soft" | "strong" | "feature";
  delay?: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", match: "/" },
  { label: "Menu", href: "/menu", match: "/menu" },
  { label: "Gallery", href: "/gallery", match: "/gallery" },
  { label: "About", href: "/#story" },
];

export const footerLinks: FooterLink[] = [
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];

export const businessInfo: BusinessInfo = {
  name: "Botanica Garden",
  tagline: "High-end cafe, restaurant, and bakery experience in a moonlit botanical setting.",
  phone: "+44 20 7946 0123",
  email: "hello@botanicagarden.com",
  addressLine: "128 Greenhouse Lane, London, W1 2BN",
  streetAddress: "128 Greenhouse Lane",
  addressLocality: "London",
  postalCode: "W1 2BN",
  addressCountry: "GB",
  latitude: 51.5154,
  longitude: -0.141,
  mapEmbedUrl: "https://www.google.com/maps?q=128%20Greenhouse%20Lane%2C%20London%2C%20W1%202BN&z=15&output=embed",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=128%20Greenhouse%20Lane%2C%20London%2C%20W1%202BN",
};

export const footerAddress = businessInfo.addressLine;

export const menuHighlights: MenuItem[] = [
  {
    name: "Stone-Fired Truffle Flatbread",
    price: "$24",
    description: "Wild forest mushrooms, black truffle oil, and house-made ricotta from our firin.",
  },
  {
    name: "8-Hour Braised Ribs",
    price: "$38",
    description: "Slow-cooked in red wine reduction with rosemary-infused root vegetables.",
  },
  {
    name: "Botanica Harvest Salad",
    price: "$19",
    description: "Seasonal organic greens, charred citrus, toasted pine nuts, and lemon zest.",
  },
];

export const menuSections: MenuSection[] = [
  {
    id: "salads",
    title: "Salatalar",
    navLabel: "Salatalar",
    layout: "showcase",
    description:
      "Light, crisp, and thoughtfully curated from our morning harvest. Fresh flavors from the garden.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ1QqjvJSN9LzsJQJXLe7kLDWjW_f-YxT63PPkSabBnbrWSCFwhf5n-gZACVg0tUE8elN8YPMBB6pfuimNNSwVEWAf9x3GrSKrqmZLNfW8fPWFCaEBSnlWNW8fyFYF9JZ6zoJg-rw5kQjooB8vqUT-2ZYMfpvKQLf8ScwV8rUMGFtoiPG14BJuwQH9ewR9QPjik3wpo8S2cMzxn0jjgI8gPp2nwms8hY1Fd3hRsIxuba_o8aY10zeSkbkXuFwB-wiOlV0YPOlYyPY",
    items: [
      {
        name: "Bonfile Roka Salata",
        price: "85,00 TL",
        description:
          "Bonfile parçaları, roka, parmesan, çeri domates, biber çeşitleri, nar ekşisi, zeytin yağı ve mısır.",
      },
      {
        name: "Chicken Bowl Salata",
        price: "75,00 TL",
        description:
          "Maskulin, portakal, havuç, domates, ızgara tavuk, ceviz, salatalık, badem, mısır, çilek ve avokado sos.",
      },
      {
        name: "Biftekli Kinoa Salata",
        price: "88,00 TL",
        description:
          "Maskulin, kinoa çeşitlerinden hazırlanan karışım, domates, kuru kayısı, nar taneleri, biftek parçaları, salatalık, nar ekşisi, zeytin yağı ve mısır.",
      },
      {
        name: "Izgara Sebzeli Hellim Salata",
        price: "75,00 TL",
        description:
          "Maskulin, kabak, patlıcan, havuç, biber çeşitleri, hellim ızgara çeşitleri, zeytin yağı ve pesto sos.",
      },
      {
        name: "Sezar Salata",
        price: "75,00 TL",
        description: "Maskulin, tavuk fileto, çeri domates, kruton ekmeği, parmesan, sezar sos.",
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgerler",
    navLabel: "Burgerler",
    icon: "lunch_dining",
    layout: "compact",
    items: [
      {
        name: "Klasik Burger",
        price: "87,00 TL",
        description: "150 gr Özel Ev Yapımı Hamburger Köftesi, parmak patates ve özel soslarıyla servis edilir.",
      },
      {
        name: "Cheese Burger",
        price: "89,00 TL",
        description:
          "150 gr Özel Ev Yapımı Hamburger Köftesi, cheddar peyniri, parmak patates ve özel soslarıyla servis edilir.",
      },
      {
        name: "Spesiyal Burger",
        price: "98,00 TL",
        description:
          "150 gr Özel Ev Yapımı Hamburger Köftesi, karamelize soğan, cheddar peyniri, kaşar peyniri, sucuk, kibrit patates, parmak patates ve özel soslar.",
      },
      {
        name: "Üçlü Mix Burger",
        price: "89,00 TL",
        description: "(Tavuk, Et, Köfte) Parmak patates ve özel soslarıyla servis edilir.",
      },
    ],
  },
  {
    id: "pizzas",
    title: "Pizzalar",
    navLabel: "Pizzalar",
    icon: "local_pizza",
    layout: "compact",
    items: [
      { name: "Margherita Pizza", price: "65,00 TL", description: "Mozzarella peyniri, çeri domates." },
      {
        name: "Vejetaryen Pizza",
        price: "72,00 TL",
        description: "Mozzarella peyniri, brokoli, karnabahar, mantar, mısır, mix biber.",
      },
      {
        name: "Karışık Pizza",
        price: "85,00 TL",
        description: "Mozzarella peyniri, salam, sucuk, mantar, domates, mısır, mix biber.",
      },
      {
        name: "Turkish Delight",
        price: "95,00 TL",
        description: "Mozzarella peyniri, pastırma, sucuk, renkli biber ve domates.",
      },
    ],
  },
  {
    id: "poultry",
    title: "Beyaz Etler",
    eyebrow: "From the Firin & Grill",
    navLabel: "Beyaz Etler",
    layout: "protein",
    items: [
      {
        name: "Tavuk Şinitzel Milanese",
        price: "85,00 TL",
        description: "Grissini kaplı şinitzel, ıspanaklı patates püresi, roka salata ve fıstık tereyağı ile servis edilir.",
      },
      { name: "Kremalı Bademli Tavuk", price: "85,00 TL", description: "Sebze ve patates püresi ile servis edilir." },
      {
        name: "Tavuk Çökertme",
        price: "90,00 TL",
        description:
          "Tereyağlı bazlama üzerinde biftek parçaları, mantar, biber ve patates, süzme yoğurt ve kibrit patates ile servis edilir.",
      },
      {
        name: "BBQ Soslu Tavuk Şiş",
        price: "85,00 TL",
        description: "BBQ sosla tatlandırılmış tavuk şiş, ıspanak sote ve kremalı patates ile servis edilir.",
      },
    ],
  },
  {
    id: "meats",
    title: "Kırmızı Etler",
    navLabel: "Kırmızı Etler",
    layout: "protein",
    items: [
      {
        name: "Dana Çökertme",
        price: "129,00 TL",
        description:
          "Tereyağlı bazlama üzerinde biftek parçaları, mantar, biber ve patates, süzme yoğurt ve kibrit patates ile servis edilir.",
      },
      {
        name: "Çentik Kebabı",
        price: "129,00 TL",
        description:
          "(Köfte ve ızgara bonfile) Tereyağda bazlama, kibrit patates, yoğurt, tereyağlı soslu salça, köz domates ve biber ile servis edilir.",
      },
      {
        name: "Mantar Soslu Bonfile",
        price: "159,00 TL",
        description: "Mantar soslu demiglas, sebze ve patates püresi ile servis edilir.",
      },
      {
        name: "Botanica Karışık Izgara",
        price: "235,00 TL",
        description:
          "Şaşlık şiş, ızgara köfte, tavuk pirzola, dana külbastı, tavuk lolita, kuzu pirzola sebze ve patates püresi ile servis edilir.",
      },
    ],
  },
  {
    id: "wraps",
    title: "Wraplar",
    navLabel: "Wraplar",
    icon: "restaurant",
    layout: "grid",
    items: [
      { name: "Köfte Wrap", price: "77,00 TL", description: "Parmak patates ve özel soslarıyla servis edilir." },
      { name: "Tavuk Wrap", price: "73,00 TL", description: "Parmak patates ve özel soslarıyla servis edilir." },
      { name: "Biftekli Wrap", price: "85,00 TL", description: "Parmak patates ve özel soslarıyla servis edilir." },
      {
        name: "Patlıcanlı Tiridine Bandım",
        price: "78,00 TL",
        description:
          "Lavaş sargı köz patlıcan, biber parçaları, domates, kaşar peyniri, cheddar peyniri, krema, domates sos ve parmak patates ile servis edilir.",
      },
    ],
  },
];

export const menuSectionGroups: MenuSectionGroup[] = [
  {
    id: "salads-showcase",
    layout: "showcase",
    sectionIds: ["salads"],
  },
  {
    id: "handhelds",
    layout: "paired",
    sectionIds: ["burgers", "pizzas"],
    title: "Lounge Classics",
    description: "Signature burgers and stone-baked pizzas rendered in a more composed, side-by-side presentation.",
    surface: "low",
  },
  {
    id: "proteins",
    layout: "protein-pair",
    sectionIds: ["poultry", "meats"],
    title: "Beyaz & Kırmızı Etler",
    eyebrow: "From the Firin & Grill",
    description: "A focused pass through grilled poultry and richer red-meat plates from the main kitchen.",
  },
  {
    id: "wraps-grid",
    layout: "grid",
    sectionIds: ["wraps"],
    description: "Late-service favorites arranged in a cleaner two-column grid for faster scanning.",
    surface: "low",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "terrace",
    eyebrow: "Sanctuary",
    title: "The Midnight Terrace",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdZLjNPOiCUZxwXEM93bQPaFmO_wxr-zd8_nIlqYC1Oto1sVgmg419XdjUxK_uR07iOYCV8Q8eld7Mf1JKt4YUcUFSZ5GS7PvrK_8UdeP86LljVfS_bA-BzqH5R6xVD8PDqfxIkqvNE7DeT-A67xcX96Qv_Zs-ucQjTHQGKVKdiqcNd--DZ_7Xx1oUgCxN8J1stIZgTrv1CxH9QBSHZfYltvPXKNFoiP5Xnlcr2GtbyV6ZyudDsEAcka-zf6j3OfUL_BciVauNhnk",
    alt: "Luxurious evening garden terrace with warm amber lanterns hanging from ancient oak trees, soft moonlight, and plush seating areas.",
    spanV: 3,
    spanH: 2,
    overlay: "feature",
  },
  {
    id: "interior-detail",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALNqohXg6L1LrgTE2t-NpacEyirdsHqT9AETsxOgNkicfyrq3LEYzeDyFhr2K62JEwdKF12BN_pomzB4CPROG_CAfc4qN1MDkPHB_VBmBZLi0gdB6q1fAFw3Gp2HDcTjUDaof7Wer0ayXwulQPexWl6h23JA45uWlzSmxCSJoulASl7z64gHLjhGtLcjp1inAvZj3Idh_kz-RIIy1_Ma6RHlZzC3uLDac4Zx3TNn_yvZrAmyK9wWIY5MNrUG0riwHrEFQO5J4lD2M",
    alt: "Interior of a luxury lounge with dark wood paneling, brass accents, and a soft glowing fireplace in the background.",
    spanV: 2,
    overlay: "soft",
    delay: "120ms",
  },
  {
    id: "dish",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTDsXmA7mkheFgaYhOM8PZkZhes9A4ZqB6eEUd3e6blakePFwaxHazeRIom4qe06RHbH2R9IGFdmS3Wq7SUJOYGo3XbW6JNYyGgSJMh5JLVo5o0Q3JrnfAus1-NWxmUPoMyL9zncYfpgVXbDT6v7qjfnENx39vcGH6wOHYfFMADPEutyqbz1LyU5CzuwEveoEI_IKIcT-76oB4QuoHtZCMt6-kzmcwhKvP65c1saswOwFys5CZd45BsXA1WJPLzmIbH3pmuxYkblE",
    alt: "Exquisitely plated gourmet duck breast with vibrant berry reduction and edible flowers on a matte black ceramic plate.",
    spanV: 2,
    overlay: "soft",
    icon: "restaurant_menu",
    delay: "180ms",
  },
  {
    id: "great-hall",
    eyebrow: "Atmosphere",
    title: "The Great Hall",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3Ft14S1KsHuXtUE79qn98uiCip8_tlfjhkjzRzbVr9pzKq0pBfeE75SQmWQhjquDISIWNuNF13MWsJWgbQ_w6GSdoDPK3xEvy9zLUrAACvdy2GrN2WXDniy4daX2694Yf-hhlTzOpr9UmI3UHkYf1mep35cnzFZ8iT8UQ0psxeL41wqKeffq3OLJKNExl14jUG1L0hw9OFcEl8WFpyhePbcn3cuUl9oRLKrVdixG9fFWgYctDeBAYO6YyzK6Urpwm9HcuNs4iVLk",
    alt: "Wide angle shot of a high-end restaurant dining hall with dramatic floor-to-ceiling windows overlooking a moonlit garden.",
    spanV: 2,
    spanH: 2,
    overlay: "strong",
    delay: "220ms",
  },
  {
    id: "cocktail",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASqFZwogLcnXbt1W2Idopho5WvxjFZbac7EqYEC0CSbEMpcyvBusGAlITqbnJo2RGakALzIo8gvOkCQgPD_NS1j2bx13CCdiNyiGqGY36QAhGKvLHQEOPq95LKHTbLlhJAwRQ-Td74c91BBcuMyVJeIVKe_rLVQ8Es1G-giA6QOkf55aIvPNYmcdmHyv2Xwfs0wZ3ifM_O09dw4INe6xCqFIPisoQroBG7da-Pw2cnz1-DBONyi7lDqelmPfFvVZB001hLGss-9N8",
    alt: "A crystal glass containing a smoky amber cocktail with a large clear ice cube and an orange twist, set on a dark wood bar.",
    spanV: 3,
    overlay: "soft",
    delay: "260ms",
  },
  {
    id: "greenery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmMbTTWrHoUqpJMgtewT4xedCEiq9ciwZzV6sbImER3qjWyfscdFFFXCMvoinNneZjoW_4s7aGSuRLvAKRelbdTaFzyVHrDNbFYtexpt4g9zoCpu8JBDAEX3dCeCl48YqjYg1IutfK9uhaZr62ut2TutqtUnvyzMkzsktCUiq-5Z1wiJX5cM8yotfR3eB6xR6LQFjDz89E8g--IwGB9els6QiDDHA-QIUDwZNsK3KKScZhwgGuF-82K3EjZtqvb9oGDn-yRxtUspw",
    alt: "Close-up of exotic deep green tropical leaves with glistening dew drops under soft spotlighting.",
    spanV: 2,
    overlay: "soft",
    delay: "320ms",
  },
];

export const reservationSlots = [
  "18:00 - Early Dinner",
  "19:30 - Sunset Seating",
  "21:00 - Nightfall",
  "22:30 - Late Lounge",
];

export const openingHours = [
  { day: "Mon - Thu", hours: "17:00 - 00:00" },
  { day: "Fri - Sat", hours: "17:00 - 02:00" },
  { day: "Sunday", hours: "12:00 - 22:00" },
];

export const contactDetails = [
  { icon: "location_on", value: businessInfo.addressLine },
  { icon: "call", value: businessInfo.phone },
  { icon: "mail", value: businessInfo.email },
];