export const listOfAllTricks = {
    listOfTricks: [
    {
      name: 'sideflip',
      base: 'sideflip',
      alias: false,
      recipe: false,
      
    },
    {
      name: 'frontflip',
      base: 'frontflip',
      alias: false,
      recipe: false,
    },
    {
      name: 'backflip',
      base: 'backflip',
      alias: false,
      recipe: false,
    },
    {
      name: '180',
      base: '180',
      alias: false,
      recipe: false,
    },
    {
      name: 'double sideflip',
      base: 'sideflip',
      alias: 'dub side',
      recipe: ['sideflip','sideflip']
    }, 
    {
      name: 'sideflip 180',
      base: 'sidelip',
      alias: 'side half',
      recipe: ['sideflip','180'],
    },
    {
      name: 'frontflip 180',
      base: 'frontflip',
      alias: 'front half',
      recipe: ['frontflip','180'],
    },
    {
      name: 'backflip 180',
      base: 'backflip',
      alias: 'back half',
      recipe: ['backflip','180'],
    },
    {
      name: '360',
      base: '180',
      alias: false,
      recipe: ['180','180']
    },
    {
      name: '540',
      base: '180',
      alias: false,
      recipe: ['180','360'] //two ways to create a 540
    },
    {
      name: '540',
      base: '180',
      alias: false,
      recipe: ['360','180'] //two ways to create a 540
    },
    {
      name: '720',
      base: '180',
      alias: false,
      recipe: ['360','360'] 
    },
    {
      name: 'sideflip 360',
      base: 'sideflip',
      alias: 'side full',
      recipe: ['sideflip','360'],
    },
    {
      name: 'sideflip 720',
      base: 'sideflip',
      alias: 'side double full',
      recipe: ['sideflip','720'],
    },
    {
      name: 'frontflip 360',
      base: 'frontflip',
      alias: 'front full',
      recipe: ['frontflip','360'],
    },
    {
      name: 'frontflip 720',
      base: 'frontflip',
      alias: 'front double full',
      recipe: ['frontflip','720'],
    },
    {
      name: 'backflip 360',
      base: 'backflip',
      alias: 'back full',
      recipe: ['backflip','360'],
    },
    {
      name: 'backflip 720',
      base: 'backflip',
      alias: 'back double full',
      recipe: ['backflip','720'],
    },
    {
      name: 'arabian',
      base: '180',
      alias: false, //not sure if alias
      recipe: ['180','backflip'],
    },
    {
      name: 'vortex backflip',
      base: '180',
      alias: 'full up backflip', 
      recipe: ['360','backflip'],
    },
    {
      name: 'double vortex backflip',
      base: '180',
      alias: 'double full up backflip', 
      recipe: ['720','backflip'],
    },
    {
      name: 'dark arabian',
      base: '180',
      alias: 'spiderman flip',
      recipe: ['180','frontflip'],
    },
    {
      name: 'vortex frontflip',
      base: '180',
      alias: 'full up frontflip', 
      recipe: ['360','frontflip'],
    },
    {
      name: 'double vortex frontflip',
      base: '180',
      alias: 'double full up frontflip', 
      recipe: ['720','frontflip'],
    },
    {
      name: 'vortex sideflip',
      base: '180',
      alias: 'full up sideflip', 
      recipe: ['360','sideflip'],
    },
    {
      name: 'double vortex sideflip',
      base: '180',
      alias: 'double full up sideflip',
      recipe: ['720','sideflip'],
    },
    {
      name: 'sideflip in, backflip out',
      base: 'sideflip',
      alias: 'side in', 
      recipe: ['sideflip 180','backflip'],
    },
    {
      name: 'front half in, backflip out',
      base: 'frontflip',
      alias: 'front half in',
      recipe: ['frontflip 180','backflip'],
    },
    {
      name: 'double backflip',
      base: 'backflip',
      alias: 'dub back',
      recipe: ['backflip','backflip'],
    }, 
    {
      name: 'double frontflip',
      base: 'frontflip',
      alias: 'dub front',
      recipe: ['frontflip','frontflip'],
    }, 
    {
      name: 'backflip 540',
      base: 'backflip',
      alias: false, //not sure if alias
      recipe: ['backflip', '540'],
    }, 
    {
      name: 'frontflip 540',
      base: 'frontflip',
      alias: 'rudy',
      recipe: ['frontflip', '540'],
    }, 
    {
      name: 'sideflip 540',
      base: 'sideflip',
      alias: false,
      recipe: ['sideflip', '540'],
    }, 
    
 
  ]
}