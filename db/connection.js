const mongoose = require('mongoose')
const db = mongoose.connection

const MONGODB_URI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/prorep'

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    
    .then(() => {
        console.log('The connection with mongod is established'.green.underline)
    })
    
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })



    db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
    db.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
    db.on('disconnected', () => console.log('mongo disconnected'))

    module.exports = mongoose