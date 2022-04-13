import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from '../Database/entities/Image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image) private imagesRepository: Repository<Image>
  ) {}

  async getImages(image: Image): Promise<Image[]> {
    return await this.imagesRepository.find();
  }

  async getImageById(_id: number): Promise<Image[]> {
    return await this.imagesRepository.find({
      select: ['identifier', 'fileName', 'numberOfDownloads', 'isActive'],
      where: [{ id: _id }],
    });
  }

  async createImage(image: Image) {
    return await this.imagesRepository.create(image);
  }

  async updateImage(image: Image) {
    this.imagesRepository.save(image);
  }

  async deleteImage(image: Image) {
    this.imagesRepository.delete(image);
  }
}
