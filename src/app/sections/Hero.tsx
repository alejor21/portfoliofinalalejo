import { useState, useEffect } from 'react';
import LogoPerson from './../../assets/images/portada.jpg';
import LogoPerson2 from './../../assets/images/portada2.jpg';

const Hero = () => {
  const [currentLogo, setCurrentLogo] = useState(LogoPerson);
  const [isFirstImage, setIsFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo(isFirstImage ? LogoPerson2 : LogoPerson);
      setIsFirstImage(!isFirstImage);
    }, 3000);

    return () => clearInterval(interval);
  }, [isFirstImage]);

  return (
    <section
      id='home'
      className='min-h-screen container flex flex-col items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark'
    >
      <div className='w-full flex flex-col items-center md:flex-row md:items-start md:justify-center md:space-x-10'>
        <div className='flex flex-col items-center md:items-start'>
          <img
            src={currentLogo}
            className='w-2/3 md:w-full rounded-full max-w-96 mb-5 md:mb-0'
            alt=''
          />
          <p className='text-xs text-balance leading-5 max-w-md px-2 mx-auto md:mx-0 dark:text-gray-300 text-center md:text-left'>
            soy un ingeniero de software en proceso, estudiante de la universidad cooperativa de colombia, me gusta mucho el apartado de 
            frontend y algo de backend, tambien tengo conocimientos en bases de datos y creacion de apliacaciones.
          </p>
        </div>
        <div className='w-full md:w-auto md:flex-1 pt-20 md:pt-0 text-center md:text-left'>
          <h5 className='font-medium text-gray-600 dark:text-gray-200'>
            Hola, este es mi portafolio!
          </h5>
          <h1 className='sm:text-5xl text-4xl dark:text-white !leading-normal relative font-medium animated-text'>
            mi nombre es <span className='text-primary'>brayan alejandro rojas sanchez</span> <br />
            soy ingeniero en software
          </h1>
          <button className='btn btn-filled mt-5'>
            <i className='fa-regular fa-envelope'></i> contactame!
          </button>
          <button className='font-semibold dark:text-gray-200 border-b-2 border-gray-700 ml-4'>
            <i className='fa-solid fa-up-right-from-square'></i> Mira mi portafolio!
          </button>
          <div className='flex items-center justify-center md:justify-start dark:text-gray-200 text-gray-600 gap-6 mt-9'>
            <p className='text-xs'>me puedes seguir en linkdln, github o facebook</p>
            <div className='flex justify-end gap-3 text-3xl'>
              <a href='https://github.com/alejor21' className='social-icon text-black'>
                <i className='fa-brands fa-github'></i>
              </a>
              <a href='https://linkedin.com/in/tuusuario' className='social-icon text-blue-600'>
                <i className='fa-brands fa-linkedin'></i>
              </a>
              <a href='https://www.facebook.com/profile.php?id=100007089857261&locale=es_LA' className='social-icon text-blue-800'>
                <i className='fa-brands fa-facebook'></i>
              </a>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Hero;
