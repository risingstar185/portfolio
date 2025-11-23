import React from "react";
// सुनिश्चित करें कि यह पाथ आपकी constants फ़ाइल से मेल खाता हो
import first from '../../assets/r.png'
import priya from '../../assets/priya.png'
import third from '../../assets/ayushp.jpg'


const ReviewCards = () => {
  // src/constants/index.js (या जहाँ भी आपकी constants फ़ाइल है)
const testimonials = [
  {
    id: 1,
    name: "Aryan Sharma",
    title: "Python Developer",
    review: "“I’m really impressed by the responsive design, and the smooth animations look great!”",
    img: first // अपनी इमेज का पाथ यहाँ बदलें
  },
  {
    id: 2,
    name: "Priya Verma",
    title: "Web Developer, SRIMT",
    review: "“A very well-designed portfolio — clean and professional!”",
    img: priya  // अपनी इमेज का पाथ यहाँ बदलें
  },
  {
    id: 3,
    name: "Gaurav Singh",
    title: "Senior, SRIMT",
    review: "“The portfolio UI feels modern, user-friendly, and visually attractive”",
    img:third, // अपनी इमेज का पाथ यहाँ बदलें
  },
];
  return (
    <section
      id="testimonials"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient" // बैकग्राउंड को आपके स्टाइल से मैच किया
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white"> REVIEWS</h2>
        {/* आपके एक्सपीरियंस कॉम्पोनेंट जैसा पर्पल अंडरलाइन */}
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          What people I've worked with say about my skills and professionalism.
        </p>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            // एक्सपीरियंस कॉम्पोनेंट के जैसी कार्ड स्टाइलिंग
            className="w-full p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-skills-gradient backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                       transform transition-transform duration-300 hover:scale-[1.02] flex flex-col"
          >
            {/* Review Text */}
            <p className="mt-2 text-gray-300 italic text-lg flex-grow">
              {/* रिव्यू को डबल कोट्स में दिखाने के लिए सीधा डेटा का उपयोग */}
              {testimonial.review} 
            </p>

            {/* Separator */}
            <div className="w-16 h-0.5 bg-purple-500 my-6"></div>

            {/* Reviewer Details (Photo, Name, Title) */}
            <div className="flex items-center space-x-4">
              {/* Reviewer Photo */}
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#8245ec]">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  // 'object-cover' यह सुनिश्चित करता है कि इमेज पूरी तरह से फ़िट हो
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Name and Title */}
              <div>
                <h4 className="text-xl font-semibold text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-400">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewCards;