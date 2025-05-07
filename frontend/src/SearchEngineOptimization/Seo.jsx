import { useEffect } from "react";

const setMeta = (name, content, attr = "name") => {
  let element = document.head.querySelector(`[${attr}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const SEO = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  twitterCard = "summary_large_image",
  twitterSite,
  twitterCreator,
}) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta Description
    if (description) {
      setMeta("description", description);
    }

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // Open Graph
    if (ogTitle) setMeta("og:title", ogTitle, "property");
    if (ogDescription) setMeta("og:description", ogDescription, "property");
    if (ogImage) setMeta("og:image", ogImage, "property");

    // Twitter
    if (twitterCard) setMeta("twitter:card", twitterCard);
    if (twitterSite) setMeta("twitter:site", twitterSite);
    if (twitterCreator) setMeta("twitter:creator", twitterCreator);
  }, [
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    twitterCard,
    twitterSite,
    twitterCreator,
  ]);

  return null;
};

export default SEO;
