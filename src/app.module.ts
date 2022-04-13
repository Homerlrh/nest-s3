import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './service/app.service';
import { ConfigModule } from '@nestjs/config';
import { UploadImageModule } from './module/UploadImageModule';
import { DatabaseModule } from './module/DatabaseModule';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from './config/config';

const dotEnv = ConfigModule.forRoot({
  load: [config],
  ignoreEnvVars: true,
});

@Module({
  imports: [dotEnv, UploadImageModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
