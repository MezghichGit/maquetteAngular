import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  provider: any;
  urlProviders = environment.rootURL+'providers';
  constructor(private Http: HttpClient) { }
  listProviders() {
    //const headersJWT = new HttpHeaders({ Authorization: 'Bearer ' + token });
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    //return this.Http.get(this.urlProviders + '/list',{ headers });
    return this.Http.get(this.urlProviders + '/list');
  }

  createProvider(provider) {

    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });




    //return this.Http.post(this.urlProviders + '/add', this.provider,{ headers });
    return this.Http.post(this.urlProviders + '/add', provider);
  }

  updateProvider(myObj,id) {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    //return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj,{ headers });
    return this.Http.put(this.urlProviders + '/' + id, myObj);
  }
  deleteProvider(myObj) {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    //return this.Http.delete(this.urlProviders + '/' + myObj['id'],{ headers })
    return this.Http.delete(this.urlProviders + '/' + myObj['id'])
  }
  getProvider(id) {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });

   // return this.Http.get(this.urlProviders + '/' + id,{ headers })
    return this.Http.get(this.urlProviders + '/' + id)
  }
  /*
    public getProviders()
    {
      return this.tab;
    }

    public getUser()
    {
      return this.http.get(this.url);
    }*/


}



