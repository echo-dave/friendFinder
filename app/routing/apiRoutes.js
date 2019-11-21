module.exports = function (app) {
    app.post("/api/submit", function (req, res) {
        let formData = req.body;
        console.log(formData);
        // res.status(200).send(formData);
        let newUId
        friends.create({
            name: formData.name,
            photo: formData.photo
        }).then(function (friends) {
            if (friends) {
             //   res.send(friends);
             //new user id
                newUId = friends.id;
            } else {
                res.status(400).send('error inserting');
            }
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
            }).then(function(score){
                if (score) {
                    res.send(formData);
                } else {
                    res.status(400).send('error inserting');
                };
            });
        });
    });
app.get("/api/data", function(req,res){
    score.findAll().then(function(data){
        console.log("Scores");
        console.log(data);
        res.end();
    });
});

};

// 



//for in objects
function absDiff (uArray, cArray){
    resultArray[i] = abs(uArray[i] - cArray[i]);
    
} ;



/*  friends row looping
 data = query response array
 uArray = current user comparison
 c = friends id */
 let resultArray = [];
 let friendsArray = [[],[]];
for (let c = 0; c < data.length; c++) {
    console.log("data index " + c);
    //answers looping
    for (let i = 1; i < 11; i++) {
      if (!resultArray[i] && resultArray[i] !== 0 ) {
        resultArray.push(Math.abs(Object.entries(data[c])[i][1] - Object.entries(uArray[newUId])[i][1]));
        console.log("pusing");
        console.log("push index " + i);
        console.log(resultArray);
      } else {
        resultArray[i] = (Math.abs(Object.entries(data[c])[i][1] - Object.entries(uArray[newUId])[i][1]));
        console.log("replacing");
        console.log("replace index " + i);
        console.log(resultArray);
      }
    }
    //friend identifying index value
    let uId = Object.entries(data[c])[0][1];
    //reduce funtion for summing results array
    const sum = function(accumulator, currentValue){return accumulator + currentValue};
    //summing the results array [uID , comparison value]
    friendsArray[0].push(uId);
    friendsArray[1].push(resultArray.reduce(sum));
  }