const MONGO_URI = 'mongodb://admin:admin123@ac-ih9mcmi-shard-00-00.21cpb6c.mongodb.net:27017,ac-ih9mcmi-shard-00-01.21cpb6c.mongodb.net:27017,ac-ih9mcmi-shard-00-02.21cpb6c.mongodb.net:27017/?ssl=true&replicaSet=atlas-31txg6-shard-0&authSource=admin&retryWrites=true&w=majority'
import mongoose from 'mongoose';

const connectMongo = async () => {
    try{      

        const { connection }  = await mongoose.connect(MONGO_URI)

        if(connection.readyState == 1){
            console.log("Database Connected")
        }

    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;