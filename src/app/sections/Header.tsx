import { useState } from 'react';

const Header = () => {
  
  const [language, setLanguage] = useState('Español');

  
  const toggleLanguage = () => {
    
    setLanguage(prevLanguage => prevLanguage === 'Español' ? 'English' : 'Español');
    
  };

  return (
    <header className='fixed xl:block w-full py-4 lg:px-0 px-5 z-[999] duration-300 bg-blue-500'>
      <nav className='flex justify-between items-center max-w-6xl mx-auto px-2'>
        <div className='flex gap-4 items-center'>
        </div>
        <ul className='gap-10 md:flex hidden hover:*:text-primary *:duration-200'>
          <li>
            <a href='#home'>sobre mi</a>
          </li>
          <li>
            <a href='#about'>aficiones</a>
          </li>
          <li>
            <a href='#projects'>proyectos</a>
          </li>
          <li>
            <a href='#contact'>contacto</a>
          </li>
        </ul>
        <div className='flex items-center gap-6'>
          {/* Botón para cambiar el idioma */}
          <button onClick={toggleLanguage}>{language === 'Español' ? 'English' : 'Español'}</button>
          <span className='theme-switch md:hidden'>
            <i className='fa-solid fa-circle-half-stroke cursor-pointer'></i>
          </span>
          <span id='menubar' className='cursor-pointer md:hidden text-xl'>
            <i className='fa-solid fa-bars'></i>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
