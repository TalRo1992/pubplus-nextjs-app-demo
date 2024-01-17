import { Site } from "@/app/types/article";
import Links from "./links/links"
import Styles from './navbar.module.css'
import { getSiteMenuCategories } from "@/app/api/articles";
import { headers } from "next/headers";
const Navbar = async () => {

    const headersList = headers();    
    const domain:string | null = headersList.get('host');

    const currentSite: Site = await getSiteMenuCategories(domain) as Site;
    const currentSiteAttributes = currentSite?.attributes;

    const mainColor = currentSiteAttributes?.mainColor;
    const siteLogo = currentSiteAttributes.logo?.data?.attributes.url;
    const logoUrl = siteLogo && `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${siteLogo}`; // TODO: SHOULD BE FROM s3

    const categories = currentSiteAttributes.categories ? currentSiteAttributes.categories?.data.map((category: any) => {
        return {
            title: category?.attributes?.category,
            path: `/category/${category?.attributes?.slug}`,
            slug: category?.attributes?.slug,
        }
    }) : [];

    return (
        <div className={Styles.container} style={{background: mainColor}}>
            {logoUrl && <a href="/"><img src={logoUrl} width={150} className={Styles.logo}/></a>}
            <Links categories={categories}/>
        </div>
    )
}

export default Navbar