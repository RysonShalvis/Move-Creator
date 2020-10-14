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
      name: 'frontflip 180',
      alias: 'front half',
      recipe: ['frontflip','180'],
    },
    {
      name: 'backflip 180',
      alias: 'back half',
      recipe: ['backflip','180'],
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
    {
      name: 'frontflip 360',
      alias: 'front full',
      recipe: ['frontflip','360'],
    },
    {
      name: 'frontflip 720',
      alias: 'front double full',
      recipe: ['frontflip','720'],
    },
    {
      name: 'backflip 360',
      alias: 'back full',
      recipe: ['backflip','360'],
    },
    {
      name: 'backflip 720',
      alias: 'back double full',
      recipe: ['backflip','720'],
    },
    {
      name: 'arabian',
      alias: false, //not sure if alias
      recipe: ['180','backflip'],
    },
    {
      name: 'vortex backflip',
      alias: 'full up backflip', 
      recipe: ['360','backflip'],
    },
    {
      name: 'double vortex backflip',
      alias: 'double full up backflip', 
      recipe: ['720','backflip'],
    },
    {
      name: 'dark arabian',
      alias: 'spiderman flip',
      recipe: ['180','frontflip'],
    },
    {
      name: 'vortex frontflip',
      alias: 'full up frontflip', 
      recipe: ['360','frontflip'],
    },
    {
      name: 'double vortex frontflip',
      alias: 'double full up frontflip', 
      recipe: ['720','frontflip'],
    },
    {
      name: 'vortex sideflip',
      alias: 'full up sideflip', 
      recipe: ['360','sideflip'],
    },
    {
      name: 'double vortex sideflip',
      alias: 'double full up sideflip',
      recipe: ['720','sideflip'],
    },
    {
      name: 'sideflip in, backflip out',
      alias: 'side in', 
      recipe: ['sideflip 180','backflip'],
    },
    {
      name: 'front half in, backflip out',
      alias: 'front half in',
      recipe: ['frontflip 180','backflip'],
    },
    {
      name: 'double backflip',
      alias: 'dub back',
      recipe: ['backflip','backflip'],
    }, 
    {
      name: 'double frontflip',
      alias: 'dub front',
      recipe: ['frontflip','frontflip'],
    }, 
    {
      name: 'backflip 540',
      alias: false, //not sure if alias
      recipe: ['backflip', '540'],
    }, 
    {
      name: 'frontflip 540',
      alias: 'rudy',
      recipe: ['frontflip', '540'],
    }, 
    {
      name: 'sideflip 540',
      alias: false,
      recipe: ['sideflip', '540'],
    }, 
    
 
  ]
}