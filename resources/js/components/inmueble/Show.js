import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../Carousel';

// get our fontawesome imports
import {faPen,faTrashAlt, faToilet,faBed,faRulerCombined,faMapMarkedAlt,faHashtag} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Property(props){
    const icono= (props.icono === null ? "" : <FontAwesomeIcon icon={props.icono}/>);
    const clase= (props.size != null 
                                ? "col-"+props.size
                                : "col-sm-6 col-md-3"
                                );
    return(
        <div className={clase} style={{padding:'2vh'}}>
           <div style={{color:'silver', fontVariant:'small-caps', fontSize:'3vh'}}> <b><i>{props.propiedad}</i></b></div>
            <label className="labelCard">{icono}</label>
            <label className="labelCard">{props.valor}</label>
        </div>
    );
}

function TableProperty(props){
    const estiloPropiedad = {
        fontSize:'4vh',
        fontFamily:'Courier New',
        color: 'cyan',
        fontStyle:'italic'
        };
    const estiloValor = {
        fontSize:'3vh',
        fontFamily:'Courier New',
        color: 'silver',
        fontStyle:'italic',
        fontVariant:'small-caps'
        };
    return(
        <div className="row" style={{marginTop:'5vh', textAlign:'center'}}>
            <div className="col-6" style={estiloPropiedad}>{props.propiedad}</div>
            <div className="col-6" style={estiloValor}>{props.valor}</div>
        </div>
    );
}

function Localizacion(props){
    const unidadPiso = ((props.piso>0) ? "°" : "" );
    const piso = ((props.piso == 0) ? "PB" : props.piso);
    return(
            <div className="w-100" style={{margin:'auto'}}>
                <TableProperty
                    propiedad = "Dirección"
                    valor= {"Calle "+props.calle+ " N° "+ props.numero}
                />
                <TableProperty
                    propiedad = "Piso"
                    valor={props.piso+unidadPiso}
                />
                <TableProperty
                    propiedad = "Departamento"
                    valor={props.departamento}
                />
                <TableProperty
                    propiedad = "Localidad"
                    valor={props.localidad}
                />
            </div>
    );
}
function UbicationSection(props){
    return(
        <div>
            <hr/>
            <h1 className="titleShow">Ubicación</h1>
            <div className="row noMarginTop">
                <div className="col-sm-12 col-md-6">
                    <iframe src={props.srcMap}  className="map" ></iframe>
                </div>
                <div className="col-sm-12 col-md-6" style={{margin:'auto'}}>
                    <Localizacion
                           id={props.id}
                           calle = {props.calle}
                           numero = {props.numero}
                           piso = {props.piso}
                           departamento = {props.departamento}
                           localidad = {props.localidad}
                        />
                </div>
            </div>
        </div>
        );
}

function formatearFecha(fecha){
    const anio = fecha.substring(0,4);
    const mes = fecha.substring(5,7);
    const dia = fecha.substring(8,10);
    const meses= ['Enero','Febrero','Marzo', 'Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const fechaFormateada = dia + ' de ' + meses[mes-1] + ' de ' + anio;
    return(fechaFormateada);
}
function DataSection(props){
    const fechaCreado = ( (props.creado != null) ? formatearFecha(props.creado) : "");
    const fechaEditado = ( (props.editado != null) ? formatearFecha(props.editado) : "");
    return(
        <div>
            <hr/>
            <h1 className="titleShow">Datos Relevantes</h1>
            <div className="row w-100" style={{textAlign:'center',margin:'auto'}}>
                <Property
                    propiedad={"Referencia"}
                    icono = {faHashtag}
                    valor={props.id}
                />
                <Property
                    propiedad={"Dormitorios"}
                    icono = {faBed}
                    valor={props.dormitorios}
                />
                <Property
                    propiedad={"Baños"}
                    icono = {faToilet}
                    valor={props.banos}
                />
                <Property
                    propiedad={<div>m<sup>2</sup></div>}
                    icono={faRulerCombined}
                    valor={props.metrosCuadrados}
                />
            </div>
            <p><b>Datos adicionales: </b><br/>{props.detalles}</p>
            <hr/>
            <h1 className="titleShow">Detalles de la publicación</h1>
            <div className="row w-100" style={{textAlign:'center',margin:'auto'}}>
                <Property
                    size="6"
                    propiedad="Cargado el día"
                    valor={fechaCreado}
                />
                <Property
                    size="6"
                    propiedad="Actualizado el día"
                    valor={fechaEditado}
                />
            </div>
        </div>
        
    );
}

function MenuNav(){
    const hrefEdit="/inmuebles/"+document.getElementById('idInmueble').value+"/edit";
    return(
        <div>
            <br/>
            <a href={hrefEdit} className="btn btnSuccess col-sm-12 col-md-4"><FontAwesomeIcon icon={faPen}/> Editar datos</a>
            <a style={{color:'white'}} id="deletingInmueble" className="btn btnDanger col-sm-12 offset-md-4 col-md-4"><FontAwesomeIcon icon={faTrashAlt}/> Eliminar</a>
        </div>
    );
}

class Show extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inmuebles: []
        }
    }
    componentDidMount(){
        try{
            fetch('http://127.0.0.1:8000/api/inmueble/'+document.getElementById('idInmueble').value)
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
        return (
            <div className="container w-100">
                <MenuNav/> 
                <hr/>
                <h1 className="titleShow">Galería de imágenes</h1>
                <div className="row carouselShow">
                    <Carousel
                        key={this.state.inmuebles.id}
                        inmobiliaria = {this.state.inmuebles.idInmobiliaria}
                        fecha= {this.state.inmuebles.created_at}
                        formato = "show"
                    />
                </div>
                <UbicationSection 
                    id={this.state.inmuebles.id}
                    calle = {this.state.inmuebles.calle}
                    numero = {this.state.inmuebles.numero}
                    piso = {this.state.inmuebles.piso}
                    departamento = {this.state.inmuebles.departamento}
                    localidad = {this.state.inmuebles.localidad}
                    srcMap = {this.state.inmuebles.srcMap}
                />
                <DataSection
                    id={this.state.inmuebles.id}
                    dormitorios={this.state.inmuebles.dormitorios}
                    banos={this.state.inmuebles.banos}
                    metrosCuadrados={this.state.inmuebles.metrosCuadrados}
                    detalles={this.state.inmuebles.detalles}
                    creado= {this.state.inmuebles.created_at}
                    editado= {this.state.inmuebles.updated_at}
                />
            </div>
        ); 
    };
}





export default Show;

if (document.getElementById('show')) {
    ReactDOM.render(<Show/>, document.getElementById('show'));
}
