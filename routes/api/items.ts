import express from "express";
const router = express.Router()
import Item from "../../src/model/Item";



router.get('/', (req,res) =>{

    Item.find()
         .sort({ date:-1 })
         .then(items => res.json(items))
});


router.post ('/', (req, res) => {
    const newItem = new Item ({
      _id : req.body._id,
      name : req.body.name,
  });
  newItem.save()
        .then( (item: any) => res.json(item) )
 });


 router.delete('/:_id',(req, res) => {
    console.log("in")
    console.log(req.params._id)
    Item.findById(req.params._id)
     .then( 
         item => item.remove(). then( () => res.json( {success:true} ) )  )
     .catch( err => res.status(404).json( {success:false} )  )
});



export default router;