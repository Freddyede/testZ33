/**
 * This file contains all API features
 * @version 1.0.0
 */
import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '24h' },
    }),
    DashboardModule,
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
