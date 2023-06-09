const { response } = require("express");
// const {app} = require('../app');

const { db } = require("../database/model");

const student_group = {
  group_one: [],
  group_two: [],
  group_three: [],
  group_four: [],
  group_five: [],
};

exports.getStudnet_info = async () => {
  for (let i = 1; i <= 5; i++) {
    db.query(
      "SELECT student_name FROM student WHERE student_group = ?",
      [i],
      (error, result) => {
        if (i === 1) {
          for (let data of result) {
            student_group.group_one.push(data.student_name);
          }
        } else if (i === 2) {
          for (let data of result) {
            student_group.group_two.push(data.student_name);
          }
        } else if (i === 3) {
          for (let data of result) {
            student_group.group_three.push(data.student_name);
          }
        } else if (i === 4) {
          for (let data of result) {
            student_group.group_four.push(data.student_name);
          }
        } else if (i === 5) {
          for (let data of result) {
            student_group.group_five.push(data.student_name);
          }
        }
      }
    );
  }
};

exports.checkUsers = (name, id) => {
  db.query(
    "SELECT * FROM student WHERE student_name = ? and student_id = ?",
    [name, id],
    (error, result) => {
      if (error) console.log(error);
      console.log(result);
      const r =
        result.length <= 0 ? response.status(400) : response.status(200);
      console.log(r.statusCode);

      return r.statusCode;
    }
  );
};

exports.checkStudentNum =  (student_num) => {
  return new Promise(async (resolve, reject) => {
   await db.query(
      "SELECT * FROM student WHERE ` id` = ?",
      [student_num],
      (error, result) => {
        if (error) console.log(error);
        resolve(result);
      }
    );
  });
};

exports.login = (id, student_num, password) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM student WHERE ` id` = ? and student_password = ?",
      [id, password],
      (error, result) => {
        if (error) console.log(error);

        if (result.length === 0) {
          resolve(400);
        } else {
          resolve(200);
        }
      }
    );
  });
};

exports.signUp =  (name, id, password, student_id) => {
  {
    return new Promise(async (resolve, reject) => {
     await db.query(
        "SELECT * FROM student WHERE student_id = ? and student_password is null",
        [student_id],
        (error, results) => {
          if (error) resolve(error);

          console.log(results);
          if (results[0].length <= 0) {
            resolve(401);
          } else {
            db.query(
              "UPDATE student SET `student_password` = ?, ` id` = ? WHERE (`student_id` = ?);",
              [password, id, student_id],
              (error, result) => {
                if (error) resolve(error);
              
                console.log(result.affectedRows);
                if(result.affectedRows != 0){
                  console.log('sucsses');
                  resolve(200);
                }else{
                  console.log('something is wrong');
                  resolve(500)
                }
              }
            );
          }
        }
      );
    });
  }
};

exports.clean_Classroom = (index) => {
  return new Promise((resolve, reject) => {
    if (index === 1) {
      resolve(student_group.group_one);
    } else if (index === 2) {
      resolve(student_group.group_two);
    } else if (index === 3) {
      resolve(student_group.group_three);
    } else if (index === 4) {
      resolve(student_group.group_four);
    } else if (index === 5) {
      resolve(student_group.group_five);
    }
  });
};
exports.sg = student_group;
