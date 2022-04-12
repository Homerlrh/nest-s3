import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './service/app.service';
import { ConfigModule } from '@nestjs/config';
import { UploadImageModule } from './module/UploadImageModule';
import config from './config/config';

const dotEnv = ConfigModule.forRoot({
  load: [config],
  ignoreEnvVars: true,
});

@Module({
  imports: [dotEnv, UploadImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
