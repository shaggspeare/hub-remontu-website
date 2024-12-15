import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Privacy Policy"
        homeText="Home"
        homeUrl="/"
      />

      <PrivacyPolicyContent />
 
      <Footer />
    </>
  )
}
