import React from "react";
import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
};

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
}: SEOProps) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Head>
  );
}
