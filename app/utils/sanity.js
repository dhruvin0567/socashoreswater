import { createClient } from 'next-sanity';

const projectId = 'd81n0880';
const dataset = 'production';
const apiVersion = '2025-11-07';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, 
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
  if (process.env.NODE_ENV === 'development') {
    console.log('getImageUrlFromSanityObject - input:', JSON.stringify(imageObject, null, 2));
  }

  if (!imageObject) {
    return null;
  }

  let asset = null;
  
  if (imageObject.image?.asset) {
    asset = imageObject.image.asset;
  }
  else if (imageObject.asset) {
    asset = imageObject.asset;
  }
  else if (imageObject._ref || imageObject._id || imageObject.url) {
    asset = imageObject;
  }

  if (!asset) {
    if (process.env.NODE_ENV === 'development') {
      console.log('No asset found in imageObject');
    }
    return null;
  }
  
  if (asset.url) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Using direct URL:', asset.url);
    }
    return asset.url;
  }

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
  
  const match = assetRef.match(/^image-([^-]+(?:-[^-]+)*)-(\d+x\d+)-(\w+)$/);
  
  if (!match) {
    const parts = assetRef.replace('image-', '').split('-');
    if (parts.length >= 3) {
      const dimensions = parts[parts.length - 2];
      const format = parts[parts.length - 1];
      const imageId = parts.slice(0, -2).join('-');
      
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
  
  const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}-${dimensions}.${format}`;
  
  if (process.env.NODE_ENV === 'development') {
    console.log('Built URL:', imageUrl);
  }
  
  return imageUrl;
}

