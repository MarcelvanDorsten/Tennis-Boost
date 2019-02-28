import { Comment } from './beoordelingen';

export class Tenniscannon {
    id: string;
    naam: string;
    foto: string;
    omschrijving: string; 
    comments: Comment[];
}