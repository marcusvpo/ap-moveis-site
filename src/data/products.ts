// Images
import cadeiraDesign from '@/assets/cadeira_design.jpeg';
import cadeiraGamer from '@/assets/cadeira_gamer.jpeg';
import cadeiraOperacional from '@/assets/cadeira_operacional.jpeg';
import cadeiraJob from '@/assets/cadeira_job.jpeg';
import cadeiraPresidente from '@/assets/cadeira_presidente.jpeg';
import cadeiraRecepcao from '@/assets/cadeira_recepcao.jpeg';
import estacao1 from '@/assets/estacao_trabalho_1.jpeg';
import estacao2 from '@/assets/estacao_trabalho_2.jpeg';
import estacao3 from '@/assets/estacao_trabalho_3.jpeg';
import estacao4 from '@/assets/estacao_trabalho_4.jpeg';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory?: string;
  image: string;
  features: string[];
  description?: string;
}

export type ProductCategory = 
  | 'ambientes' 
  | 'aco' 
  | 'armarios' 
  | 'cadeiras' 
  | 'escolares' 
  | 'mesas';

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: CategoryInfo[] = [
  {
    id: 'ambientes',
    name: 'Ambientes',
    description: 'Estações de trabalho completas e projetos personalizados',
    image: estacao1,
    productCount: 25
  },
  {
    id: 'aco',
    name: 'Aço',
    description: 'Armários metálicos, estantes e arquivos de alta durabilidade',
    image: estacao2,
    productCount: 40
  },
  {
    id: 'armarios',
    name: 'Armários',
    description: 'Armários em MDF, gaveteiros e organizadores',
    image: estacao3,
    productCount: 35
  },
  {
    id: 'cadeiras',
    name: 'Cadeiras',
    description: 'Ergonomia e conforto para todas as necessidades',
    image: cadeiraPresidente,
    productCount: 60
  },
  {
    id: 'escolares',
    name: 'Escolares',
    description: 'Carteiras, mesas e mobiliário educacional',
    image: estacao4,
    productCount: 30
  },
  {
    id: 'mesas',
    name: 'Mesas',
    description: 'Mesas de reunião, escritório e home office',
    image: estacao2,
    productCount: 45
  }
];

export const products: Product[] = [
  // Cadeiras
  {
    id: 'cadeira-presidente-1',
    name: 'Cadeira Presidente Premium',
    category: 'cadeiras',
    subcategory: 'presidente',
    image: cadeiraPresidente,
    features: ['Couro sintético', 'Apoio lombar', 'Base cromada', 'Braços reguláveis'],
    description: 'Cadeira executiva de alto padrão para ambientes corporativos'
  },
  {
    id: 'cadeira-operacional-1',
    name: 'Cadeira Operacional Ergonômica',
    category: 'cadeiras',
    subcategory: 'operacional',
    image: cadeiraOperacional,
    features: ['Tecido mesh', 'Ajuste de altura', 'Rodízios silenciosos', 'Encosto regulável'],
    description: 'Ideal para longas jornadas de trabalho'
  },
  {
    id: 'cadeira-gamer-1',
    name: 'Cadeira Gamer Pro',
    category: 'cadeiras',
    subcategory: 'gamer',
    image: cadeiraGamer,
    features: ['Design racing', 'Almofadas inclusas', 'Reclinável 180°', 'Apoio de braço 4D'],
    description: 'Performance e estilo para gamers e profissionais'
  },
  {
    id: 'cadeira-recepcao-1',
    name: 'Cadeira Recepção Elegance',
    category: 'cadeiras',
    subcategory: 'recepcao',
    image: cadeiraRecepcao,
    features: ['Design moderno', 'Estrutura fixa', 'Empilhável', 'Fácil limpeza'],
    description: 'Elegância e praticidade para áreas de espera'
  },
  {
    id: 'cadeira-job-1',
    name: 'Cadeira Job Executiva',
    category: 'cadeiras',
    subcategory: 'operacional',
    image: cadeiraJob,
    features: ['Espuma injetada', 'Base giratória', 'Apoio lombar', 'Tecido resistente'],
    description: 'Conforto diário com excelente custo-benefício'
  },
  {
    id: 'cadeira-design-1',
    name: 'Cadeira Design Contemporâneo',
    category: 'cadeiras',
    subcategory: 'design',
    image: cadeiraDesign,
    features: ['Design autoral', 'Materiais premium', 'Peça única', 'Acabamento refinado'],
    description: 'Para ambientes que exigem personalidade'
  },
  // Ambientes
  {
    id: 'ambiente-1',
    name: 'Estação de Trabalho Modular',
    category: 'ambientes',
    image: estacao1,
    features: ['Modular', 'Passagem de cabos', 'Divisórias acústicas', 'Iluminação integrada'],
    description: 'Ambiente completo para equipes produtivas'
  },
  {
    id: 'ambiente-2',
    name: 'Escritório Executivo Completo',
    category: 'ambientes',
    image: estacao2,
    features: ['Mesa executiva', 'Armário', 'Estante', 'Cadeira presidente'],
    description: 'Solução completa para diretores e gestores'
  },
  {
    id: 'ambiente-3',
    name: 'Coworking Space',
    category: 'ambientes',
    image: estacao3,
    features: ['Layout flexível', 'Áreas colaborativas', 'Cabines privativas', 'Lounge'],
    description: 'Espaços modernos para trabalho compartilhado'
  },
  {
    id: 'ambiente-4',
    name: 'Home Office Premium',
    category: 'ambientes',
    image: estacao4,
    features: ['Compacto', 'Elegante', 'Funcional', 'Multitarefa'],
    description: 'Produtividade e conforto no seu lar'
  }
];

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductsBySubcategory = (category: ProductCategory, subcategory: string): Product[] => {
  return products.filter(p => p.category === category && p.subcategory === subcategory);
};
