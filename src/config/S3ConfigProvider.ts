import { Injectable } from '@nestjs/common';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class S3ConfigProvider {
  private readonly _s3: S3;
  private readonly _bucketName: string;

  constructor() {
    (this._bucketName = process.env.AWS_S3_BUCKET),
      (this._s3 = new S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        endpoint: process.env.AWS_S3_ENDPOINT,
        region: process.env.AWS_REGION,
        logger: console,
        signatureVersion: 'v4',
      }));
  }

  getS3() {
    return this._s3;
  }

  getBucketName() {
    return this._bucketName;
  }

  createBucket() {
    this.getS3().createBucket({ Bucket: 'testbucket' }, (err, data) => {
      console.log(err, data);
    });
  }
}
