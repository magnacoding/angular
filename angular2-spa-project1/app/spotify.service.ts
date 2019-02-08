import { Observable } from 'rxjs/Rx';

export class SpotifyService {

    searchArtists() : any {
        return searchTerm => {
            var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
            var promise = $.getJSON(url);
            var observable = Observable.fromPromise(promise);
        }
    }
}