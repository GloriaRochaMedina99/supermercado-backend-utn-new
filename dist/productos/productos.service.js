"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
let ProductosService = class ProductosService {
    productos = [
        { id: 1, nombre: 'Leche entera 1L', categoria: 'Lácteos', precio: 1450, imagen: '/producto-leche.jpg' },
        { id: 2, nombre: 'Pan lactal 500g', categoria: 'Panadería', precio: 2300, imagen: '/producto-pan.jpg' },
        { id: 3, nombre: 'Manzanas rojas (kg)', categoria: 'Frutas y verduras', precio: 1800, imagen: '/producto-manzanas.jpg' },
        { id: 4, nombre: 'Arroz largo fino 1kg', categoria: 'Almacén', precio: 1600, imagen: '/producto-arroz.jpg' },
        { id: 5, nombre: 'Aceite de girasol 900ml', categoria: 'Almacén', precio: 2100, imagen: '/producto-aceite.jpg' },
        { id: 6, nombre: 'Gaseosa cola 2.25L', categoria: 'Bebidas', precio: 2700, imagen: '/producto-gaseosa.jpg' },
        { id: 7, nombre: 'Queso cremoso (kg)', categoria: 'Lácteos', precio: 6900, imagen: '/producto-queso.jpg' },
        { id: 8, nombre: 'Detergente sintético 750ml', categoria: 'Limpieza', precio: 1950, imagen: '/producto-detergente.jpg' },
    ];
    findAll(categoria) {
        if (categoria) {
            return this.productos.filter((prod) => prod.categoria.toLowerCase() === categoria.toLowerCase());
        }
        return this.productos;
    }
    findOne(id) {
        return this.productos.find((prod) => prod.id === id);
    }
    create(createProductoDto) {
        const nuevoProducto = {
            id: this.productos.length + 1,
            ...createProductoDto,
        };
        this.productos.push(nuevoProducto);
        return nuevoProducto;
    }
    update(id, updateProductoDto) {
        const index = this.productos.findIndex((prod) => prod.id === id);
        if (index !== -1) {
            this.productos[index] = { ...this.productos[index], ...updateProductoDto };
            return this.productos[index];
        }
        return null;
    }
    remove(id) {
        const index = this.productos.findIndex((prod) => prod.id === id);
        if (index !== -1) {
            return this.productos.splice(index, 1)[0];
        }
        return null;
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)()
], ProductosService);
//# sourceMappingURL=productos.service.js.map