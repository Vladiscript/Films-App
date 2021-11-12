import { Pipe, PipeTransform } from '@angular/core';
import { Film } from './Types';

@Pipe({
    name: 'sorting'
})
export class SortPipe implements PipeTransform {

    transform(value: Film[], sortBy: string, toReverse?: boolean): Film[] {

        const compareObjects = (object1: Film, object2: Film, key: string, toReverse?: boolean) => {

            const obj1 = object1[key].toString().toLowerCase()
            const obj2 = object2[key].toString().toLowerCase()

            if (obj1 < obj2) {
                return toReverse ? 1 : -1
            }
            if (obj1 > obj2) {
                return toReverse ? -1 : 1
            }
            return 0
        }

        const sortered = value.sort((film1: Film, film2: Film) => {
            return compareObjects(film1, film2, sortBy, toReverse)
        })
        return sortered
    }
}
