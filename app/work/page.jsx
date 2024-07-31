"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { handleClientScriptLoad } from "next/script";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'Web Development',
    title: 'VucaRisk - Website',
    description: 'Custom Wordpress Theme Created from scratch, Cutom Pages, Install & Setup',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/vucarisk.png",
    live: "",
    github: "",
  
  },
  {
    num: '02',
    category: 'Web Development',
    title: 'BlueZoo - Website',
    description: 'Paid Wordpress Theme crafted to client specific, custom pages, Install & Setup',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/bluezoo.png",
    live: "",
    github: "",
  
  },
  {
    num: '03',
    category: 'Web Development',
    title: 'Governance Manager - WooCommerce Website',
    description: 'Paid Wordpress Theme crafted to client specific, setup WooCommerce & config, custom plugins & installation, ',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "WooCommerce"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/governancemanager.png",
    live: "https://governancemanager.org",
    github: "",
  
  },
  {
    num: '04',
    category: 'Web Development',
    title: 'SimplySheds Shopify - eCommerce Website',
    description: 'Paid template customize to client specific using liquid syntax, config and install, custom app integration using API, payment gateways, custom pages, custom tags and modules etc.',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "Shopify"}, {name: "liquid"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/simplysheds.png",
    live: "https://simplysheds.com.au",
    github: "",
  
  },
  {
    num: '05',
    category: 'Web Development',
    title: 'Select A Shed - Web App',
    description: 'Brochure type website, Custom Html page integrated with JS and APIs, Optimize for best performance google and yahoo page complied',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"},  {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/select-a-sheds.png",
    live: "https://selectashed.com/",
    github: "",
  
  },
  {
    num: '06',
    category: 'Web Development',
    title: 'AbscoSheds - Website',
    description: 'Custom Wordpress Theme made from scratch, custom plugins, API Development and Integration, Custom pages, Optimize for best performance google and yahoo page complied ',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/abscosheds.png",
    live: "https://abscosheds.com.au",
    github: "",
  
  },
  {
    num: '07',
    category: 'Web Development',
    title: 'MiniMovers - Website',
    description: 'Custom WordPress Theme made from scratch using twitter bootstrap framework, custom Booking Engine WordPress Plugin, Optimize for best performance google and yahoo page complied',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/MiniMovers.png",
    live: "https://minimovers.com.au",
    github: "",
  
  },
  {
    num: '08',
    category: 'Web Development',
    title: 'MiniMovers Boxes - WooCommerce',
    description: 'Custom WordPress Theme and WooCommerce Shop made from scratch using twitter bootstrap framework, custom Return Boxes WordPress Plugin, Optimize for best performance google and yahoo page complied',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "WooCommerce"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/mmboxes.png",
    live: "https://minimoversboxes.com.au",
    github: "",
  
  },
  {
    num: '09',
    category: 'Web Development',
    title: 'MiniMovers Wiki - Knowledge Base Website',
    description: 'Custom WordPress Knowledge based Theme made from scratch using twitter bootstrap framework, rest api to search online bookings and box orders, Optimize for best performance google and yahoo page complied',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/MiniMoversWiki.png",
    live: "https://wiki.minimovers.com.au/",
    github: "",
  
  },
  {
    num: '10',
    category: 'Web Development',
    title: 'MiniMovers Careers - Job Application Portal',
    description: 'MiniMovers Job application website using custom WordPress Theme made from scratch using twitter bootstrap framework',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/mmjobs.png",
    live: "https://mmjobs.com.au/",
    github: "",
  
  },
  {
    num: '10',
    category: 'Web Development',
    title: 'MiniMovers Facebook Automation - Photo Upload',
    description: 'PHP/MySql OOP Facebook api, app to upload photos to MiniMovers facebook page with custom caption and details.',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/fbphotoupload.jpg",
    live: "https://minimovers.com.au/",
    github: "",
  
  },
  {
    num: '11',
    category: 'Web Development',
    title: 'AssetLink Global - Website',
    description: 'Paid WordPress Theme, Custom pages, install and setup',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/assetLinkGobal.jpg",
    live: "http://assetlinkglobal.com/",
    github: "",
  
  },
  {
    num: '12',
    category: 'Web Development',
    title: 'Runi Atelier - Website',
    description: 'Paid WordPress Theme, Custom pages, install and setup',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/runi-atelier.jpg",
    live: "http://runiatelier.com/",
    github: "",
  
  },
  {
    num: '13',
    category: 'Web Development',
    title: 'Paolo Feliciano Photograpy - Website',
    description: 'Custom WordPress Theme made from scratch using twitter bootstrap framework, custom Booking Engine WordPress Plugin, Optimize for best performance google and yahoo page complied',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/pf-com-v2.jpg",
    live: "",
    github: "",
  
  },
  {
    num: '14',
    category: 'Web Development',
    title: 'Paolo Feliciano Gallery - Website',
    description: 'Custom WordPress Theme made from scratch using twitter bootstrap framework, custom Booking Engine WordPress Plugin, Optimize for best performance google and yahoo page complied',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/pf-com.jpg",
    live: "",
    github: "",
  
  },
  {
    num: '15',
    category: 'Web Development',
    title: 'Ala Creme - Bakery Website',
    description: 'Custom WordPress Theme made from scratch using twitter bootstrap framework, custom Booking Engine WordPress Plugin, Optimize for best performance google and yahoo page complied',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/alacreme.com.ph.jpg",
    live: "",
    github: "",
  
  },
  {
    num: '16',
    category: 'Web Development',
    title: '+Teak - Furniture Website',
    description: 'Custom WordPress Theme made from scratch using twitter bootstrap framework, custom Booking Engine WordPress Plugin, Optimize for best performance google and yahoo page complied',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "WordPress"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/plasteak-ph.jpg",
    live: "",
    github: "",
  
  },
  {
    num: '17',
    category: 'Web Development',
    title: 'Alternating Current by Varaluz - Home Decor Website ',
    description: 'Custom HTML/PHP/MySql OOP website made from scratch',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/alternating-current.jpg",
    live: "",
    github: "",
  
  },
  {
    num: '18',
    category: 'Web Development',
    title: 'Varaluz - Home Improvements Website',
    description: 'Custom HTML/PHP/MySql OOP website made from scratch',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/varaluzcommercial.jpg",
    live: "",
    github: "",
  
  },
  {
    num: '19',
    category: 'Web Development',
    title: 'LaroseNoir - Web APP',
    description: 'CMS made from PHP/MySql OOP, custom API using SOAP',
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name: "javascript"}, {name: "PHP"}, {name: "MySql"}],
    image: "/assets/work/larosenoire.jpg",
    live: "",
    github: "",
  
  },
 

]
const Work = () => {
  const [project, setProjects] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProjects(projects[currentIndex]);
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title*/}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent trasition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project cat*/}
              <h4 className="text-[24px] font-bold leading-none text-white group-hover:text-accent trasition-all duration-500 capitalize">
                {project.category}
              </h4>
              {/* project desc */}
              <p className="text-white/60">
                {project.description}
              </p>
              {/* tech stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                <TooltipProvider delayduration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"><BsArrowUpRight className="text-white text-3xl group-hover:text-accent" /></TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                {/* git hub button*/}
                <Link href={project.github}>
                <TooltipProvider delayduration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"><BsGithub className="text-white text-3xl group-hover:text-accent" /></TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30}
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-ping-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                      </div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-contain" alt=""></Image>
                      </div>
                    </div>
                </SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center trasition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work