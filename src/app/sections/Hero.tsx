import LogoPerson from './../../assets/images/portada.jpg';
import herramienta from './../../assets/images/herramienta1.png';
import herramienta2 from './../../assets/images/herramienta2.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-screen container grid place-items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark'
    >
      <div className='w-full pt-20 grid md:grid-cols-6 h-full items-center max-w-6xl justify-around'>
        <div className='lg:col-span-2 sm:pl-2 md:col-span-3 md:text-left text-center'>
          <div>
            <h5 className='font-medium text-gray-600 dark:text-gray-200'>
              Hola, este es mi portafolio!
            </h5>
            <h1 className='sm:text-5xl text-4xl dark:text-white !leading-normal relative font-medium'>
              mi nombre es <span className='text-primary'>brayan alejandro rojas sanchez</span> <br />
              soy ingeniero en software
            </h1>
            <button className='btn btn-filled mt-5'>
              <i className='fa-regular fa-envelope'></i> contactame!
            </button>
            <button className='font-semibold dark:text-gray-200 border-b-2 border-gray-700 ml-4'>
              <i className='fa-solid fa-up-right-from-square'></i> Mira mi portafolio!
            </button>
          </div>
          <div className='md:w-96 md:ml-auto flex mt-9 gap-2 dark:text-gray-300'>
            <i className='fa-solid fa-border-all mt-0.5 md:inline-block hidden'></i>
            <p className='text-xs text-balance leading-5 max-w-md px-2 mx-auto'>
              soy un ingeniero de software en proceso, estudiante de la universidad cooperativa de colombia, me gusta mucho el apartado de 
              frontend y algo de backend, tambien tengo conocimientos en bases de datos y creacion de apliacaciones.
            </p>
          </div>
          <div className='flex items-center md:justify-end justify-center dark:text-gray-200 text-gray-600 gap-6 mt-9'>
            <p className='text-xs'>me puedes seguir en linkdln,github o facebook</p>
            <div className='flex justify-end gap-3'>
    <a href='https://github.com/alejor21' className='social-icon'>
        <i className='fa-brands fa-github'></i>
    </a>
    <a href='https://linkedin.com/in/tuusuario' className='social-icon'>
        <i className='fa-brands fa-linkedin'></i>
    </a>
    <a href='https://www.facebook.com/profile.php?id=100007089857261&locale=es_LA' className='social-icon'>
        <i className='fa-brands fa-facebook'></i>
    </a>
</div>

          </div>
        </div>
        <div className='lg:col-span-2 md:col-span-3'>
          <img
            src={LogoPerson}
            className='w-2/3 rounded-full mx-auto md:w-full max-w-96 md:mt-0 mt-5'
            alt=''
          />
        </div>
        
        <div className='lg:col-span-2 md:col-span-3'>
  <ul className='text-2xl data-[slot=count]:*:text-3xl data-[slot=count]:*:font-bold leading-[3.14rem] text-center pt-5 lg:block md:flex items-center justify-between'>
    <li data-slot='count'></li>
    <li>
      herramientas <span className='text-primary'>que utilizo</span>
    </li>
    <br />
    <li data-slot='count'></li>
    <li>
       <span className='text-primary'></span>
    </li>
    <li>
      <button className='btn btn-outline lg:mt-10 md:mt-0 mt-10'>
        <i className='fa-solid fa-download'></i> cv
      </button>
    </li>
  </ul>
  
  <img
    src={herramienta}
    className='w-20 rounded-full mx-auto md:w-full max-w-96 md:mt-0 mt-5'
    alt='Herramienta 1'
  />
</div>
<div className='lg:col-span-2 md:col-span-3'>
<img
  src={herramienta2}
  className='w-10 rounded-full mx-auto md:w-full max-w-96 md:mt-0 mt-5'
  alt='Herramienta 2'
/>

        </div>


        <div className='lg:col-span-2 md:col-span-6 lg:bg-gradient-to-l md:bg-none mt-2 bg-gradient-to-l dark:from-slate-800 from-gray-100 lg:h-96 md:h-auto h-96 w-full'>
          <ul className='text-2xl data-[slot=count]:*:text-3xl data-[slot=count]:*:font-bold leading-[3.14rem] text-center pt-5 lg:block md:flex items-center justify-between'>
            <li data-slot='count'></li>
            <li>
              herramientas <span className='text-primary'>que utilizo</span>
            </li>
            <br />
            <li data-slot='count'></li>
            <li>
              normalmente me centro <span className='text-primary'>en</span>
            </li>
            <li>
              <button className='btn btn-outline lg:mt-10 md:mt-0 mt-10'>
                <i className='fa-solid fa-download'></i> 
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
