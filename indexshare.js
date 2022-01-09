const express = require('express');
const upload=require('express-fileupload');
// const multer = require('multer');
// const path = require('path');
// const uuid = require('uuid').v4;
const app = express();
app.use(upload());
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/shareafterlogin.html");
});
app.post('/',(req,res)=>{
    if(req.files){
        console.log(req.files);
        var file =req.files.file;
        var filename=file.name;
        console.log(filename);
        file.mv('./uploads/'+filename,function(err){
            if(err){
                res.send(err);
            }else{
                res.send("File uploaded");
            }
        })
    }
})
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         const { originalname } = file;
//         // or 
//         // uuid, or fieldname
//         cb(null, originalname);
//     }
// })
// const upload = multer({ storage }); // or simply { dest: 'uploads/' }
// app.use(express.static('public'))

// app.post('/upload', upload.array('avatar'), (req, res) => {
//     return res.json({ status: 'OK', uploaded: req.files.length });
// });

app.listen(5000);
