import PageTitle from "@/components/Common/PageTitle";
import TeamMember from "@/components/Team/TeamMember";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar />

      <PageTitle 
        title="Team"
        homeText="Home"
        homeUrl="/"
      />

      <TeamMember />
 
      <Footer />
    </div>
  )
}
