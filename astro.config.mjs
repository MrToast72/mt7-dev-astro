import { defineConfig } from 'astro/config';
import markdoc from "@astrojs/markdoc";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  outDir: '/websites/mt7-astro',
  markdown: {
    syntaxHighlight: 'prism'
    // shikiConfig: {
    //   // Choose from Shiki's built-in themes (or add your own)
    //   // https://github.com/shikijs/shiki/blob/main/docs/themes.md
    //   theme: 'css-variables',
    //   // Add custom languages
    //   // Note: Shiki has countless langs built-in, including .astro!
    //   // https://github.com/shikijs/shiki/blob/main/docs/languages.md
    //   // langs: ['c', 'cpp', 'csharp', 'css', 'dockerfile', 'go', 'html', 'java', 'javascript', 'json', 'kotlin', 'markdown', 'php', 'python', 'rust', 'sql', 'swift', 'typescript', 'yaml'],
    //   // Enable word wrap to prevent horizontal scrolling
    //   wrap: true
    // }
  },

  integrations: [markdoc(), compress()]
});