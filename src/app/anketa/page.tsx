import PageTitle from "@/components/Common/PageTitle";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Anketa from "@/components/Anketa/Anketa";

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar />

      <PageTitle title="Contact Us" homeText="Home" homeUrl="/" />

      <div className="ptb-100">
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "16px",
              color: "white",
            }}
          >
            Анкета
          </h1>
          <Anketa />
        </div>
      </div>

      <Footer />
    </div>
  );
}
