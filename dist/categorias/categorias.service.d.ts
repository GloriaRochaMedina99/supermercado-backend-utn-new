import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriasService {
    private categorias;
    findAll(): any[];
    findOne(id: number): any;
    create(createCategoriaDto: CreateCategoriaDto): {
        id: number;
    };
    update(id: number, updateCategoriaDto: UpdateCategoriaDto): any;
    remove(id: number): any;
}
