import { Link } from 'react-router-dom';
import { Star, Users, Calendar, ChefHat } from 'lucide-react';
import thieboudienne1 from '../assets/thieboudienne_1.jpg';
import attieke1 from '../assets/attieke_1.jpg';
import suya1 from '../assets/suya_1.jpg';

const Home = () => {
  const specialties = [
    {
      name: 'Thieboudienne',
      description: 'Le plat national du Sénégal, un délicieux riz au poisson et légumes',
      image: thieboudienne1,
      origin: 'Sénégal'
    },
    {
      name: 'Attiéké',
      description: 'Semoule de manioc fermentée, accompagnement traditionnel ivoirien',
      image: attieke1,
      origin: 'Côte d\'Ivoire'
    },
    {
      name: 'Suya',
      description: 'Brochettes de bœuf épicées, spécialité grillée du Nigeria',
      image: suya1,
      origin: 'Nigeria'
    }
  ];

  const stats = [
    { icon: ChefHat, value: '50+', label: 'Chefs certifiés' },
    { icon: Users, value: '1000+', label: 'Clients satisfaits' },
    { icon: Calendar, value: '200+', label: 'Événements organisés' },
    { icon: Star, value: '4.8/5', label: 'Note moyenne' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Retrouve le goût de{' '}
              <span className="text-primary">chez toi</span>,<br />
              où que tu sois en Europe
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connecte-toi avec des chefs passionnés spécialisés dans la cuisine africaine authentique. 
              Découvre les saveurs de ton pays d'origine et partage des moments culinaires uniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/chefs"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg"
              >
                Découvrir les chefs
              </Link>
              <Link
                to="/events"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/5 transition-colors shadow-lg"
              >
                Voir les événements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Spécialités Culinaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvre les plats emblématiques de l'Afrique, préparés avec passion 
              par nos chefs experts dans la tradition culinaire de leur région.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={specialty.image}
                    alt={specialty.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {specialty.origin}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.name}</h3>
                  <p className="text-gray-600 mb-4">{specialty.description}</p>
                  <Link
                    to="/chefs"
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Trouver un chef →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à vivre une expérience culinaire authentique ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoins notre communauté et découvre les saveurs authentiques de l'Afrique 
            préparées par des chefs passionnés près de chez toi.
          </p>
          <Link
            to="/chefs"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Commencer maintenant
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

