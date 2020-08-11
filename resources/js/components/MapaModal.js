import React from 'react';
import ReactDOM from 'react-dom';
// get our fontawesome imports
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Mapa(props){
    const mapModal =<div className="modal fade w-100" id={"modal"+props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog dialogMap">
                        <div className="modal-content">
                          <div className="modal-header headerMap" style={{textAlign:'center'}}>
                            <h5 className="modal-title titleMap" id="exampleModalLabel">{"Calle "+props.calle+" N° "+props.numero+" ("+props.localidad+")"} </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body bodyMap">
                             <iframe src={props.srcMap}
                                    className="map"
                              ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>;
    return(mapModal);
}

export default Mapa;
