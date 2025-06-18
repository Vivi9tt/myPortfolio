import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {

  return (
    <div className="home flex flex-col font-roboto">

      <header>
        <NavBar />
      </header>
      
      <main className="h-auto md:h-screen flex-1">
        <ContactForm/>
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  );
}
