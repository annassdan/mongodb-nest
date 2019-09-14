import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Schemas } from '../shared/constants';
import { Model } from 'mongoose';
import { Staff } from './staff';

@Injectable()
export class StaffService {

  constructor(@InjectModel(Schemas.STAFF) private readonly staffModel: Model<Staff>) {}


  /* fungsi mongo db untuk melakukan save satu data ke database */
  async createOne(staff: Staff): Promise<string> {
    const theData = new this.staffModel(staff);
    const result = await theData.save();
    return result._id as string;
  }



}
