export const state = {
  title: '@grundstein',

  branding: ['@grund', 'stein'],
  description: 'the wise build their house on a rock. hosting without hassle.',

  seo: {
    name: '@grundstein',
    url: `https://grundstein.github.io/`,
    about: 'the wise build their house on a rock. hosting without hassle.',
    image: `https://grundstein.github.io/grundstein-preview.jpg`,
    author: {
      '@type': 'person',
      name: 'Jascha Ehrenreich',
      jobTitle: 'Technomancer',
      image: 'https:/jaeh.at/img/jascha.ehrenreich.jpg',
      url: 'https://jaeh.at',
    },
  },

  menu: [
    { to: '/', text: 'about' },
    { to: '/getting-started/', text: 'getting started' },
  ],
}
