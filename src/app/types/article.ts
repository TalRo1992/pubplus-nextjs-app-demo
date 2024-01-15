interface ImageItem {
    id: number;
    image_url: string;
    caption_url: string | null;
    caption_description: string;
    title: string;
    post_image_text: string;
    pre_image_text: string;
    type: string;
  }
  
  export interface Site {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      domain: string;
      mainColor: string
    };
  }

  export interface Author {
    id: number;
    attributes: {
      username: string;
      email: string;
      provider: string;
      confirmed: boolean;
      blocked: boolean;
      createdAt: string;
      updatedAt: string;
    };
  }
  
  export interface Article {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      Author: {
        data: Author;
      };
      Title: string;
      main_site: string;
      name: string;
      Item: ImageItem[];
      sites: {
        data: Site[];
      };
      primary_site: {
        data: Site;
      };
    };
  }
  
  interface PaginationMeta {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  }
  
  export interface AricleResponse {
    data: Article[];
    meta: PaginationMeta;
  }
  