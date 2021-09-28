import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Request,
} from '@nestjs/common';
import { ExperimentService } from './experiment.service';

@Controller('experiment')
export class ExperimentController {
  constructor(private readonly experimentService: ExperimentService) {}

  @Get()
  findAll(@Request() req) {
    const token: string = req.headers.devicetoken;
    return this.experimentService.findAll(token);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.experimentService.findOne(+id);
  // }
}
