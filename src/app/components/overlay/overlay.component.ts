import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-overlay',
    templateUrl: './overlay.component.html',
    styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
    @Input() overlayId: string;
    @Input() description: string;
    /** Constructor **/
    constructor() {}
}
