import {TestBed} from '@angular/core/testing';

import {FeedDataService} from './feed-data.service';

describe('FeedDataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: FeedDataService = TestBed.get(FeedDataService);
        expect(service).toBeTruthy();
    });
});
