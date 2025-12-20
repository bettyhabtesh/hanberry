"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageRotate = {
  hidden: { opacity: 0, rotate: -8, scale: 0.9 },
  visible: { 
    opacity: 1, 
    rotate: -4, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
  },
} as const;

const numberScale = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
  },
} as const;

const stats = [
  {
    value: "100K+",
    label: "Happy Clients"
  },
  {
    value: "20%",
    label: "Repeated Clients"
  },
  {
    value: "15+",
    label: "Premium Brand"
  },
  {
    value: "10+",
    label: "Years of Experience"
  }
];

export default function AboutHamneal() {
  return (
    <div className="w-full font-poppins">
      {/* Top Section - Light Brown Background */}
      <div className="bg-[#E7C9B6] py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageRotate}
              className="relative w-full h-[400px] md:h-[450px] lg:h-[500px]"
            >
              <div className="relative h-full w-full max-w-[400px] max-h-[400px] pl-4 mx-auto">
                <Image
                  src="/images/ham.PNG"
                  alt="Hamneal Nebiyu"
                  fill
                  // sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>

            {/* Right Side - Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="flex flex-col gap-4 text-black"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                THE FACE BEHIND THE BEAUTY
              </h2>
              
              <div className="flex flex-col gap-3 text-sm md:text-base leading-relaxed">
                <p>
                  Hamneal Nebiyu is a professional makeup artist with over twelve years of experience in the beauty industry. She has built a reputation for excellence, artistry, and timeless elegance that extends internationally. Internationally certified, Hamneal has collaborated with numerous global beauty companies and events, showcasing her skill and creative vision across diverse platforms.
                </p>
                <p>
                  As the owner and general manager of a luxury beauty lounge, she has successfully managed every aspect of the business — from staff training and client relations to maintaining the highest standards of service and artistry. Her dedication to perfection and her passion for empowering others through beauty have made her a trusted name in the industry.
                </p>
              </div>

              <button className="self-start font-bold text-lg md:text-xl hover:opacity-80 transition-opacity mt-2">
                Read More
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Section - White Background with Statistics */}
      <div className="bg-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={numberScale}
                  transition={{ delay: index * 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E7C9B6] mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm md:text-base font-medium text-black">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

