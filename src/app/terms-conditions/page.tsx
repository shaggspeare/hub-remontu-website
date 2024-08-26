import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import TermsConditionsContent from "@/components/TermsConditions/TermsConditionsContent";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Terms & Conditions"
        homeText="Home"
        homeUrl="/"
      />

      <TermsConditionsContent />
 
      <Footer />
    </>
  )
}
