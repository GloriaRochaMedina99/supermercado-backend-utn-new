import { PromocionesService } from './promociones.service';
import { CreatePromocioneDto } from './dto/create-promocione.dto';
import { UpdatePromocioneDto } from './dto/update-promocione.dto';
export declare class PromocionesController {
    private readonly promocionesService;
    constructor(promocionesService: PromocionesService);
    create(createPromocioneDto: CreatePromocioneDto): any;
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updatePromocioneDto: UpdatePromocioneDto): any;
    remove(id: string): any;
}
