import { Article, Site } from "../types/article";

export const getTermsOfService = async (): Promise<any | undefined> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/terms-of-service`, { next: { revalidate: 3600 } });
    const data:any = await res.json();
    return data?.data.attributes;
}

export const getPrivacyPolicy = async (): Promise<any | undefined> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/privacy-policy`, { next: { revalidate: 3600 } });
    const data:any = await res.json();
    return data?.data.attributes;
}