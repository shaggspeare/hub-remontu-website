import PageTitle from "@/components/Common/PageTitle";
import GoogleMap from "@/components/ContactUs/GoogleMap";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import ContactForm from "@/components/ContactUs/ContactForm";

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar />

      <PageTitle 
        title="Контакти"
        homeText="Головна"
        homeUrl="/"
      />

      <div className="ptb-100">
        <ContactForm />
      </div>

      <div className="pb-100">
        <GoogleMap />
      </div>
 
      <Footer />
    </div>
  )
}
