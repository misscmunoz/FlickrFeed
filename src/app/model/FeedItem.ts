export interface FeedItem {
    title: string;
    link: string;
    media: {m: string};
    date_taken: string;
    description: string;
    published: string;
    author: string;
    author_id: string;
    tags: string;
}

export const defaultFeedItem: FeedItem = {
    title: 'Hi HolidayExtras',
    link: 'https://www.flickr.com',
    media: {m: 'https://www.flickr.com'},
    date_taken: '2018-11-20T12:34:22-08:00',
    description: 'test description',
    published: '2018-11-20T14:18:28Z',
    author: 'bob',
    author_id: '12345',
    tags: 'test tags'
};
