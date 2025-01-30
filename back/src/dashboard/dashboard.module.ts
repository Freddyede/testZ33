/**
 * This file contains all back-office features
 * @version 1.0.0
 */
import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
})
export class DashboardModule {}
