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
                    defaultValue="ARS">
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
                    id={props.id} name={props.id} 
                    onChange={()=>props.onChange(document.getElementById('tipo').value)}
                    defaultValue="casa">
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
        <div hidden={props.hidden}>
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                type={props.tipo}
                className={clase} 
                id= {props.id} 
                name= {props.id}
                min={props.min}
                pattern={props.pattern}
                placeholder={props.placeholder}
                defaultValue={props.valor}
                hidden = {props.hidden}
                required
            />
        </div>
    );
}



class DatosEconomicos extends React.Component{
	constructor(props){
		super(props);
		this.state={tipoNegocio:'A', valorAlquiler:'0', valorVenta:'0'};
	}
	handleTipo(){
		const negocio= document.getElementById('tipoNegocio').value;
		const newState= {tipoNegocio:negocio, valorAlquiler:'0', valorVenta:'0'};
		this.setState(newState);

	}
	handlePrecioVenta(){
		const valor= document.getElementById('valorVenta').value;
		const newState= {valorVenta:valor};
		this.setState(newState);
	}
	handlePrecioAlquiler(){
		const valor= document.getElementById('valorAlquiler').value;
		const newState= {valorAlquiler:valor};
		this.setState(newState);
	}
	render(){ 
		const selectorTipo= 
				<div className="row"> 
					<label className="col-6">Seleccione tipo de negocio</label>
					<div className="col-6">
					    <select className="form-control" id="tipoNegocio" name="tipoNegocio" onChange={()=>this.handleTipo()}  defaultValue="A/V">
					      <option className="optionSelect" value="A">Alquiler</option>
					      <option className="optionSelect" value="V">Venta</option>
					      <option className="optionSelect" value="A/V">Alquiler/Venta</option>
					    </select>
					</div>
				</div>;
		const elementoAlquiler= 
				<div className="row">
					<div className="col-5">
					    <label htmlFor="monedaAlquiler">Moneda de alquiler</label>
					    <select className="form-control" id="monedaAlquiler" name="monedaAlquiler" defaultValue="ARS" >
					      <option className="optionSelect" value="ARS">Peso Argentino</option>
					      <option className="optionSelect" value="EUR">Euro</option>
					      <option className="optionSelect" value="USD">Dolar</option>
					    </select>
					</div>
					<div className="col-7">
					    <label htmlFor="monedaAlquiler">Valor</label>
					    <input type="number" 
				    		className="form-control habitacional" 
				    		id="valorAlquiler" 
				    		name="valorAlquiler" 
				    		min="0"
				    		onChange={()=>this.handlePrecioAlquiler()}
				    		value={this.state.valorAlquiler}
				    		required
				    		/>
					</div>
				</div>;
		const elementoVenta=
				<div className="row">
					<div className="col-5">
					    <label htmlFor="monedaVenta">Moneda de venta</label>
					    <select className="form-control" id="monedaVenta" name="monedaVenta" defaultValue="ARS" >
					      <option className="optionSelect" value="ARS">Peso Argentino</option>
					      <option className="optionSelect" value="EUR">Euro</option>
					      <option className="optionSelect" value="USD">Dolar</option>
					    </select>
					</div>
					<div className="col-7">
					    <label htmlFor="valorVenta">Valor</label>
					    <input type="number" 
				    		className="form-control habitacional" 
				    		id="valorVenta" 
				    		name="valorVenta" 
				    		min="0"
				    		onChange={()=>this.handlePrecioVenta()}
				    		value={this.state.valorVenta}
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
			<hr/>
		</div>
	);
	}
}


