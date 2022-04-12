import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'aws-sdk';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  await app.listen(process.env.PORT, () => {
    console.log(
      `\n Server running on port http://localhost:${process.env.PORT}/`,
    );
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
