import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CommonModule } from '../../common/common.module';
import { UserRepository } from '../../common/repository/user.repository';

@Module({
  imports: [CommonModule],
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
})
export class AuthModule {}
