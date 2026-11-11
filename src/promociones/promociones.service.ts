import { Injectable } from '@nestjs/common';


@Injectable()
export class PromocionesService {
  private promociones: any[] = [
    { id: 1, titulo: '2x1 en Lácteos seleccionados', descripcion: 'Llevando dos productos de la misma marca.', imagen: '/oferta-yogur-punto-market.png' },
    { id: 2, titulo: 'Descuento en Panadería', descripcion: '15% de descuento abonando en efectivo los fines de semana.', imagen: '/oferta-pan-lactal-punto-market.png' },
    { id: 3, titulo: 'Super Oferta en Frutas', descripcion: 'Manzanas rojas al mejor precio por kilo.', imagen: '/oferta-manzanas-punto-market.png' },
  ];

  findAll() {
    return this.promociones;
  }

  findOne(id: number) {
    return this.promociones.find((p) => p.id === id);
  }

  create(createPromocionDto: any) {
    const nuevaPromocion = {
      id: this.promociones.length + 1,
      ...createPromocionDto,
    };
    this.promociones.push(nuevaPromocion);
    return nuevaPromocion;
  }

  update(id: number, updatePromocionDto: any) {
    const index = this.promociones.findIndex((p) => p.id === id);
    if (index === -1) return null;
    this.promociones[index] = { ...this.promociones[index], ...updatePromocionDto };
    return this.promociones[index];
  }

  remove(id: number) {
    const index = this.promociones.findIndex((p) => p.id === id);
    if (index === -1) return null;
    const eliminada = this.promociones.splice(index, 1);
    return eliminada[0];
  }
}