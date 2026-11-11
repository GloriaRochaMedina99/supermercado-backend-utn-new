import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  private categorias: any [] = [
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

  findOne(id: number) {
    return this.categorias.find((c) => c.id === id);
  }

  create(createCategoriaDto: CreateCategoriaDto) {
    const nuevaCategoria = {
      id: this.categorias.length + 1,
      ...createCategoriaDto,
    };
    this.categorias.push(nuevaCategoria);
    return nuevaCategoria;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const index = this.categorias.findIndex((c) => c.id === id);
    if (index === -1) return null;
    this.categorias[index] = { ...this.categorias[index], ...updateCategoriaDto };
    return this.categorias[index];
  }

  remove(id: number) {
    const index = this.categorias.findIndex((c) => c.id === id);
    if (index === -1) return null;
    const eliminada = this.categorias.splice(index, 1);
    return eliminada[0];
  }
}