import { headers } from "next/headers";
import Aritcleitem from "../Aricle/components/Aritcleitem";
import Styles from './category.module.css'
import { getCategoryArticles } from "@/app/api/articles";

const CategoryPage = async ({category}:any) => {
  const headersList = headers();
  const domain = headersList.get('host') || undefined;
  let categoryData:any = await getCategoryArticles(category, domain);
  categoryData = categoryData.filter((article:any) => article.attributes.sites.data.some((site:any) => site.attributes.domain === domain));

    return (
        <div className="main-article">
          {categoryData?.map((article: any) => {
            return (
              <a className={Styles["article-card"]} href={`${category}/${article.attributes.slug}`} key={article.id}>
                  <Aritcleitem item={article?.attributes?.Item[0]}/>
              </a>
            )
          })}

        </div>
    )
}

export default CategoryPage