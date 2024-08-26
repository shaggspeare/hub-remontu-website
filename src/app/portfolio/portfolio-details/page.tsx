import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import PortfolioDetailsContent from "@/components/PortfolioDetails/PortfolioDetailsContent";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import Footer from "@/components/Layout/Footer";
import ProjectGallery from "@/components/PortfolioDetails/ProjectGallery";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Portfolio Details"
        homeText="Home"
        homeUrl="/"
      />

      <PortfolioDetailsContent />

      <ProjectGallery />
    
      <div className="ptb-100">
        <ContactFormStyleTwo />
      </div>
  
      <Footer />
    </>
  )
}
