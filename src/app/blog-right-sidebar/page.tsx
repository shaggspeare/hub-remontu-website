import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import BlogRightSidebar from "@/components/Blog/BlogRightSidebar";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Blog Right Sidebar"
        homeText="Home"
        homeUrl="/"
      />

      <BlogRightSidebar />
      
      <Footer />
    </>
  )
}
