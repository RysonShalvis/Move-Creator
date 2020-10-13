export const listOfAllTricks = {
    listOfTricks: [
    {
      name: 'sideflip',
      alias: false,
      recipe: false,
      
    },
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
      name: '180',
      alias: false,
      recipe: false,
    },
    {
      name: 'double sideflip',
      alias: 'dub side',
      recipe: ['sideflip','sideflip']
    },
    {
      name: 'sideflip 180',
      alias: 'side half',
      recipe: ['sideflip','180'],
    },
    {
      name: '360',
      alias: false,
      recipe: ['180','180']
    },
    {
      name: '540',
      alias: false,
      recipe: ['180','360'] //two ways to create a 540
    },
    {
      name: '540',
      alias: false,
      recipe: ['360','180'] //two ways to create a 540
    },
    {
      name: '720',
      alias: false,
      recipe: ['360','360'] 
    },
    {
      name: 'sideflip 360',
      alias: 'side full',
      recipe: ['sideflip','360'],
    },
    {
      name: 'sideflip 720',
      alias: 'side double full',
      recipe: ['sideflip','720'],
    },
  ]
}