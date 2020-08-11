import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../Carousel';
import MapaModal from '../MapaModal';
// get our fontawesome imports
import {faMapMarkedAlt,faEye, faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardInmueble (props){
    //Utilizo el nombre de la moneda, sólo si el valor no está en pesos argentinos
    const monedaA = (props.monedaAlquiler==="ARS" ? "(ARS)" : " ("+(props.monedaAlquiler)+")");
    const monedaV =  (props.monedaVenta=== "ARS" ? "(ARS)" : " ("+props.monedaVenta+")");

    const esAlquiler= (props.valorAlquiler !== 0);
    const esVenta= (props.valorVenta !== 0);
    const sinInfo= (props.valorAlquiler === 0 && props.valorVenta === 0);
    const operacionUnica = ((esVenta && !esAlquiler) || (esAlquiler && !esVenta));

    const mostrarPrecioAlquiler = (esAlquiler ? <div className={operacionUnica ? "col-12" : "col-sm-12 col-md-6"}>
                                                    <h4>Alquiler</h4>
                                                    <p> {"$ "+ props.valorAlquiler + monedaA}</p>
                                                </div>
                                                : "");

    const mostrarPrecioVenta = (esVenta ?   <div className={operacionUnica ? "col-12" : "col-sm-12 col-md-6"}>
                                                <h4>Venta</h4>
                                                <p> {"$ "+ props.valorVenta + monedaV}</p>
                                            </div>
                                            : "");

    const mostrarInfoError = (sinInfo ? <div className="col-12">
                                             <h4>Sin información del inmueble</h4>
                                            </div>
                                    :"");

    const mapButton = <button type="button" 
                                className="btn col-12 btn-link"
                                title="Ver en mapa"
                                onClick={()=>props.onClick()} 
                                data-toggle="modal" 
                                data-target={"#modal"+props.id}>
                                <FontAwesomeIcon icon={faMapMarkedAlt}/> Localizar en mapa <FontAwesomeIcon icon={faMapMarkedAlt}/>
                            </button>;
    const cantDormitorios = (props.dormitorios===0 ? "" : ( props.dormitorios===1 ? "1 dormitorio" : props.dormitorios+" dormitorios"));
    const mostrarDormitorios = <h4 className="col-6">
                                    {cantDormitorios}
                                </h4>;
	return(
        <div key={props.id} className="accordion offset-sm-1 col-sm-10 col-md-5 offset-md-1" id={"accordion"+props.id} style={{marginTop:'5vh'}}>
            <div className="card">
                <div className="row" style={{paddingBottom:'0px'}}>
                    <h2 className="mb-0 col-6">
                        {props.tipo.charAt(0).toUpperCase() + props.tipo.slice(1)}
                    </h2>
                    {mostrarDormitorios}
                    <h4 className="col-12" style={{paddingBottom:'0px'}}>
                        <small><i>{"Calle " + props.calle + " N° "+props.numero}</i></small><br/>
                        <small><i>{"("+props.localidad+")"}</i></small>
                    </h4>
                </div>
                <div className="row" style={{textAlign:'center', paddingTop:'0px'}}>
                    {mostrarPrecioAlquiler}
                    {mostrarPrecioVenta}
                    {mostrarInfoError}
                </div>
            </div>
            <div className="card">
                <h4 className="mb-0">
                    <Carousel 
                        inmobiliaria={props.inmobiliaria}
                        fecha={props.fecha}
                        formato = "index"
                    />
                </h4>
            </div>
            <div className="card">
                <div className="card-header" id={"localizacion"+props.id}>
                    <h4 className="mb-0">
                        {mapButton}
                    </h4>
                </div>
                <MapaModal
                    id={props.id}
                    calle = {props.calle}
                    numero = {props.numero}
                    localidad = {props.localidad}
                    srcMap= {props.srcMap}
                />
                <div className="row">
                    <a href={"/inmuebles/"+props.id} className="btn btnCard col-sm-12 col-md-4"><FontAwesomeIcon icon={faEye}/> Visualizar</a>

                    <a href={"/inmuebles/"+props.id+"/edit"} className="btn btnCard col-sm-12 col-md-4"><FontAwesomeIcon icon={faPen}/> Editar</a>

                    <ModalDelete 
                        inmueble={props.id} 
                        calle={props.calle} 
                        numero={props.numero}
                        localidad={props.localidad}
                        srcMap={props.srcMap}
                    />
                    <a href="" type="button" className="btn btnCard col-sm-12 col-md-4" data-toggle="modal" data-target={"#modalDelete"+props.id}>
                        <FontAwesomeIcon icon={faTrashAlt}/> Eliminar
                    </a>
                </div>
            </div>
        </div>
	);
}


class Index extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {
      		inmuebles: []
    	}
  	}
	componentDidMount(){
        const usuarioActivo= document.getElementById('userLogeado').value;
        const apiUsuario = 'http://127.0.0.1:8000/api/inmuebles/'+usuarioActivo;
        try{
            fetch(apiUsuario)
            .then((response) => {
                return response.json()
            })
            .then((inm) => {
                this.setState({ inmuebles: inm })
            })   
        }catch(error){
            alert('Fallo al cargar inmuebles'+error);
        }   
    }
    render(){
    	const inmuebles= this.state.inmuebles.map(function(x){
              return (  
                <CardInmueble key={x.id}
                            id={x.id}
                            inmobiliaria = {x.idInmobiliaria}
                            tipo={x.tipo}
                            calle = {x.calle}
                            numero = {x.numero}
                            piso = {x.piso}
                            departamento = {x.departamento}
                            dormitorios = {x.dormitorios}
                            metrosCuadrados = {x.metrosCuadrados}
                            banos = {x.banos}
                            detalles = {x.detalles}
                            localidad = {x.localidad}
                            srcMap= {x.srcMap}
                            fecha= {x.created_at}
                            monedaAlquiler= {x.monedaAlquiler}
                            valorAlquiler= {x.valorAlquiler}
                            monedaVenta = {x.monedaVenta}
                            valorVenta = {x.valorVenta}
                         />
                ); 
        });
    	return(
    		<div key="inmuebles" className="container col-10 offset-1 row">
    			{inmuebles}
    		</div>
	        );
    }
}

function ModalDelete(props){
    return(
        <div className="modal fade" id={"modalDelete"+props.inmueble} tabindex="-1" role="dialog" aria-labelledby={"modalDelete"+props.inmueble} aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="card modal-content">
              <div className="modal-header">
                <h3>¿Desea eliminar ésta publicación?</h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h5 className="modal-title titleMap" id={"modal"+props.inmueble}>{"Calle "+props.calle+" N° "+props.numero+" ("+props.localidad+")"} </h5>
              <div className="modal-body">
                  <iframe src={props.srcMap} style={{width:'100%', height:'50vh', overflow:'hidden'}}></iframe>
              </div>
              <div className="modal-footer">
                    <a href={"inmuebles/delete/"+props.inmueble} className="btn btnDanger w-100"><FontAwesomeIcon icon={faTrashAlt}/> Eliminar</a>
              </div>
            </div>
          </div>
        </div>
        );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index/>, document.getElementById('index'));
}
