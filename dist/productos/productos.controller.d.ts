import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    create(createProductoDto: CreateProductoDto): {
        id: number;
    };
    findAll(categoria?: string): {
        id: number;
        nombre: string;
        categoria: string;
        precio: number;
        imagen: string;
    }[];
    findOne(id: string): {
        id: number;
        nombre: string;
        categoria: string;
        precio: number;
        imagen: string;
    } | undefined;
    update(id: string, updateProductoDto: UpdateProductoDto): {
        id: number;
        nombre: string;
        categoria: string;
        precio: number;
        imagen: string;
    } | null;
    remove(id: string): {
        id: number;
        nombre: string;
        categoria: string;
        precio: number;
        imagen: string;
    } | null;
}
