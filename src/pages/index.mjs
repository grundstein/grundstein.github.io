export const state = {
  title: '@grundstein',
}

export const View = state => [
  Hero(state),

  div({ id: 'about' }, [
    EarlyBird(),

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
