const Tournament=require('../model/tournament')

const getAllTournamnets = async (req, res, next) => {
  let tournaments;
  try {
    tournaments = await Tournament.find();
  } catch (error) {
    console.log(error);
  }
  if (!tournaments) {
    return res.status(404).json({ message: 'No tournamanets found' });
  }
  return res.status(200).json({ tournaments })
}

const addTournamnets = async (req, res, next) => {
  const tournament = new Tournament({
    name: req.body.name,
    image: req.body.image,
    start: req.body.start,
    end: req.body.end,
    list: req.body.list,
    status: req.body.status
  })
  try {
    const newTournament = await tournament.save()
    res.status(201).json(newTournament)
  } catch (error) {
    res.status(400).json({ message: 'Unable to Add' })
  }


};
const getById=async(req,res,next)=>{
  const id=req.params.id;
  let tournament;
  try {
    tournament=await Tournament.findById(id)
  } catch (error) {
    console.log(error)
  }
  if(!tournament){
    return res.status(500).json({message:'Tournamnet not Found'})
  }
  return res.status(200).json({tournament,message:"Tournament Found"})
}
const updateTournamnet=async(req,res,next)=>{
  let id=req.params.id;
  const {name,image,start,end,list,status}=req.body;
  let tournament;
  try {
    tournament=await Tournament.findByIdAndUpdate(id,{
      name,
      image,
      start,
      end,
      list,
      status
    })
    tournament=await tournament.save()
    
  } catch (error) {
    console.log(error)
    
  }
  if(!tournament){
   return res.status(500).json({message:"Tournamnet not updated"})
  }
  return res.status(200).json({message:"Tournamnet updated"})
}
const deleteTournament=async(req,res,next)=>{
  let id=req.params.id;
  let tournament;
  try {
    tournament=await Tournament.findByIdAndRemove(id)
    
  } catch (error) {
    console.log(error);
  }
  if(!tournament){
    return res.status(500).json({message:'Tournamnet not Found'})
  }
  return res.status(200).json({message:"Tournament Deleted"})
}

exports.getAllTournamnets = getAllTournamnets;
exports.addTournamnets = addTournamnets;
exports.updateTournamnet=updateTournamnet;
exports.deleteTournament=deleteTournament;
exports.getById=getById;