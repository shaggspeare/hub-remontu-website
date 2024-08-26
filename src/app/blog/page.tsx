import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import BlogGridPost from "@/components/Blog/BlogGridPost";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Blog"
        homeText="Home"
        homeUrl="/"
      />

      <BlogGridPost />
 
      <Footer />
    </>
  )
}
