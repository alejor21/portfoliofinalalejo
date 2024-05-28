import React from 'react';
import downhill from './../../assets/images/downhill.jpg';
import motocross from './../../assets/images/motocross.jpg';
import videojuegos from './../../assets/images/downhill.jpg';
import bicileta from './../../assets/images/bicicleta.jpg';
import bici2 from './../../assets/images/bici2.jpg';
import moto2 from './../../assets/images/moto2.jpg';
import moto3 from './../../assets/images/motoyo.jpg';
import setup from './../../assets/images/setup.jpg';
import novia from './../../assets/images/novia.jpg';
import amigos from './../../assets/images/amigos.jpg';
const About = () => {
  return (
    <section id='about' className='container min-h-screen flex-center'>
      <div className=''>
        <div className='text-center text-balance'>
          <h3>mis intereses</h3>
          <p className='px-2 mt-3 text-gray-500 dark:text-white'>
            Me gusta mucho jugar videojuegos, también estoy muy enfocado en las redes sociales, me gusta la edición de videos y fotografía, y me apasiona montar bicicleta y moto. Por lo general, practico downhill y motocross. También me gustan mucho los deportes de contacto.
          </p>
        </div>
        <div className='max-w-2xl grid md:grid-cols-1 gap-6 px-2 sm:grid-cols-3 text-lg sm:max-w-full max-w-sm hover:brightness-90 mx-auto sm:text-left text-center hover:cursor-pointer shadow-sm mt-10 rounded-xl bg-gray-100 dark:bg-slate-800 p-7 flex md:flex-row flex-col items-center gap-12'>
          <div className='bg-black p-3 rounded-md'>
            <div className='text-primary'>
              <h6 className='font-semibold whitespace-nowrap mt-3'>
                Downhill
              </h6>
              <div className='grid grid-cols-3 gap-1'>
                <img
                  src={downhill}
                  className='w-full h-full rounded-md'
                  alt='downhill'
                />
                <img
                  src={bicileta}
                  className='w-full h-full rounded-md'
                  alt='downhill adicional 1'
                />
                <img
                  src={bici2}
                  className='w-full h-full rounded-md'
                  alt='downhill adicional 2'
                />
              </div>
            </div>
            <div>
              <p className='text-base text-white leading-6 text-balance mt-3'>
                Desde pequeño me han gustado los deportes extremos, entre ellos está el downhill, un deporte que se basa en descender por una montaña con bicicletas. Me ha ido bien en este deporte, he ganado varios torneos y lo sigo practicando hasta el día de hoy.
              </p>
            </div>
          </div>
          <div className='bg-black p-3 rounded-md'>
            <div className='text-primary'>
              <h6 className='font-semibold whitespace-nowrap mt-3'>
                Motocross
              </h6>
              <div className='grid grid-cols-3 gap-1'>
                <img
                  src={motocross}
                  className='w-full h-full rounded-md'
                  alt='motocross'
                />
                <img
                  src={moto2}
                  className='w-full h-full rounded-md'
                  alt='motocross adicional 1'
                />
                <img
                  src={moto3}
                  className='w-full h-full rounded-md'
                  alt='motocross adicional 2'
                />
              </div>
            </div>
            <div>
              <p className='text-base text-white leading-6 text-balance mt-3'>
                También me gusta mucho el motocross, es un deporte que desde pequeño he practicado. Fui profesional por un tiempo, pero por lesiones me terminé retirando del deporte.
              </p>
            </div>
          </div>
          <div className='bg-black p-3 rounded-md'>
            <div className='text-primary'>
              <h6 className='font-semibold whitespace-nowrap mt-3'>
                ratos libres
              </h6>
              <div className='grid grid-cols-3 gap-1'>
                <img
                  src={setup}
                  className='w-full h-full rounded-md'
                  alt='videojuegos'
                />
                <img
                  src={novia}
                  className='w-full h-full rounded-md'
                  alt='videojuegos adicional 1'
                />
                <img
                  src={amigos}
                  className='w-full h-full rounded-md'
                  alt='videojuegos adicional 2'
                />
              </div>
            </div>
            <div>
              <p className='text-base text-white leading-6 text-balance mt-3'>
                en mis ratos libres me gusta mucho jugar en mi computador, editar videos e imagenes pero tambien me gusta pasar momentos con las personas que quiero 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
