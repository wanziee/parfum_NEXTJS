/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://chelsea-dewa-perfume.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 1.0,
  exclude: ['/server-api'],
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    else if (path.includes('/products')) priority = 0.9;
    else if (path.includes('/category')) priority = 0.8;
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const result = [];
    
    // Add dynamic product pages
    const products = [
      { slug: 'chelsea-dewa-premium', lastmod: '2025-01-28' },
      { slug: 'elegant-floral', lastmod: '2025-01-28' },
      { slug: 'woody-masculine', lastmod: '2025-01-28' },
      { slug: 'fresh-citrus', lastmod: '2025-01-28' },
      { slug: 'oriental-spice', lastmod: '2025-01-28' },
    ];
    
    for (const product of products) {
      result.push({
        loc: `/products/${product.slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: product.lastmod,
      });
    }
    
    return result;
  },
};
