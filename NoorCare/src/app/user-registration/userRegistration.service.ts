import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import UserRegistrationModel from './userRegistratio.model';

@Injectable()
export default class UserRegistrationServices {
    
    constructor(public httpclient: HttpClient){

    }

    public AddUser(userRegistration: UserRegistrationModel){

        //this.httpclient.post(serviceBase + registrationApi, registration)

    }
}