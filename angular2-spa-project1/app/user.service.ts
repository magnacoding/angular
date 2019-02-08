import {Http} from "angular2/http";
import "rxjs/add/operator/map";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {User} from "./user";

@Injectable()
export class UserService {

    private _url = "https://api.github.com/users/octocat";

    constructor(private _http: Http) {

    }
    getUser() : Observable<User> {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    createPostPost(user: User) {
        return this._http.post(this._url, JSON.stringify(user))
            .map(res => res.json());
    }
}