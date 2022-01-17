const {Sequelize}=require('sequelize');
const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:"./sqlite/students.db"
})
sequelize.sync().then(()=>{
    console.log('All models were synchronized');
})
module.exports=sequelize;