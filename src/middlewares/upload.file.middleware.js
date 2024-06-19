import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        console.log(path.resolve('public','uploads'));
        cb(null,path.resolve('public','uploads'));
    },
    filename: (req,file,cb)=>{
        const filename = file.originalname;
        cb(null,filename);
    }
})
export default multer({storage});