class DatosHabitacionales extends React.Component{
    constructor(props){
        super(props);
        this.state={tipo:'casa'};
    }
    handleChange(tipo){
        this.setState({tipo:tipo});
    }
    render(){
        const tamanoColumnaMD= (this.state.tipo === 'monoambiente' ? "4" 
                                        :(this.state.tipo === "departamento" ? "3" 
                                                : (this.state.tipo === "casa" ? "6" : "0")));
        const departamento= (this.state.tipo === 'departamento' || this.state.tipo === 'monoambiente' 
                                                ? 
                                                    <div className={"col-sm-12 col-md-"+tamanoColumnaMD}>
                                                        <Input
                                                            label="Departamento"
                                                            tipo="text"
                                                            id= "departamento"
                                                            valor="0"
                                                            placeholder="Sugerido: Piso + Número/Letra"
                                                            required
                                                        />
                                                    </div>
                                                :
                                                 <div>
                                                        <Input
                                                            label="Departamento"
                                                            tipo="text"
                                                            id= "departamento"
                                                            valor="0"
                                                            hidden="true"
                                                            required
                                                        />
                                                </div>);
        const piso = (this.state.tipo === 'departamento' || this.state.tipo === 'monoambiente' 
                                                ?
                                                <div className={"col-sm-12 col-md-"+tamanoColumnaMD}>
                                                    <Input
                                                        label="Piso"
                                                        tipo="number"
                                                        id= "piso"
                                                        min="0"
                                                        valor="0"
                                                        required
                                                    />
                                                </div>
                                                : 
                                                <div>
                                                    <Input
                                                        label="Piso"
                                                        tipo="number"
                                                        id= "piso"
                                                        min="0"
                                                        valor="0"
                                                        hidden="true"
                                                        required
                                                    />
                                                </div>);
        const dormitorios = (this.state.tipo === 'departamento' || this.state.tipo === 'casa' 
                                                ?               
                                                <div className={"col-sm-12 col-md-"+tamanoColumnaMD}>
                                                    <Input
                                                        label="Dormitorios"
                                                        tipo="number"
                                                        id= "dormitorios"
                                                        min="0"
                                                        valor="0"
                                                        required
                                                    />
                                                </div>
                                                :
                                                <div>
                                                    <Input
                                                        label="Dormitorios"
                                                        tipo="number"
                                                        id= "dormitorios"
                                                        min="0"
                                                        valor="0"
                                                        hidden="true"
                                                        required
                                                    />
                                                </div>);
        const banos = (this.state.tipo !== 'terreno' 
                                                ?
                                                <div className={"col-sm-12 col-md-"+tamanoColumnaMD}>
                                                    <Input
                                                        label="Baños"
                                                        tipo="number"
                                                        id= "banos"
                                                        min="0"
                                                        valor="0"
                                                        required
                                                    />
                                                </div>
                                                :
                                                <div className={"col-sm-12 col-md-"+tamanoColumnaMD}>
                                                    <Input
                                                        label="Dormitorios"
                                                        tipo="number"
                                                        id= "dormitorios"
                                                        min="0"
                                                        valor="0"
                                                        hidden="true"
                                                        required
                                                    />
                                                </div>);
        return(
                <div className="w-100">
                    <div className="form-group" className="row">
                        <div className="col-sm-12 col-md-8">
                         <InmuebleTypeSelect
                                label="Seleccione el tipo de inmueble"
                                id="tipo"
                                onChange={(i) => this.handleChange(i)}
                            />
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <Input
                                label="Metros Cuadrados"
                                tipo="number"
                                id= "metrosCuadrados"
                                min="0"
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
                                required
                            />
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <Input
                                label="Número"
                                tipo="number"
                                id= "numero"
                                min="0"
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
                                required
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <Input
                                label="Enlace de mapa"
                                tipo="text"
                                id= "srcMap"
                                pattern="<iframe src=\x22([\w|\W]+)\x22([\w|\W]*)" 
                                required
                            />
                        </div>
                    </div><hr/>
                    <div className="form-group" id="habitacionalGroup" className="row">
                       {departamento}
                       {piso}
                       {dormitorios}
                       {banos}
                    </div>
                </div>
                );
        }
}

function Datos(){
        return(
            <div className="row w-100" style={{paddingBottom:'2vh'}}>
                <div className="col-sm-12 col-md-6" style={{borderRight:'solid teal 1px'}}>
                    <DatosHabitacionales />
                </div>
                <div className="col-sm-12 col-md-6">
                    <DatosEconomicos/>
                    
                    <div className="form-group col-12" style={{paddingTop:'3vh'}}>
                        <label htmlFor="detalles">Detalles</label>
                        <textarea
                            id="detalles"
                            name="detalles"
                            className="form-control textarea"  
                            placeholder="Aquí puede especificar otras cosas, como si posee patio, barrio, condiciones"                  
                            required
                        />
                    </div>
                    <hr/>
                    <Imagenes/>
                </div> 
            </div>
        );
}

function Imagenes(){
    return(
        <div className="col-12">
            <h3 style={{textAlign:'center'}}>¡Puede cargar hasta 10 imágenes!</h3>  
            <input type="file" name="file[]" id="file" multiple required/>
        </div>
        );
}


function Create(){
    return(
        <div style={{paddingBottom:'2vh'}}>
            <div style={{paddingBottom:'1vh',border:'solid 1px darkslategray'}} className="col-sm-12 col-md-10 offset-md-1 row">
                <h1 className="col-12"><i>Nuevo inmueble</i></h1>
               	<Datos/>
               
                <h2 className="w-100" id="titleImagePreview"></h2>
                <div id="imagePreview" className="w-100 row"></div>
                
                <button type="submit" className="btn btnCard col-sm-12 col-md-6">Guardar inmueble</button>
                <a href="/inmuebles" className="btn btnDanger col-sm-12 col-md-6">Cancelar</a>
            </div>  
        </div>
        );
}

export default Create;

if (document.getElementById('formNuevoInmueble')) {
    ReactDOM.render(<Create />, document.getElementById('formNuevoInmueble'));
}
