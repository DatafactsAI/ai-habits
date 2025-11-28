import { useState, useEffect } from 'react';
import { fetchOGImage } from '@/lib/og-image';

/**
 * Hook to fetch and cache Open Graph images
 */
export function useOGImage(url: string | undefined): string | null {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!url) {
      setIsLoading(false);
      return;
    }

    // Check cache first (sessionStorage)
    const cacheKey = `og-image-${url}`;
    const cached = sessionStorage.getItem(cacheKey);
    
    if (cached) {
      setImageUrl(cached);
      setIsLoading(false);
      return;
    }

    // Fetch OG image
    setIsLoading(true);
    fetchOGImage(url)
      .then((ogImage) => {
        if (ogImage) {
          setImageUrl(ogImage);
          sessionStorage.setItem(cacheKey, ogImage);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [url]);

  return imageUrl;
}






