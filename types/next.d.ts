// Temporary type declarations for Next.js
declare module 'next' {
  export interface Metadata {
    title?: string;
    description?: string;
    keywords?: string | string[];
    authors?: Array<{ name: string; url?: string }>;
    creator?: string;
    openGraph?: {
      title?: string;
      description?: string;
      url?: string;
      siteName?: string;
      images?: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
      }>;
      locale?: string;
      type?: string;
    };
    twitter?: {
      card?: string;
      title?: string;
      description?: string;
      creator?: string;
      images?: string[];
    };
    robots?: {
      index?: boolean;
      follow?: boolean;
      googleBot?: {
        index?: boolean;
        follow?: boolean;
        'max-video-preview'?: number;
        'max-image-preview'?: string;
        'max-snippet'?: number;
      };
    };
  }
}

declare module 'next/font/google' {
  export function Geist(options: {
    variable: string;
    subsets: string[];
  }): {
    variable: string;
  };

  export function Geist_Mono(options: {
    variable: string;
    subsets: string[];
  }): {
    variable: string;
  };

  export function Urbanist(options: {
    subsets: string[];
    weight: string[];
    variable: string;
  }): {
    variable: string;
  };
}