import { Tenniscannon } from './tenniskanon';

export const TENNISCANNONS: Tenniscannon[] = [
    {
      id: '0',
      naam: 'Tennis Twist',
      foto: '/assets/twist.jpg',
      omschrijving: 'Tennis Twist® is speciaal ontworpen voor beginnende tennisspelers. Het compacte formaat en de eenvoudige bediening maken het een ideale eerste balmachine voor kinderen die net beginnen met tennissen. Als een kind een racket kan slingeren, kan hij of zij met Tennis Twist spelen.',
      beoordelingen: [
            {
              schaal: 5,
              opmerking: 'Imagine all the eatables, living in conFusion!',
              gebruiker: 'John Lemon',
              datum: '2012-10-16T17:57:28.556094Z'
            }
      ]
    },
    {
      id: '1',
      naam: 'Tennis Cube',
      foto: '/assets/cube.jpg',
      omschrijving: 'De lichtste, meest compacte tennismachine die beschikbaar is voor beginnende en gevorderde spelers.',
      beoordelingen: [
        {
          schaal: 5,
          opmerking: 'Veel plezier aan beleefd en mijn tennisniveau is awesome',
          gebruiker: 'Tevreden',
          datum: '2012-10-16T17:57:28.556094Z'
        }
      ]
    }
    ];