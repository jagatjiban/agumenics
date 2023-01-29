import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "b1c247tx",
  dataset: "production",
  apiVersion: "v2021-10-21",
  useCdn: true,
  token:
    "sklJ4hdeMxStmN3kJ3DHNGclwoTnYy3CYKH7CTVIRFNq57g6CCK90z3rmovImPMTxgiKmdIBdKbGTCDWLsZqTKos2X1vz9V1pamHU5Uk5KLYz4zYUxE4Auqp6wziogmovlajESMoZN5QF7uwOR1V6186tNGFljmT10o4akO6v9u0azA2Mdpf",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
