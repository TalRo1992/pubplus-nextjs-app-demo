import { headers } from "next/headers";
import Aritcleitem from "./components/Aritcleitem"
import { notFound } from "next/navigation";
import { getArticleData } from "@/app/api/articles";

const ArticlePage = async ({articleName}:any) => {
    const headersList = headers();
    const domain = headersList.get('host');
    const articleData = await getArticleData(articleName);
    const articleAttributes = articleData?.attributes;
    const available_site = articleAttributes?.sites?.data.some((site: any) => site.attributes.domain === domain);
    if(!available_site){
      return notFound();
    }
    const primarySite = articleAttributes?.primary_site?.data?.attributes?.domain;
    const isPrimarySite = primarySite === domain;
    const author = articleAttributes?.Author?.data?.attributes?.username;
    return (  
        <div className="main-article">
          <div>
            <h1 >{articleAttributes?.Title}</h1>
            {author && <p className='article-author'>By {author}- {articleAttributes?.publishedAt}</p>}
            {!isPrimarySite && (<p className='syndication-article'>This article appeared in <a href={primarySite} target='_blank'>{primarySite}</a> and has been published here with permission.</p>)}
          </div>
          
          {articleAttributes?.Item.map((item: any) => {
            return (
              <Aritcleitem item={item} key={item.id}/>
            )
          })}
        </div>
    )
}

export default ArticlePage