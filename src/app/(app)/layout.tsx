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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WBNG36TB');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DB220HDS6Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DB220HDS6Y');
          `}
        </Script>

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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBNG36TB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}

        {/* AosAnimation */}
        <AosAnimation />

        {/* BackToTop */}
        <BackToTop />
      </body>
    </html>
  );
}
