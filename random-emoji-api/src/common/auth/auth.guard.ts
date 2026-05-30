import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log(`Guard: Checking authentication...`);
    const request = context.switchToHttp().getRequest<Request>();
    const apiKey = request.headers['x-api-key'];
    if (apiKey !== 'SECRET_SAUCE') {
      console.log(`Guard: Failed authentication`);
      return false;
    }
    console.log(`Guard: Passed authentication`);
    return true;
  }
}
