import React from 'react';
import ReactDOM from 'react-dom';

function ModalHeader(){
	return(
			<div className="modal-header headerWA">
				<h5 className="modal-title titleWA">Contactar vía WhatsApp</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		);
}
function ModalBody(){
	return(
	       <div className="modal-body bodyWA">
	        <form>
			  <div className="form-group">
			    <textarea className="form-control" id="textoWA"/>
			  </div>
			  <button type="submit" className="btn btn-success w-100">Enviar</button>
			</form>
	       </div>
		);
}
function MensajesRapidos(){
	return(
		<div className="container">
			<Mensaje
				texto="Diseño de logo"
			/>
			<Mensaje
				texto="Diseño de tarjetas"
			/>
			<Mensaje
				texto="Servicio inmobiliario"
			/>
		</div>
	);
}

function Mensaje(props){
	return(
		<div style={{paddingTop:'5px'}}>
			<button className="btn btn-secondary w-100">{props.texto}</button>
		</div>
	);
}

function Modal(){
	return(
		<div className="modal fade" id="ModalWA" role="dialog">
		 <div className="modal-dialog dialogWA">
		    <div className="modal-content">
		      <ModalHeader/>
		      <ModalBody/>
		      <div style={{backgroundColor:'#1B2631', color:'white'}}>
		        <p style={{textAlign:'center'}}><i>Mensajes prediseñados</i></p>
		        <MensajesRapidos/>
		      </div>
		    </div>
		  </div>
		</div>
	);
}
class WAButton extends React.Component{
	render(){
		return(
	    	<div>
	    		<button className="btn btn-success" id="ButtonWhatsApp" data-toggle="modal" data-target="#ModalWA"></button>
	    		<Modal/>
	    	</div>
    	);
	}
}

export default WAButton;

if (document.getElementById('WAButton')) {
    ReactDOM.render(<WAButton/>, document.getElementById('WAButton'));
}
