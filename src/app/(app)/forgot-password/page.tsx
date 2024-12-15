import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Forgot password"
        homeText="Home"
        homeUrl="/"
      />

      <ForgotPasswordForm />
 
      <Footer />
    </>
  )
}
