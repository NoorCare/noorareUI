import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import UserRegistrationModel from './userRegistratio.model';
import Constant from '../common/constant';

@Injectable()
export default class UserRegistrationServices {
    
    constructor(public httpclient: HttpClient){

    }

    public AddUser(userRegistration: UserRegistrationModel){
        debugger;
        return this.httpclient.post<UserRegistrationModel>(Constant.serviceBaseUrl + 
            Constant.registrationApi, userRegistration).toPromise();

    }
}