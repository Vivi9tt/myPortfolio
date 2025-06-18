import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Resume() {

    const transcriptData = [
        {
            year: "Year 1",
            courses: [
                { code: "ITC514", title: "Fundamentals of Project Management", result: "B+" },
                { code: "ITC502", title: "Fundamentals of Programming", result: "A-" },
                { code: "ITC515", title: "Fundamentals of Information Systems Development", result: "A+" },
                { code: "ITC501", title: "Information Tecchnology Operations", result: "B+" },
                { code: "ITC513", title: "Programming", result: "A-" },
                { code: "ITC509", title: "Web Application Implementation", result: "A+" },
                { code: "ITC505", title: "Introduction to Networks", result: "A-" },
                { code: "ITC506", title: "Operating Systems", result: "C+" }
            ]
        },
        {
            year: "Year 2",
            courses: [
                { code: "IT607", title: "Advanced Programming", result: "B+" },
                { code: "ITC607", title: "Data Management", result: "A-" },
                { code: "ITC604", title: "Systmes Analysis and Design", result: "A-" },
                { code: "IT620", title: "Routing and Switching", result: "A" },
                { code: "IT605", title: "Web Services and Design Methodologies", result: "A+" },
                { code: "ITC602", title: "Cloud Computing", result: "A+" },
                { code: "ITC601", title: "Project Management", result: "A" },
                { code: "IT610", title: "Help Desk", result: "A" }
            ]
        },
        {
            year: "Year 3",
            courses: [
                { code: "IT711", title: "Advanced Networking" },
                { code: "IT617", title: "Mobile Application Development" },
                { code: "IT717", title: "System Security" },
                { code: "IT709", title: "Web Applications" },
                { code: "IT701", title: "Project" },
                { code: "IT708", title: "Information Systems in Management" },
                { code: "IY703", title: "Database Design and Implementation" }
            ]
        }
    ];

  return (
    <div className="resume flex flex-col font-roboto">

      <header>
        <NavBar />
      </header>
      
      <main className="h-auto md:h-screen flex-1 ">

        <section className="max-w-screen-xl mx-auto px-8 py-8 flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="flex justify-center md:w-1/2">
               <img src="/me.png" alt="A photo of me" className="w-65 h-auto md:w-150"/>
            </div>
            <div className="md:w-1/3">
                <h1 className="font-caveat font-bold not-italic text-[32px] md:text-[96px] leading-tight">My <span className="text-primary-500">Journey</span></h1>
                <p className="mt-4">
                    Hi! I am Vivian Chen, an undergraduate student at Southern Institute of Technology
                     (SIT) in New Zealand finishing the last year of an <span className="font-bold text-[18px]">Information Technology</span> degree. 
                     I’ve studied in many countries across the world! I’ve been in Honduras, China and 
                     now in New Zealand. So don’t be surprised when I tell you that I can speak <span className="text-[18px] font-bold">Spanish, 
                     Chinese, and English</span> all fluently!
                </p>
            </div>
        </section>

        <div className="courses max-w-screen-xl mx-auto px-8 py-8">
            <div className="flex flex-col md:gap-8">
                <div className="md:flex md:items-center ">
                    <h1 className="text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 md:mr-8">Courses Taken</h1>
                    <a href="/transcript.pdf" download className="inline-flex w-max items-end gap-2 border-b">
                        <p className="text-xs">Download a copy of my transcripts</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                            <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>    
                <div className="mt-4 md:flex md:justify-between">
                {transcriptData.map((yearBlock) => (
                    <div key={yearBlock.year} className="mb-8">
                        <h3 className="text-lg font-semibold mb-8 font-carrois">{yearBlock.year}</h3>
                        <ul className="space-y-2">
                            {yearBlock.courses.map((course, idx) => (
                            <li key={course.code + idx}>
                                <div>
                                    <p className="text-sm text-neutral-600 ">{course.code}</p>
                                    <p className="text-sm">
                                        {course.title}
                                        {course.result && (  
                                            <span className="ml-2 text-primary-500">
                                                ({course.result})
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>

            </div>

        </div>
      </main>

      <footer>
        <Footer/>
      </footer>
      
    </div>
  );
}
