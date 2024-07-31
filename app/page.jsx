import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">Hi I'm <br/> <span className="text-accent">Anton Mojica</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Ready for a web upgrade? I integrate cutting-edge technology with innovative design, making sure your site is fast, secure, and stunning. Let's elevate your digital presence!
            </p>
            {/* button */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline"
                size="lg"
                asChild
                className="uppercase flex items-center gap-2"
                >
                <Link  href={'/am-cv.pdf'}  target="_blank"  rel="noopener noreferrer" locale={false} download>
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
  
 
}

export default Home