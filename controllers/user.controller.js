const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
};

module.exports.userInfo = (req, res) => {
    console.log(req.params);
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id);
    UserModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID unknown: ' + err);
    }).select('-password');
};

module.exports.userDelete = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id);
    try {
        await UserModel.remove({ _id: req.params.id }).exec();
        res.status(200).json({ message: "Successfully deleted"});
    } catch (err) {
        return res.status(500).json({message: err});
    }
};

module.exports.updateUser = async (req,res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("Id unknown "+req.params.id)
    try {
        await UserModel.findOneAndUpdate(
            {_id:req.params.id},
            {
                $set:{
                    weather:req.body.weather
                }
            },
            {new:true,upsert:true,setDefaultsOnInsert:true}
        )
            .then((docs) => {return res.send(docs)})
            .catch((err) => {return res.status(500).send({message: err})})
    }
    catch (err) {
        return res.status(500).send({message:err})
    }
}

module.exports.updateCurrency = async (req,res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("Id unknown "+req.params.id)
    try {
        await UserModel.findOneAndUpdate(
            {_id:req.params.id},
            {
                $set:{
                    exchange:req.body.exchange
                }
            },
            {new:true,upsert:true,setDefaultsOnInsert:true}
        )
            .then((docs) => {return res.send(docs)})
            .catch((err) => {return res.status(500).send({message: err})})
    }
    catch (err) {
        return res.status(500).send({message:err})
    }
}

module.exports.updateWcity = async (req,res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("Id unknown "+req.params.id)
    try {
        await UserModel.findOneAndUpdate(
            {_id:req.params.id},
            {
                $set:{
                    city:req.body.city
                }
            },
            {new:true,upsert:true,setDefaultsOnInsert:true}
        )
            .then((docs) => {return res.send(docs)})
            .catch((err) => {return res.status(500).send({message: err})})
    }
    catch (err) {
        return res.status(500).send({message:err})
    }
}

module.exports.updateYoutube = async (req,res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("Id unknown "+req.params.id)
    try {
        await UserModel.findOneAndUpdate(
            {_id:req.params.id},
            {
                $set:{
                    youtube:req.body.youtube
                }
            },
            {new:true,upsert:true,setDefaultsOnInsert:true}
        )
            .then((docs) => {return res.send(docs)})
            .catch((err) => {return res.status(500).send({message: err})})
    }
    catch (err) {
        return res.status(500).send({message:err})
    }
}

module.exports.updateYoutubeLink = async (req,res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("Id unknown "+req.params.id)
    try {
        await UserModel.findOneAndUpdate(
            {_id:req.params.id},
            {
                $push:{
                    youtubelink:req.body.youtubelink
                }
            },
            {new:true,upsert:true,setDefaultsOnInsert:true}
        )
            .then((docs) => {return res.send(docs)})
            .catch((err) => {return res.status(500).send({message: err})})
    }
    catch (err) {
        return res.status(500).send({message:err})
    }
}

module.exports.updateAct = async (req,res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("Id unknown "+req.params.id)
    try {
        await UserModel.findOneAndUpdate(
            {_id:req.params.id},
            {
                $set:{
                    activity:req.body.activity
                }
            },
            {new:true,upsert:true,setDefaultsOnInsert:true}
        )
            .then((docs) => {return res.send(docs)})
            .catch((err) => {return res.status(500).send({message: err})})
    }
    catch (err) {
        return res.status(500).send({message:err})
    }
}

module.exports.updateAgeN = async (req,res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("Id unknown "+req.params.id)
    try {
        await UserModel.findOneAndUpdate(
            {_id:req.params.id},
            {
                $set:{
                    age:req.body.age
                }
            },
            {new:true,upsert:true,setDefaultsOnInsert:true}
        )
            .then((docs) => {return res.send(docs)})
            .catch((err) => {return res.status(500).send({message: err})})
    }
    catch (err) {
        return res.status(500).send({message:err})
    }
}

module.exports.getInfos = (res, req) => {
    
}

// module.exports.getData = async (req, res) => {
//     // this is where you paste your api key
//     let apiKey = "{968b2863183fae8e94655c063da5488691de971d449cf7bb82c6ace53cdefcbf}";
//     const WebSocket = require('ws');
//     const ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);

//     ccStreamer.on('open', function open() {
//         var subRequest = {
//             "action": "SubAdd",
//             "subs": ["0~Coinbase~BTC~USD"]
//         };
//         return ccStreamer.send(JSON.stringify(subRequest));
//     });

//     ccStreamer.on('message', function incoming(data) {
//         console.log(data);
//     });
// }