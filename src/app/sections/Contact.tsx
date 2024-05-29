
import herramienta from './../../assets/images/herramienta2.png';
import herramienta2 from './../../assets/images/herramienta1.png';
import herramienta3 from './../../assets/images/herramienta3.png';
import herramienta4 from './../../assets/images/herramienta4.png';
import herramienta5 from './../../assets/images/herramienta5.png';
const Tools = () => {
  return (
    <section
      id='tools'
      className='container relative max-w-4xl mx-auto min-h-screen flex-center px-5'
    >
      <div className='pb-10'>
        <div className='mt-12 md:relative flex flex-col gap-5 sm:max-w-full mx-auto max-w-xs'>
          <div className='w-full'>
            <h2 className='text-2xl font-bold text-center mb-5'>
              Herramientas <span className='text-primary'>que utilizo</span>
            </h2>
            <div className='flex justify-center gap-4'>
              <img
                src={herramienta}
                className='w-32 h-32 rounded-full'
                alt='Herramienta 1'
              />
              <img
                src={herramienta2}
                className='w-32 h-32 rounded-full'
                alt='Herramienta 2'
              />
              <img
                src={herramienta3}
                className='w-32 h-32 rounded-full'
                alt='Herramienta 2'
              />
              <img
                src={herramienta4}
                className='w-32 h-32 rounded-full'
                alt='Herramienta 2'
              />
              <img
                src={herramienta5}
                className='w-32 h-32 rounded-full'
                alt='Herramienta 2'
              />
            </div>
          </div>
          <div className='dark:bg-slate-800 bg-slate-50 dark:text-gray-100 text-gray-800 rounded-lg shadow-xl mx-auto md:w-2/3 py-14 px-7 w-full mt-10'>
            <h3 className='font-semibold text-3xl'>
              conecta <br />
              <span className='text-primary'>conmigo</span>
            </h3>
            <div className='flex items-center justify-center dark:text-gray-200 text-gray-600 gap-6 mt-9'>
              <div className='flex justify-end gap-3'>
                <a href='https://github.com' target='_blank' className='social-icon'>
                  <i className='fa-brands fa-github'></i>
                </a>
                <a href='https://linkedin.com' target='_blank' className='social-icon'>
                  <i className='fa-brands fa-linkedin'></i>
                </a>
                <a href='https://facebook.com' target='_blank' className='social-icon'>
                  <i className='fa-brands fa-facebook'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;

