export const View = () =>
  svg({ class: 'Bird', viewBox: '0 0 839 839', height: '10em', width: '10em' }, [
    path({
      d: 'M431 536a550 550 0 00392 159c8 0 13-9 8-16-51-69-260-339-454-453 20-12 36-31 46-52l46-18c7-2 9-11 3-16l-41-40C408 40 357 0 307 0h-1C123 49 91 268 180 392c12 67 53 182 184 234 24 9 46 17 68 23v106H0v84h840v-84H508c2-37 40-87 39-87-142-98-223-206-224-347 10 82 58 164 108 215zM347 71a25 25 0 010 50c-14-1-24-12-25-25 1-14 14-25 25-25z',
    }),
  ])

export const style = vars => ({
  height: '5em',
  width: '5em',
  padding: '3em',
  background: vars.primary.neutral,

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    float: 'right',
    height: '10em',
    margin: '0 0 1em 2em',
    width: '10em',
  },
})
