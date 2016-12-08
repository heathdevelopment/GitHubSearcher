import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	private client_id = '24d84a780feb9b13114a';
	private client_secret = '04718d77bac7556ca566850cbca54399a763c294';

	constructor(private _http: Http){
		console.log('Github service ready.....');
		this.username = 'heathdevelopment';
	}

	getUser(){
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
	}

	getRepos(){
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
	}

	updateUser(username:string){
		this.username = username;
	}
}