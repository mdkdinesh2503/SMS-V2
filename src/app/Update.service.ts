import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private client:HttpClient) { }

  updateRegisterData(body:any,id:any){

    return this.client.put(environment.registerUrl+"/"+id,body);

  }

  updateAdminData(body:any,id:any){

    return this.client.put(environment.studentDetailsUrl+"/"+id,body);

  }

  updateAdminResult(body:any,id:any){

    return this.client.put(environment.adminResultUrl+"/"+id,body);

  }

}
