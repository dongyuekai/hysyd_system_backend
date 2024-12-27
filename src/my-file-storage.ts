import * as multer from 'multer';
import * as fs from 'fs';

// 我们需要自定义保存的文件名，所以我们需要自定义存储方式 storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      fs.mkdirSync('uploads');
    } catch (e) {}

    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() +
      '-' +
      Math.round(Math.random() * 1e9) +
      '-' +
      file.originalname;
    cb(null, uniqueSuffix);
  },
});
export { storage };
