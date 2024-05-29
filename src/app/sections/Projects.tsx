import React from 'react';
import web from './../../assets/images/webdis.jpg';
import mobile from './../../assets/images/tipos-de-app-moviles.png';
import Pro3 from './../../assets/images/wireframes.png';
import maquinas from './../../assets/images/Maquinas_virtuales.jpg';
import apis from './../../assets/images/apis.jpg';
import inventario from './../../assets/images/inventario.jpg';

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
            <div className='text-white-500'>algunas de las paginas web diseñadas</div>
          </div>
          <div className='group'>
            <img className='w-full rounded-md cursor-pointer' src={Pro3} alt='Wireframe' />
            <div className='text-lg font-bold mt-2'>Wireframe</div>
            <div className='text-white-500'>algunos de mis wireframes</div>
          </div>
          <div className='group'>
            <img className='w-full rounded-md cursor-pointer' src={mobile} alt='Página Mobile' />
            <div className='text-lg font-bold mt-2'>Página Mobile</div>
            <div className='text-white-500'></div>
          </div>
        </div>

        {/* Apartado adicional para insertar imágenes pequeñas */}
        <div className='mt-8'>
          <h4 className='text-xl font-bold'>otros proyectos</h4>
          <p className='text-white-500 mt-2'>Aquí puedes ver más imágenes de mis proyectos.</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
            <div>
              <img className='w-full rounded-md' src={maquinas} alt='Proyecto 1' />
              <h5 className='text-lg font-bold mt-2'>maquinas virtuales</h5>
              <p className='text-gray-500'></p>
            </div>
            <div>
              <img className='w-full rounded-md' src={inventario} alt='Proyecto 2' />
              <h5 className='text-lg font-bold mt-2'>sistemas de inventario</h5>
              <p className='text-gray-500'></p>
            </div>
            <div>
              <img className='w-full rounded-md' src={apis} alt='Proyecto 3' />
              <h5 className='text-lg font-bold mt-2'>apis</h5>
              <p className='text-gray-500'></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
