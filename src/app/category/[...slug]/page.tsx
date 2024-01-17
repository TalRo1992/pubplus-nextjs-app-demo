
import React from 'react';

import { getArticleData, getCategoryArticles } from '../../api/articles';
import ArticlePage from '@/components/Aricle/ArticlePage';
import CategoryPage from '@/components/Category/CategoryPage';

const MainPage = async ({ params }: { params: { slug: string } }) => {

    const articleName = params.slug.length > 1 ? params.slug[params.slug.length - 1] : null;
    const category = params.slug.length === 1 ? params.slug[0] : null;
    const pageType = articleName ? 'article' : 'category';

    return (
      <>
        { pageType === 'article' && <ArticlePage articleName={articleName}/>}
        { pageType === 'category' && <CategoryPage category={category}/>}
      </>
  );
};

export default MainPage;
