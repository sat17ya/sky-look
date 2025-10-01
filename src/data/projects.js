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
    features: [
      "Swimming Pool",
      "Gym",
      "Rooftop Garden",
      "24x7 Security",
      "Corner Property",
      "Overlooking Park/Garden",
      "Rain Water Harvesting",
    ],
    description:
      "Located in the heart of the city, these luxury apartments offer modern living with premium amenities, unmatched connectivity, and panoramic views of the skyline.",
    images: [
      "https://images.unsplash.com/photo-1505691723518-36a1a5e3a0e2",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1598928506311-c55ded1d5d79",
    ],
    pdfs: [
      { name: "Brochure", url: "/pdfs/luxury-apartments-brochure.pdf" },
      { name: "Floor Plan", url: "/pdfs/luxury-apartments-floorplan.pdf" },
    ],

    dimension: "30x40 ft",
    facing: "East",
    authorityApproved: "RERA Approved",
    roadWidth: "40 ft",
    nearbyLocations: ["Metro Station - 1 km", "Mall - 500m", "School - 2 km"],
  },
  {
    id: 2,
    title: "Beachside Villas",
    location: "Sunny Coastline",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Completed",
    area: "2,500 - 4,000 sq.ft",
    features: [
      "Private Beach",
      "Infinity Pool",
      "Spa & Sauna",
      "Clubhouse",
      "Overlooking Main Road",
      "Vaastu Compliant",
      "Private Beach Access",
    ],
    description:
      "Exclusive villas right on the coastline, offering private beach access, luxury interiors, and world-class facilities for a serene lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    ],
    pdfs: [
      { name: "Villa Brochure", url: "/pdfs/beachside-villas-brochure.pdf" },
      { name: "Master Plan", url: "/pdfs/beachside-villas-masterplan.pdf" },
    ],

    dimension: "50x80 ft",
    facing: "North-East",
    authorityApproved: "Govt Approved",
    roadWidth: "60 ft",
    nearbyLocations: ["Airport - 10 km", "Resort - 2 km", "Hospital - 5 km"],
  },
  {
    id: 3,
    title: "Green Estate",
    location: "Suburban Eco Living",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Ongoing",
    area: "900 - 1,500 sq.ft",
    features: [
      "Eco-Park",
      "Solar Energy",
      "Community Hall",
      "Jogging Track",
      "Rain Water Harvesting",
      "Eco-Friendly Design",
    ],
    description:
      "Affordable eco-friendly apartments designed for sustainable living with solar-powered energy, green open spaces, and community amenities.",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1598928506311-c55ded1d5d79",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    ],
    pdfs: [
      { name: "Eco Estate Brochure", url: "/pdfs/green-estate-brochure.pdf" },
    ],

    dimension: "25x40 ft",
    facing: "West",
    authorityApproved: "RERA in Process",
    roadWidth: "30 ft",
    nearbyLocations: [
      "Highway - 1 km",
      "School - 3 km",
      "Shopping Complex - 2 km",
    ],
  },
  {
    id: 4,
    title: "Green Estate",
    location: "Suburban Eco Living",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Completed",
    area: "900 - 1,500 sq.ft",
    features: [
      "Eco-Park",
      "Solar Energy",
      "Community Hall",
      "Jogging Track",
      "Eco Park Nearby",
    ],
    description:
      "Completed phase of Green Estate with premium eco-friendly apartments designed to promote sustainability and a healthy lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    ],
    pdfs: [
      {
        name: "Completed Project Report",
        url: "/pdfs/green-estate-report.pdf",
      },
    ],

    dimension: "35x50 ft",
    facing: "South-East",
    authorityApproved: "Municipal Approved",
    roadWidth: "35 ft",
    nearbyLocations: [
      "Market - 1 km",
      "Hospital - 4 km",
      "Railway Station - 6 km",
    ],
  },
  {
    id: 5,
    title: "The Z1 Apartment",
    location: "Suburban Eco Living",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "New",
    area: "900 - 1,500 sq.ft",
    features: [
      "Eco-Park",
      "Solar Energy",
      "Community Hall",
      "Jogging Track",
      "Smart Homes",
    ],
    description:
      "Future-ready smart homes with modern architecture, eco-conscious design, and vibrant community spaces.",
    images: [
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
      "https://images.unsplash.com/photo-1505691723518-36a1a5e3a0e2",
    ],
    pdfs: [
      {
        name: "Upcoming Project Overview",
        url: "/pdfs/green-estate-upcoming.pdf",
      },
    ],

    dimension: "40x60 ft",
    facing: "North",
    authorityApproved: "RERA Approved",
    roadWidth: "45 ft",
    nearbyLocations: [
      "IT Park - 5 km",
      "Metro Station - 3 km",
      "Hospital - 2 km",
    ],
  },
  {
    id: 6,
    title: "The C1 Apartment",
    location: "Suburban Eco Living",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "New",
    area: "900 - 1,500 sq.ft",
    features: [
      "Eco-Park",
      "Solar Energy",
      "Community Hall",
      "Jogging Track",
      "Modern Design",
    ],
    description:
      "Future-ready smart homes with modern architecture, eco-conscious design, and vibrant community spaces.",
    images: [
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
      "https://images.unsplash.com/photo-1505691723518-36a1a5e3a0e2",
    ],
    pdfs: [
      {
        name: "Upcoming Project Overview",
        url: "/pdfs/green-estate-upcoming.pdf",
      },
    ],

    dimension: "30x50 ft",
    facing: "South",
    authorityApproved: "Municipal Approved",
    roadWidth: "40 ft",
    nearbyLocations: ["College - 1 km", "Bus Stand - 2 km", "Market - 1 km"],
  },
  {
    id: 7,
    title: "The Nalco Apartment",
    location: "Suburban Eco Living",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "New",
    area: "900 - 1,500 sq.ft",
    features: [
      "Eco-Park",
      "Solar Energy",
      "Community Hall",
      "Jogging Track",
      "Modern Design",
    ],
    description:
      "Future-ready smart homes with modern architecture, eco-conscious design, and vibrant community spaces.",
    images: [
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
      "https://images.unsplash.com/photo-1505691723518-36a1a5e3a0e2",
    ],
    pdfs: [
      {
        name: "Upcoming Project Overview",
        url: "/pdfs/green-estate-upcoming.pdf",
      },
    ],

    dimension: "30x50 ft",
    facing: "South",
    authorityApproved: "Municipal Approved",
    roadWidth: "40 ft",
    nearbyLocations: ["College - 1 km", "Bus Stand - 2 km", "Market - 1 km"],
  },
  {
    id: 8,
    title: "The Nalco Apartment",
    location: "Suburban Eco Living",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Ongoing",
    area: "900 - 1,500 sq.ft",
    features: [
      "Eco-Park",
      "Solar Energy",
      "Community Hall",
      "Jogging Track",
      "Modern Design",
    ],
    description:
      "Future-ready smart homes with modern architecture, eco-conscious design, and vibrant community spaces.",
    images: [
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
      "https://images.unsplash.com/photo-1505691723518-36a1a5e3a0e2",
    ],
    pdfs: [
      {
        name: "Upcoming Project Overview",
        url: "/pdfs/green-estate-upcoming.pdf",
      },
    ],

    dimension: "30x50 ft",
    facing: "South",
    authorityApproved: "Municipal Approved",
    roadWidth: "40 ft",
    nearbyLocations: ["College - 1 km", "Bus Stand - 2 km", "Market - 1 km"],
  },
];

// 🔹 Attach slug dynamically to each project
projects.forEach((project) => {
  project.slug = generateSlug(project.title);
});

export default projects;
