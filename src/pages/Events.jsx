import { Calendar, MapPin, Users, Clock, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events, getEventsByCategory } from '../data/events';

const Events = () => {
  const categories = ['Tous', 'Grillade', 'Brunch', 'Atelier', 'Dégustation', 'Festival'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Événements & Grillades
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participez à nos événements culinaires uniques et découvrez les saveurs authentiques 
            de l'Afrique dans une ambiance conviviale et chaleureuse.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 hover:bg-primary/10 border border-gray-300 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary">
                  {event.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">Par {event.chef}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.date).toLocaleDateString('fr-FR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    {event.currentParticipants}/{event.maxParticipants} participants
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4">{event.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Inclus :</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {event.includes.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {event.maxParticipants - event.currentParticipants} places restantes
                  </div>
                  <Link
                    to={`/contact?event=${event.title}`}
                    className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Réserver
                  </Link>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(event.currentParticipants / event.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Vous êtes chef et souhaitez organiser un événement ?
          </h2>
          <p className="text-white/90 mb-6">
            Rejoignez notre communauté de chefs et partagez votre passion culinaire 
            avec la diaspora africaine en Europe.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Devenir chef partenaire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;

