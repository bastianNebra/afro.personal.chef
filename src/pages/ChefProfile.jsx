import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Clock, Euro, Phone, Mail, Calendar } from 'lucide-react';
import { getChefById } from '../data/chefs';

const ChefProfile = () => {
  const { id } = useParams();
  const chef = getChefById(id);

  if (!chef) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Chef non trouvé</h1>
          <Link to="/chefs" className="text-primary hover:text-primary/80">
            Retour à la liste des chefs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-80 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{chef.name}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    {chef.city}, {chef.country}
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-medium text-gray-900">{chef.rating}</span>
                      <span className="text-gray-500">({chef.reviewCount} avis)</span>
                    </div>
                    <div className="text-gray-600">
                      {chef.experience} d'expérience
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{chef.bio}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Spécialités</h3>
                  <div className="flex flex-wrap gap-2">
                    {chef.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Langues parlées</h3>
                  <div className="flex flex-wrap gap-2">
                    {chef.languages.map((language, index) => (
                      <span
                        key={index}
                        className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/contact?chef=${chef.name}`}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
                >
                  Réserver ce chef
                </Link>
                <button className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                  Contacter
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu et tarifs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu et Tarifs</h2>
              <div className="space-y-6">
                {chef.dishes.map((dish, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{dish.name}</h3>
                      <span className="text-2xl font-bold text-primary">{dish.price}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{dish.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{dish.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>👥</span>
                        <span>{dish.serves}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Avis clients */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Avis Clients</h2>
              <div className="space-y-6">
                {chef.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="font-medium text-primary">{review.name[0]}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{review.name}</h4>
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact rapide */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Rapide</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">+33 6 12 34 56 78</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">aminata@afropersonalchef.com</span>
                </div>
              </div>
            </div>

            {/* Disponibilités */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Disponibilités</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Lundi - Vendredi</span>
                  <span className="text-green-600 font-medium">Disponible</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Weekend</span>
                  <span className="text-orange-600 font-medium">Sur demande</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Événements</span>
                  <span className="text-green-600 font-medium">Disponible</span>
                </div>
              </div>
            </div>

            {/* Zone de service */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Zone de Service</h3>
              <div className="space-y-2">
                <div className="text-gray-700">Paris et région parisienne</div>
                <div className="text-sm text-gray-500">
                  Déplacement possible dans un rayon de 50km
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;

