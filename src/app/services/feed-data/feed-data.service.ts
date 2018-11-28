import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CONFIG } from '../../config';
import { catchError, map } from 'rxjs/operators';
import { FeedItem } from '../../model/FeedItem';

@Injectable({
    providedIn: 'root'
})

export class FeedDataService {

    constructor(private http: HttpClient) {
    }
    /** Check if the items exist in request response **/
    static serializeResponse(result: any): FeedItem[] | null {
        return result.items ? result.items : null;
    }
    /** Call photo feed API **/
    public retrieveItems(tags = 'movies'): Observable<FeedItem[]> {
        const API_URL = CONFIG.API.PHOTO_FEED + '?format=json&jsoncallback=JSONP_CALLBACK';
        return this.http
            .jsonp<FeedItem[]>(`${API_URL}` + `&tags=${tags}`, 'JSONP_CALLBACK')
            .pipe(
                map(response => FeedDataService.serializeResponse(response)),
                catchError((error: any) => throwError(error))
            );
    }
}
