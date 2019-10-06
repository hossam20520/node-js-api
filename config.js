
module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 80 , 
    URL: process.env.BASE_URL || 'https://node20520.herokuapp.com/',
    MONGODB_URI: process.env.MONGODB_URI ||  
    //  'mongo mongodb://localhost:27017/clients?authSource=$[authSource] --username $[username]',
     'mongodb+srv://hossam:hossam1991@cluster0-fnctr.gcp.mongodb.net/clients?retryWrites=true&w=majority',
   
     
     JWT_SECRET: process.env.JWT_SECRET || 'secret1'
    
     // 'mongodb+srv://hossam:hossam1991@cluster0-fnctr.gcp.mongodb.net/clients?retryWrites=true&w=majority'
   
}