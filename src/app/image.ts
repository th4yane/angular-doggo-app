import { Category } from './category';
import { Breed } from './breed';

export interface Image{
    id: string;
    url: string;
    categories: Array<Category>;
    breeds: Array<Breed>;
}
