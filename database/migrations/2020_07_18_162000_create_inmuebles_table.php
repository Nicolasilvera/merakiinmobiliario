<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInmueblesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inmuebles', function (Blueprint $table) {
            $table->id();
            $table->integer('idInmobiliaria');
            $table->enum('tipo', array('casa', 'departamento','monoambiente', 'terreno'));
            $table->text('calle');
            $table->integer('numero');
            $table->integer('piso');
            $table->text('departamento');
            $table->integer('dormitorios');
            $table->integer('metrosCuadrados');
            $table->integer('banos');
            $table->text('detalles');
            $table->text('localidad');
            $table->text('srcMap');
            $table->enum('monedaAlquiler',array('ARS','USD','EUR'));
            $table->enum('monedaVenta',array('ARS','USD','EUR'));
            $table->integer('valorAlquiler');
            $table->integer('valorVenta');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inmuebles');
    }
}
