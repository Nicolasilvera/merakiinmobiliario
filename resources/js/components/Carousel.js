import React from 'react';
import ReactDOM from 'react-dom';

function CarouselItem(props){
    const estilo = (props.formato === "show" 
                                    ?  {minHeight:'85vh', maxHeight:'85vh'} 
                                    : {minHeight:'35vh', maxHeight:'35vh'});
    return(
        <div className={"carousel-item"+(props.activo ? " active" : "")}>
          <img src={props.recurso} style={estilo} className="w-100" alt="No se pudo cargar"/>
        </div>
        );
}

class Carousel extends React.Component{
     constructor(props){
        super(props);
        this.state ={
            images: []
        }
    }
    componentDidMount(){
        try{
            fetch('http://127.0.0.1:8000/api/images/'+this.props.inmobiliaria+'/'+this.inmuebleFolder())
            .then((response) => {
                return response.json()
            })
            .then((img) => {
                this.setState({ images: img })
            })   
        }catch(error){
            alert('Fallo al cargar el nombre de imágenes'+error);
        } 
    }
    inmuebleFolder(){
        let fecha = "";
        if(this.props.fecha != null){
            const regex = /(\d+)/g;
            fecha= this.props.fecha.match(regex);                      //Conservo solo los numeros
            const dia=fecha[2];
            const mes= fecha[1];
            const anio=fecha[0].substr(2,3);
            const horas=fecha[3];
            const minutos=fecha[4];
            const segundos=fecha[5];
            const milis=fecha[6].substr(0,3);
            fecha= dia+mes+anio+horas+minutos+segundos+milis;
        }
    
        return(fecha);
    }
    render(){
        const identificador= this.props.inmobiliaria+"/"+this.inmuebleFolder();
        const ruta = "/images/inmuebles/"+identificador+"/";
        const formato = this.props.formato;
        const identificadorCarrousel= "carousel"+this.props.inmobiliaria+this.inmuebleFolder();
        const carousel=this.state.images.map(function(x,index){
             return(<CarouselItem 
                        formato= {formato}
                        recurso={ruta+x}
                        activo={(index===0 ? true : false)}
                        key= {index}
                    />);
        });
        return(
           <div id={identificadorCarrousel} className="carousel slide w-100" data-ride="carousel">
              <div className="carousel-inner">
                {carousel}
              </div>
              <a className="carousel-control-prev" href={"#"+identificadorCarrousel} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href={"#"+identificadorCarrousel} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            );
    }
}
export default Carousel;
