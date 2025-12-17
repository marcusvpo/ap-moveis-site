export type ProductCategory = 
  | 'ambientes' 
  | 'aco' 
  | 'armarios' 
  | 'cadeiras' 
  | 'escolares' 
  | 'mesas';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory?: string;
  image: string;
  features: string[];
  description?: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
  productCount: number;
}


// Category Covers
import capaAmbientes from '@/assets/capa-produtos/capa-ambientes.png';
import capaAco from '@/assets/capa-produtos/capa-aco.png';
import capaArmarios from '@/assets/capa-produtos/capa-armarios.png';
import capaCadeiras from '@/assets/capa-produtos/capa-cadeiras.png';
import capaEscolares from '@/assets/capa-produtos/capa-escolares.png';
import capaMesas from '@/assets/capa-produtos/capa-mesas.png';

// Cadeiras
import cadCaixa from '@/assets/cadeiras/cadeira_caixa.jpg';
import cadCaixaArcada from '@/assets/cadeiras/cadeira_caixa_arcada.jpg';
import cadDiretorFixa from '@/assets/cadeiras/cadeira_diretor_fixa.jpg';
import cadDiretorGiratoria from '@/assets/cadeiras/cadeira_diretor_giratoria.jpg';
import cadExecutivaErgo from '@/assets/cadeiras/cadeira_executiva_ergonomica.jpg';
import cadExecutivaGiratoria from '@/assets/cadeiras/cadeira_executiva_giratoria.jpg';
import cadGoahPop from '@/assets/cadeiras/cadeira_goah_pop.png';
import cadIsomax from '@/assets/cadeiras/cadeira_isomax_cores.jpg';
import cadJob from '@/assets/cadeiras/cadeira_job.png';
import cadNitro from '@/assets/cadeiras/cadeira_nitro.png';
import cadPresAddit from '@/assets/cadeiras/cadeira_presidente_addit_ergonomica.jpg';
import cadPresGiratoria from '@/assets/cadeiras/cadeira_presidente_giratoria.jpg';
import cadPresLuxo from '@/assets/cadeiras/cadeira_presidente_luxo.jpg';
import cadSecFixa from '@/assets/cadeiras/cadeira_secretaria_fixa.jpg';
import cadSecGiratoria from '@/assets/cadeiras/cadeira_secretaria_giratoria.jpg';
import cadUniversitaria from '@/assets/cadeiras/cadeira_universitaria.jpg';
import cadVitrine from '@/assets/cadeiras/cadeira_vitrine.png';
import cadGamer from '@/assets/cadeiras/gamer01.gif';
import longAeroporto from '@/assets/cadeiras/longarina_aeroporto.jpg';
import longDiretor from '@/assets/cadeiras/longarina_diretor.jpg';

// Ambientes
import ambPe40 from '@/assets/ambientes/ambiente_pe40.jpg';
import ambTrabalho from '@/assets/ambientes/ambiente_trabalho.png';
import ambBalcao from '@/assets/ambientes/balcao_de_atendimento.jpg';
import estacao01 from '@/assets/ambientes/estacao01.jpg';
import estacao02 from '@/assets/ambientes/estacao02.jpg';
import estacao03 from '@/assets/ambientes/estacao03.jpg';
import estacao05 from '@/assets/ambientes/estacao05.jpg';
import estacao06 from '@/assets/ambientes/estacao06.jpg';
import estacao07 from '@/assets/ambientes/estacao07.jpg';
import estacao09 from '@/assets/ambientes/estacao09.jpg';
import estacao10 from '@/assets/ambientes/estacao10.jpg';
import estacao11 from '@/assets/ambientes/estacao11.jpg';
import estTrab1 from '@/assets/ambientes/estacao_trabalho_1.png';
import estTrab2 from '@/assets/ambientes/estacao_trabalho_2.png';
import estTrab3 from '@/assets/ambientes/estacao_trabalho_3.png';
import estTrabIlha from '@/assets/ambientes/estacao_trabalho_ilha.png';
import homeOffice from '@/assets/ambientes/home_office.jpg';
import mesaReuniao from '@/assets/ambientes/mesa_reuniao.png';

