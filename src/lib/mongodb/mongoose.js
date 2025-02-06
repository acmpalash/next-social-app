import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);
    if(initialized) {
        console.log('Already connected MongoDb');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB.URI, {
            dbName: 'acm-nextjs-social',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected to MongoDb');
        initialized = true;
    } catch (error) {
        console.log('error connected mongodb:',error);        
    }
};

const User = mongoose.model.User || mongoose.model('User', userSchema);

export default User;