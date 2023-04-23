import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

type Config ={
    dataset: string;
    projectId: string;
    apiVersion: string;
    useCdn: boolean;
}

export const config: Config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);