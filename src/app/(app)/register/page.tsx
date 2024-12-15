import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import RegisterForm from "@/components/Auth/RegisterForm";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Register"
        homeText="Home"
        homeUrl="/"
      />

      <RegisterForm />
 
      <Footer />
    </>
  )
}
