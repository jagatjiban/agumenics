import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "cuhi91qq",
  dataset: "production",
  apiVersion: "2021-08-31",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
