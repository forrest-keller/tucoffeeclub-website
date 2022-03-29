import Head from "next/head";
import { FunctionComponent } from "react";

export interface SEOProps {
  title?: string;
  titleBase?: string;
  description: string;
}

const SEO: FunctionComponent<SEOProps> = ({
  title,
  titleBase = "Trinity University Coffee Club",
  description,
}) => {
  return (
    <Head>
      <title>
        {title === undefined ? titleBase : `${title} - ${titleBase}`}
      </title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        href="/favicon_light.ico"
        media="(prefers-color-scheme:no-preference)"
      />
      <link
        rel="icon"
        href="/favicon_dark.ico"
        media="(prefers-color-scheme:dark)"
      />
      <link
        rel="icon"
        href="/favicon_light.ico"
        media="(prefers-color-scheme:light)"
      />
    </Head>
  );
};

export default SEO;
