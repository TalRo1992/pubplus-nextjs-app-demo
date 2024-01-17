import { Article, Site } from "../types/article";

export const getArticleData = async (articleName: string | undefined): Promise<Article | undefined> => {
    if (!articleName) return undefined;
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate[0]=Item&populate[1]=sites&populate[2]=sites.logo&populate[3]=sites.logo.media&populate[4]=primary_site&populate[5]=Author&populate[6]=sites.categories&filters[slug][$eq]=${articleName}`, { next: { revalidate: 3600 } });
    const data:any = await res.json();
    return data?.data[0];
}

export const getCategoryArticles = async (category: string | undefined, domain: string | undefined): Promise<Article[] | undefined> => {
    if (!category) return undefined;
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?&filters[category][slug][$eq]=${category}&populate=*`, { next: { revalidate: 3600 } });
    const data:any = await res.json();
    return data?.data;
}

export const getSiteMenuCategories = async (domain: string | null): Promise<Site | undefined> => {
    if (!domain) return undefined;
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/sites?filters[domain][$eq]=${domain}&fields[0]=domain&fields[1]=mainColor&populate[0]=categories&populate[1]=logo`, { next: { revalidate: 3600 } });
    const data:any = await res.json();
    return data?.data[0];
}