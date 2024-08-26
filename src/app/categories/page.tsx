import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import CategoriesContent from "@/components/Categories/CategoriesContent";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Categories"
        homeText="Home"
        homeUrl="/"
      />

      <CategoriesContent />
      
      <Footer />
    </>
  )
}
