import fs from "fs";
import path from "path";

const baseUrl = "https://www.didehlabs.com.ng";

const staticPages = [{ url: "/", changefreq: "weekly", priority: "1.0" }];

function generateSitemap() {
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  const today = new Date().toISOString().split("T")[0];

  staticPages.forEach((page) => {
    sitemapXml += `  <url>\n`;
    sitemapXml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    sitemapXml += `    <lastmod>${today}</lastmod>\n`;
    sitemapXml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemapXml += `    <priority>${page.priority}</priority>\n`;
    sitemapXml += `  </url>\n`;
  });

  sitemapXml += `</urlset>`;

  const publicDir = path.join(process.cwd(), "public");

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml);
}

generateSitemap();
