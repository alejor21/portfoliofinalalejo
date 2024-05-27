import downhill from './../../assets/images/downhill.jpg';
import motocrooss from './../../assets/images/motocross.jpg';
import videojuegos from './../../assets/images/downhill.jpg';


const About = () => {
  return (
    <section id='about' className='container min-h-screen flex-center'>
      <div className=''>
        <div className='text-center text-balance'>
          <h3>mis intereses</h3>
          <p className='px-2 mt-3 text-gray-500'>
            me gusta mucho jugar videjuegos, tambien estoy muy wnfocada en las redes sociales, me gusta la edicion de videos y fotografia y me apasiona monta 
            bicicleta y moto por lo general practico downhill y mx, tambien me gustan mucho los deportes de contacto.
          </p>
        </div>
        <div className='max-w-2xl grid md:grid-cols-1 gap-6 px-2 sm:grid-cols-3 *:text-lg *:sm:max-w-full *:max-w-sm hover:*:brightness-90 *:mx-auto *:sm:text-left *:text-center *:hover:cursor-pointer *:shadow-sm mt-10 mx-auto *:rounded-xl *:bg-gray-100 *:dark:bg-slate-800 *:p-7 *:flex *:md:flex-row *:flex-col *:items-center *:gap-12'>
          <div>
            <div className='*:text-primary'>
  
              
              
              <h6 className='font-semibold whitespace-nowrap mt-3'>
                downhill
              </h6>
              <img
    src={downhill}
    className='w-20 rounded-full mx-auto md:w-full max-w-96 md:mt-0 mt-5'
    alt='Herramienta 1'
  />
            </div>
            <div>
              <p className='text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance'>
                desde pequeño me han gustado los deportes extremos, entre ellos esta el downhill un deporte que se basa en descender por una montaña con bicicletas, me ha ido bien en este deporte
                he ganado varios torneos y lo sigo practicando hasta el dia de hoy.
              </p>
            </div>
            
            <i className='fa-solid fa-arrow-up-long text-primary rotate-45 cursor-pointer'></i>
            
          </div>
          <div>
            <div className='*:text-primary'>
              
              <h6 className='font-semibold whitespace-nowrap mt-3'>
                motocrooss
                <img
    src={motocrooss}
    className='w-20 rounded-full mx-auto md:w-full max-w-96 md:mt-0 mt-5'
    alt='Herramienta 1'
  />
              </h6>
            </div>
            <div>
              <p className='text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance'>
                tambien me gusta mucho el motocrooss, es un deporte que desde pequeño he practicado, fui profesional por un timpo pero
                 por lesiones me termine retirando del deporte
              </p>
            </div>
            <i className='fa-solid fa-arrow-up-long text-primary rotate-45 cursor-pointer'></i>
          </div>
          <div>
            <div className='*:text-primary'>
              <h6 className='font-semibold whitespace-nowrap mt-3'>
                videojuegos
              </h6>
              <img
    src={videojuegos}
    className='w-20 rounded-full mx-auto md:w-full max-w-96 md:mt-0 mt-5'
    alt='Herramienta 1'
  />
            </div>
            <div>
              <p className='text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                corporis tempora possimus?
              </p>
            </div>
            <i className='fa-solid fa-arrow-up-long text-primary rotate-45 cursor-pointer'></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
