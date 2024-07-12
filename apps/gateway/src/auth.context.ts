import { AUTH_SERVICE } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';
import { app } from './app';
import { lastValueFrom } from 'rxjs';
import { UnauthorizedException } from '@nestjs/common';

export const authContext = async ({ req }) => {
  try {
    const authClient = app.get<ClientProxy>(AUTH_SERVICE);
    const user = await lastValueFrom(
      authClient.send('authenticate', {
        Authentication: req.headers?.authentication,
      }),
    );
    return { user };
  } catch (err) {
    throw new UnauthorizedException(err);
  }
};
