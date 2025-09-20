// src/pages/Contact.jsx
import { useState, useEffect } from "react";
import { Calendar, Clock10, MapPin, Phone, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import person1 from "../assets/img/people/per1.jpeg";
import person2 from "../assets/img/people/per2.jpeg";
import person3 from "../assets/img/people/per3.jpeg";
import banner from "../assets/img/about/banner.png";

const testimonials = [
  {
    name: "Ahmed Al Mansouri",
    position: "Senior Marketing Manager",
    rating: 5,
    image: person1,
    phone: "+91 9876767572",
    email: "contactAhmed@gmail.com",
  },
  {
    name: "Sarah Johnson",
    position: "Senior Marketing Manager",
    rating: 5,
    image: person3,
    phone: "+91 9876767510",
    email: "contactSarah@gmail.com",
  },
  {
    name: "Mohammed Hassan",
    position: "Senior Marketing Manager",
    rating: 5,
    image: person2,
    phone: "+91 9876767520",
    email: "contactMohammed@gmail.com",
  },
];

export default function Contact() {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const goToNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index) => setCurrent(index);

  return (
    <>
      {/* Page Header */}
      <section
        className="h-[50vh] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h2 className="text-5xl font-bold">Let's talk</h2>
        <p className="mt-2">LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      {/* Contact Details */}
      <section className="px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <span className="uppercase text-sm text-gray-500">Get In Touch</span>
          <h1 className="text-3xl font-bold my-4">
            Visit one of our agency locations or contact us today
          </h1>
          <h3 className="text-xl font-semibold mb-6">Head Office</h3>

          <div className="flex flex-col gap-4">
            <p className="flex gap-2"><MapPin className="w-4 h-4 mt-1" /> Panagal Park, near Indian Bank, T. Nagar, Chennai, Tamil Nadu 600017</p>
            <p className="flex gap-2"><Phone className="w-4 h-4 mt-1" /> +91 98765 43210</p>
            <p className="flex gap-2"><Calendar className="w-4 h-4 mt-1" /> Mon-Sat</p>
            <p className="flex gap-2"><Clock10 className="w-4 h-4 mt-1" /> 10:00-21:00</p>
          </div>
        </div>

        {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9129281437517!2d80.23062597373311!3d13.041214113350945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267408a65c97d%3A0x5fbdfb8ea275616c!2sZudio%20-%20T%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1757573176430!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Form + Testimonials */}
      <section className="px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <form className="flex flex-col space-y-4">
          <span className="uppercase text-sm text-gray-500">Leave a Message</span>
          <h1 className="text-3xl font-bold mb-4">We love to hear from you</h1>
          <input type="text" placeholder="Your Name" className="border p-3 rounded" />
          <input type="email" placeholder="E-mail" className="border p-3 rounded" />
          <input type="text" placeholder="Subject" className="border p-3 rounded" />
          <textarea placeholder="Your Message" rows="5" className="border p-3 rounded"></textarea>
          <button className="bg-teal-600 text-white py-2 px-6 rounded hover:bg-teal-700 transition">
            Submit
          </button>
        </form>

        {/* Testimonials */}
        <div className="relative max-w-xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <div className="flex gap-4 mb-4 ">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{testimonials[current].name}</h4>
                <p className="text-sm text-gray-600">{testimonials[current].position}</p>
              </div>
            </div>
            {/* <p className="text-gray-600 italic mb-4">"{testimonials[current].comment}"</p> */}
            <div className="flex  gap-2 items-center text-gray-600 text-sm">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> {testimonials[current].phone}</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> {testimonials[current].email}</p>
            </div>
          </div>

          {/* Navigation */}
          {/* <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-red-100"
          >
            <ChevronLeft className="h-5 w-5 text-red-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-red-100"
          >
            <ChevronRight className="h-5 w-5 text-red-600" />
          </button> */}

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-1 h-1 rounded-full ${index === current ? "bg-teal-600" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
