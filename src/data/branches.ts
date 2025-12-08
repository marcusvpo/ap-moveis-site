export interface Branch {
  id: string;
  name: string;
  city: string;
  address: string;
  neighborhood: string;
  phone: string;
  whatsapp: string;
  mapUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const branches: Branch[] = [
  {
    id: 'jaboticabal',
    name: 'Jaboticabal',
    city: 'Jaboticabal - SP',
    address: 'Rua São Sebastião, 122',
    neighborhood: 'Centro',
    phone: '(16) 3202-7022',
    whatsapp: '5516320270220',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.8889!2d-48.3223!3d-21.2544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzE1LjgiUyA0OMKwMTknMjAuMyJX!5e0!3m2!1spt-BR!2sbr!4v1',
    coordinates: { lat: -21.2544, lng: -48.3223 }
  },
  {
    id: 'monte-alto',
    name: 'Monte Alto',
    city: 'Monte Alto - SP',
    address: 'Rua Nhonho do Livramento, 2155',
    neighborhood: 'Centro',
    phone: '(16) 3241-1280',
    whatsapp: '5516988444111',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.8889!2d-48.4959!3d-21.2611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzQwLjAiUyA0OMKwMjknNDUuMiJX!5e0!3m2!1spt-BR!2sbr!4v1',
    coordinates: { lat: -21.2611, lng: -48.4959 }
  },
  {
    id: 'bebedouro',
    name: 'Bebedouro',
    city: 'Bebedouro - SP',
    address: 'Av. Edne José Piffer, 561',
    neighborhood: 'Residencial Hércules Hortal',
    phone: '(17) 3044-6063',
    whatsapp: '5517304460630',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.8889!2d-48.4789!3d-20.9494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU2JzU3LjgiUyA0OMKwMjgnNDQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1',
    coordinates: { lat: -20.9494, lng: -48.4789 }
  }
];
