module.exports = {
  title: 'Useweb Dev Blog',
  description: 'Blog Useweb Dev',
  locales: {
    '/': {
      lang: 'fr-FR', // this will be set as the lang attribute on <html>
    },
  },
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/useweb-dev',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://www.useweb.fr/mentions-legales',
        },
        {
          text: 'Useweb | Copyright © 2020',
          link: 'https://www.useweb.fr',
        },
      ],
    },
  },
}
