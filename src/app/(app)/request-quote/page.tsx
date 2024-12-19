import PageTitle from "@/components/Common/PageTitle";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Anketa from "@/components/Anketa/Anketa";
import { Metadata } from "next";
import { getPageMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("request-quote");
}

export default function Page() {
  return (
    <div className="full-bg-black-color">
      <Navbar />

      <PageTitle title="Анкета" homeText="Головна" homeUrl="/" />

      <div className="ptb-100">
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "36px",
              color: "white",
            }}
          >
            Заповнити анкету для прорахунку проєкту
          </h1>
          <Anketa />
        </div>
      </div>

      <Footer />
    </div>
  );
}
