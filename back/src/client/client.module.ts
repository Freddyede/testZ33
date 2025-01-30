/**
 * This file contains all client features
 * @version 1.0.0
 */
import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CommonModule, AuthModule],
})
export class ClientModule {}
