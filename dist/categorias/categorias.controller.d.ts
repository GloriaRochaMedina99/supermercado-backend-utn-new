import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    create(createCategoriaDto: CreateCategoriaDto): {
        id: number;
    };
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateCategoriaDto: UpdateCategoriaDto): any;
    remove(id: string): any;
}
