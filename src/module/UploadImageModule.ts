import { Module } from '@nestjs/common';
import { UploadImageController } from '../controller/UploadImage.controller ';
import { UploadImageService } from '../service/uploadimage.service';

@Module({
  controllers: [UploadImageController],
  providers: [UploadImageService],
  exports: [UploadImageService],
})
export class UploadImageModule {}
