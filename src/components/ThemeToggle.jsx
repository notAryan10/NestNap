import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
    >
      <motion.div
        className="theme-toggle-icon"
        animate={{
          rotate: isDarkTheme ? 180 : 0,
          scale: isDarkTheme ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        {isDarkTheme ? '☀️' : '🌙'}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 