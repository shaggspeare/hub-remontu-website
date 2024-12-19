import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import TestimonialsContent from "@/components/Testimonials/TestimonialsContent";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Testimonials"
        homeText="Home"
        homeUrl="/"
      />

      <TestimonialsContent />

      <div className="pb-100">
        <ContactFormStyleTwo />
      </div>
 
      <Footer />
    </>
  )
}
