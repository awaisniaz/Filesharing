import multer from 'multer';
import path from 'path'
import File from '../model/files'
import {uuid4} from 'uuid'
let storage = multer.diskStorage({
    destination : (req,file,cb)=> cb(null,'uploads/'),
    filename : (req,files,cb)=>{
        const fileName = `${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(files.originalname)}`
        console.log(fileName)
        cb(null,fileName)
    }
})

let upload = multer({
    storage:storage,
    limit:{
        fileSize:104857600
    }
}).single('uploadFile')
const fileUploader = (req,res)=>{
    console.log(req.file)
    if(!req.file){
        res.json({
            error:"Please Select file"
        })

    }
    upload(req,res,async(err)=>{
        if(err){
            return res.status(500).send({error:err.message})
        }
        const file = new File({
            filename:req.file.filename,
            uuid :uuid4(),
            path : req.file.path,
            size :req.file.size
        })
        const response = await file.save()
        return res.json({
            file:`${process.env.APP_BASE_URL}/files/${response.uuid}`
        })
    })

}

export default fileUploader