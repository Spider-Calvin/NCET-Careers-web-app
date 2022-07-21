import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ngoxqt7j",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skSk4TdqdqTQUV6ZYkjn7s0Qzlj6LnVSdRenqyyqE1o4WwKbLxpc2H00CcbtE07sM1IbyJQLPXBRxXaiSKaWRbFfa6EfN9q7JfgueIxeRo66cJrSTG4Xtj247loXTnKGAuCpmzkt1J7vx4zkql8zjtumGlo5lpZChPn17YxlQcutmJOgvwyC",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
