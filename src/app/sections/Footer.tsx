const Footer = () => {
  return (
    <footer className='dark:bg-slate-700 bg-slate-100 text-center py-2'>
      Copyright &copy; 2024
      <ul className='flex-center gap-5 py-4 text-sm'>
        <li>
          <a href='#home'>sobre mi</a>
        </li>
        <li>
          <a href='#about'>proyectos</a>
        </li>
        <li>
          <a href='#projects'>aficiones</a>
        </li>
        <li>
          <a href='#contact'>habilidades</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
