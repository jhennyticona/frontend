import './Home.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Carrossel from '../../components/carrossel/Carrossel';
import ListaItens from '../../components/itens/listaItens/MeusItens';
import ListaItensHomePreCadastro from '../../components/itens/listaItens/ListaItensHomePreCadastro';
import ListaItensHomeCliente from '../../components/itens/listaItens/ListaItensHomeCliente';
import ListaItensHomeVendedor from '../../components/itens/listaItens/ListaItensHomeVendedor';

function Home() {

  const { usuario } = useContext(AuthContext);
  let listaItensComponent;

  let listaItensHomePreCadastro = (
    < ListaItensHomePreCadastro />
  );
  let listaItensHomeCliente = (
    < ListaItensHomeCliente />
  );

  let listaItensHomeVendedor = (
    < ListaItensHomeVendedor />
  )

  if (usuario.token !== "") {
    listaItensComponent = (
      <>
        {usuario.tipo == "cliente" ? listaItensHomeCliente : usuario.tipo == "vendedor" ? listaItensHomeVendedor : ListaItens}
      </>
    );
  } else {
    listaItensComponent = listaItensHomePreCadastro;
  }

  return (
    <>
      <div className=' container mx-auto max-w-[1640px] p-4'>
        <div className='max-h-[500px] relative '>
          {/* Overlay */}
          <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>

          </div>
          <div className='w-full max-h-[500px] object-cover'>
            <Carrossel />
          </div>

        </div>
      </div>

      <div className=' container max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 m-10'>Anuncie aqui <p>seu negócio</p></p>
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg'
            alt='/'
          />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 m-10'>Empoderando <p>empreendedores locais</p></p>
            {/*<button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>*/}
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://cdn.pixabay.com/photo/2016/11/29/09/00/doughnuts-1868573_1280.jpg'
            alt='/'
          />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 m-10'>Conheça as maravilhas<p>escondidas da comunidade</p></p>
            {/*<button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>*/}
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://cdn.pixabay.com/photo/2020/02/11/21/09/baker-4840960_1280.jpg'
            alt='/'
          />
        </div>
      </div>
      {listaItensComponent}
    </>
  );
}

export default Home;