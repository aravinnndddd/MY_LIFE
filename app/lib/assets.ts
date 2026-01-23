/**
 * Asset management utilities for portfolio customization
 */

// Default fallback images
export const defaultAssets = {
  heroBackground: '/Untitled_design__1_-removebg-preview.jpg',
  profilePhoto: '/headshot.jpg',
  projectPlaceholder: '/placeholder-profile-pic.png',
  logoPlaceholder: '/next.svg',
  companyPlaceholder: '/placeholder-profile-pic.png',
} as const;

/**
 * Get asset URL with fallback
 */
export function getAssetUrl(assetPath: string, fallback?: string): string {
  if (!assetPath) {
    return fallback || defaultAssets.projectPlaceholder;
  }
  
  // If it's already a full URL, return as-is
  if (assetPath.startsWith('http') || assetPath.startsWith('//')) {
    return assetPath;
  }
  
  // Ensure it starts with /
  return assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
}

/**
 * Get custom asset URL
 */
export function getCustomAsset(filename: string, subfolder?: string): string {
  const basePath = '/custom';
  const folder = subfolder ? `/${subfolder}` : '';
  return `${basePath}${folder}/${filename}`;
}

/**
 * Asset path helpers
 */
export const assetPaths = {
  // Custom asset directories
  custom: {
    images: (filename: string) => getCustomAsset(filename, 'images'),
    projects: (filename: string) => getCustomAsset(filename, 'projects'),
    timeline: (filename: string) => getCustomAsset(filename, 'timeline'),
    testimonials: (filename: string) => getCustomAsset(filename, 'testimonials'),
    logos: (filename: string) => getCustomAsset(filename, 'logos'),
    documents: (filename: string) => getCustomAsset(filename, 'documents'),
  },
  
  // Fallback to existing assets
  existing: {
    heroBackground: defaultAssets.heroBackground,
    profilePhoto: defaultAssets.profilePhoto,
    projectPlaceholder: defaultAssets.projectPlaceholder,
  }
};

/**
 * Validate if asset exists (client-side only)
 */
export async function validateAsset(assetUrl: string): Promise<boolean> {
  if (typeof window === 'undefined') return true; // Skip validation on server
  
  try {
    const response = await fetch(assetUrl, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get optimized image props for Next.js Image component
 */
export function getImageProps(src: string, alt: string, fallback?: string) {
  return {
    src: getAssetUrl(src, fallback),
    alt,
    // Add loading optimization
    loading: 'lazy' as const,
    // Add placeholder for better UX
    placeholder: 'blur' as const,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  };
}

/**
 * Technology logo mappings
 */
export const techLogos: Record<string, string> = {
  'react': '/frontend-logos/react.svg',
  'nextjs': '/frontend-logos/nextjs.svg',
  'typescript': '/frontend-logos/typescript.svg',
  'javascript': '/frontend-logos/javascript.svg',
  'nodejs': '/backend-logos/nodejs.svg',
  'python': '/backend-logos/python.svg',
  'postgresql': '/backend-logos/postgresql.svg',
  'mongodb': '/backend-logos/mongodb.svg',
  'aws': '/backend-logos/aws.svg',
  'docker': '/backend-logos/docker.svg',
  'git': '/backend-logos/git.svg',
  'github': '/backend-logos/github.svg',
  // Add more as needed
};

/**
 * Get technology logo URL
 */
export function getTechLogo(techName: string): string {
  const normalizedName = techName.toLowerCase().replace(/[.\s]/g, '');
  return techLogos[normalizedName] || defaultAssets.logoPlaceholder;
}