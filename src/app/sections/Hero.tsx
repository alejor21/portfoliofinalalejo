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

  const openGitHub = () => {
    window.open('https://github.com/alejor21', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://linkedin.com/in/tuusuario', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/profile.php?id=100007089857261&locale=es_LA', '_blank');
  };

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
            Soy un ingeniero de software en proceso, estudiante de la Universidad Cooperativa de Colombia. Me gusta mucho el apartado de frontend y algo de backend, también tengo conocimientos en bases de datos y creación de aplicaciones.
          </p>
        </div>
        <div className='w-full md:w-auto md:flex-1 pt-20 md:pt-0 text-center md:text-left'>
          <h5 className='font-medium text-gray-600 dark:text-gray-200'>
            ¡Hola, este es mi portafolio!
          </h5>
          <h1 className='sm:text-5xl text-4xl dark:text-white !leading-normal relative font-medium animated-text'>
            Mi nombre es <span className='text-primary'>Brayan Alejandro Rojas Sanchez</span>. <br />
            Soy ingeniero en software.
          </h1>
          <button className='btn btn-filled mt-5'>
            <i className='fa-regular fa-envelope'></i> ¡Contáctame!
          </button>
          <button className='font-semibold dark:text-gray-200 border-b-2 border-gray-700 ml-4'>
            <i className='fa-solid fa-up-right-from-square'></i> ¡Mira mi portafolio!
          </button>
          <div className='flex items-center justify-center md:justify-start dark:text-gray-200 text-gray-600 gap-6 mt-9'>
            <p className='text-xs'>Me puedes seguir en LinkedIn, GitHub o Facebook:</p>
            <div className='flex justify-end gap-3 text-3xl'>
              <button className='social-icon text-black' onClick={openGitHub}>
                <i className='fa-brands fa-github'></i>
              </button>
              <button className='social-icon text-blue-600' onClick={openLinkedIn}>
                <i className='fa-brands fa-linkedin'></i>
              </button>
              <button className='social-icon text-blue-800' onClick={openFacebook}>
                <i className='fa-brands fa-facebook'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
