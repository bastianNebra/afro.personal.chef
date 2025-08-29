import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Filter } from 'lucide-react';
import { chefs, getChefsByRegion } from '../data/chefs';

const Chefs = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = [
    { value: 'all', label: 'Toutes les régions' },
    { value: 'west', label: 'Afrique de l\'Ouest' },
    { value: 'north', label: 'Maghreb' },
    { value: 'central', label: 'Afrique Centrale' },
    { value: 'east', label: 'Afrique de l\'Est' }
  ];

  const filteredChefs = getChefsByRegion(selectedRegion);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Chefs Africains
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvre nos chefs passionnés, experts dans la cuisine authentique de leur région. 
            Chaque chef apporte son savoir-faire unique et ses recettes traditionnelles.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">Filtrer par région :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region.value}
                onClick={() => setSelectedRegion(region.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedRegion === region.value
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-primary/10 border border-gray-300'
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChefs.map((chef) => (
            <div key={chef.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {chef.priceRange}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{chef.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {chef.city}, {chef.country}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-900">{chef.rating}</span>
                    <span className="text-gray-500 text-sm">({chef.reviewCount})</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{chef.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Spécialités :</h4>
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

                <Link
                  to={`/chef/${chef.id}`}
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center block"
                >
                  Voir le profil
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredChefs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun chef trouvé pour cette région.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chefs;

