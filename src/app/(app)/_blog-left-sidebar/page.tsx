import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import BlogLeftSidebar from "@/components/Blog/BlogLeftSidebar";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Blog Left Sidebar"
        homeText="Home"
        homeUrl="/"
      />

      <BlogLeftSidebar />
      
      <Footer />
    </>
  )
}
