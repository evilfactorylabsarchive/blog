module.exports = {
  title: 'evilfactorylabs blog',
  tagline: 'Modern web technologies R&D team',
  url: 'https://evilfactory.id/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'evilfactorylabs',
  projectName: 'blog',
  themeConfig: {
    navbar: {
      title: 'evilfactorylabs',
      links: [{ to: 'blog', label: 'Blog', position: 'left' }]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'evilfactory',
          items: [
            {
              label: 'Tentang',
              to: 'https://evilfactory.id'
            },
            {
              label: 'Inside',
              to: 'https://inside.evilfactory.id'
            },
            {
              label: 'Playground',
              to: 'https://playground.evilfactory.id'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              to: 'https://twitter.com/evilfactorylabs'
            },
            {
              label: 'GitHub',
              to: 'https://github.com/evilfactorylabs'
            },
            {
              label: 'Medium',
              to: 'https://medium.com/evilfactorylabs'
            }
          ]
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'hello@evilfactory.id',
              to: ''
            },
            {
              label: 'PGP',
              to: 'https://git.io/evilfactory-pgp'
            }
          ]
        }
      ],
      logo: {
        alt: 'evilfactorylabs',
        src: '/img/evilfactorylabs.png'
      },
      copyright: `Copyright © ${new Date().getFullYear()} evilfactorylabs. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
