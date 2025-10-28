import { defineBuilderConfig } from '@afilmory/builder'

export default defineBuilderConfig(() => ({
  repo: {
    enable: true,
    url: 'https://github.com/cupchino/afilmory-assets',
  },
  storage: {
    provider: 's3',
    bucket: 'gallery',
    region: 'us-east-1',
    prefix: '',
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    customDomain: 'https://r2.innei.ren',
    endpoint:
      'https://de7ecb0eaa0a328071255d557a6adb66.r2.cloudflarestorage.com',
  },
}))
