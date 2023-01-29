import React from 'react'

const Clientes = () => {
  return (
   
    <div className='items-center justify-center m-2 '>
    <div className='min-h-[90vh] grid grid-cols-1 md:grid-cols-2 md:gap-0 p-10' >
      <h1 className='text-3xl xl:text-3xl font-bold text-primary tracking-[3px] m-auto' >Clientes exclusivos </h1><br/>
        <p className='text-gray-400 text-xl leading-[2rem] mb-4 mt-6'>Déjanos tus datos en este formulario para que estés al pendiente de todas nuestras promociones y exclusividades.
    </p>    

      <form className='w-full max-w-2xl  m-auto'>
         <div className='flex flex-wrap m-auto bg-emerald-800 rounded-[10%] '>
           <div className='m-[auto] md:pt-10 pt-3 md:mb-0 '>
             <div>
               <label className='text-gray-300 block uppercase font-bold mb-2' htmlFor="nombre">Nombre</label>
                  <input className='appearance-none block  bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200'  type="text" id='nombre' name='nombre' placeholder='Escribe tu nombre' />
</div>
       
        <div>
           <label className='text-gray-300 block uppercase font-bold mb-2' htmlFor="id">N* Documento</label>
              <input className='appearance-none block  bg-gray-200 text-gray-700 border border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200' type="text" id='id' name='id' placeholder='Numero de identificacion' />
</div>

         
        <div>
           <label className='text-gray-300 block uppercase font-bold mb-2' htmlFor="email">Correo Electronico</label>
             <input className='appearance-none block  bg-gray-200 text-gray-700 border border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200' type="text" id='email' name='email' placeholder='Escriba tu email' />
</div>
                 
        <div>
          <label className='text-gray-300 block uppercase font-bold mb-2' htmlFor="direccion">Dirección</label>
            <input className='appearance-none block  bg-gray-200 text-gray-700 border border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200' type="text" id='direccion' name='direccion' placeholder='Escriba una dirección' />
</div>
         
       <div>
          <label className='text-gray-300 block uppercase font-bold mb-2' htmlFor="barrio">Barrio</label>
           <input className='appearance-none block  bg-gray-200 text-gray-700 border border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200' type="text" id='barrio' name='barrio' placeholder='Cual es el barrio' />
</div>
         
        <div>
         <label className='text-gray-300 block uppercase font-bold mb-2' htmlFor="tel">Telefono</label>
          <input className='appearance-none block  bg-gray-200 text-gray-700 border border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200' type="text" id='tel' name='tel' placeholder='Telefono de contacto' />
</div>

            <button className='bg-gradient-to-r   hover:from-teal-900
              hover:to-green-400
              border-2 border-primary
              hover:border-none
              h-10 xl:w-40 w-full font-bold hover:text-white text-primary rounded-xl xl:m-10 m-2' type='submit'>Enviar</button>
</div>
  </div>
     </form> 
         </div>
            </div>   
 
 



  );
};

export default Clientes