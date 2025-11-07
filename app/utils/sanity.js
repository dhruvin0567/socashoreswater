import { createClient } from 'next-sanity';

const projectId = 'd81n0880';
const dataset = 'production';
const apiVersion = '2025-11-07';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to true if you want to use CDN
});

/**
 * Fetch data from Sanity
 * @param {string} query - GROQ query string
 * @param {string} perspective - 'published' or 'drafts' (default: 'published')
 * @returns {Promise<any>} - The fetched data
 */
export async function fetchSanityData(query, perspective = 'published') {
  try {
    const data = await client.fetch(query, {}, { perspective });
    return data;  
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    throw error;
  }
}

/**
 * Get image URL from Sanity image object
 * @param {Object} imageObject - Sanity image object with asset reference
 * @param {Object} options - Image transformation options (width, height, etc.)
 * @returns {string} - Image URL
 */
export function getImageUrlFromSanityObject(imageObject, options = {}) {
  // Debug logging
  if (process.env.NODE_ENV === 'development') {
    console.log('getImageUrlFromSanityObject - input:', JSON.stringify(imageObject, null, 2));
  }

  if (!imageObject) {
    return null;
  }

  // Handle different possible structures
  let asset = null;
  
  // Case 1: imageObject.image.asset (nested structure)
  if (imageObject.image?.asset) {
    asset = imageObject.image.asset;
  }
  // Case 2: imageObject.asset (direct structure)
  else if (imageObject.asset) {
    asset = imageObject.asset;
  }
  // Case 3: imageObject is the asset itself
  else if (imageObject._ref || imageObject._id || imageObject.url) {
    asset = imageObject;
  }

  if (!asset) {
    if (process.env.NODE_ENV === 'development') {
      console.log('No asset found in imageObject');
    }
    return null;
  }
  
  // If URL is directly available, use it
  if (asset.url) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Using direct URL:', asset.url);
    }
    return asset.url;
  }

  // Otherwise, build URL from reference
  const assetRef = asset._ref;
  
  if (!assetRef) {
    if (process.env.NODE_ENV === 'development') {
      console.log('No _ref found in asset');
    }
    return null;
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('Building URL from assetRef:', assetRef);
  }
  
  // Extract image ID and dimensions from reference
  // Format: image-{hash}-{width}x{height}-{format}
  // Example: image-1930b3129d00f05e00fda53c1fdadf75585e640b-1891x614-png
  const match = assetRef.match(/^image-([^-]+(?:-[^-]+)*)-(\d+x\d+)-(\w+)$/);
  
  if (!match) {
    // Fallback: try simpler parsing
    const parts = assetRef.replace('image-', '').split('-');
    if (parts.length >= 3) {
      const dimensions = parts[parts.length - 2];
      const format = parts[parts.length - 1];
      const imageId = parts.slice(0, -2).join('-');
      
      // Build the Sanity CDN URL
      const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}-${dimensions}.${format}`;
      if (process.env.NODE_ENV === 'development') {
        console.log('Built URL (fallback method):', imageUrl);
      }
      return imageUrl;
    }
    if (process.env.NODE_ENV === 'development') {
      console.log('Could not parse assetRef:', assetRef);
    }
    return null;
  }

  const [, imageId, dimensions, format] = match;
  
  // Build the Sanity CDN URL
  // Format: https://cdn.sanity.io/images/{projectId}/{dataset}/{imageId}-{width}x{height}.{format}
  const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}-${dimensions}.${format}`;
  
  if (process.env.NODE_ENV === 'development') {
    console.log('Built URL:', imageUrl);
  }
  
  return imageUrl;
}

