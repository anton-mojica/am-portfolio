"use client";

import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaPhp, 
  FaPython, 
  FaShopify, 
  FaWordpress,
  FaNodeJs,
  FaSass  
} from 'react-icons/fa';

import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiMysql, 
  SiJquery, 
  SiWoocommerce, 
  SiElementor, 
  SiGithub, 
  SiAmazonaws
} from "react-icons/si";

const about = {
  title: "About Me",
  description: "Know more about me!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anton Niel Mojica"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+63) 935 498 5253"
    },
    {
      fieldName: "Experience",
      fieldValue: "10+ Years"
    },
    {
      fieldName: "Email",
      fieldValue: "anton.mojica02@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "Filipino, English"
    },
    {
      fieldName: "Hobbies & Interest",
      fieldValue: "Sports Shooting, Gun Collection, Classic & Modern Cars, Big Bikes, Mechanic, Programming"
    },
  ]
} 

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Full stack web developer with over 10+ years extensive experience in developing and Implementing interactive websites. Proven ability in developing and optimizing web application with use of emerging technologies.',
  items: [
    {
      company: "Brain Box Corporation",
      position: "Web Developer",
      duration: "April 2024 - Present"
    },
    {
      company: "Absco Industries INC.",
      position: "Senior Front-end Developer",
      duration: "September 2021 - April 2024"
    },
    {
      company: "Direct Sourcing Solutions Philippines INC.",
      position: "Software Developer",
      duration: "August 2020 - April 2021"
    },
    {
      company: "Shore360 INC.",
      position: "PHP Full Stack Web Developer",
      duration: "June 2015 - August 2020"
    },
    {
      company: "DTW Designs Studios",
      position: "Web Developer",
      duration: "May 2013 - June 2015"
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'Certification and Degree',
  items: [
    {
      institution: "Online Course Platform",
      degree: "OutSystems Assosiate Web Developer",
      duration: "2021"
    },
    {
      institution: "Online Course Platform",
      degree: "Full-Stack Javasript MVC",
      duration: "2017"
    },
    {
      institution: "AMA Computer College",
      degree: "BS in Information Technology",
      duration: "June 2008 - 2013(under grad)"
    }
    
  ]
}

const skills = {
  title: "My skills",
  description: "As a web developer, I specialize in crafting responsive, user-friendly websites with clean code and modern designs. My expertise in HTML, CSS, JavaScript, and various frameworks ensures top-notch functionality and aesthetics.",
  skillList: [
  
    {
      icon: <FaHtml5/>,
      name: 'html 5'
    },
    {
      icon: <FaCss3/>,
      name: 'css 3'
    },
    {
      icon: <FaSass />,
      name: 'Sass'
    },
    {
      icon: <FaJs/>,
      name: 'javascript'
    },
    {
      icon: <SiJquery />,
      name: 'jQuery'
    },
    {
      icon: <FaReact/>,
      name: 'react.js'
    },
    {
      icon: <FaPhp/>,
      name: 'PHP'
    },
    {
      icon: <SiMysql/>,
      name: 'MySql'
    },
    {
      icon: <FaPython/>,
      name: 'Python'
    },
    {
      icon: <FaShopify/>,
      name: 'Shopify'
    },
    {
      icon: <FaWordpress/>,
      name: 'Wordpress'
    },
    {
      icon: <SiWoocommerce />,
      name: 'WooCommerce'
    },
    {
      icon: <SiElementor />,
      name: 'Elementor'
    },
    {
      icon: <FaNodeJs/>,
      name: 'node.js'
    },
    {
      icon: <SiNextdotjs/>,
      name: 'next.js'
    },
    {
      icon: <SiTailwindcss/>,
      name: 'tailwind.css'
    },
    {
      icon: <SiAmazonaws />,
      name: 'Amazon'
    },
    {
      icon: <SiGithub />,
      name: 'GitHub'
    },

  ]
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from '@/components/ui/scroll-area';
import { animate, motion

 } from 'framer-motion';
const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
       

        {/* content */}
        <div className='min-h-[70vh] w-full'>

          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{experience.title}</h3>
              <p className='max-w-[800px]'>{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {experience.items.map((item, index) => {
                    return (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60 '>{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* education */}
          <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{education.title}</h3>
              <p className='max-w-[800px]'>{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index) => {
                    return (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60 '>{item.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>  

          {/* skills */}
          <TabsContent value="skills" className="w-full">
            <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[800px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-5xl group-hover:text-accent transition-all duration-300'>
                              {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
                </ScrollArea>
            </div>
          </TabsContent>  

          {/* about */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[800px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index}
                      className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
            </div>
          </TabsContent>  
        </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume