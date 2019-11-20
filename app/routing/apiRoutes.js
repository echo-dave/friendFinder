module.exports = function (app) {
    app.post("/api/submit", function (req, res) {
        let formData = req.body;
        console.log(formData);
        // res.status(200).send(formData);
        let newID
        friends.create({
            name: formData.name,
            photo: formData.photo
        }).then(function (friends) {
            if (friends) {
             //   res.send(friends);
                newID = friends.id;
            } else {
                res.status(400).send('error inserting');
            }
        }).then(function () {
            score.create({
                id: newID,
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
}