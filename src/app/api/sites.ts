export const getPubplusSites = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/sites?populate=*`);
    const data = await res.json();
    return data;
}