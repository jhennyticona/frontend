import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }

  let navbarComponent;
  let navbarAdm = (
    <div className="flex gap-4">
      <Link to="/itens" className="hover:underline">
        Itens
      </Link>
      <Link to="/cadastroItem" className="hover:underline">
        Cadastrar item
      </Link>
      <Link to="/categorias" className="hover:underline">
        Categorias
      </Link>
      <Link to="/cadastroCategoria" className="hover:underline">
        Cadastrar categoria
      </Link>
      <Link to="/perfil" className="hover:underline">
        Perfil
      </Link>
      <Link to="" onClick={logout} className="hover:underline">
        Sair
      </Link>
    </div>
  );
  let navbarVendedor = (
    <div className="flex gap-4">
      <Link to="/itens" className="hover:underline">
        Itens
      </Link>
      <Link to="/cadastroItem" className="hover:underline">
        Cadastrar item
      </Link>
      <Link to="/perfil" className="hover:underline">
        Perfil
      </Link>
      <Link to="" onClick={logout} className="hover:underline">
        Sair
      </Link>
    </div>
  );
  if (usuario.token !== "") {
    navbarComponent = (
      <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold uppercase">
            DuMorro
          </Link>
          {usuario.tipo=="vendedor"?navbarVendedor:navbarAdm}
        </div>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
