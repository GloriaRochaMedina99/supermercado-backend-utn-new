"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
let CategoriasService = class CategoriasService {
    categorias = [
        { id: 1, nombre: 'Almacén', imagen: '/categoria-almacen.jpg' },
        { id: 2, nombre: 'Lácteos', imagen: '/categoria-lacteos.jpg' },
        { id: 3, nombre: 'Frutas y verduras', imagen: '/categoria-frutas.jpg' },
        { id: 4, nombre: 'Bebidas', imagen: '/categoria-bebidas.jpg' },
        { id: 5, nombre: 'Limpieza', imagen: '/categoria-limpieza.jpg' },
        { id: 6, nombre: 'Panadería', imagen: '/categoria-panaderia.jpg' },
    ];
    findAll() {
        return this.categorias;
    }
    findOne(id) {
        return this.categorias.find((c) => c.id === id);
    }
    create(createCategoriaDto) {
        const nuevaCategoria = {
            id: this.categorias.length + 1,
            ...createCategoriaDto,
        };
        this.categorias.push(nuevaCategoria);
        return nuevaCategoria;
    }
    update(id, updateCategoriaDto) {
        const index = this.categorias.findIndex((c) => c.id === id);
        if (index === -1)
            return null;
        this.categorias[index] = { ...this.categorias[index], ...updateCategoriaDto };
        return this.categorias[index];
    }
    remove(id) {
        const index = this.categorias.findIndex((c) => c.id === id);
        if (index === -1)
            return null;
        const eliminada = this.categorias.splice(index, 1);
        return eliminada[0];
    }
};
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)()
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map