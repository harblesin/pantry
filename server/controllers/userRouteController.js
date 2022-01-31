const db = require("../../config/mysql");
const bcrypt = require("bcrypt");

const login = (req, res) => {

    let { userName, password } = req.query;


    console.log(req.query)


    // console.log(db)

    db.query("SELECT id, name, password FROM user WHERE name = ?", [userName], (err, result) => {

        console.log(err);


        if (err) {
            res.json(err);
        } else {
            bcrypt.compare(password, result[0].password, (err, result) => {
                if (result) {
                    res.json("This is the right password")
                } else {
                    res.json("The password is wrong. ")
                }
            })
        }

    })
}


module.exports = {
    login
}