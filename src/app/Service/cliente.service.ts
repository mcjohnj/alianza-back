import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private API_SERVER = "http://localhost:7194/clients";

  constructor(private httpClient:HttpClient) { }

  public getAllClients(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public saveClient (client:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,client);
  }
}
