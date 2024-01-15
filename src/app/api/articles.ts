import { Article } from "../types/article";

export const getArticleData = async (articleName: string | undefined): Promise<Article | undefined> => {
    if (!articleName) return undefined;
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*&filters[name][$eq]=${articleName}`);
    const data:any = await res.json();
    return data?.data[0];
}