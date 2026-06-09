import fs from "fs";
import path from "path";

const pages = [
  {
    url: "/",
    title: "Home",
    description:
      "didehLabs is an AI systems and web engineering company focused on detecting and fixing revenue-killing issues in business websites using automation, performance diagnostics, and conversion optimization.",
  },
];

function generateLlmsTxt() {
  let llmsTxtContent = `# didehLabs\nAI systems for web performance, automation, and revenue intelligence.\n\n## Key Pages\n\n`;

  pages.forEach((page) => {
    llmsTxtContent += `### ${page.title}\n${page.description}\n- [${page.title}](${page.url})\n\n`;
  });

  const publicDir = path.join(process.cwd(), "public");
  const outputPath = path.join(publicDir, "llms.txt");

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, llmsTxtContent.trim());
}

generateLlmsTxt();
