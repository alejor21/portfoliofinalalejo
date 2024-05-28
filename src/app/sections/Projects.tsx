import React from 'react';
import web from './../../assets/images/webdis.jpg';
import mobile from './../../assets/images/tipos-de-app-moviles.png';
import Pro3 from './../../assets/images/wireframes.png';


const Projects = () => {
  return (
    <section id='projects' className='container min-h-screen flex-center'>
      <div className='text-center text-balance'>
        <h3>Mis proyectos</h3>
        <p className='px-2 mt-3 text-white-500'>
         Aquí se pueden observar algunos de los proyectos en los cuales he trabajado.
        </p>

        <br />
        
        <br />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='group'>
            <img className='w-full rounded-md cursor-pointer' src={web} alt='Página Web' />
            <div className='text-lg font-bold mt-2'>Página Web</div>
            <div className='text-gray-500'>Breve descripción de la página web.</div>
          </div>
          <div className='group'>
            <img className='w-full rounded-md cursor-pointer' src={Pro3} alt='Wireframe' />
            <div className='text-lg font-bold mt-2'>Wireframe</div>
            <div className='text-gray-500'>Breve descripción del wireframe.</div>
          </div>
          <div className='group'>
            <img className='w-full rounded-md cursor-pointer' src={mobile} alt='Página Mobile' />
            <div className='text-lg font-bold mt-2'>Página Mobile</div>
            <div className='text-gray-500'>Breve descripción de la página mobile.</div>
          </div>
        </div>

        {/* Apartado adicional para insertar imágenes pequeñas */}
        <div className='mt-8'>
          <h4 className='text-xl font-bold'>otros proyectos</h4>
          <p className='text-white-500 mt-2'>Aquí puedes ver más imágenes de mis proyectos.</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
            <div>
              <img className='w-full rounded-md' src={web} alt='Proyecto 1' />
              <h5 className='text-lg font-bold mt-2'>maquinas vietuales</h5>
              <p className='text-gray-500'>Descripción del proyecto 1.</p>
            </div>
            <div>
              <img className='w-full rounded-md' src={Pro3} alt='Proyecto 2' />
              <h5 className='text-lg font-bold mt-2'>sistemas de inventario</h5>
              <p className='text-gray-500'>Descripción del proyecto 2.</p>
            </div>
            <div>
              <img className='w-full rounded-md' src={mobile} alt='Proyecto 3' />
              <h5 className='text-lg font-bold mt-2'>Proyecto 3</h5>
              <p className='text-gray-500'>Descripción del proyecto 3.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
