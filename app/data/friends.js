//import form to MySQL friends / sore
return friends.create ({
    name: FormData.name,
    photo: FormData.photo
}).then(function (friends){
    if (friends) {
        res.send(friends);
    } else {
        res.status(400).send('error inserting');
    }
});