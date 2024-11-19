import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle"; 
import GalleryImage from "@/components/Gallery/GalleryImage";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Gallery"
        homeText="Home"
        homeUrl="/"
      />
 
      <GalleryImage galleryImageData={[]}/>
 
      <Footer />
    </>
  )
}
