
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

function Events() {
  const events = [
    {
      name: "Chennai Food Festival",
      description: "Experience the best of South Indian cuisine with live cooking demonstrations and food stalls.",
      date: "2025-04-15",
      time: "10:00 AM - 10:00 PM",
      location: "Island Grounds, Chennai",
      capacity: "5000+ attendees",
      image: "/images/events/cff.jpg"
    },
    {
      name: "Marina Beach Cultural Night",
      description: "Traditional dance performances and music shows under the stars.",
      date: "2025-04-20",
      time: "6:00 PM - 10:00 PM",
      location: "Marina Beach",
      capacity: "2000+ attendees",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
    },
    {
      name: "Heritage Walk",
      description: "Guided tour through historic Georgetown, exploring colonial architecture.",
      date: "2025-04-25",
      time: "7:00 AM - 10:00 AM",
      location: "Georgetown",
      capacity: "50 participants",
      image: "/images/events/guidee.avif"
    },
    {
      name: "Mylapore Temple Festival",
      description: "Annual temple festival with traditional rituals and cultural programs.",
      date: "2025-05-01",
      time: "5:00 AM - 10:00 PM",
      location: "Kapaleeshwarar Temple",
      capacity: "10000+ attendees",
      image: "/images/events/mylapore.jpg"
    },
    {
      name: "Made of Chennai Food & Music Festival",
      description: "A vibrant fusion of Chennai's culinary delights and live music performances, offering a diverse range of food stalls and entertainment.",
      date: "2025-09-13 to 2025-09-14",
      time: "4:00 PM onwards",
      location: "Island Grounds, Chennai",
      capacity: "5000+ attendees",
      image: "/images/events/mcfm.jpg"
    },
    {
      name: "Fusion Unavu Thiruvizha",
      description: "A culinary extravaganza showcasing traditional and fusion South Indian dishes, with live music and cultural performances.",
      date: "2025-03-07 to 2025-03-09",
      time: "12:00 PM - 8:00 PM",
      location: "YMCA Grounds, Nandanam, Chennai",
      capacity: "2000+ attendees",
      image: "/images/events/fusion.jpg"
    },
    {
      name: "Sunburn Chennai",
      description: "One of the biggest electronic dance music festivals in India, featuring international DJs and electrifying performances.",
      date: "2025-12-18 to 2025-12-20",
      time: "6:00 PM onwards",
      location: "Island Grounds, Chennai",
      capacity: "10,000+ attendees",
      image: "/images/events/alan.png"
    },
    {
      name: "Chennai International Film Festival",
      description: "A celebration of global cinema, featuring films from across the world with screenings, discussions, and awards.",
      date: "2025-12-10 to 2025-12-15",
      time: "10:00 AM - 9:00 PM",
      location: "Sathyam Cinemas, Royapettah, Chennai",
      capacity: "2000+ attendees",
      image: "/images/events/ciff.jpg"
    },
    {
      name: "A.R. Rahman Live in Concert",
      description: "A spectacular live concert by the legendary A.R. Rahman, featuring his iconic hits and collaborations with global artists.",
      date: "2025-11-22",
      time: "7:00 PM onwards",
      location: "Jawaharlal Nehru Stadium, Chennai",
      capacity: "30,000+ attendees",
      image: "/images/events/arr.jpg"
    },
    {
      name: "Chennai Music Festival",
      description: "A classical music festival showcasing the finest carnatic music performances by legendary artists and new talents.",
      date: "2025-12-25 to 2025-12-31",
      time: "6:00 PM - 10:00 PM",
      location: "Music Academy, Chennai",
      capacity: "1000+ attendees",
      image: "/images/events/mcfm.jpg"
    }
  ];

  return (
    <div className="py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Upcoming Events in Chennai
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={event.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-48 relative">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString("en-US", { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{event.capacity}</span>
                </div>
              </div>

              <Button className="w-full mt-6">Register Now</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Events;
