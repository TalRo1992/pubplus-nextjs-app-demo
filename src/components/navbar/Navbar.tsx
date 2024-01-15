import { Article } from "@/app/types/article";
import Links from "./links/links"
import Styles from './navbar.module.css'
import { getArticleData } from "@/app/api/articles";
import { headers } from "next/headers";
const Navbar = async () => {
    const headersList = headers();
    const url = headersList.get('x-url');
    const articleName = url?.split('/')[3];
    const articleData:Article = await getArticleData(articleName) as Article;
    const domain = headersList.get('host');

    const articleAttributes = articleData?.attributes;
    const mainColor = articleAttributes?.primary_site?.data.attributes?.mainColor;
    console.log(articleData, 'from navbar')
    return (
        <div className={Styles.container} style={{background: mainColor}}>
            <img src="https://d1k5f0ama23ui4.cloudfront.net/wp-content/uploads/2020/02/25095233/logo_footer1.png" width={150} className={Styles.logo}/>
            <Links/>
        </div>
    )
}

export default Navbar