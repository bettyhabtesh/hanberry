"use client";
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Commitment to Quality',
    text: `At Hanberry Beauty Lounge, every look is crafted with precision and passion. We believe that true beauty begins with excellence — from the products we use to the techniques we apply. Each client receives a personalized touch, ensuring flawless results that enhance your natural features and last throughout your special day.`,
  },
  {
    title: 'High Standards of Hygiene',
    text: `Your comfort and safety come first. We maintain strict hygiene practices, using sanitized tools and fresh applicators for every session. Our workspace is designed to be clean, calm, and welcoming — giving you the confidence that you're in the best and safest hands.`,
  },
  {
    title: 'Trusted, Premium Brands',
    text: `Only the best products touch your skin. We work exclusively with globally trusted and dermatologist-approved makeup brands known for their performance and skin compatibility. From long-lasting foundations to gentle removers, every product is carefully selected to achieve both beauty and care.`,
  },
  {
    title: 'Tailored to You',
    text: `Every face is unique — and so is every session at Hanberry. Whether it's a soft bridal glow, bold editorial glam, or cultural elegance, we customize every detail to reflect your personality and occasion. Your satisfaction and confidence are at the heart of everything we do.`,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HanberryFeaturesPage() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden font-poppins bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/b1.png')" }}
    >
      {/* Subtle overlay for better text readability while keeping background visible */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative z-10 py-16 px-4 sm:px-8 lg:px-16">
        {/* Title with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="flex-1 h-px bg-[#E7C9B6] max-w-[200px]"></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-black whitespace-nowrap">
            The Hanberry Features
          </h2>
          <div className="flex-1 h-px bg-[#E7C9B6] max-w-[200px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4">
              <motion.div
                className="inline-block px-4 py-2.5 bg-[#E7C9B6] font-semibold text-lg sm:text-xl w-fit"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
              >
                {feature.title}
              </motion.div>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}