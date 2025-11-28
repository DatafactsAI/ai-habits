/**
 * Attempts to fetch the Open Graph image URL from a given website URL
 * Falls back to null if unable to fetch or parse
 */
export async function fetchOGImage(url: string): Promise<string | null> {
  try {
    // Use a CORS proxy or direct fetch (may fail due to CORS)
    // For production, consider using a backend endpoint or service
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    
    const response = await fetch(proxyUrl);
    if (!response.ok) return null;
    
    const data = await response.json();
    const html = data.contents;
    
    // Parse HTML for og:image meta tag
    const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
    if (ogImageMatch && ogImageMatch[1]) {
      return ogImageMatch[1];
    }
    
    // Fallback to twitter:image
    const twitterImageMatch = html.match(/<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i);
    if (twitterImageMatch && twitterImageMatch[1]) {
      return twitterImageMatch[1];
    }
    
    return null;
  } catch (error) {
    console.warn(`Failed to fetch OG image for ${url}:`, error);
    return null;
  }
}






