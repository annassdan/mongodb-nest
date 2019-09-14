import { Body, Controller, Post } from '@nestjs/common';
import { Schemas } from '../shared/constants';
import { Staff } from './staff';
import { StaffService } from './staff.service';

@Controller(Schemas.STAFF)
export class StaffController {

  constructor(private readonly staffService: StaffService) {
  }

  @Post('create/one')
  async createOne(@Body() model: Staff) {
    const id = await this.staffService.createOne(model);
    return { id };
  }

}
