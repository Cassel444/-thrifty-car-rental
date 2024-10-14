export const searchObjectName = {
    location: "location",
    transmission: ["Automatic", "Manual"], 
    engine: ["Diesel", "Petrol"],
    bathroom: "bathroom",
    kitchen: "kitchen",
    TV: "TV",
    AC: "AC",
    radio: "radio",
    van: "Van",
    fullyIntegrated: "Fully Integrated",
    alcove: "Alcove",
    panelTrack: "Panel Truck",
};
export const iconMapping = {
    Automatic: "transmission",
    Manual: "transmission",
    Diesel: "engine",
    Petrol: "engine",
    AC: "ac",
    Kitchen: "kitchen",
    TV: "tv",
    Bathroom: "bathroom",
    Radio: "radio"
  };
  
export const equipmentOptions = [
    { main: "AC", defaultText: "AC" },
    { main: "Transmission", defaultText: "Automatic", options: ["Automatic", "Manual"] },
    { main: "Kitchen", defaultText: "Kitchen" },
    { main: "TV", defaultText: "TV" },
    { main: "Bathroom", defaultText: "Bathroom" },
    { main: "Radio", defaultText: "Radio" },
    { main: "Engine", defaultText: "Diesel", options: ["Diesel", "Petrol"] },
  ];
export const vehicleTypeOptions = ["Van", "Fully Integrated", "Alcove"];