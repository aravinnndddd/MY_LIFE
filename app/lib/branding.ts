import { BrandingConfig } from '../config/portfolio';

/**
 * Apply branding configuration to CSS custom properties
 */
export function applyBrandingTheme(branding: BrandingConfig) {
  if (typeof document === 'undefined') return; // Skip on server-side

  const root = document.documentElement;
  
  // Apply color theme
  root.style.setProperty('--color-primary', branding.primaryColor);
  root.style.setProperty('--color-secondary', branding.secondaryColor);
  root.style.setProperty('--color-accent', branding.accentColor);
  root.style.setProperty('--background', branding.backgroundColor);
  root.style.setProperty('--foreground', branding.textColor);
  
  // Update legacy color variables for compatibility
  root.style.setProperty('--color-customBlue', branding.primaryColor);
  root.style.setProperty('--color-neon-green', branding.primaryColor);
  root.style.setProperty('--color-sand', branding.textColor);
  root.style.setProperty('--color-customBlack', branding.backgroundColor);
  
  // Apply font family if specified
  if (branding.fontFamily) {
    root.style.setProperty('--font-heading', branding.fontFamily);
  }
}

/**
 * Get CSS custom property value
 */
export function getCSSCustomProperty(property: string): string {
  if (typeof document === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(property);
}

/**
 * Generate CSS variables object for inline styles
 */
export function generateCSSVariables(branding: BrandingConfig): Record<string, string> {
  return {
    '--color-primary': branding.primaryColor,
    '--color-secondary': branding.secondaryColor,
    '--color-accent': branding.accentColor,
    '--background': branding.backgroundColor,
    '--foreground': branding.textColor,
    '--color-customBlue': branding.primaryColor,
    '--color-neon-green': branding.primaryColor,
    '--color-sand': branding.textColor,
    '--color-customBlack': branding.backgroundColor,
  };
}

/**
 * Neon Green Theme Preset
 */
export const neonGreenTheme: BrandingConfig = {
  primaryColor: '#00ff41',      // Neon green
  secondaryColor: '#808080',    // Gray
  accentColor: '#00ff41',       // Neon green
  backgroundColor: '#000000',   // Black
  textColor: '#ffffff',         // White
  fontFamily: 'Urbanist',
};

/**
 * Additional theme presets
 */
export const themePresets = {
  neonGreen: neonGreenTheme,
  classic: {
    primaryColor: '#2e54d1',
    secondaryColor: '#c4b9a5',
    accentColor: '#2e54d1',
    backgroundColor: '#0e0e0e',
    textColor: '#c4b9a5',
    fontFamily: 'Urbanist',
  },
  cyberpunk: {
    primaryColor: '#ff0080',
    secondaryColor: '#00ffff',
    accentColor: '#ff0080',
    backgroundColor: '#000000',
    textColor: '#ffffff',
    fontFamily: 'Urbanist',
  },
  minimal: {
    primaryColor: '#000000',
    secondaryColor: '#666666',
    accentColor: '#000000',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    fontFamily: 'Urbanist',
  }
} as const;