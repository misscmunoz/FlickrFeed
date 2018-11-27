import { Component, OnInit } from '@angular/core';
import { FeedDataService } from '../../services/feed-data/feed-data.service';

import { FeedItem } from '../../model/FeedItem';

@Component({
    selector: 'app-feed-view',
    templateUrl: './feed-view.component.html',
    styleUrls: ['./feed-view.component.css'],
    providers: [FeedDataService],
})
export class FeedViewComponent implements OnInit {
    public next = 8;
    public start = 0;
    public end = 0;
    public loaded = false;
    public total: number;
    public searchText: string;
    public searchTag: string;
    public data: FeedItem[];
    public items: FeedItem[];


    constructor(private feedService: FeedDataService) {
    }

    onScrollDown() {
        if (this.loaded === true) {
            return;
        }

        this.start += this.next;
        this.end += this.next;

        if (this.start > this.total) {
            this.start = this.total;
        }

        if (this.end > this.total) {
            this.loaded = true;
            this.end = this.total;
        }
        this.appendItems(this.start, this.end);
    }

    ngOnInit() {
        this.search();
    }
    public search() {
        this.feedService.retrieveItems(this.searchTag).subscribe((data: FeedItem[]) => {
            this.resetScroll();
            this.total = data.length;
            this.data = data;
            this.end = this.next;
            this.appendItems(0, this.next);
        });
    }

    public addItems(startIndex: number, endIndex: number, _method: string) {
        for (let i = startIndex; i < endIndex; ++i) {
            this.items[_method](this.getItem(i));
        }
    }

    public appendItems(startIndex: number, endIndex: number) {
        this.addItems(startIndex, endIndex, 'push');
    }

    public getItem(index: number): FeedItem {
        return this.data[index] ? this.data[index] : null;
    }

    public clearSearch() {
        this.searchText = null;
    }

    public resetScroll() {
        this.items = [];
        this.start = 0;
        this.end = 0;
        this.loaded = false;
    }
}
