const router = require("express").Router();

//our band model

const band = require("../models/bands");




router.post("/save",async(req,res)=>{
    const newBand = band(
        {
            name: req.body.name,
            imageURL:req.body.imageURL,
            twitter:req.body.twitter,
            instagram:req.body.instagram,
        }
    );
        try {
            const savedBand= await newBand.save();
                return res.status(200).send({success:true,band: savedBand})
        } catch (error) {
            return res.status(400).send({success: false , msg: error});

        }
} );


router.get("/getOne/:id", async (req , res)=>{
     const filter ={_id:req.params.id};

     const data = await band.findOne(filter)

    if(data) {
        return res.status(200).send({success:true,band: data})

    }
    else{
        return res.status(400).send({success:false,msg: "Data not found"})
    }
    });
//not working

router.get("/getAll", async (req,res)=>{
    const options = {
        sort :{
            createdAt: 1
        },
    };

    const data = await band.find(options);
    if(data) {
        return res.status(200).send({success:true,band:data})

    }
    else{
        return res.status(400).send({success:false,msg: "Data not found"})
    }
    });

    router.put("/update/:id", async (req,res)=>{
        const filter = {_id: req.params.id};

        const options ={
            upsert : true,
            new: true
        }
        try {
          const result  = await band.findOneAndUpdate(filter,{
                name: req.body.name,
                imageURL:req.body.imageURL,
                twitter:req.body.twitter,
                instagram:req.body.instagram,
            }, 
            options
            );
            return res.status(200).send({success : true, data : result});
        } catch (error) {
            return res.status(400).send({success: false , msg: error});
        }
    })

    router.delete("/delete/:id", async(req, res)=>{
        const filter = { _id: req.params.id};

        const result = await band.deleteOne(filter);
        if(result){
            return res.status(200).send({success:true, msg:"Data Deleted successfully"})

        }
        else{
            return res.status(400).send({success:false,msg: "Data not found"})
        }
    })

    router.delete("/delete/:id", async(req, res)=>{
        const filter = { _id: req.params.id};

        const result = await song.deleteOne(filter);
        if(result){
            return res.status(200).send({success:true, msg:"Data Deleted successfully"})

        }
        else{
            return res.status(400).send({success:false,msg: "Data not found"})
        }
    })


module.exports = router;