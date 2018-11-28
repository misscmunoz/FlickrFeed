import { Component, Input } from '@angular/core';
import { FeedItem } from '../../model/FeedItem';
import Utils from '../../utils/utils';

export interface ViewModel {
    item: FeedItem;
}

@Component({
    selector: 'app-feed-item',
    templateUrl: './feed-item.component.html',
    styleUrls: ['./feed-item.component.scss']
})

export class FeedItemComponent implements ViewModel {
    @Input() item: FeedItem;
    /** Constructor **/
    constructor() {}
    /** Author name **/
    public getAuthorName(): string {
        return Utils.photoAuthorNameUtil(this.item.author);
    }
    /** Link to author page **/
    public getAuthorProfileLink(): string {
        return Utils.photoAuthorUtil(this.item.author_id);
    }
    /** Item description **/
    public getStrippedDescription(): string {
        return Utils.stripDescriptionUtil(this.item.description);
    }
    /** Tags **/
    public tagList(): string[] {
        return this.item.tags.split(' ');
    }
    /** Tag link **/
    public getTagLink(tag: string): string {
        return Utils.photoTagUtil(tag);
    }
    /** Overlay ID **/
    public getPopUpId(id: string): string {
        return Utils.photoPopUpUtil(id);
    }
}
