import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import ServicesCard from "@/components/Services/ServicesCard";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Services"
        homeText="Home"
        homeUrl="/"
      />

      <ServicesCard />

      <Partner />
   
      <div className="pb-100">
        <ContactFormStyleTwo />
      </div>
      
      <Footer />
    </>
  )
}
