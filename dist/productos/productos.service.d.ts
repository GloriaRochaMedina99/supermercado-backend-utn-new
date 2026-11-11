import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosService {
    private productos;
    findAll(categoria?: string): {
        id: number;
        nombre: string;
        categoria: string;
        precio: number;
        imagen: string;
    }[];
    findOne(id: number): {
        id: number;
        nombre: string;
        categoria: string;
        precio: number;
        imagen: string;
    } | undefined;
    create(createProductoDto: CreateProductoDto): {
        id: number;
    };
    update(id: number, updateProductoDto: UpdateProductoDto): {
        id: number;
        nombre: string;
        categoria: string;
        precio: number;
        imagen: string;
    } | null;
    remove(id: number): {
        id: number;
        nombre: string;
        categoria: string;
        precio: number;
        imagen: string;
    } | null;
}
