import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
    transform(value: string, term: string): string {
        if(term === '') return value;
        
        let src_str = value;
        let pattern = new RegExp("(" + term.replace(/(\s+)/, "(<[^>]+>)*$1(<[^>]+>)*") + ")", "gi");
        src_str = src_str.replace(pattern, "<mark>$1</mark>");
        src_str = src_str.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/, "$1</mark>$2<mark>$4");
        return src_str;
    }
}