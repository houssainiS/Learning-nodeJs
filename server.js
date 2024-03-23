const express = require('express');

const app = express();

app.post('/add',()=>{
    console.log('add works')
})

app.get('/get',()=>{
    console.log("getting all data")
});

app.put( '/update',()=>{ 
    console.log('updating the database');
});

app.delete("/delete", () => { 
    console.log("Deleting from Database");  
}); 



app.listen(3000, () => {
    console.log('server work')
}); // http://127.0.0.1:3000/