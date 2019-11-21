const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = function (app) {
    app.post("/api/submit", function (req, res) {
        let formData = req.body;
        console.log(formData);
        // res.status(200).send(formData);
        //variable for new user id. begin new row insertion for friends table
        let newUId
        friends.create({
            name: formData.name,
            photo: formData.photo
        }).then(function (friends) {
            if (friends) {
                //   res.send(friends);
                //new user id stored
                newUId = friends.id;
            } else {
                res.status(400).send('error inserting');
            }
            //begin row inseration of score (question answers) table
        }).then(function () {
            score.create({
                id: newUId,
                q1: formData.q1,
                q2: formData.q2,
                q3: formData.q3,
                q4: formData.q4,
                q5: formData.q5,
                q6: formData.q6,
                q7: formData.q7,
                q8: formData.q8,
                q9: formData.q9,
                q10: formData.q10,
            }).then(function (score) {
                if (score) {
                    // console.log(formData);
                } else {
                    res.status(400).send('error inserting');
                };
            }).then(function () {
                score.findAll({
                    /*     where: {
                            id: {
                                [Op.ne]: newUId
                            }
                        } */
                }).then(function (data) {
                    console.log("all data");
                    //let scoreData = data;
                    return data;
                }).then(function (data) {
                    score.findAll({
                        where: {
                            id: newUId
                        }
                    }).then(function (newuser) {
                        console.log(newuser);
                        console.log(data);
                        return allData = { data, newuser };
                    }).then(function (allData) {



                        /*  friends row looping
             data = query response array
             uArray = current user comparison
             c = friends id */
                        let data = allData.data;
                        let newuser = allData.newuser;
                        console.log("data");
                        console.log(data);
                        console.log("newUId");
                        console.log(newUId);
                        let resultArray = [];
                        let friendsArray = [[], []];
                        for (let c = 0; c < data.length; c++) {
                            console.log("data index " + c);

                            //answers looping
                            for (let i = 1; i < 11; i++) {
                                // console.log("compare");
                                //  console.log(Object.entries(data[41])[0][1]);
                                //  if (!Object.entries(data[c])[0][1]) {
                                if (1 == 1) {
                                    if (!resultArray[i] && resultArray[i] !== 0) {

                                        resultArray.push(Math.abs(Object.entries(data[c])[i][1] - Object.entries(newuser[0])[i][1]));
                                        console.log("pusing");
                                        console.log("push index " + i);
                                        console.log(resultArray);
                                    } else {
                                        resultArray[i] = (Math.abs(Object.entries(data[c])[i][1] - Object.entries(newuser[0])[i][1]));
                                        console.log("replacing");
                                        console.log("replace index " + i);
                                        console.log(resultArray);
                                    }
                                }
                            }
                            //friend identifying index value
                            let uId = Object.entries(data[c])[0][1];
                            //reduce funtion for summing results array
                            const sum = function (accumulator, currentValue) { return accumulator + currentValue };
                            //summing the results array [uID , comparison value]
                            friendsArray[0].push(uId);
                            friendsArray[1].push(resultArray.reduce(sum, 1));
                            console.log(friendsArray);
                            res.end();
                        }

                    });

                });
            });

        });
    });
}