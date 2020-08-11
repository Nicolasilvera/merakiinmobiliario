@extends('layouts.servidor')
@section('content')

     @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
      @endif
    <form enctype="multipart/form-data" action="/inmuebles" method="POST" id="form" autocomplete="off"  >
        @CSRF
            <input
                type="number"
                id= "idInmobiliaria"
                name="idInmobiliaria"
                hidden
                value={{auth()->id()}}
            />
            <input type="text" id="listaBorrados" name="listaBorrados" hidden></input>   
        <div id="formNuevoInmueble"></div>
    </form>      

    <!--SECCIÓN JQUERY-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
    $(document).ready(function(){
        document.getElementById("file").onchange = function(e) {
            let images = new Array();
            document.getElementById('imagePreview').innerHTML = '';
            document.getElementById('listaBorrados').value = '';
            document.getElementById('titleImagePreview').innerHTML="Click en las imágenes que desee quitar";
            for (let i=0; i < document.getElementById("file").files.length; i++){

                // Creamos el objeto de la clase FileReader
                let reader = new FileReader();

                // Leemos el archivo subido y se lo pasamos a nuestro fileReader
                reader.readAsDataURL(e.target.files[i]);

                // Le decimos que cuando este listo ejecute el código interno
                reader.onload = function(images){
                    let preview = document.getElementById('imagePreview');
                    let newDiv = document.createElement('div');
                    newDiv.className="previewContainer col-3";
                    newDiv.id="div"+i;
                    preview.append(newDiv);

                    const idDiv= "div"+i;
                    let div = document.getElementById(idDiv);

                    let deleteButton = document.createElement('button');
                    deleteButton.type="button";
                    deleteButton.className="btn btnDanger deletePreviewImageButton w-100";
                    deleteButton.id="deletePreviewImage"+i;
                    deleteButton.innerHTML="Eliminar";

                    deleteButton.addEventListener("click", function(){
                        /*Se acumularan los eliminados en un campo hidden,para luego desde el PHP poder evitar su carga, ya que la seguridad del navegador no permite la fácil manipulación de las instancias cargadas*/
                        const borradosActuales= document.getElementById('listaBorrados').value;
                        document.getElementById('listaBorrados').value= borradosActuales+e.target.files[i]['name']+";";
                        preview.removeChild(div);
                    });
                    div.append(deleteButton);

                    let imagen = document.createElement('img');
                    imagen.src = reader.result;
                    imagen.className="previewImage w-100";
                    div.append(imagen);
                };
            }
        }

        $(".deletePreviewImage").click( function(){
            alert("Hola");
        });
        
    });
    </script>
@endsection