// Armarios
import armArquivos from '@/assets/armarios/arquivos.gif';
import armCredenza from '@/assets/armarios/credenza.gif';
import armExtensor from '@/assets/armarios/extensor.gif';
import armMadAlto from '@/assets/armarios/madeira_alto.gif';
import armMadBaixo from '@/assets/armarios/madeira_baixo.gif';
import armMadMisto from '@/assets/armarios/madeira_misto.gif';
import armMadSofisticado from '@/assets/armarios/madeira_sofisticado.gif';
import armTorre from '@/assets/armarios/torre.gif';

// Mesas
import mesa01 from '@/assets/mesas/mesa01.jpg';
import mesa02 from '@/assets/mesas/mesa02.jpg';
import mesa03 from '@/assets/mesas/mesa03.jpg';
import mesa04 from '@/assets/mesas/mesa04.jpg';
import mesa05 from '@/assets/mesas/mesa05.jpg';
import mesa06 from '@/assets/mesas/mesa06.jpg';
import mesa07 from '@/assets/mesas/mesa07.jpg';

// Escolares
import escBalcao from '@/assets/escolares/balcao_trocador.jpg';
import escBalcao4Gav from '@/assets/escolares/balcao_trocador_4_gavetas.jpg';
import escCadAnatomica from '@/assets/escolares/cadeira_anatomica_infantil_juvenil.jpg';
import escCadReta from '@/assets/escolares/cadeira_anatomica_reta_infantil_juvenil.jpg';
import escCadFundAnat from '@/assets/escolares/cadeira_fundamental_anatomica_formica_infantil_juvenil.jpg';
import escCadFundReta from '@/assets/escolares/cadeira_fundamental_retal_infantil_juvenil.jpg';
import escConjSextavado from '@/assets/escolares/conjunto_sextavado_infantil_juvenil.jpg';
import escMesaBanco from '@/assets/escolares/mesa_banco_infantil_juvenil.jpg';
import escMesaCentro from '@/assets/escolares/mesa_centro_sextavada_infantil_juvenil.jpg';
import escMesaFormica from '@/assets/escolares/mesa_escolar_formica_infantil_juvenil.jpg';
import escMesaEscolar from '@/assets/escolares/mesa_escolar_infantil_juvenil.jpg';
import escMesaEscolar2 from '@/assets/escolares/mesa_escolar_infantil_juvenil02.jpg';
import escMesaSextavada from '@/assets/escolares/mesa_sextavada_infantil_juvenil.jpg';
import escMesaTrapezio from '@/assets/escolares/mesa_trapezio_infantil_juvenil.jpg';
import escPortaCartolina9 from '@/assets/escolares/porta_cartolina_9_gavetas.jpg';
import escPortaCartolinaBalcao from '@/assets/escolares/porta_cartolina_9_gavetas_com_balcao.jpg';
import escPortaCartolinas from '@/assets/escolares/porta_cartolinas.jpg';
import escPortaCartolinasPorta from '@/assets/escolares/porta_cartolinas_com_porta.jpg';

// Aço
import acoArmario from '@/assets/aço/armario_de_aco.jpg';
import acoEstante from '@/assets/aço/estante_de_aco.jpg';
import acoPortaObjetos from '@/assets/aço/porta_objetos.jpg';
import acoRoupeiro from '@/assets/aço/roupeiro_de_aco.jpg';
import acoRoupeiroInsalubre from '@/assets/aço/roupeiro_insalubre.jpg';



