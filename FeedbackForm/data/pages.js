const mongoCollections = require('../config/mongoCollections');
const feedbacks = mongoCollections.feedback;



async function create(name,email,rating,feedback)
{


let data=
{
    name:name,
    email:email,
    rating:rating,
    feedback:feedback

}


const feedbackcollection = await feedbacks();
const insertInfo = await feedbackcollection.insertOne(data);
}




module.exports=
{

create

}

