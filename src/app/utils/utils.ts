import { CONFIG } from '../config';

export default class Utils {
    /** Return author name inside double qoutes ("")**/
    static photoAuthorNameUtil(author: string): string {
        return author.match( /"(.*?)"/ )[1];
    }
    /** Return author url **/
    static photoAuthorUtil(id: string): string {
        return CONFIG.BASE_URL.AUTHOR_URL + id;
    }
    /** Strip <p> tags from description **/
     static stripDescriptionUtil(description: string): string {
        const strippedDescription = description.substring(
            description.lastIndexOf('<p>'),
            description.lastIndexOf('</p>')
        ).replace(/<[^>]*>/g, '');

        return strippedDescription ? `<p><strong>Description</strong> ${strippedDescription} </p>` : '<strong> No description </strong>';
    }

    static photoTagUtil(tag: string): string {
         return CONFIG.BASE_URL.SEARCH_URL + `${tag}`;
    }
}
