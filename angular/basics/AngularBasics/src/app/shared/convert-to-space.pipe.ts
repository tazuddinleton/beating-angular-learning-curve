import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name : 'convertToSpace',
pure: true
})
export class ConvertToSpacePipe implements PipeTransform{
    
    transform(value: string, indicator: string) {
        console.log(value);

        return value.replace(indicator, ' ');
    }

}