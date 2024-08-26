import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import FaqsContent from "@/components/Faqs/FaqsContent";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="FAQs"
        homeText="Home"
        homeUrl="/"
      />

      <FaqsContent />

      <div className="pb-100">
        <ContactFormStyleTwo />
      </div>
 
      <Footer />
    </>
  )
}
