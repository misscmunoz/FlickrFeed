import { TestBed } from '@angular/core/testing';

import { PhotoStreamDataService } from './feed-data.service';

describe('FeedDataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: PhotoStreamDataService = TestBed.get(PhotoStreamDataService);
        expect(service).toBeTruthy();
    });
});
