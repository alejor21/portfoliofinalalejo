const Header = () => {
  return (
    <header className='fixed xl:block w-full py-4 lg:px-0 px-5 z-[999] duration-300'>
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
            <a href='#contact'>habilidades</a>
          </li>
          <li>
            <a href='#contact'>contacto</a>
          </li>
          <li className='theme-switch'>
            <i className='fa-solid fa-circle-half-stroke cursor-pointer'></i>
          </li>
        </ul>
        <div className='flex items-center gap-6'>
          <a href='#contact'>
            <button className='btn btn-outline md:!flex !hidden'>
              <i className='fa-regular fa-paper-plane'></i> Let's Talk
            </button>
          </a>
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

