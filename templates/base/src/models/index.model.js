const mongoose = require('mongoose');
mongoose.Promise = Promise;
exports.connect = function () {
    if (process.env.SHOW_MONGO == 'YES') mongoose.set('debug', true);
    mongoose.connection.on('error', (e) => {
        console.log(
            'MongoDB connection error. Make sure MongoDB is up and running'
        );
        throw e;
    });
    mongoose.connection.on('disconnect', () => {
        console.log('MongoDB connection disconnected');
    });

    return mongoose
        .connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then((connection) => {
            console.log('Connected to MongoDB');
            return connection;
        });
};
