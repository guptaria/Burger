var orm=require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.

var burgerInput={

    selectAll:function(cb){
        orm.selectAll("burgers",(res)=>{
             cb(res);
        })

    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
      updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      },

}



module.exports=burgerInput;


