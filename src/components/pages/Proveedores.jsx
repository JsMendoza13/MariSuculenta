import React from 'react'

const Proveedores = () => {
  return (
    
    <div className='items-center justify-center m-2'>
    <div className='md:gap-0 p-10 xl:ml-20 xl:mr-20' >
      <h1 className='text-3xl xl:text-3xl font-bold text-primary tracking-[3px] m-auto' >Información proveedores. </h1><br/>
        <p className='text-gray-400 text-xl leading-[2rem] mb-4 mt-2'>¡Te gustaría formar parte de esta familia? Envíanos tus datos y productos que te interesan ofrecernos. 
    </p>    

      <form className='w-full max-w-2xl  m-auto '>
         <div className='flex flex-wrap bg-emerald-800 xl:rounded-[10%] rounded-[5%] p-5 '>
           <div className='m-[auto] md:pt-4 pt-3 md:mb-3 grid xl:grid-cols-2 gap-3 '>
             <div>
               <label className='text-gray-300 block uppercase font-bold mb-2' htmlFor="nombre">Nombre</label>
                  <input className='appearance-none block  bg-gray-200 text-gray-700 border  border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200'  type="text" id='nombre' name='nombre' placeholder='Escribe tu nombre' />
</div>
       
        <div>
           <label className='text-gray-300 block uppercase font-bold mb-2' htmlFor="nit">Nit</label>
              <input className='appearance-none block  bg-gray-200 text-gray-700 border border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200' type="text" id='nit' name='nit' placeholder='Numero de identificacion' />
</div>

                 
        <div>
          <label className='text-gray-300 block uppercase font-bold mb-2' htmlFor="direccion">Dirección</label>
            <input className='appearance-none block  bg-gray-200 text-gray-700 border border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200' type="text" id='direccion' name='direccion' placeholder='Escriba una dirección' />
</div>

<div>
         <label className='text-gray-300 block uppercase font-bold mb-2' htmlFor="tel">Telefono</label>
          <input className='appearance-none block  bg-gray-200 text-gray-700 border border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200' type="text" id='tel' name='tel' placeholder='Telefono de contacto' />
</div>

        
<div>
           <label className='text-gray-300 block uppercase font-bold mb-2' htmlFor="email">Correo Electronico</label>
             <input className='appearance-none block  bg-gray-200 text-gray-700 border border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200' type="text" id='email' name='email' placeholder='Escriba tu email' />
</div>


       <div>
          <label className='text-gray-300 block uppercase font-bold mb-2' htmlFor="producto">Nombre del producto</label>
           <input className='appearance-none block  bg-gray-200 text-gray-700 border border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200' type="text" id='producto' name='producto' placeholder='Producto que compras' />
</div>

        <div className=''> 
         
          <label for="message" class="text-gray-300 uppercase font-bold ">Descripción de la empresa</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-green-50 rounded-lg border border-primary focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-primary dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-800" placeholder="Descríbenos la empresa un poco..."></textarea>


  
        <label className='text-gray-300 block uppercase font-bold ' htmlFor="producto">Descripción del producto</label>  
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-green-50 rounded-lg border border-primary focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-primary dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-800" placeholder="Descríbenos el producto..."></textarea>
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
 
 



  )
}

export default Proveedores