import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import TagsContent from "@/components/Tags/TagsContent";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Tags"
        homeText="Home"
        homeUrl="/"
      />

      <TagsContent />
      
      <Footer />
    </>
  )
}
