import React from 'react';
import ReactDOM from 'react-dom';


function ClientHeader (){
    return(
    	<nav className="navbar navbar-expand-lg">
    	  <center id="divLogo">
    	  	<img src="/images/logo.png" className="imageHeader" alt="Logo de empresa" />
    	  </center>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <center className="collapse navbar-collapse" id="navbarText">
		    <ul className="navbar-nav mr-auto row" style={{minWidth:'100%'}}>
		      <li className="col-6 active">
		        <a className="nav-link" href="/">Inicio</a>
		      </li>
		      <li className="col-6">
		        <a className="nav-link" href="#">Buscar</a>
		      </li>
		    </ul>
		  </center>
		</nav>
    	);
}

export default ClientHeader;

if (document.getElementById('ClientHeader')) {
    ReactDOM.render(<ClientHeader />, document.getElementById('ClientHeader'));
}
