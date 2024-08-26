import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import TeamMember from "@/components/Team/TeamMember";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageTitle 
        title="Team"
        homeText="Home"
        homeUrl="/"
      />

      <TeamMember />
 
      <Footer />
    </>
  )
}
