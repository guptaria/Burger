var orm=require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.

var burgerInput={

    selectAll:function(cb){
        orm.selectAll("burgers",(res)=>{
             cb(res);
        })

    }

    // insertOne:function(cb){
    //     orm.insertOne("")
    // }

}
















module.exports=burgerInput;


