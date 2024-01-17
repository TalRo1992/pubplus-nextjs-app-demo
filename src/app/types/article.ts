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
  interface SiteLogo {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      formats: string;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string;
      provider: string;
      provider_metadata: string;
      createdAt: string;
      updatedAt: string;
    };
  }

  interface Category {
    id: number;
    attributes: {
      category: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }

  export interface Site {
    id: number;
    attributes: {
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      domain: string;
      mainColor: string;
      logo: {
        data: SiteLogo;
      };
      categories: {
        data: Category[];
      };
    };
  };


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
  