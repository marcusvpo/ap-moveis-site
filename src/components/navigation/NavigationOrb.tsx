import { motion } from 'framer-motion';
import { useNavigation } from './NavigationContext';
import logoAp from '@/assets/logo-ap.png';

const NavigationOrb = () => {
  const { isMenuOpen, toggleMenu } = useNavigation();

  // NavigationOrb removido - usando apenas o botão do TopBar
  return null;
};

export default NavigationOrb;
