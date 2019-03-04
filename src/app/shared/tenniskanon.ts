import { Comment } from './beoordelingen';

export class Tenniscannon {
    id: string;
    naam: string;
    foto: string;
    aanbevolen: boolean;
    omschrijving: string; 
    comments: Comment[];
}