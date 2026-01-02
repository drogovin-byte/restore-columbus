import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Mock the data import since we can't easily import TS files in Node directly without compilation
// In a real build pipeline, we'd import from the compiled source or use ts-node
// For this script, we'll extract the IDs/slugs directly from the source file content
// to avoid complex TS compilation setup for a simple script

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE_PATH = path.join(__dirname, '../client/src/lib/data.ts');
const PUBLIC_DIR = path.join(__dirname, '../client/public');
const BASE_URL = 'https://restore-columbus.manus.space';

// Helper to extract IDs/slugs from data.ts content using regex
function extractIds(content, arrayName, idField = 'id') {
  const regex = new RegExp(`export const ${arrayName} = \\[([\\s\\S]*?)\\];`, 'm');
  const match = content.match(regex);
  if (!match) return [];
  
  const arrayContent = match[1];
  const idRegex = new RegExp(`${idField}:\\s*"([^"]+)"`, 'g');
  const ids = [];
  let idMatch;
  
  while ((idMatch = idRegex.exec(arrayContent)) !== null) {
    ids.push(idMatch[1]);
  }
  
  return ids;
}

async function generateSitemap() {
  try {
    console.log('Reading data source...');
    const dataContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
    
    // Extract dynamic routes
    const serviceIds = extractIds(dataContent, 'services', 'id');
    const comparisonSlugs = extractIds(dataContent, 'comparisons', 'slug');
    const blogSlugs = extractIds(dataContent, 'blogPosts', 'slug');
    const problemIds = extractIds(dataContent, 'problemStates', 'id');
    
    console.log(`Found:
    - ${serviceIds.length} services
    - ${comparisonSlugs.length} comparisons
    - ${blogSlugs.length} blog posts
    - ${problemIds.length} problem states`);

    // Define static routes with priority and changefreq
    const staticRoutes = [
      { url: '/', changefreq: 'daily', priority: '1.0' },
      { url: '/services', changefreq: 'weekly', priority: '0.9' },
      { url: '/comparisons', changefreq: 'weekly', priority: '0.9' },
      { url: '/blog', changefreq: 'weekly', priority: '0.8' },
      { url: '/locations', changefreq: 'monthly', priority: '0.9' },
      { url: '/faq', changefreq: 'monthly', priority: '0.7' },
      { url: '/memberships', changefreq: 'monthly', priority: '0.8' },
      { url: '/quiz', changefreq: 'monthly', priority: '0.6' },
    ];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Add static routes
    staticRoutes.forEach(route => {
      sitemap += `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
    });

    // Add Service routes
    serviceIds.forEach(id => {
      sitemap += `  <url>
    <loc>${BASE_URL}/service/${id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    });

    // Add Comparison routes
    comparisonSlugs.forEach(slug => {
      sitemap += `  <url>
    <loc>${BASE_URL}/comparison/${slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    });

    // Add Blog routes
    blogSlugs.forEach(slug => {
      sitemap += `  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    });

    // Add Problem routes
    problemIds.forEach(id => {
      sitemap += `  <url>
    <loc>${BASE_URL}/problem/${id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    });

    sitemap += `</urlset>`;

    // Write sitemap.xml
    const outputPath = path.join(PUBLIC_DIR, 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log(`✅ Sitemap generated successfully at ${outputPath}`);
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
