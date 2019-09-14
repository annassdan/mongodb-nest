import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://annassdan:cTVUn3KZIT6d2Snn@cluster0-daxfd.gcp.mongodb.net/test?retryWrites=true&w=majority'),
    StaffModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