export const categories: CategoryInfo[] = [
  {
    id: 'ambientes',
    name: 'Ambientes',
    description: 'Estações de trabalho completas e projetos personalizados',
    image: capaAmbientes,
    productCount: 18
  },
  {
    id: 'aco',
    name: 'Aço',
    description: 'Armários metálicos, estantes e arquivos de alta durabilidade',
    image: capaAco,
    productCount: 5
  },
  {
    id: 'armarios',
    name: 'Armários',
    description: 'Armários em MDF, gaveteiros e organizadores',
    image: capaArmarios,
    productCount: 8
  },
  {
    id: 'cadeiras',
    name: 'Cadeiras',
    description: 'Ergonomia e conforto para todas as necessidades',
    image: capaCadeiras,
    productCount: 20
  },
  {
    id: 'escolares',
    name: 'Escolares',
    description: 'Carteiras, mesas e mobiliário educacional',
    image: capaEscolares,
    productCount: 18
  },
  {
    id: 'mesas',
    name: 'Mesas',
    description: 'Mesas de reunião, escritório e home office',
    image: capaMesas,
    productCount: 7
  }
];

const defaultFeatures = ['Design Moderno', 'Alta Durabilidade', 'Garantia AP Móveis'];

export const products: Product[] = [
  // CADEIRAS
  { id: 'cad-caixa', name: 'Cadeira Caixa', category: 'cadeiras', image: cadCaixa, features: defaultFeatures },
  { id: 'cad-caixa-arcada', name: 'Cadeira Caixa Arcada', category: 'cadeiras', image: cadCaixaArcada, features: defaultFeatures },
  { id: 'cad-diretor-fixa', name: 'Cadeira Diretor Fixa', category: 'cadeiras', image: cadDiretorFixa, features: defaultFeatures },
  { id: 'cad-diretor-giratoria', name: 'Cadeira Diretor Giratória', category: 'cadeiras', image: cadDiretorGiratoria, features: defaultFeatures },
  { id: 'cad-executiva-ergo', name: 'Cadeira Executiva Ergonômica', category: 'cadeiras', image: cadExecutivaErgo, features: defaultFeatures },
  { id: 'cad-executiva-giratoria', name: 'Cadeira Executiva Giratória', category: 'cadeiras', image: cadExecutivaGiratoria, features: defaultFeatures },
  { id: 'cad-goah-pop', name: 'Cadeira Goah Pop', category: 'cadeiras', image: cadGoahPop, features: defaultFeatures },
  { id: 'cad-isomax', name: 'Cadeira Isomax', category: 'cadeiras', image: cadIsomax, features: defaultFeatures },
  { id: 'cad-job', name: 'Cadeira Job', category: 'cadeiras', image: cadJob, features: defaultFeatures },
  { id: 'cad-nitro', name: 'Cadeira Nitro', category: 'cadeiras', image: cadNitro, features: defaultFeatures },
  { id: 'cad-pres-addit', name: 'Cadeira Presidente Addit', category: 'cadeiras', image: cadPresAddit, features: defaultFeatures },
  { id: 'cad-pres-giratoria', name: 'Cadeira Presidente Giratória', category: 'cadeiras', image: cadPresGiratoria, features: defaultFeatures },
  { id: 'cad-pres-luxo', name: 'Cadeira Presidente Luxo', category: 'cadeiras', image: cadPresLuxo, features: defaultFeatures },
  { id: 'cad-sec-fixa', name: 'Cadeira Secretária Fixa', category: 'cadeiras', image: cadSecFixa, features: defaultFeatures },
  { id: 'cad-sec-giratoria', name: 'Cadeira Secretária Giratória', category: 'cadeiras', image: cadSecGiratoria, features: defaultFeatures },
  { id: 'cad-universitaria', name: 'Cadeira Universitária', category: 'cadeiras', image: cadUniversitaria, features: defaultFeatures },
  { id: 'cad-vitrine', name: 'Cadeira Vitrine', category: 'cadeiras', image: cadVitrine, features: defaultFeatures },
  { id: 'cad-gamer', name: 'Cadeira Gamer', category: 'cadeiras', image: cadGamer, features: defaultFeatures },
  { id: 'long-aeroporto', name: 'Longarina Aeroporto', category: 'cadeiras', image: longAeroporto, features: defaultFeatures },
  { id: 'long-diretor', name: 'Longarina Diretor', category: 'cadeiras', image: longDiretor, features: defaultFeatures },

  // AMBIENTES
  { id: 'amb-pe40', name: 'Ambiente PE40', category: 'ambientes', image: ambPe40, features: defaultFeatures },
  { id: 'amb-trabalho', name: 'Ambiente de Trabalho', category: 'ambientes', image: ambTrabalho, features: defaultFeatures },
  { id: 'amb-balcao', name: 'Balcão de Atendimento', category: 'ambientes', image: ambBalcao, features: defaultFeatures },
  { id: 'estacao-01', name: 'Estação de Trabalho 01', category: 'ambientes', image: estacao01, features: defaultFeatures },
  { id: 'estacao-02', name: 'Estação de Trabalho 02', category: 'ambientes', image: estacao02, features: defaultFeatures },
  { id: 'estacao-03', name: 'Estação de Trabalho 03', category: 'ambientes', image: estacao03, features: defaultFeatures },
  { id: 'estacao-05', name: 'Estação de Trabalho 05', category: 'ambientes', image: estacao05, features: defaultFeatures },
  { id: 'estacao-06', name: 'Estação de Trabalho 06', category: 'ambientes', image: estacao06, features: defaultFeatures },
  { id: 'estacao-07', name: 'Estação de Trabalho 07', category: 'ambientes', image: estacao07, features: defaultFeatures },
  { id: 'estacao-09', name: 'Estação de Trabalho 09', category: 'ambientes', image: estacao09, features: defaultFeatures },
  { id: 'estacao-10', name: 'Estação de Trabalho 10', category: 'ambientes', image: estacao10, features: defaultFeatures },
  { id: 'estacao-11', name: 'Estação de Trabalho 11', category: 'ambientes', image: estacao11, features: defaultFeatures },
  { id: 'est-trab-1', name: 'Estação de Trabalho Modelo 1', category: 'ambientes', image: estTrab1, features: defaultFeatures },
  { id: 'est-trab-2', name: 'Estação de Trabalho Modelo 2', category: 'ambientes', image: estTrab2, features: defaultFeatures },
  { id: 'est-trab-3', name: 'Estação de Trabalho Modelo 3', category: 'ambientes', image: estTrab3, features: defaultFeatures },
  { id: 'est-trab-ilha', name: 'Estação Ilha', category: 'ambientes', image: estTrabIlha, features: defaultFeatures },
  { id: 'home-office', name: 'Home Office', category: 'ambientes', image: homeOffice, features: defaultFeatures },
  { id: 'mesa-reuniao', name: 'Mesa Reunião', category: 'ambientes', image: mesaReuniao, features: defaultFeatures },

  // ARMARIOS
  { id: 'arm-arquivos', name: 'Arquivos', category: 'armarios', image: armArquivos, features: defaultFeatures },
  { id: 'arm-credenza', name: 'Credenza', category: 'armarios', image: armCredenza, features: defaultFeatures },
  { id: 'arm-extensor', name: 'Extensor', category: 'armarios', image: armExtensor, features: defaultFeatures },
  { id: 'arm-mad-alto', name: 'Armário Madeira Alto', category: 'armarios', image: armMadAlto, features: defaultFeatures },
  { id: 'arm-mad-baixo', name: 'Armário Madeira Baixo', category: 'armarios', image: armMadBaixo, features: defaultFeatures },
  { id: 'arm-mad-misto', name: 'Armário Madeira Misto', category: 'armarios', image: armMadMisto, features: defaultFeatures },
  { id: 'arm-mad-sofisticado', name: 'Armário Madeira Sofisticado', category: 'armarios', image: armMadSofisticado, features: defaultFeatures },
  { id: 'arm-torre', name: 'Torre', category: 'armarios', image: armTorre, features: defaultFeatures },

  // MESAS
  { id: 'mesa-01', name: 'Mesa 01', category: 'mesas', image: mesa01, features: defaultFeatures },
  { id: 'mesa-02', name: 'Mesa 02', category: 'mesas', image: mesa02, features: defaultFeatures },
  { id: 'mesa-03', name: 'Mesa 03', category: 'mesas', image: mesa03, features: defaultFeatures },
  { id: 'mesa-04', name: 'Mesa 04', category: 'mesas', image: mesa04, features: defaultFeatures },
  { id: 'mesa-05', name: 'Mesa 05', category: 'mesas', image: mesa05, features: defaultFeatures },
  { id: 'mesa-06', name: 'Mesa 06', category: 'mesas', image: mesa06, features: defaultFeatures },
  { id: 'mesa-07', name: 'Mesa 07', category: 'mesas', image: mesa07, features: defaultFeatures },

  // ESCOLARES
  { id: 'esc-balcao', name: 'Balcão Trocador', category: 'escolares', image: escBalcao, features: defaultFeatures },
  { id: 'esc-balcao-4gav', name: 'Balcão Trocador 4 Gavetas', category: 'escolares', image: escBalcao4Gav, features: defaultFeatures },
  { id: 'esc-cad-anat', name: 'Cadeira Anatômica', category: 'escolares', image: escCadAnatomica, features: defaultFeatures },
  { id: 'esc-cad-reta', name: 'Cadeira Reta', category: 'escolares', image: escCadReta, features: defaultFeatures },
  { id: 'esc-cad-fund-anat', name: 'Cadeira Fundamental Anatômica', category: 'escolares', image: escCadFundAnat, features: defaultFeatures },
  { id: 'esc-cad-fund-reta', name: 'Cadeira Fundamental Reta', category: 'escolares', image: escCadFundReta, features: defaultFeatures },
  { id: 'esc-conj-sextavado', name: 'Conjunto Sextavado', category: 'escolares', image: escConjSextavado, features: defaultFeatures },
  { id: 'esc-mesa-banco', name: 'Mesa Banco', category: 'escolares', image: escMesaBanco, features: defaultFeatures },
  { id: 'esc-mesa-centro', name: 'Mesa Centro Sextavada', category: 'escolares', image: escMesaCentro, features: defaultFeatures },
  { id: 'esc-mesa-formica', name: 'Mesa Escolar Fórmica', category: 'escolares', image: escMesaFormica, features: defaultFeatures },
  { id: 'esc-mesa-escolar', name: 'Mesa Escolar', category: 'escolares', image: escMesaEscolar, features: defaultFeatures },
  { id: 'esc-mesa-escolar-2', name: 'Mesa Escolar 02', category: 'escolares', image: escMesaEscolar2, features: defaultFeatures },
  { id: 'esc-mesa-sextavada', name: 'Mesa Sextavada', category: 'escolares', image: escMesaSextavada, features: defaultFeatures },
  { id: 'esc-mesa-trapezio', name: 'Mesa Trapézio', category: 'escolares', image: escMesaTrapezio, features: defaultFeatures },
  { id: 'esc-porta-9', name: 'Porta Cartolina 9 Gavetas', category: 'escolares', image: escPortaCartolina9, features: defaultFeatures },
  { id: 'esc-porta-balcao', name: 'Porta Cartolina com Balcão', category: 'escolares', image: escPortaCartolinaBalcao, features: defaultFeatures },
  { id: 'esc-porta-cartolinas', name: 'Porta Cartolinas', category: 'escolares', image: escPortaCartolinas, features: defaultFeatures },
  { id: 'esc-porta-porta', name: 'Porta Cartolinas com Porta', category: 'escolares', image: escPortaCartolinasPorta, features: defaultFeatures },

  // AÇO
  { id: 'aco-armario', name: 'Armário de Aço', category: 'aco', image: acoArmario, features: defaultFeatures },
  { id: 'aco-estante', name: 'Estante de Aço', category: 'aco', image: acoEstante, features: defaultFeatures },
  { id: 'aco-porta-objetos', name: 'Porta Objetos', category: 'aco', image: acoPortaObjetos, features: defaultFeatures },
  { id: 'aco-roupeiro', name: 'Roupeiro de Aço', category: 'aco', image: acoRoupeiro, features: defaultFeatures },
  { id: 'aco-roupeiro-insalubre', name: 'Roupeiro Insalubre', category: 'aco', image: acoRoupeiroInsalubre, features: defaultFeatures },
];

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductsBySubcategory = (category: ProductCategory, subcategory: string): Product[] => {
  return products.filter(p => p.category === category && p.subcategory === subcategory);
};
