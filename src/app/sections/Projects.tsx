import web from './../../assets/images/webdis.jpg';
import mobile from './../../assets/images/tipos-de-app-moviles.png';
import Pro3 from './../../assets/images/wireframes.png';

const Projects = () => {
  return (
    <section id='projects' className='container min-h-screen flex-center'>
      <div className='text-center text-balance'>
        <h3>Mis proyectos</h3>
        <p className='px-2 mt-3 text-gray-500'>
         aqui se pueden observar algunos de los proyectos en los cuales he trabajado.
        </p>

        <br />
        <div className='flex-center gap-4'>
          <button className='btn btn-filled'>paginas web</button>
          <button className='btn btn-outline'>paginas mobile</button>
          <button className='btn btn-outline'>wireframes</button>
          <button className='btn btn-outline'>otros proyectos</button>
        </div>
        <br />
        <div className='*:w-full grid mx-auto md:grid-rows-7 md:grid-cols-3 max-w-4xl md:px-0 px-10 *:h-full *:object-cover *:border-4 *:dark:border-white *:rounded-md gap-4 *:cursor-pointer group hover:*:!grayscale-0 *:hover:grayscale *:duration-1000'>
          <img className='' src={web} alt='' />
          <img src={Pro3} className='' alt='' />
          <img src={mobile} className='' alt='' />
          <img src={mobile} className='' alt='' />
          <img src={mobile} className='' alt='' />
          <img src={mobile} className='' alt='' />

        </div>
      </div>
    </section>
  );
};

export default Projects;
