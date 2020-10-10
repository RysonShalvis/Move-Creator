export const listOfAllTricks = {
    listOfTricks: [
    {
      name: 'frontflip',
      alias: false,
      recipe: false,
      
    },
    {
      name: 'backflip',
      alias: false,
      recipe: false,
    },
    {
      name: 'sideflip',
      alias: false,
      recipe: false,
    },
    {
      name: '180',
      alias: false,
      recipe: false,
    },
    {
      name: '360',
      alias: false,
      recipe: {
          trickOne: '180',
          trickTwo: '180'
      }, //option 1
    },
    {
      name: 'frontflip 180',
      alias: 'front half',
      recipe: 'frontflip' + '180', //option 2
    },
    {
      name: 'sideflip 360',
      alias: 'side full',
      recipe: 'sideflip + 360', //option 3
    }
  ]
}