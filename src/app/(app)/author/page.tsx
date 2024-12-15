import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import AuthorContent from "@/components/Author/AuthorContent";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Author"
        homeText="Home"
        homeUrl="/"
      />

      <AuthorContent />
      
      <Footer />
    </>
  )
}
