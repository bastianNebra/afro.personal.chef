export const events = [
  {
    id: 1,
    title: 'Soirée Suya & Grillades Nigérianes',
    chef: 'Adebayo Okafor',
    chefId: 5,
    date: '2024-02-15',
    time: '19:00',
    location: 'Paris 11ème',
    address: 'Restaurant Le Baobab, 45 rue de la Roquette',
    price: '35€',
    maxParticipants: 25,
    currentParticipants: 18,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop',
    description: 'Découvrez l\'art de la grillade nigériane avec notre chef Adebayo. Au programme : suya traditionnel, poisson grillé et accompagnements authentiques. Une soirée conviviale pour découvrir les saveurs épicées du Nigeria.',
    includes: ['Suya de bœuf et agneau', 'Poisson grillé', 'Accompagnements traditionnels', 'Boisson de bienvenue'],
    category: 'Grillade'
  },
  {
    id: 2,
    title: 'Brunch Africain Fusion',
    chef: 'Aminata Diallo',
    chefId: 1,
    date: '2024-02-18',
    time: '11:00',
    location: 'Marseille',
    address: 'Espace Culturel Africain, 12 avenue de la République',
    price: '28€',
    maxParticipants: 30,
    currentParticipants: 12,
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
    description: 'Un brunch unique mêlant traditions culinaires africaines et touches modernes. Aminata vous propose une expérience gustative originale dans une ambiance chaleureuse et familiale.',
    includes: ['Thieboudienne revisité', 'Pastels aux légumes', 'Bissap et jus de fruits', 'Pâtisseries africaines'],
    category: 'Brunch'
  },
  {
    id: 3,
    title: 'Atelier Couscous & Tajines',
    chef: 'Fatima Benali',
    chefId: 3,
    date: '2024-02-22',
    time: '14:00',
    location: 'Lyon',
    address: 'Centre Culturel Maghrébin, 8 place Bellecour',
    price: '45€',
    maxParticipants: 15,
    currentParticipants: 8,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=400&fit=crop',
    description: 'Apprenez les secrets du couscous parfait et des tajines authentiques avec Fatima. Un atelier pratique où vous repartirez avec les recettes et techniques traditionnelles marocaines.',
    includes: ['Cours de cuisine pratique', 'Dégustation complète', 'Livret de recettes', 'Épices à emporter'],
    category: 'Atelier'
  },
  {
    id: 4,
    title: 'Soirée Découverte Camerounaise',
    chef: 'Emmanuel Nkomo',
    chefId: 4,
    date: '2024-02-25',
    time: '18:30',
    location: 'Bruxelles',
    address: 'Maison de l\'Afrique, 23 rue des Colonies',
    price: '32€',
    maxParticipants: 20,
    currentParticipants: 15,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop',
    description: 'Plongez dans la richesse culinaire du Cameroun avec Emmanuel. Une soirée dégustation pour découvrir les plats emblématiques de l\'Afrique Centrale dans une ambiance musicale traditionnelle.',
    includes: ['Ndolé traditionnel', 'Poulet DG', 'Beignets de banane', 'Animation musicale'],
    category: 'Dégustation'
  },
  {
    id: 5,
    title: 'Festival Jollof Rice',
    chef: 'Kwame Asante',
    chefId: 2,
    date: '2024-03-02',
    time: '17:00',
    location: 'Londres',
    address: 'African Cultural Centre, 156 Brixton Road',
    price: '30€',
    maxParticipants: 40,
    currentParticipants: 22,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&h=400&fit=crop',
    description: 'Le grand débat culinaire de l\'Afrique de l\'Ouest ! Découvrez les différentes versions du Jollof Rice et participez à une dégustation comparative dans une ambiance festive.',
    includes: ['Jollof Rice ghanéen', 'Jollof Rice nigérian', 'Accompagnements variés', 'Animation DJ'],
    category: 'Festival'
  },
  {
    id: 6,
    title: 'Cours de Pâtisserie Africaine',
    chef: 'Aisha Kone',
    chefId: 6,
    date: '2024-03-08',
    time: '10:00',
    location: 'Paris 18ème',
    address: 'Atelier Gourmand, 34 rue Marcadet',
    price: '40€',
    maxParticipants: 12,
    currentParticipants: 7,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
    description: 'Apprenez à réaliser les desserts traditionnels africains avec Aisha. Un atelier sucré pour découvrir les pâtisseries du continent et repartir avec vos créations.',
    includes: ['Makroudh tunisien', 'Chin-chin nigérian', 'Beignets de mil', 'Recettes à emporter'],
    category: 'Atelier'
  }
];

export const getEventById = (id) => {
  return events.find(event => event.id === parseInt(id));
};

export const getEventsByCategory = (category) => {
  if (category === 'Tous') return events;
  return events.filter(event => event.category === category);
};

export const getUpcomingEvents = () => {
  const today = new Date();
  return events.filter(event => new Date(event.date) >= today);
};

