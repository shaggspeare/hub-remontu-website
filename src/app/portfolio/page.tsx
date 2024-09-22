import PageTitle from "@/components/Common/PageTitle";
import Projects from "@/components/Portfolio/Projects";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import ContactForm from "@/components/ContactUs/ContactForm";

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar />

      <PageTitle 
        title="Portfolio"
        homeText="Home"
        homeUrl="/"
      />

      <Projects />

      <div className="pb-100">
        <ContactForm/>
      </div>
  
      <Footer />
    </div>
  )
}
