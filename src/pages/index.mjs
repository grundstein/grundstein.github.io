export const state = {
  title: '@grundstein',
}

export const View = state => [
  Hero(state),

  div({ id: 'about' }, [
    h2('early bird <3'),

    p(`
hello, you are here a bit early.
feel free to poke around,
but as long as this notice is here,
most documentation on this page will not be accurate (yet).
`),

    p(`
Since we do all development of this platform in the open, you are looking at a partially working minimum viable product here.
`),

    h3('What is working'),
    p([
      'Some services (',
      Link({ to: 'https://github.com/grundstein/gps', text: 'gps' }),
      ', ',
      Link({ to: 'https://github.com/grundstein/grs', text: 'grs' }),
      ', ',
      Link({ to: 'https://github.com/grundstein/gss', text: 'gss' }),
      ') work fine, and despite their warning labels, are in production on the ',
      Link({ to: 'https://artificialmuseum.com', text: 'Artificial Museum' }),
      ' platform since November of 2020, unfortunately the ',
      Link({ to: 'https://github.com/grundstein/cli', text: 'cli' }),
      ' and all other parts of the system setup are still work in progress.',
    ]),

    h1('grundstein?'),

    p('@grundstein is our approach to hosting infrastructure and maintenance.'),

    p('This is the entry page for the documentation. It is very much Work in Progress.'),

    p([
      '@grundstein is purpose built for the ',
      Link({ text: 'magic', to: 'https://magic.github.io' }),
      ' jamstack generator.',
    ]),

    h3('goals'),

    p('minimal dependencies on all layers, all services custom built.'),

    p('free (as in freedom) and open source toolchain.'),
  ]),
]
