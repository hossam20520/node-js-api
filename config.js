
module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000 , 
    URL: process.env.BASE_URL || 'http://localhost:3000',
    MONGODB_URI: process.env.MONGODB_URI ||  
     'mongo mongodb://localhost:27017/clients?authSource=$[authSource] --username $[username]'
    // 'mongodb+srv://hossam:hossam1991@cluster0-fnctr.gcp.mongodb.net/clients?retryWrites=true&w=majority'
   
}