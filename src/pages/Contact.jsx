import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    chef: '',
    event: '',
    message: '',
    preferredDate: '',
    guests: ''
  });

  useEffect(() => {
    // Pré-remplir le formulaire selon les paramètres URL
    const chef = searchParams.get('chef');
    const event = searchParams.get('event');
    
    if (chef) {
      setFormData(prev => ({
        ...prev,
        chef: chef,
        serviceType: 'chef-booking'
      }));
    }
    
    if (event) {
      setFormData(prev => ({
        ...prev,
        event: event,
        serviceType: 'event-booking'
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous intégreriez l'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message ! Nous vous recontacterons dans les plus brefs délais.');
  };

  const serviceTypes = [
    { value: '', label: 'Sélectionnez un service' },
    { value: 'chef-booking', label: 'Réservation d\'un chef à domicile' },
    { value: 'event-booking', label: 'Inscription à un événement' },
    { value: 'catering', label: 'Service traiteur' },
    { value: 'cooking-class', label: 'Cours de cuisine' },
    { value: 'partnership', label: 'Partenariat chef' },
    { value: 'other', label: 'Autre demande' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Une réservation ? Notre équipe est là pour vous accompagner 
            dans votre expérience culinaire africaine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de service *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {serviceTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {formData.serviceType === 'chef-booking' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Date souhaitée
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de convives
                      </label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="4"
                      />
                    </div>
                  </div>
                )}

                {formData.chef && (
                  <div>
                    <label htmlFor="chef" className="block text-sm font-medium text-gray-700 mb-2">
                      Chef sélectionné
                    </label>
                    <input
                      type="text"
                      id="chef"
                      name="chef"
                      value={formData.chef}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                      readOnly
                    />
                  </div>
                )}

                {formData.event && (
                  <div>
                    <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-2">
                      Événement sélectionné
                    </label>
                    <input
                      type="text"
                      id="event"
                      name="event"
                      value={formData.event}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                      readOnly
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Décrivez votre demande, vos préférences culinaires, allergies éventuelles..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            {/* Contact direct */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Direct
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">contact@afropersonalchef.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Téléphone</div>
                    <div className="text-gray-600">+33 1 23 45 67 89</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Adresse</div>
                    <div className="text-gray-600">Paris, France</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Horaires de Contact
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Lundi - Vendredi</span>
                  <span className="text-gray-900 font-medium">9h - 19h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Samedi</span>
                  <span className="text-gray-900 font-medium">10h - 16h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Dimanche</span>
                  <span className="text-gray-500">Fermé</span>
                </div>
              </div>
            </div>

            {/* Temps de réponse */}
            <div className="bg-primary/5 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Temps de Réponse
                </h3>
              </div>
              <p className="text-gray-700">
                Nous nous engageons à vous répondre dans les 
                <span className="font-semibold text-primary"> 24 heures</span> suivant 
                la réception de votre message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

