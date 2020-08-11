import React from 'react';
import ReactDOM from 'react-dom';

function Letra(props){
    return(
        <div className="w-100">
            <img 
                className={"atomicBannerImage"+" letra letra"+props.value}
                src={"images/letras/"+props.value+".png"} 
                alt={"Letra "+props.value}/>
        </div>
        );
}
function Letras(props){
    return(
        <div className="divLetras">
            <Letra value="left"/>
            <Letra value="m"/>
            <Letra value="e"/>
            <Letra value="r"/>
            <Letra value="a"/>
            <Letra value="k"/>
            <Letra value="i"/>
            <Letra value="slash"/>
            <Letra value="right"/>
        </div>
        );
}
function MerakiCerrado(props){
    return(
    <div className="staticDivMerakiCerrado">
        <div className="divMerakiCerrado">
        </div>
    </div> );
}
function Provincia(props){
    return(<div className="staticDivProvincia">
        <div className="divProvincia">
        </div>
    </div> ); 
}
class Animacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {estado: 0};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const nuevoEstado= this.state.estado + 1;
    this.setState({
      estado: nuevoEstado
    });
  }

  render() {
    const texto = <h1>Servicios y sistemas informáticos pampeanos</h1>
    const renderizable = (this.state.estado === 0 ? <Provincia/> : 
                                (this.state.estado === 1 ? <MerakiCerrado/> : <Letras/>));
    const descripcion = (this.state.estado < 3 ? "" : texto)
    return (
        <div className="w-100">
            {renderizable}
            {descripcion}
        </div>
    );
  }
}
export default Animacion;
