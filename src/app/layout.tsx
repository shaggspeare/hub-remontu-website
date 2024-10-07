import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/animate.min.css";
import "remixicon/fonts/remixicon.css";
import "swiper/css/bundle";
import "react-accessible-accordion/dist/fancy-example.css";
import "../../public/css/flaticon_astle.css";
import "../../public/css/navbar.scss";
import "../../public/css/services-details.scss";
import "../../public/css/portfolio-details.scss";
import "../../public/css/blog-details.scss";
import "../../public/css/footer.scss";
// Globals Styles
import "../../public/css/style.scss";
// Globals Responsive Styles
import "../../public/css/responsive.scss";

import AosAnimation from "@/components/Layout/AosAnimation";
import BackToTop from "@/components/Layout/BackToTop";

import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hub Remontu",
  description: "Hub Remontu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}

        {/* AosAnimation */}
        <AosAnimation />

        {/* BackToTop */}
        <BackToTop />
      </body>
    </html>
  );
}
