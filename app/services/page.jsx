"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";


const services = [
    {
      num: "01",
      title: 'Web Development',
      description: "Web development services, creating and maintaining custom websites to suit your needs. From stunning front-end design to robust back-end solutions, I ensure your online presence is powerful and effective.",
      href: ""
    },
    {
      num: "02",
      title: 'Web Optimization',
      description: "Web optimization services to enhance your site's performance, speed, and user experience. By improving loading times, SEO, and mobile responsiveness, I help your website rank higher and engage visitors effectively.",
      href: ""
    },
    {
      num: "03",
      title: 'API Integration & Development',
      description: "I specialize in API integration and development, seamlessly connecting your website with third-party services and applications. This enhances functionality, automates processes, and ensures smooth data exchange, improving overall efficiency.",
      href: ""
    },
    {
      num: "04",
      title: 'Custom Plugin, Theme Development, Tweaking',
      description: "I offer custom plugin and theme development, along with tweaking services to tailor your website to your exact needs. From unique functionalities to personalized designs, I ensure your site stands out and performs optimally.",
      href: ""
    },

]

import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
        {services.map((service, index) => {
          return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all-500">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent trasition-all duration-500">{service.title}</h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          )
        })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services