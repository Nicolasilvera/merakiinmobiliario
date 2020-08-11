import React from 'react';
import ReactDOM from 'react-dom';
function MonedasOption(props){
    return(
        <React.Fragment>
            <option className="optionSelect" value="ARS">Peso Argentino</option>
            <option className="optionSelect" value="EUR">Euro</option>
            <option className="optionSelect" value="USD">Dolar</option>
        </React.Fragment>
        );
}
function MonedasSelect(props){
    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <select className="form-control" 
                    id={props.id} name={props.id} 
                    defaultValue={props.value}>
                <MonedasOption/>
            </select>
        </div>
        );
}
function InmuebleTypeSelect(props){
    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <select className="form-control" 
                    id="tipo" name="tipo" 
                    defaultValue={props.value}>
                <option className="optionSelect" value="casa">Casa</option>
                <option className="optionSelect" value="departamento">Departamento</option>
                <option className="optionSelect" value="monoambiente">Monoambiente</option>
                <option className="optionSelect" value="terreno">Terreno</option>

            </select>
        </div>
        );
}
function Input(props){
    const clase = (props.clase != null ? "form-control "+props.clase : "form-control");
    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                type={props.tipo}
                className={clase} 
                id= {props.id} 
                name= {props.id}
                min={props.min}
                pattern={props.pattern}
                defaultValue={props.valor}
                required
            />
        </div>
    );
}



class DatosEconomicos extends React.Component{
    constructor(props){
        super(props);
        const tipoNegocio = ( (this.props.valorAlquiler !== 0 && this.props.valorVenta!==0) ? "A/V" : 
                                                        (this.props.valorVenta !== 0 ? "V" : "A"));
        this.state={tipoNegocio:tipoNegocio, 
                    valorAlquiler:props.valorAlquiler, 
                    valorVenta:props.valorVenta,
                    monedaVenta:props.monedaVenta,
                    monedaAlquiler:props.monedaAlquiler};
    }
    handleTipo(){
        const negocio= document.getElementById('tipoNegocio').value;
        const newState= {tipoNegocio:negocio, valorAlquiler:'0', valorVenta:'0'};
        this.setState(newState);
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.valorAlquiler !== this.props.valorAlquiler) {
        console.log("ACA HERMANO");
        const tipoNegocio = ( (this.props.valorAlquiler !== 0 && this.props.valorVenta!==0) ? "A/V" : 
                                                        (this.props.valorVenta !== 0 ? "V" : "A"));
        this.setState({tipoNegocio:tipoNegocio, 
                        valorAlquiler:this.props.valorAlquiler, 
                        valorVenta:this.props.valorVenta,
                        monedaAlquiler:this.props.monedaAlquiler,
                        monedaVenta:this.props.monedaVenta
                    });
      }
    }
    render(){ 
        const selectorTipo= 
                <div className="row"> 
                    <label className="col-6">Seleccione tipo de negocio</label>
                    <div className="col-6">
                        <select className="form-control" id="tipoNegocio" name="tipoNegocio" onChange={()=>this.handleTipo()} defaultValue={this.state.tipoNegocio}>
                          <option className="optionSelect" value="A">Alquiler</option>
                          <option className="optionSelect" value="V">Venta</option>
                          <option className="optionSelect" value="A/V">Alquiler/Venta</option>
                        </select>
                    </div>
                </div>;
        const elementoAlquiler= 
                <div className="row">
                    <div className="col-5">
                        <MonedasSelect
                            label="Moneda de Alquiler"
                            id="monedaAlquiler"
                            value={this.state.monedaAlquiler}
                        />
                    </div>
                    <div className="col-7">
                        <Input
                            label="Valor"
                            tipo="number"
                            id= "valorAlquiler"
                            min="0"
                            valor={this.state.valorAlquiler}
                            required
                        />
                    </div>
                </div>;
        const elementoVenta=
                <div className="row">
                    <div className="col-5">
                        <MonedasSelect
                            label="Moneda de Venta"
                            id="monedaVenta"
                            value={this.state.monedaVenta}
                        />
                    </div>
                    <div className="col-7">
                        <Input
                            label="Valor"
                            tipo="number"
                            id= "valorVenta"
                            min="0"
                            valor={this.state.valorVenta}
                            required
                        />
                    </div>
                </div>;
        const alquilerIF = (this.state.tipoNegocio === "A" || this.state.tipoNegocio === "A/V") 
                                ? elementoAlquiler : "";
        const ventaIF = (this.state.tipoNegocio === "V" || this.state.tipoNegocio === "A/V") 
                                ? elementoVenta : "";
    return(
        <div>
            {selectorTipo}
            {alquilerIF}
            {ventaIF}
        </div>
    );
    }
}


