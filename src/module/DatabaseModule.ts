import { Module } from '@nestjs/common';
import { ImagesController } from '../controller/DatabseImage.controller';
import { ImageService } from '../service/dbImage.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image as imagesRepository } from '../Database/entities/Image.entity';

const db = TypeOrmModule.forRootAsync({
  useFactory: () => ({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'rootUser',
    database: process.env.DB_NAME || 'pieping',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: false,
  }),
});

const entities = TypeOrmModule.forFeature([imagesRepository]);

@Module({
  controllers: [ImagesController],
  providers: [ImageService],
  exports: [ImageService],
  imports: [db, entities],
})
export class DatabaseModule {}
