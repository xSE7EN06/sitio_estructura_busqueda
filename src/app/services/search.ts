import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { SITE_INDEX, SiteItem } from "../data/site-index";


export type SearchFilters = {
    type?: 'todos' | 'pagina' | 'seccion';
    section?: 'todas' | string;
};

@Injectable({ providedIn: 'root' })
export class SearchApi {
    search(query: string, filters: SearchFilters): Observable<SiteItem[]> {
        const q = (query || '').trim().toLocaleLowerCase();

        let data = [...SITE_INDEX];

        const normalize = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const normalizedQ = normalize(q);

        data = data.filter(item => {
            const haystack = normalize(item.title + ' ' + item.description + ' ' + item.keywords.join(' '));
            return haystack.includes(normalizedQ);
        });

        if (filters.type && filters.type !== 'todos') {
            data = data.filter(item => item.type === filters.type);
        }

        if (filters.section && filters.section !== 'todos') {
            data = data.filter(item => item.section === filters.section);
        }

        return of(data).pipe(delay(200));
    }

    getSections(): string[] {
        const set = new Set(SITE_INDEX.map(x => x.section));

        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }
}