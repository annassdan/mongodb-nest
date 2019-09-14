import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StaffSchema } from './staff';
import { Schemas } from '../shared/constants';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Schemas.STAFF, schema: StaffSchema },
  ])],
  providers: [StaffService],
  controllers: [StaffController],
})
export class StaffModule {
}
