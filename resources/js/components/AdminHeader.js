import React from 'react';
import ReactDOM from 'react-dom';


function AdminHeader (){
    return(
    	<nav className="navbar navbar-expand-lg">
    	  <center id="divLogo">
    	  	<img src="/images/logo.png" className="imageHeader" alt="Logo de empresa" />
    	  </center>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarText">
		    <ul className="navbar-nav mr-auto" style={{minWidth:'100%'}}>
		      <li className="nav-item active">
		        <a className="nav-link" href="/inmuebles">Inicio</a>
		      </li>
		      <li className="nav-item active">
		        <a className="nav-link" href="/inmuebles/create"> Nuevo Inmueble</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link"disabled>Gestionar Perfil</a>
		      </li>


		    	<li className="dropdown nav-item">
			    	<a className="btn dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						{document.getElementById('logeado').value.charAt(0).toUpperCase() + document.getElementById('logeado').value.slice(1)}
			    	</a>

					<div className="dropdown-menu btnCard" aria-labelledby="dropdownMenuLink">
						<a className="dropdown-item btnCard nav-link" style={{textAlign:'center'}} href="#">Ver perfil</a>
						<a className="dropdown-item btnCard nav-link" style={{textAlign:'center'}} id="logout" href="#">Cerrar sesión</a>
					</div>
				</li>
		    </ul>
		  </div>
		</nav>
    	);
}

export default AdminHeader;

if (document.getElementById('AdminHeader')) {
    ReactDOM.render(<AdminHeader />, document.getElementById('AdminHeader'));
}
