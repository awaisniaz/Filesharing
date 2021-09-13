import File from "../model/files";
const showMiddleWare = async (req, res) => {
  try {
    const file = await File.findOne({
      uuid: req.params.uuid,
    });
    if(!file){
        return res.render('download',{
            error:"Link has been Expired"
        })

    }
    else{
        return res.render('download',{
            uuid:file.uuid,
            filename:file.filename,
            fileSize:file.fileSize,
            downloadLink:`${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        })
    }
  } catch (err) {
      return res.render('download',{
          error:"Something Went Wrong"
      })
  }
};

module.exports = showMiddleWare;


// 1:08:01