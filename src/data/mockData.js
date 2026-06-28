// src/data/mockData.js

export const recentEvents = [
  { 
    id: 1,
    date: "Oct 20, 2025", 
    title: "1.5 Lakh Diyas at Ayodhya Deepotsav", 
    desc: "Handcrafted by 100+ rural women artisans.",
    image: "https://static.wixstatic.com/media/5a7f9b_3021c3e1447d46eab66bf9b7a1da0990~mv2.jpg/v1/fill/w_400,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5a7f9b_3021c3e1447d46eab66bf9b7a1da0990~mv2.jpg"
  },
  { 
    id: 2,
    date: "Sep 26, 2025", 
    title: "Menstrual Awareness", 
    desc: "Nutan High School, Ganj Basoda",
    image: "https://static.wixstatic.com/media/5a7f9b_58a0d30832944f429451a7dd4b805baf~mv2.jpg/v1/fill/w_400,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5a7f9b_58a0d30832944f429451a7dd4b805baf~mv2.jpg"
  },
  { 
    id: 3,
    date: "Aug 23, 2025", 
    title: "Diwali Decor Training", 
    desc: "15-day skill workshop in Vidisha",
    image: "https://static.wixstatic.com/media/5a7f9b_6d4bf3bc01ad4e9c8080ddd976a4a7bd~mv2.jpg/v1/fill/w_400,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5a7f9b_6d4bf3bc01ad4e9c8080ddd976a4a7bd~mv2.jpg"
  },
  { 
    id: 4,
    date: "Aug 03, 2025", 
    title: "Rakshasutra Saptah", 
    desc: "Bhopal Police Line Event",
    image: "https://static.wixstatic.com/media/5a7f9b_def53b78c5714b68a4ca60f05e581531~mv2.jpg/v1/fill/w_400,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5a7f9b_def53b78c5714b68a4ca60f05e581531~mv2.jpg"
  },
];

// Add this below your recentEvents array in src/data/mockData.js

export const mediaGallery = [
  {
    id: 1,
    title: "Diwali Diyas Exhibition",
    category: "Livelihood",
    year: "2025",
    image: null,
    projectLink: "/projects/operation-rakshasutra"
  },
  {
    id: 2,
    title: "Pad Distribution Drive",
    category: "Menstruation",
    year: "2025",
    image: null,
    projectLink: "/projects/arohi"
  },
  {
    id: 3,
    title: "Cow-dust Eco Products Launch",
    category: "Gobar-dhan",
    year: "2026",
    image: null,
    projectLink: "/projects/gaumay-shilp"
  },
  {
    id: 4,
    title: "Rural Women Stitching Workshop",
    category: "Livelihood",
    year: "2024",
    image: null,
    projectLink: "/projects/operation-rakshasutra"
  },
  {
    id: 5,
    title: "School Menstrual Hygiene Camp",
    category: "Menstruation",
    year: "2026",
    image: null,
    projectLink: "/projects/arohi"
  },
  {
    id: 6,
    title: "Gaushala Training Program",
    category: "Gobar-dhan",
    year: "2025",
    image: null,
    projectLink: "/projects/gaumay-shilp"
  }
];

// Add this below your mediaGallery array in src/data/mockData.js

export const timelineData = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Started with a small menstrual hygiene awareness campaign in local communities."
  },
  {
    year: "2020",
    title: "Project Arohi Launched",
    description: "Expanded reach to government schools, installing vending machines and distributing biodegradable pads."
  },
  {
    year: "2022",
    title: "Operation Rakshasutra",
    description: "Initiated livelihood generation programs for rural women and inmates through skill development."
  },
  {
    year: "2025",
    title: "Cowdust & Gaumay Shilp",
    description: "Launched the Gobar-dhan initiative to create eco-friendly products and support local Gaushalas."
  }
];

export const testimonialsData = [
  {
    id: 1,
    quote: "The livelihood generation program gave me the skills to start my own tailoring business. My family is finally financially secure.",
    name: "Sunita D.",
    title: "Beneficiary, Operation Rakshasutra"
  },
  {
    id: 2,
    quote: "Project Arohi changed how our students view menstruation. The attendance of girls has improved significantly.",
    name: "Meena Sharma",
    title: "Principal, Govt. Girls School"
  },
  {
    id: 3,
    quote: "Partnering with DYC for the Gaumay Shilp project has helped our Gaushala become self-sustaining.",
    name: "Rajesh Kumar",
    title: "Gaushala Manager"
  }
];

// Add this below your testimonialsData array in src/data/mockData.js

export const transparencyData = {
  totalRaised: "₹1.2 Cr",
  totalSpent: "₹1.15 Cr",
  livesChanged: "80,000+",
  breakdown: [
    { category: "Menstrual Equity (Project Arohi)", percentage: 45 },
    { category: "Livelihood Generation", percentage: 35 },
    { category: "Gobar-dhan Initiatives", percentage: 15 },
    { category: "Admin & Operations", percentage: 5 }
  ]
};

// Add this below your transparencyData object in src/data/mockData.js

export const blogPosts = [
  {
    id: 1,
    title: "The Red Rewind: Breaking Taboos in Rural Bihar",
    excerpt: "How Project Arohi is changing the conversation around menstruation in government schools through education and accessible vending machines.",
    category: "Menstruation",
    author: "Anubhav",
    date: "May 10, 2026",
    year: "2026",
    image: null,
    link: "/blog/the-red-rewind"
  },
  {
    id: 2,
    title: "From Inmates to Artisans: Operation Rakshasutra",
    excerpt: "Inside the initiative that is providing skill development and dignified livelihood generation opportunities to female inmates.",
    category: "Livelihood",
    author: "DYC Team",
    date: "March 22, 2026",
    year: "2026",
    image: null,
    link: "/blog/operation-rakshasutra-artisans"
  },
  {
    id: 3,
    title: "Gaumay Shilp: The Economics of Cow-dust",
    excerpt: "Discover how converting cow dung into eco-friendly products like diyas and idols is reviving local Gaushalas.",
    category: "Gobar-dhan",
    author: "DYC Team",
    date: "November 05, 2025",
    year: "2025",
    image: null,
    link: "/blog/economics-of-cowdust"
  },
  {
    id: 4,
    title: "Empowering 10,000 Women: Our 2024 Impact",
    excerpt: "A deep dive into our annual statistics, lives changed, and the roadmap for scaling our impact next year.",
    category: "Reports",
    author: "Anubhav",
    date: "January 15, 2025",
    year: "2025",
    image: null,
    link: "/blog/2024-impact-report"
  }
];