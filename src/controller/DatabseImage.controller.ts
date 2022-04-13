import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ImageService } from '../service/dbImage.service';
import { Image } from '../Database/entities/Image.entity';

@Controller('Images')
export class ImagesController {
  constructor(private service: ImageService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getImages(params.id);
  }

  @Post()
  create(@Body() image: Image) {
    return this.service.createImage(image);
  }

  @Put()
  update(@Body() image: Image) {
    return this.service.updateImage(image);
  }

  @Delete(':id')
  deleteImage(@Param() params) {
    return this.service.deleteImage(params.id);
  }
}
