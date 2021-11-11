import { Pipe, PipeTransform } from '@angular/core';
import { Film } from './Types';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: Film[], searchTerm: string): Film[] {
        if (!searchTerm) return value

        const filtered = value.filter((f: Film) => f.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)


        return filtered
    }

}