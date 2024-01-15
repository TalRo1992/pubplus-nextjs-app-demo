
import React from 'react';
import Aritcleitem from '@/components/Aricle/components/Aritcleitem';
import { headers } from "next/headers";
import { notFound } from 'next/navigation'

import { getArticleData } from '../api/articles';
import { Article, Author } from '../types/article';

const Home = async () => {
  const headersList = headers();
    const url = headersList.get('x-url');
    const articleName = url?.split('/')[3];
    const domain = headersList.get('host');

    const articleData:Article = await getArticleData(articleName) as Article;
    const articleAttributes = articleData?.attributes;

    const available_site = articleAttributes?.sites.data.some((site: any) => site.attributes.domain === domain);
    const primarySite = articleAttributes?.primary_site?.data.attributes?.domain;
    const isPrimarySite = primarySite === domain;
    const author:Author = articleAttributes?.Author.data;
    
    if(!available_site ) {
      return notFound()
    }

    return (
      <>
        {articleAttributes && <div className="main-article">
          <div>
            <h1 >{articleAttributes?.Title}</h1>
            {author.attributes?.username && <p className='article-author'>By {author.attributes?.username}- {articleAttributes?.publishedAt}</p>}
            {!isPrimarySite && (<p className='syndication-article'>This article appeared in <a href={primarySite} target='_blank'>{primarySite}</a> and has been published here with permission.</p>)}
          </div>
          
          {articleAttributes.Item.map((item: any) => {
            return (
              <Aritcleitem item={item} key={item.id}/>
            )
          })}

        </div>}
    </>
  );
};

export default Home;
