import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import LoginForm from "@/components/Auth/LoginForm";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Login"
        homeText="Home"
        homeUrl="/"
      />

      <LoginForm />
 
      <Footer />
    </>
  )
}
