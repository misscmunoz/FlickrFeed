import { Component, Input } from '@angular/core';
import { FeedItem } from '../../model/FeedItem';
import Utils from '../../utils/utils';


export interface ViewModel {
    item: FeedItem;
}

@Component({
    selector: 'app-feed-item',
    templateUrl: './feed-item.component.html',
    styleUrls: ['./feed-item.component.css']
})

export class FeedItemComponent implements ViewModel {
    @Input() item: FeedItem;

    constructor() {

    }

    public getAuthorName(): string {
        return Utils.photoAuthorNameUtil(this.item.author);

    }
    public getAuthorProfileLink(): string {
        return Utils.photoAuthorUtil(this.item.author_id);
    }

    public getStrippedDescription(): string {
        return Utils.stripDescriptionUtil(this.item.description);
    }

    public tagList(): string[] {
        return this.item.tags.split(' ');
    }

    public getTagLink(tag: string): string {
        return Utils.photoTagUtil(tag);
    }
}
