const mongoose = require('mongoose');

const url = 'mongodb+srv://root:root@cluster0.8kopc.mongodb.net/FriendsApp?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url).then(()=>{
    console.log('MongoDB coneected....');
}).catch((err)=>{
    console.log(err);
    
})