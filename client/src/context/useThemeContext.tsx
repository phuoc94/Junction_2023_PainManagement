import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const useThemeContext = () => useContext(ThemeContext);
