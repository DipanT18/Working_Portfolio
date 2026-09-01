// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity/live";
import { client } from './client'

const live =
  client === null
    ? {
        sanityFetch: async function sanityFetchFallback() {
          return { data: null };
        },
        SanityLive: function SanityLiveFallback() {
          return null;
        },
      }
    : defineLive({
        client,
      });

export const { sanityFetch, SanityLive } = live;
