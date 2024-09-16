import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from 'semantic-ui-react';

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <h1>Tienda E-commerce</h1>
      <Button onClick={toggleTheme}>
        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </Button>
    </header>
  );
};

export default Header;
