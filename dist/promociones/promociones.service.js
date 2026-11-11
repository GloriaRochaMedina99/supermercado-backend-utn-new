"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromocionesService = void 0;
const common_1 = require("@nestjs/common");
let PromocionesService = class PromocionesService {
    promociones = [
        { id: 1, titulo: '2x1 en Lácteos seleccionados', descripcion: 'Llevando dos productos de la misma marca.', imagen: '/oferta-yogur-punto-market.png' },
        { id: 2, titulo: 'Descuento en Panadería', descripcion: '15% de descuento abonando en efectivo los fines de semana.', imagen: '/oferta-pan-lactal-punto-market.png' },
        { id: 3, titulo: 'Super Oferta en Frutas', descripcion: 'Manzanas rojas al mejor precio por kilo.', imagen: '/oferta-manzanas-punto-market.png' },
    ];
    findAll() {
        return this.promociones;
    }
    findOne(id) {
        return this.promociones.find((p) => p.id === id);
    }
    create(createPromocionDto) {
        const nuevaPromocion = {
            id: this.promociones.length + 1,
            ...createPromocionDto,
        };
        this.promociones.push(nuevaPromocion);
        return nuevaPromocion;
    }
    update(id, updatePromocionDto) {
        const index = this.promociones.findIndex((p) => p.id === id);
        if (index === -1)
            return null;
        this.promociones[index] = { ...this.promociones[index], ...updatePromocionDto };
        return this.promociones[index];
    }
    remove(id) {
        const index = this.promociones.findIndex((p) => p.id === id);
        if (index === -1)
            return null;
        const eliminada = this.promociones.splice(index, 1);
        return eliminada[0];
    }
};
exports.PromocionesService = PromocionesService;
exports.PromocionesService = PromocionesService = __decorate([
    (0, common_1.Injectable)()
], PromocionesService);
//# sourceMappingURL=promociones.service.js.map