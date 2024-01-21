import ImageUrlBuilder from "@sanity/image-url";
import { readClient } from "./client";

const builder = ImageUrlBuilder(readClient);

export function urlFor(source: any) {
  return builder.image(source);
}
