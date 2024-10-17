import { Metadata } from "next";

interface MetadataOptions {
  title: string;
  description?: string;
  url: string;
  ogImage?: string;
  siteName?: string;
  locale?: string;
  type?:
    | "website"
    | "article"
    | "book"
    | "profile"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other";
}

const MetaData = ({
  title,
  description = "",
  url,
  ogImage = "",
  siteName = "default-site-name",
  locale = "en-US",
  type = "website",
}: MetadataOptions): Metadata => {
  return {
    title: title,
    metadataBase: new URL(url),
    description: description,
    openGraph: {
      title: title,
      url: url,
      siteName: siteName,
      locale: locale,
      type: type,
      description: description,
      images: ogImage,
    },
    alternates: {
      canonical: url,
    },
  };
};

export default MetaData;
