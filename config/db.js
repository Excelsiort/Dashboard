const mongoose = require("mongoose");

mongoose.connect(
    'mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.x9uky.mongodb.net/dashboard',
    {useNewUrlParser: true, useUnifiedTopology: true,}
).then(() => console.log('connected to mongodb'))
.catch((err) => console.log('Failed to connect mongodb', err));