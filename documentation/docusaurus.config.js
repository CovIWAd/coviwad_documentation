// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CovIWAd',
  tagline: 'Ensemble, éradicons le virus',
  url: 'https://coviwad.netlify.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CovIWAd', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/CovIWAd',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/CovIWAd',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CovIWAd',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/CovIWAd',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Fonctionnalités',
            items: [
              {
                label: 'Documents',
                to: '/documents',
              },
              {
                label: 'News',
                to: '/news',
              },
              {
                label: 'Geolocalisation',
                to: '/geolocation',
              },
            ],
          },
          {
            title: 'Services',
            items: [
              {
                label: 'Kafka',
                to: 'kafka',
              },
              {
                label: 'Keycloak',
                to: 'keycloak',
              },
              {
                label: 'Gateway',
                to: 'gateway',
              },
            ],
          },
          {
            title: 'Autres',
            items: [
              {
                label: 'Front',
                to: '/front',
              },
              {
                label: 'Structure',
                to: 'structure',
              },
              {
                label: 'Github',
                href: 'https://github.com/CovIWAd',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CovIWAd, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
