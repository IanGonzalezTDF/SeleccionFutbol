"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(pNombre, pApellido, pEdad) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
    }
    Persona.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setEdad = function (pEdad) {
        this.edad = pEdad;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    return Persona;
}());
exports.Persona = Persona;
