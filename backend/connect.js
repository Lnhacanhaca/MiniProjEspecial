const mongoose = require('mongoose')
const mongoUrl = 'mongodb://127.0.0.1:27017/euromiles'
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'))