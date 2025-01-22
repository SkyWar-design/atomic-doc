import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Alt Atomic",
  description: "Test",
  base: '/atomic-doc/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/atomic-doc' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SkyWar-design/alt-atomic' }
    ]
  }
})
