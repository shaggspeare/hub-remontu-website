import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import PricingPlan from "@/components/Pricing/PricingPlan";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Pricing"
        homeText="Home"
        homeUrl="/"
      />

      <PricingPlan />

      <div className="pb-100">
        <ContactFormStyleTwo />
      </div>
 
      <Footer />
    </>
  )
}
