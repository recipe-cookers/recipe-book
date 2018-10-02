import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';

@Injectable()
export class ListGuard implements CanActivate {

  canActivate() {
    return prompt('Enter password') === '0000';
  }

}