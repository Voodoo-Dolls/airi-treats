import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: ["/"],
            disallow: ["/products/"]
        },
        sitemap: ["https://dminhvu.com/sitemap.xml"]
    };
}