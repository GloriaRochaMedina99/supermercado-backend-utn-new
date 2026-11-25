import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../modules/prisma/prisma.service'; 
import { CreatePromocioneDto } from './dto/create-promocione.dto';
import { UpdatePromocioneDto } from './dto/update-promocione.dto';

@Injectable()
export class PromocionesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPromocioneDto: CreatePromocioneDto) {
    return this.prisma.promocion.create({
      data: {
        titulo: createPromocioneDto.titulo,
        descripcion: createPromocioneDto.descripcion,
        imagen: createPromocioneDto.imagen,
      },
    });
  }

  async findAll() {
    return this.prisma.promocion.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const promocion = await this.prisma.promocion.findUnique({
      where: { id },
    });

    if (!promocion) {
      throw new NotFoundException(`No se encontró la promoción con id ${id}`);
    }

    return promocion;
  }

  async update(id: number, updatePromocioneDto: UpdatePromocioneDto) {
    await this.findOne(id);

    return this.prisma.promocion.update({
      where: { id },
      data: {
        ...(updatePromocioneDto.titulo !== undefined && {
          titulo: updatePromocioneDto.titulo,
        }),
        ...(updatePromocioneDto.descripcion !== undefined && {
          descripcion: updatePromocioneDto.descripcion,
        }),
        ...(updatePromocioneDto.imagen !== undefined && {
          imagen: updatePromocioneDto.imagen,
        }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.promocion.delete({
      where: { id },
    });
  }
}