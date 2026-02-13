import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: Record<string, any>;
  type?: "website" | "article" | "localBusiness";
  image?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  schema,
  type = "website",
  image = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663273219915/KRQPZRscKLxTsuog.jpg"
}: SEOProps) {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Restore Hyper Wellness Columbus`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Open Graph Tags
    const updateMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:type', type);
    updateMeta('og:image', image);
    updateMeta('og:url', window.location.href);

    // Update Canonical Link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Inject JSON-LD Schema
    if (schema) {
      let script = document.querySelector('#dynamic-schema');
      if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-schema';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

    return () => {
      // Cleanup schema on unmount
      const script = document.querySelector('#dynamic-schema');
      if (script) script.textContent = '';
    };
  }, [title, description, canonical, schema, type, image]);

  return null;
}
