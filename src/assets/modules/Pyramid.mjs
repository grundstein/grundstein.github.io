export const View = () => {
  const lightgrey = '#d8d8d8'
  const darkgrey = '#212121'
  const yellow = '#f09d09'

  return div({ class: 'Pyramid' }, [
    svg({ viewBox: '0 0 500 500' }, [
      circle({ cy: '150', cx: '250', r: '150', fill: yellow }),
      path({ d: 'M344 189L250 27l-19 32-75 130z', fill: lightgrey }),
      path({
        d:
          'M342 195H157c-6-1-9-7-6-12l92-160c3-4 10-4 14 0l92 160c3 5 0 12-7 12zm-172-16h160L250 42z',
        fill: darkgrey,
      }),
      path({
        d: 'M288 135s-19-26-40-26c-23 0-39 26-39 26s16 25 39 25c21 0 40-25 40-25z',
        fill: yellow,
      }),
      path({
        d: 'M256 135c2 4-1 10-8 10-6 0-9-6-7-10-2-6 1-11 7-11 7 0 10 5 8 11z',
        fill: darkgrey,
      }),
      path({
        d:
          'M247 165c-25 0-44-27-44-28-2-3-2-7 0-9 0-1 19-27 44-27 26 0 45 26 46 27 2 2 2 6 0 9-1 1-20 28-46 28zm-28-32c5 6 17 17 28 17 13 0 25-11 30-17-6-7-18-17-30-17-11 0-23 11-28 17z',
        fill: darkgrey,
      }),
      path({ d: 'M368 242H132L11 497l480-4z', fill: lightgrey }),
      path({ d: 'M108 411H56l-36 73 88 1z', fill: yellow }),
      path({
        d:
          'M121 223C1 488 41 403 1 489c-2 7 1 14 7 14h485c5 0 9-9 7-14L378 223H121zm13 20h35v39h-54zm52 0h125v39H186zm142 0h39l17 39h-56zm-220 59h133v38H89zm148 0h137l18 38H256zM80 358l89 1v38H62zm106 1h125v38H186zm142 0h93l17 38H328zm119 56l32 68H21l32-66h47v67c1 14 14 9 14 0v-67h127v48c1 13 15 10 15 0v-48h134v48c2 13 16 10 16 0v-48z',
        fill: darkgrey,
      }),
    ]),
  ])
}

export const style = {
  svg: {
    height: '1.7em',
    width: '1.7em',
  },
}
