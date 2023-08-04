import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private client:HttpClient, private logger:NGXLogger) { }

  updateRegisterData(body:any,id:any){

    this.logger.info(environment.successLoggerValue.updateMessage);
    return this.client.put(environment.registerUrl+"/"+id,body);

  }

  updateAdminData(body:any,id:any){

    this.logger.info(environment.successLoggerValue.updateMessage);
    return this.client.put(environment.studentDetailsUrl+"/"+id,body);

  }

  updateAdminResult(body:any,id:any){

    this.logger.info(environment.successLoggerValue.updateMessage);
    return this.client.put(environment.adminResultUrl+"/"+id,body);

  }

}
