import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import Projects from "@/components/Portfolio/Projects";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Portfolio"
        homeText="Home"
        homeUrl="/"
      />

      <Projects />

      <div className="pb-100">
        <ContactFormStyleTwo />
      </div>
  
      <Footer />
    </>
  )
}
