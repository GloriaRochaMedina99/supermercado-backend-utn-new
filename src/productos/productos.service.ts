
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../modules/prisma/prisma.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(categoria?: string) {
    return this.prisma.producto.findMany({
      where: categoria
        ? {
            categoria: {
              equals: categoria,
              mode: 'insensitive',
            },
          }
        : {},
    });
  }

  async findOne(id: number) {
    const producto = await this.prisma.producto.findUnique({
      where: { id },
    });

    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }

    return producto;
  }

  async create(createProductoDto: CreateProductoDto) {
    return this.prisma.producto.create({
      data: createProductoDto,
    });
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    await this.findOne(id);

    return this.prisma.producto.update({
      where: { id },
      data: updateProductoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.producto.delete({
      where: { id },
    });
  }
}
