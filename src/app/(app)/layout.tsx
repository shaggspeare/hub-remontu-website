import "bootstrap/dist/css/bootstrap.min.css";
import "../../../public/css/animate.min.css";
import "remixicon/fonts/remixicon.css";
import "swiper/css/bundle";
// import "react-accessible-accordion/dist/fancy-example.css";
import "../../../public/css/flaticon_astle.css";
import "../../../public/css/navbar.scss";
import "../../../public/css/services-details.scss";
import "../../../public/css/portfolio-details.scss";
import "../../../public/css/blog-details.scss";
import "../../../public/css/footer.scss";
// Globals Styles
import "../../../public/css/style.scss";
// Globals Responsive Styles
import "../../../public/css/responsive.scss";

import AosAnimation from "@/components/Layout/AosAnimation";
import BackToTop from "@/components/Layout/BackToTop";
import Script from "next/script";

import { Geologica } from "next/font/google";

const font = Geologica({ subsets: ["cyrillic", "latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1387205899141887');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="facebook pixel"
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1387205899141887&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={font.className}>
        {children}

        {/* AosAnimation */}
        <AosAnimation />

        {/* BackToTop */}
        <BackToTop />
      </body>
    </html>
  );
}
