import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import UserRegistrationModel from './userRegistratio.model';
import Constant from '../common/constant';

@Injectable()
export default class UserRegistrationServices {
    
    constructor(public httpclient: HttpClient){

    }

    public registerUser(userRegistration: UserRegistrationModel){
        debugger;
                var reqHeader = new HttpHeaders({'No-Auth':'True'});
                return this.httpclient.post(Constant.serviceBaseUrl + Constant.registrationApi, 
                    userRegistration, {headers : reqHeader});
                }
            

}