const connection = require("../config/connection.js");
const orm = {

  selectAll: function (tableName, cb) {
    query = `SELECT * FROM ${tableName};`;
    connection.query(query, (err, result) => {
      if (err) throw err;
      cb(result);
    })
    // console.log("hey selecting everything");
  }

  

  // insertOne: function (tableName, cols, vals, cb) {
  //   query = `INSERT INTO ${tableName}`;
  //   queryString += " (";
  //   queryString += cols.toString();
  //   queryString += ") ";
  //   queryString += "VALUES (";
  //   queryString += printQuestionMarks(vals.length);
  //   queryString += ") ";

  //   console.log(queryString);
  //   connection.query(queryString, vals, function (err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   });


  // }
}

// // An example of objColVals would be {name: panther, sleepy: true}
// updateOne: function(table, objColVals, condition, cb) {
//   var queryString = "UPDATE " + table;

//   queryString += " SET ";
//   queryString += objToSql(objColVals);
//   queryString += " WHERE ";
//   queryString += condition;

//   console.log(queryString);
//   connection.query(queryString, function (err, result) {
//     if (err) {
//       throw err;
//     }

//     cb(result);
//   });
//  }


module.exports = orm;