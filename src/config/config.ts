export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  AWS_REGION: process.env.AWS_REGION || 'us-east-1',
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '',
  AWS_SECRET_ACCESS_KEY: process.env.AWS_AWS_SECRET_ACCESS_KEY || '',
  CLOUDFRONT_URL: process.env.CLOUDFRONT_URL || '',
  S3_BUCKET_NAME: process.env.BUCKET_NAME || '',
});
