export const chefs = [
  {
    id: 1,
    name: 'Aminata Diallo',
    country: 'Sénégal',
    region: 'west',
    city: 'Paris',
    rating: 4.9,
    reviewCount: 127,
    specialties: ['Thieboudienne', 'Yassa', 'Mafé'],
    image: 'https://demo-source.imgix.net/head_shot.jpg',
    description: 'Chef passionnée par la cuisine sénégalaise traditionnelle avec 15 ans d\'expérience.',
    priceRange: '€€',
    bio: 'Passionnée par la cuisine sénégalaise depuis mon enfance, j\'ai grandi en apprenant les secrets culinaires de ma grand-mère à Dakar. Après 15 ans d\'expérience dans la restauration en France, je partage aujourd\'hui l\'authenticité des saveurs de mon pays natal avec la diaspora africaine et les amateurs de cuisine du monde entier.',
    experience: '15 ans',
    languages: ['Français', 'Wolof', 'Anglais'],
    dishes: [
      {
        name: 'Thieboudienne complet',
        description: 'Riz au poisson avec légumes traditionnels (carotte, chou, aubergine, gombo)',
        price: '25€',
        duration: '2h',
        serves: '4-6 personnes'
      },
      {
        name: 'Yassa Poulet',
        description: 'Poulet mariné aux oignons et citron, accompagné de riz blanc',
        price: '20€',
        duration: '1h30',
        serves: '4 personnes'
      },
      {
        name: 'Mafé traditionnel',
        description: 'Ragoût de bœuf à la pâte d\'arachide avec légumes de saison',
        price: '22€',
        duration: '2h',
        serves: '4-6 personnes'
      },
      {
        name: 'Pastels sénégalais',
        description: 'Beignets farcis au poisson et aux légumes (lot de 12)',
        price: '15€',
        duration: '1h',
        serves: '4 personnes'
      }
    ],
    reviews: [
      {
        name: 'Marie K.',
        rating: 5,
        comment: 'Aminata a préparé un thieboudienne exceptionnel pour notre famille. Les saveurs étaient authentiques et nous ont rappelé notre enfance au Sénégal. Je recommande vivement !',
        date: '2024-01-15'
      },
      {
        name: 'Ibrahim S.',
        rating: 5,
        comment: 'Service impeccable et cuisine délicieuse. Le yassa poulet était parfaitement épicé. Aminata est très professionnelle et passionnée.',
        date: '2024-01-10'
      },
      {
        name: 'Sophie L.',
        rating: 4,
        comment: 'Très bonne expérience culinaire. J\'ai découvert des saveurs nouvelles et Aminata a pris le temps de m\'expliquer les traditions culinaires sénégalaises.',
        date: '2024-01-05'
      }
    ]
  },
  {
    id: 2,
    name: 'Kwame Asante',
    country: 'Ghana',
    region: 'west',
    city: 'Londres',
    rating: 4.8,
    reviewCount: 89,
    specialties: ['Jollof Rice', 'Banku', 'Kelewele'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    description: 'Spécialiste de la cuisine ghanéenne moderne avec une touche contemporaine.',
    priceRange: '€€€',
    bio: 'Originaire d\'Accra, j\'ai découvert ma passion pour la cuisine en aidant ma mère dans son restaurant familial. Formé dans les meilleures écoles culinaires de Londres, je mélange aujourd\'hui les techniques modernes avec les recettes ancestrales de mon pays pour créer une expérience culinaire unique.',
    experience: '12 ans',
    languages: ['Anglais', 'Twi', 'Français'],
    dishes: [
      {
        name: 'Jollof Rice Premium',
        description: 'Riz jollof authentique avec crevettes et poulet, épices traditionnelles',
        price: '28€',
        duration: '1h45',
        serves: '4 personnes'
      },
      {
        name: 'Banku avec sauce okra',
        description: 'Pâte de maïs fermentée accompagnée de sauce okra et poisson fumé',
        price: '24€',
        duration: '2h',
        serves: '4 personnes'
      },
      {
        name: 'Kelewele épicé',
        description: 'Bananes plantains frites aux épices ghanéennes traditionnelles',
        price: '12€',
        duration: '30min',
        serves: '4 personnes'
      }
    ],
    reviews: [
      {
        name: 'Akosua M.',
        rating: 5,
        comment: 'Le meilleur jollof rice que j\'ai mangé en Europe ! Kwame maîtrise parfaitement les saveurs de notre enfance.',
        date: '2024-01-20'
      },
      {
        name: 'James B.',
        rating: 4,
        comment: 'Excellente découverte de la cuisine ghanéenne. Kwame est très pédagogue et passionné.',
        date: '2024-01-12'
      }
    ]
  },
  {
    id: 3,
    name: 'Fatima Benali',
    country: 'Maroc',
    region: 'north',
    city: 'Marseille',
    rating: 4.7,
    reviewCount: 156,
    specialties: ['Couscous', 'Tajine', 'Pastilla'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    description: 'Experte en cuisine marocaine authentique, formée dans les meilleures maisons de Fès.',
    priceRange: '€€',
    bio: 'Née à Fès, j\'ai grandi dans une famille où la cuisine était un art transmis de génération en génération. Après avoir perfectionné mon savoir-faire auprès des meilleures cuisinières de ma ville natale, je partage maintenant la richesse de la gastronomie marocaine avec la communauté méditerranéenne.',
    experience: '18 ans',
    languages: ['Français', 'Arabe', 'Berbère'],
    dishes: [
      {
        name: 'Couscous royal',
        description: 'Couscous traditionnel avec agneau, poulet, merguez et légumes de saison',
        price: '26€',
        duration: '2h30',
        serves: '6 personnes'
      },
      {
        name: 'Tajine d\'agneau aux pruneaux',
        description: 'Tajine mijoté aux pruneaux, amandes et épices douces',
        price: '24€',
        duration: '2h',
        serves: '4 personnes'
      },
      {
        name: 'Pastilla au poulet',
        description: 'Feuilleté traditionnel au poulet, amandes et cannelle',
        price: '22€',
        duration: '2h',
        serves: '6 personnes'
      }
    ],
    reviews: [
      {
        name: 'Rachid A.',
        rating: 5,
        comment: 'Fatima prépare un couscous comme ma grand-mère ! Authentique et délicieux.',
        date: '2024-01-18'
      },
      {
        name: 'Claire D.',
        rating: 4,
        comment: 'Très belle découverte de la cuisine marocaine. Les tajines sont exceptionnels.',
        date: '2024-01-14'
      }
    ]
  },
  {
    id: 4,
    name: 'Emmanuel Nkomo',
    country: 'Cameroun',
    region: 'central',
    city: 'Bruxelles',
    rating: 4.6,
    reviewCount: 73,
    specialties: ['Ndolé', 'Poulet DG', 'Beignets'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    description: 'Chef camerounais spécialisé dans les plats traditionnels de l\'Afrique Centrale.',
    priceRange: '€€',
    bio: 'Originaire de Douala, j\'ai appris la cuisine camerounaise auprès de ma tante qui tenait un restaurant réputé dans la ville. Installé en Belgique depuis 10 ans, je fais découvrir la richesse culinaire de l\'Afrique Centrale à travers des plats authentiques et savoureux.',
    experience: '10 ans',
    languages: ['Français', 'Anglais', 'Duala'],
    dishes: [
      {
        name: 'Ndolé traditionnel',
        description: 'Plat national camerounais aux feuilles de ndolé, crevettes et bœuf',
        price: '25€',
        duration: '2h',
        serves: '4-6 personnes'
      },
      {
        name: 'Poulet DG',
        description: 'Poulet sauté aux légumes et plantains, spécialité camerounaise',
        price: '23€',
        duration: '1h30',
        serves: '4 personnes'
      },
      {
        name: 'Beignets de banane',
        description: 'Beignets sucrés aux bananes, dessert traditionnel (12 pièces)',
        price: '10€',
        duration: '45min',
        serves: '4 personnes'
      }
    ],
    reviews: [
      {
        name: 'Sylvie N.',
        rating: 5,
        comment: 'Emmanuel prépare un ndolé exceptionnel ! Ça me rappelle le Cameroun.',
        date: '2024-01-16'
      },
      {
        name: 'Pierre M.',
        rating: 4,
        comment: 'Très bonne découverte de la cuisine camerounaise. Emmanuel est très sympathique.',
        date: '2024-01-08'
      }
    ]
  }
];

export const getChefById = (id) => {
  return chefs.find(chef => chef.id === parseInt(id));
};

export const getChefsByRegion = (region) => {
  if (region === 'all') return chefs;
  return chefs.filter(chef => chef.region === region);
};

