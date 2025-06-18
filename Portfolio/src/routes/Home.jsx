import NavBar from "../components/NavBar";
import SocialIcons from "../components/SocialIcons";
import { CardsCarousel } from "../components/CardsCarousel";
import { AnimatedTestimonialsDemo } from "../components/AnimatedTestimonials";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <div className="home flex flex-col font-roboto">
      <header>
        <NavBar />
      </header>
      
      <main className="h-auto md:h-screen flex-1">
        <section
          className="
            hero 
            flex flex-col-reverse items-top text-center justify-end 
            max-w-screen-xl mx-auto px-8 py-8 
            md:flex-row md:justify-end md:items-center md:text-right"
        >
          <div className="flex flex-col items-center gap-1 w-full md:w-full md:items-end max-w-[520px]">
            <p className="title font-bold not-italic text-[32px] sm:text-[96px] leading-tight">
              Hello! I’m <br/>
              <span className="text-primary-500 font-caveat text-[clamp(4.5rem,10vw,20rem)] sm:text-[128px]">
                Vivian Chen
              </span>
            </p>
            <p className="font-carrois text-[14px] sm:text-[18px]">
              I’m a Bachelor of IT graduate who loves UI/UX designing,
              building mobile apps and websites, and working with databases.
            </p>
            <div className="flex flex-col md:flex-row items-center md:mt-4 md:mt-4 justify-center md:justify-start">
              <p className="font-carrois text-[14px] mr-2">Follow me on:</p>
              <SocialIcons />
            </div>
          </div>
        </section>
        <section className="intro text-center px-8 my-24 max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-4 mb-8 md:flex-row items-center justify-center" >
            <p className="text-green-500 text-[48px] font-caveatbrush leading-tight md:w-1/2 md:text-[64px] px-4">I'm a perfectionist at heart</p>
            <p className="md:w-1/2 md:text-[18px] px-4">
              I thrive on breaking complex problems into elegant solutions—whether 
              it’s refactoring code for performance or optimizing a design for accessibility.  
              I’m always learning new tools to keep my work cutting-edge.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row-reverse items-center justify-center">
            <p className="text-green-500 text-[48px] font-caveatbrush leading-tight md:w-1/2 md:text-[64px] px-4">I fine tune every piece for quality </p>
            <p className="md:w-1/2 md:text-[18px] px-4">
               I look forward to bringing this relentless pursuit of excellence to real-world projects, 
               contributing measurable value, and growing alongside a dynamic team.
            </p>
          </div>
        </section>
        <div className="my-10">
          <CardsCarousel />
        </div>
        <div className="my-10">
          <AnimatedTestimonialsDemo/>
        </div>

      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
