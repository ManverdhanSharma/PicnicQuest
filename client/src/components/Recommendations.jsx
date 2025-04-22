
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Phone, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

function Recommendations() {
  const [activeTab, setActiveTab] = useState("restaurants");

  const restaurants = [
    {
      name: "Saravana Bhavan",
      description: "Famous South Indian vegetarian restaurant chain known for authentic dishes.",
      cuisine: "South Indian",
      rating: 4.5,
      priceRange: "₹₹",
      timing: "6:00 AM - 11:00 PM",
      location: "Anna Nagar",
      contact: "+91 44 2628 3344",
      mustTry: ["Masala Dosa", "Filter Coffee", "Ghee Pongal"]
    },
    {
      name: "Murugan Idli Shop",
      description: "Popular for soft idlis and variety of chutneys.",
      cuisine: "South Indian",
      rating: 4.3,
      priceRange: "₹",
      timing: "7:00 AM - 10:00 PM",
      location: "T. Nagar",
      contact: "+91 44 2434 5555",
      mustTry: ["Idli", "Podi Dosa", "Sweet Pongal"]
    },
    {
      name: "Bombay Brasserie",
      description: "Modern Indian cuisine with a contemporary twist.",
      cuisine: "North Indian, Continental",
      rating: 4.6,
      priceRange: "₹₹₹",
      timing: "12:00 PM - 11:00 PM",
      location: "Phoenix Market City",
      contact: "+91 44 6666 7777",
      mustTry: ["Butter Chicken", "Biryani", "Kulfi"]
    },
    {
      name: "Southern Spice",
      description: "#1 of 6,404 Restaurants in Chennai (Madras)",
      cuisine: "South Indian",
      rating: 4.8,
      priceRange: "₹₹₹₹",
      timing: "12:30 PM - 11:45 PM",
      location: "Nungambakkam",
      contact: "+91 78248 62308",
      mustTry: ["Thali", "Appam", "Fish Curry"]
    },
    {
      name: "R&G - GreenPark Chennai",
      description: "It’s a fusion of kebabs and global cuisine.",
      cuisine: "Indian, International",
      rating: 4.9,
      priceRange: "₹₹ - ₹₹₹",
      timing: "12:00 PM - 11:00 PM",
      location: "Vadapalani",
      contact: "+91 44 6651 5151",
      mustTry: ["Prawns", "Chicken", "Kulfi"]
    },
    {
      name: "The Reef",
      description: "From its décor to the excellent international selections, everything about The Reef suggests elegance. ",
      cuisine: "Indian, International",
      rating: 4.9,
      priceRange: "₹₹₹₹",
      timing: "12:00 AM - 11:59 PM",
      location: "Sheraton Grand Chennai Resort",
      contact: "+91 78240 10209",
      mustTry: ["Pizza", "Buffet spread", "Dessert"]
    },
    {
      name: "Waterside",
      description: "Waterside offers a luxurious dining experience with elegant décor, extensive buffet spreads, and a serene ambiance perfect for any occasion.",
      cuisine: "Multicuisine – Indian, Continental, Asian, Italian",
      rating: 4.1,
      priceRange: "₹₹₹",
      timing: "6:30 AM - 10:30 AM (Breakfast), Other meals available throughout the day",
      location: "Feathers - A Radha Hotel, Mount Poonamallee Road, Ramapuram, Chennai",
      contact: "+91 78239 77815",
      mustTry: ["Sushi", "Sunday Brunch", "Desserts", "Buffet Spread"]
    },
    {
      "name": "Paati Veedu",
      "description": "Paati Veedu offers a luxurious South Indian vegetarian fine dining experience, blending traditional flavors with a nostalgic ambiance reminiscent of a grandmother's home.",
      "cuisine": "South Indian, Vegetarian",
      "rating": 4.3,
      "priceRange": "₹₹₹",
      "timing": "12:00 PM - 11:00 PM",
      "location": "2, Bhagirathi Ammal Street, T. Nagar, Chennai",
      "contact": "+91 99625 77234",
      "mustTry": ["Sambar Sadham", "Elaneer Payasam", "Idiyappam", "Maha Bhakshana", "Poorna Bhakshana"]
    },
    {
      "name": "C Salt",
      "description": "C Salt offers an authentic South Indian coastal dining experience by the bay, featuring fresh 'sea to plate' seafood, signature cocktails, and a serene beachfront ambiance.",
      "cuisine": "South Indian Coastal, Seafood",
      "rating": 4.2,
      "priceRange": "₹₹₹",
      "timing": "12:00 PM - 3:00 PM, 7:00 PM - 9:45 PM",
      "location": "Sheraton Grand Chennai Resort & Spa, 280 ECR, Vadanamelli, Neelangarai, Chennai",
      "contact": "+91 93848 24988",
      "mustTry": ["Karimeen Pollichathu", "Malabar Mapas Lobster", "Crab Puttu", "Kothimiri Royyallu", "Appam Kuruma"]
    },
    {
      "name": "MKC – Madras Kitchen Company",
      "description": "MKC offers a modern take on regional Indian and Asian street food, served in a casual yet stylish setting. Known for its vibrant flavors and creative small plates, it's a favorite for both locals and travelers.",
      "cuisine": "South Indian, North Indian, Asian, Desserts, Beverages",
      "rating": 4.6,
      "priceRange": "₹₹₹",
      "timing": "12:00 PM - 11:00 PM",
      "location": "The Westin Chennai Velachery, 154, Velachery Main Road, Chennai",
      "contact": "+91 89398 92001",
      "mustTry": [
        "Beef Pepper Fry",
        "Butter Chicken",
        "Mutton Biryani",
        "Ghee Tossed Podi Idli",
        "Vazhapoo Vadai",
        "Paneer Makhani Maggi"
      ]
    },
    {
      "name": "J.Hind",
      "description": "J.Hind offers a luxurious dining experience with a thematic old-fashioned ambiance, serving a blend of North and South Indian cuisines in a royal setting.",
      "cuisine": "North Indian, South Indian, Mughlai",
      "rating": 4.5,
      "priceRange": "₹₹₹₹",
      "timing": "12:30 PM - 3:00 PM, 7:30 PM - 11:00 PM",
      "location": "Grand by GRT Hotels, 120, Sir Thyagaraya Road, T. Nagar, Chennai",
      "contact": "+91 75500 36789",
      "mustTry": ["Biryani", "Chicken Tikka", "Galouti Kebab", "Paneer Tikka", "Nariyal Doodh Ka Shorba"]
    },
    {
      "name": "The Flying Elephant",
      "description": "The Flying Elephant offers a luxurious and vibrant dining experience with a multi-level layout, serving a diverse range of global cuisines in a dynamic ambiance complemented by live music and entertainment.",
      "cuisine": "Asian, Italian, North Indian, Middle Eastern, Continental, Seafood, Desserts, Beverages",
      "rating": 4.4,
      "priceRange": "₹₹₹₹",
      "timing": "12:00 PM - 3:00 PM (Sunday Brunch), 7:00 PM - 12:00 AM (Daily)",
      "location": "Park Hyatt Chennai, 39, Velachery Main Road, Near Raj Bhavan, Guindy, Chennai, Tamil Nadu 600032",
      "contact": "+91 89398 71128",
      "mustTry": ["Salmon Pani Puri", "Butter Chicken", "Guet-tao", "Tiramisu", "Cocktails"]
    }

  ];

  const streetFood = [
    {
      name: "Atho Man",
      description: "Famous Burmese street food stall.",
      specialty: "Atho (Burmese Noodles)",
      rating: 4.4,
      priceRange: "₹",
      timing: "4:00 PM - 10:00 PM",
      location: "Sowcarpet",
      mustTry: ["Atho", "Masala Noodles", "Mohinga"]
    },
    {
      name: "Karthik Sandwich",
      description: "Popular sandwich stall with unique combinations.",
      specialty: "Grilled Sandwiches",
      rating: 4.2,
      priceRange: "₹",
      timing: "3:00 PM - 11:00 PM",
      location: "Besant Nagar",
      mustTry: ["Cheese Sandwich", "Mushroom Sandwich", "Cold Coffee"]
    },
    {
      name: "Beach Sundal Corner",
      description: "Traditional beach snacks and sundal varieties.",
      specialty: "Sundal",
      rating: 4.3,
      priceRange: "₹",
      timing: "3:00 PM - 9:00 PM",
      location: "Marina Beach",
      mustTry: ["Peanut Sundal", "Masala Corn", "Mango Slice"]
    },
    {
      "name": "Ravi Anna Kadai",
      "description": "A beloved dosa stall serving crispy ghee podi dosas with a unique homemade podi blend.",
      "specialty": "Ghee Podi Dosa",
      "rating": 4.5,
      "priceRange": "₹",
      "timing": "6:30 AM - 10:30 AM, 5:00 PM - 9:00 PM",
      "location": "12, Masilamani St, Parthasarathi Puram, T. Nagar, Chennai",
      "mustTry": ["Ghee Podi Dosa", "Coconut Chutney", "Sambar"]
    },
    {
      "name": "Ram Prasad's Jalebi Stall",
      "description": "A 20+ year-old sweet shop famed for its hot, crispy jalebis made fresh every evening.",
      "specialty": "Jalebi",
      "rating": 4.3,
      "priceRange": "₹",
      "timing": "5:00 PM - 9:00 PM",
      "location": "Sowcarpet, Chennai",
      "mustTry": ["Jalebi", "Rabri"]
    },
    {
      "name": "Kailash Kitchen",
      "description": "A popular momo joint offering a variety of steamed and fried momos with flavorful fillings.",
      "specialty": "Beef and Chicken Momos",
      "rating": 4.6,
      "priceRange": "₹",
      "timing": "12:00 PM - 10:00 PM",
      "location": "Choolaimedu, Chennai",
      "mustTry": ["Beef Momos", "Chicken Momos", "Fried Momos"]
    },
    {
      "name": "Oye Hoye!",
      "description": "A vibrant spot serving North Indian street food favorites like chole bhature and Amritsari kulche.",
      "specialty": "Chole Bhature",
      "rating": 4.4,
      "priceRange": "₹₹",
      "timing": "11:00 AM - 10:00 PM",
      "location": "10/29, Khader Nawaz Khan Rd, Thousand Lights, Chennai",
      "mustTry": ["Chole Bhature", "Amritsari Kulche", "Gulab Jamun"]
    },
    {
      "name": "Burma Bazaar Atho Stalls",
      "description": "A cluster of stalls offering authentic Burmese-style Atho noodles and other delicacies.",
      "specialty": "Atho",
      "rating": 4.2,
      "priceRange": "₹",
      "timing": "4:00 PM - 9:00 PM",
      "location": "Burma Bazaar, Chennai",
      "mustTry": ["Atho", "Egg Masala", "Soup"]
    },
    {
      "name": "HFC Kebab Stall",
      "description": "HFC Kebab Stall is renowned for its spicy and flavorful kebabs, offering a variety of meats grilled to perfection with a unique blend of spices.",
      "specialty": "Spicy Grilled Kebabs",
      "rating": 4.6,
      "priceRange": "₹",
      "timing": "5:00 PM - 11:00 PM",
      "location": "Near Koyambedu Market, Chennai",
      "mustTry": ["Chicken Kebab", "Mutton Seekh Kebab", "Fish Tikka"]
    }
  ];

  return (
    <div className="py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Food & Drink Recommendations
      </motion.h1>

      <div className="flex justify-center mb-8">
        <div className="flex space-x-4">
          <Button
            variant={activeTab === "restaurants" ? "default" : "outline"}
            onClick={() => setActiveTab("restaurants")}
          >
            Restaurants
          </Button>
          <Button
            variant={activeTab === "streetFood" ? "default" : "outline"}
            onClick={() => setActiveTab("streetFood")}
          >
            Street Food
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(activeTab === "restaurants" ? restaurants : streetFood).map((place, index) => (
          <motion.div
            key={place.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
              <p className="text-gray-600 mb-4">{place.description}</p>

              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{place.rating}</span>
                  </div>
                  <span className="text-primary">{place.priceRange}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{place.timing}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{place.location}</span>
                </div>

                {place.contact && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{place.contact}</span>
                  </div>
                )}

                <div className="mt-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <Utensils className="w-4 h-4" />
                    Must Try
                  </h4>
                  <ul className="mt-2 list-disc list-inside">
                    {place.mustTry.map((item) => (
                      <li key={item} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
