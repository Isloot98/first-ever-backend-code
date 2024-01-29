import express from 'express';

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

app.get('/', (req, res) => {
    res.json({
        message: "Turns out I can't have multiple get requests? Or at least if I can, it's not as simple as just writing out the same request again below lol",
        anotherMessage: "Ohhhhhh!! I do need to use the express json thing but only in an actual response, not in a console log"
    });
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        message: "I'm getting the hang of it I think time to move on in the workshop",
        anotherMessage: "Ohhhhhh!! I do need to use the express json thing but only in an actual response, not in a console log",
        anotherMessageAgain: "wow these aren't console logs that's why I'm getting an error. I can't send two messages labelled the same thing I see I see. Interesting",
        moreMesage: "these seem to be objects also?"
    });
});
