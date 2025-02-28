import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);
    if(initialized) {
        console.log('Already connected MongoDb');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'acm-nextjs-social',
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
        initialized = true;
    } catch (error) {
        console.log('Error connected mongodB:',error);        
    }
};