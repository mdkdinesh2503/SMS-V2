import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private client:HttpClient) { }

  updateRegisterData(body:any,id:any){

    return this.client.put("http://localhost:3000/Registers"+"/"+id,body);

  }

  updateAdminData(body:any,id:any){

    return this.client.put("http://localhost:3000/StudentDetails"+"/"+id,body);

  }

  updateAdminResult(body:any,id:any){

    return this.client.put("http://localhost:3000/AdminResult"+"/"+id,body);

  }

}
