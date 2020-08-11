import React from 'react';
import ReactDOM from 'react-dom';

function Header(){
    return(
        <nav className="navbar navbar-expand-lg w-100">
          <div className="divLogo w-100">
            <img src="images/logo.png" className="imageHomeHeader" alt="Logo Nicolás Omar Silvera"/>
          </div>
        </nav>
        );
}
function Card(props){
    return(
        <div className="card">
          <img className="card-img-top" src={props.src} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title" style={{textAlign:'center'}}><b><i>{props.titulo}</i></b></h5>
            <p className="card-text">{props.texto}</p>
            <p className="card-text">{props.texto2}</p>
            <a href={props.href} className="btn btnCard" >{props.textButton}</a>
          </div>
        </div>
        );
}


function Body (){
    return(
        <div className="container">
          <div className="row" style={{paddingTop:'5vh'}}>
            <div className="col-sm-12 col-md-6">
              <Card
                src="images/gestionInmueble.png"
                titulo="Servicio al propietario"
                texto="Usted podrá ingresar sus inmuebles, con un gran abanico de características preestablecidas
                que ayudan al cliente a una búsqueda personalizada, encontrando lo que ellos necesitan."
                texto2="Se dotará al sitema con un servicio de autenticación que permita proteger su imágen, permitiéndole
                la publicación de inmuebles sólo a quién tenga acceso a sus credenciales (usuario y contraseña)"
                href="/inmuebles"
                textButton="¡Comience a gestionar!"
                />
            </div>

            <div className="col-sm-12 col-md-6">
              <Card
                src="images/gestionInmueble.png"
                titulo="Servicio al cliente"
                texto="El cliente podrá acceder a una vista detallada de cada uno de los inmuebles, para ello contará
                con un robusto sistema de búsqueda que le permitirá personalizar su búsqueda, para poder acceder a aquellos
                inmuebles que le puedan resultar de mayor interés de interés."
                texto2="Para una visita satisfactoria de los clientes al sitio de su empresa, se recomienda
                mantener los inmuebles actualizados."
                href="/cliente"
                textButton="¡Explorar como cliente!"
                />
            </div>
          </div>
        </div>
        );
}


function Home (){
    return(
        <div>
            <Header/>
            <Body/>
        </div>);
}

export default Home;

if (document.getElementById('HomeContent')) {
    ReactDOM.render(<Home />, document.getElementById('HomeContent'));
}