function DatosHabitacionales(props){
        return(
                <div>
                    <div className="form-group" className="row">
                        <div className="col-sm-12 col-md-8">
                         <InmuebleTypeSelect
                                label="Seleccione el tipo de inmueble"
                                id={props.id}
                                value={props.tipo}
                            />
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <Input
                                label="Metros Cuadrados"
                                tipo="number"
                                id= "metrosCuadrados"
                                min="0"
                                valor={props.metrosCuadrados}
                                required
                            />
                        </div>
                    </div><hr/>
                    <div className="form-group" className="row">
                        <div className="col-sm-12 col-md-9">
                            <Input
                                label="Calle"
                                tipo="text"
                                id= "calle"
                                valor={props.calle}
                                required
                            />
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <Input
                                label="Número"
                                tipo="number"
                                id= "numero"
                                min="0"
                                valor={props.numero}
                                required
                            />
                        </div>
                    </div><br/>
                    <div className="form-group" className="row">
                        <div className="col-sm-12 col-md-6">
                            <Input
                                label="Localidad"
                                tipo="text"
                                id= "localidad"
                                valor={props.localidad}
                                required
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <Input
                                label="Enlace de mapa"
                                tipo="text"
                                id= "srcMap"
                                pattern="<iframe src=\x22([\w|\W]+)\x22([\w|\W]*)" 
                                valor={'<iframe src="'+props.srcMap+'" '}
                                required
                            />
                        </div>
                    </div><hr/>
                    <div className="form-group" id="habitacionalGroup" className="row">
                        <div className="col-sm-12 col-md-3">
                            <Input
                                label="Departamento"
                                tipo="text"
                                id= "departamento"
                                valor={props.departamento}
                                required
                            />
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <Input
                                label="Piso"
                                tipo="number"
                                id= "piso"
                                min="0"
                                valor={props.piso}
                                required
                            />
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <Input
                                label="Dormitorios"
                                tipo="number"
                                id= "dormitorios"
                                min="0"
                                valor={props.dormitorios}
                                required
                            />
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <Input
                                label="Baños"
                                tipo="number"
                                id= "banos"
                                min="0"
                                valor={props.banos}
                                required
                            />
                        </div>
                    </div>
                </div>
                );
}
class Datos extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inmuebles: [],
            loaded: false
        }
    }
    componentDidMount(){
        try{
            fetch('http://127.0.0.1:8000/api/inmueble/'+document.getElementById('idInmueble').value+'/'+document.getElementById('userLogeado').value)
            .then((response) => {
                return response.json()
            })
            .then((inm) => {
                this.setState({inmuebles: inm})
            })
            .then((inm)=>{
                this.setState({loaded:true})
            }
            )
        }catch(error){
            alert('Fallo al cargar inmuebles'+error);
        }
    }

    render(){
        const editForm = <div className="row">
                        <div className="col-sm-12 col-md-6" style={{paddingBottom:'2vh',borderRight:'solid teal 1px'}}>
                            <DatosHabitacionales
                                idInmobiliaria={this.state.inmuebles.idInmobiliaria}
                                tipo={this.state.inmuebles.tipo}
                                metrosCuadrados={this.state.inmuebles.metrosCuadrados}
                                calle={this.state.inmuebles.calle}
                                numero={this.state.inmuebles.numero}
                                localidad={this.state.inmuebles.localidad}
                                srcMap={this.state.inmuebles.srcMap}
                                departamento={this.state.inmuebles.departamento}
                                piso={this.state.inmuebles.piso}
                                dormitorios={this.state.inmuebles.dormitorios}
                                banos={this.state.inmuebles.banos}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <DatosEconomicos
                                monedaVenta={this.state.inmuebles.monedaVenta}
                                valorVenta={this.state.inmuebles.valorVenta}
                                monedaAlquiler={this.state.inmuebles.monedaAlquiler}
                                valorAlquiler={this.state.inmuebles.valorAlquiler}
                                />
                            <hr/>
                            <div className="form-group col-12" style={{paddingTop:'3vh'}}>
                                <label htmlFor="detalles">Detalles</label>
                                <textarea
                                    className="form-control textarea"  
                                    placeholder="Aquí puede especificar otras cosas, como si posee patio, barrio, condiciones"                  
                                    id="detalles" 
                                    name="detalles"
                                    defaultValue={this.state.inmuebles.detalles}
                                    required
                                />
                            </div>
                            <hr/>
                            <Imagenes/>
                        </div>
                        <button type="submit" className="btn btnCard col-sm-12 col-md-6">Guardar cambios</button>
                        <a href="/inmuebles" className="btn btnDanger col-sm-12 col-md-6">Cancelar</a>
                    </div>;
        const alertError = <div className="alert alert-danger w-100" style={{textAlign:'center'}} role="alert">
                                No posee accesos para editar éste inmueble
                            </div>;
        const renderizable= (this.state.inmuebles['id'] ? editForm : alertError);
        return(
            <div className="container ">
                {(this.state.loaded ? renderizable : "")}
            </div>
        );
    }
}

function Imagenes(){
    return(
        <div className="col-12">
            <h3 style={{textAlign:'center'}}>¡Puede cargar hasta 10 imágenes!</h3>  
            <input type="file" name="file[]" id="file" multiple required/>
        </div>
        );
}


function Edit(){
    return(
        <div style={{paddingBottom:'2vh'}}>
            <div style={{paddingBottom:'1vh',border:'solid 1px darkslategray'}} className="col-sm-12 col-md-10 offset-md-1 row">
                <h1 className="col-12"><i>Edición de inmueble</i></h1>
                <Datos/>
                
            </div>  
        </div>
        );
}
export default Edit;

if (document.getElementById('edit')) {
    ReactDOM.render(<Edit />, document.getElementById('edit'));
}
