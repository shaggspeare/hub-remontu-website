import { notFound } from "next/navigation";
import Head from "next/head";
import { getPayload } from "payload";
import config from "@payload-config";
import { componentMap } from "@/utils/componentMap";

export default async function Page({ params }: any) {
  const { slug } = await params;

  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "pages",
    where: {
      slug: { equals: slug },
    },
  });

  if (!docs?.length) {
    notFound();
  }

  const page = docs[0];

  return (
    <main>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.metaDescription} />
        <meta
          property="og:title"
          content={page.ogTags?.ogTitle || page.title}
        />
        <meta
          property="og:description"
          content={page.ogTags?.ogDescription || ""}
        />
        <meta
          property="og:image"
          content={JSON.stringify(page.ogTags?.ogImage)}
        />
      </Head>

      <div className="full-bg-black-color">
        {page?.layout?.map((block: any, index: number) => {
          const Component = componentMap[block.component];
          if (!Component) return null;

          return <Component key={index} {...block.props} />;
        })}
      </div>
    </main>
  );
}
