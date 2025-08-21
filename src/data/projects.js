const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") 
    .trim()
    .replace(/\s+/g, "-"); 
};

const projects = [
  {
    id: 1,
    title: "Luxury Apartments",
    location: "Downtown City Center",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "New",
    area: "1,200 - 2,000 sq.ft",
    features: ["Swimming Pool", "Gym", "Rooftop Garden", "24x7 Security"],
    type: {
      bhk: "3",
      bathrooms: "2",
      parking: "2"
    },
    description: "Located in the heart of the city, these luxury apartments offer modern living with premium amenities, unmatched connectivity, and panoramic views of the skyline.",
    images: [
      "https://images.unsplash.com/photo-1505691723518-36a1a5e3a0e2",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1598928506311-c55ded1d5d79"
    ],
    pdfs: [
      { name: "Brochure", url: "/pdfs/luxury-apartments-brochure.pdf" },
      { name: "Floor Plan", url: "/pdfs/luxury-apartments-floorplan.pdf" }
    ]
  },
  {
    id: 2,
    title: "Beachside Villas",
    location: "Sunny Coastline",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Ongoing",
    area: "2,500 - 4,000 sq.ft",
    features: ["Private Beach", "Infinity Pool", "Spa & Sauna", "Clubhouse"],
    type: {
      bhk: "5",
      bathrooms: "5",
      parking: "3"
    },
    description: "Exclusive villas right on the coastline, offering private beach access, luxury interiors, and world-class facilities for a serene lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    ],
    pdfs: [
      { name: "Villa Brochure", url: "/pdfs/beachside-villas-brochure.pdf" },
      { name: "Master Plan", url: "/pdfs/beachside-villas-masterplan.pdf" }
    ]
  },
  {
    id: 3,
    title: "Green Estate",
    location: "Suburban Eco Living",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Upcoming",
    area: "900 - 1,500 sq.ft",
    features: ["Eco-Park", "Solar Energy", "Community Hall", "Jogging Track"],
    type: {
      bhk: "1",
      bathrooms: "1",
      parking: "1"
    },
    description: "Affordable eco-friendly apartments designed for sustainable living with solar-powered energy, green open spaces, and community amenities.",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1598928506311-c55ded1d5d79",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    ],
    pdfs: [
      { name: "Eco Estate Brochure", url: "/pdfs/green-estate-brochure.pdf" }
    ]
  },
  {
    id: 4,
    title: "Green Estate",
    location: "Suburban Eco Living",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Completed",
    area: "900 - 1,500 sq.ft",
    features: ["Eco-Park", "Solar Energy", "Community Hall", "Jogging Track"],
    type: {
      bhk: "2",
      bathrooms: "2",
      parking: "1"
    },
    description: "Completed phase of Green Estate with premium eco-friendly apartments designed to promote sustainability and a healthy lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    ],
    pdfs: [
      { name: "Completed Project Report", url: "/pdfs/green-estate-report.pdf" }
    ]
  },
  {
    id: 5,
    title: "The Z1 Apartment",
    location: "Suburban Eco Living",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Upcoming",
    area: "900 - 1,500 sq.ft",
    features: ["Eco-Park", "Solar Energy", "Community Hall", "Jogging Track"],
    type: {
      bhk: "2",
      bathrooms: "3",
      parking: "1"
    },
    description: "Future-ready smart homes with modern architecture, eco-conscious design, and vibrant community spaces.",
    images: [
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
      "https://images.unsplash.com/photo-1505691723518-36a1a5e3a0e2"
    ],
    pdfs: [
      { name: "Upcoming Project Overview", url: "/pdfs/green-estate-upcoming.pdf" }
    ]
  }
];

// 🔹 Attach slug dynamically to each project
projects.forEach((project) => {
  project.slug = generateSlug(project.title);
});

export default projects;
