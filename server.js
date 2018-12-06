const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const exphbs = require('express-handlebars');
const port = process.env.PORT || 3000;
var fs = require('fs'); /* Put it where other modules included */

app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }));
//var quizData = require('./quizData');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//app.use(bodyParser);
app.use(express.static('public'));

app.get('/teacher-hub', function(req, res) {
	res.status(200).render('teacherHub', {});

});

app.get('/student-hub', function(req, res) {
	res.status(200).render('studentHub', {});

});


app.get('/results', function(req, res) {
    
    // load results file.
    
    var data = JSON.parse(fs.readFileSync('./resultData.json', 'utf8'));
    
	res.status(200).render('results', data);

});

app.get('/quizData', function(req, res) {
	res.status(200).render('studentHub', {});

});

app.get('/quizData.json', (req, res) => {
    //var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8'));

    console.log("Requested quizData.json");
    res.sendFile(path.join(__dirname, 'quizData.json'));
});


app.post('/quizzes/postResponse', function (req, res) {
    console.log("Requested /quizzes/postResponse");
    //var actual_JSON = JSON.parse(req.body);
    console.log(req.body.name);
    console.log("== req.body:", req.body);
    var name = req.body.name;
    var id = req.body.id;
    var answerIndexes = req.body.answerIndexes;
    //var name = actual_JSON["name"];
    //var id = actual_JSON["id"];
    //var answerIndexes = actual_JSON["answerIndexes"];
    //var name = req.params.name.toLowerCase();
    //var id = req.params.id;
    //var answerIndexes = req.params.answerIndexes;
    var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8'));
    var ourQuizData = data[id];
    if (ourQuizData) {
        // time to go through each question and tally up score
        var numQuestions = ourQuizData["quiz-array"].length
        console.log(numQuestions);
        
        var totalCorrect = 0;
        for(var i = 0; i < numQuestions; i++){
            var correctIndex = ourQuizData["quiz-array"][i]["correctAnswerIndex"];
            if(correctIndex == answerIndexes[i]){
                totalCorrect++;
            }
        }
        var percentage = (totalCorrect/numQuestions)*100;
        
        var newResultData = {"results": {"name": name, "result": percentage}};
        
        fs.writeFileSync('./resultData.json', JSON.stringify(newResultData, null, 2), 'utf8');  

        res.status(200).send("Success");
        
    }
});

app.post('/quizzes/quizSave', function (req, res) {
    console.log("Requested /quizzes/quizSave");
    var id = req.body.id;
    console.log("id:" + id);
    var globalQuestionList = req.body.globalQuestionList;
    console.log("== req.body:", req.body);

    var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8'));
    //data = data["quiz-array"];
    var ourData = data[id];
    if(ourData){ 
        data[id]["quiz-array"] = globalQuestionList;
    }
    else
    {
    data[id] = {"quiz-array": globalQuestionList};
        //data.push(id: {"quiz-array": []});
        //data[id]["quiz-array"] = globalQuestionList;
        //data.push(globalQuestionList);
    }
    
    
    
    fs.writeFileSync('./quizData.json', JSON.stringify(data, null, 2), 'utf8');  
    
    res.status(200).send("Success");
});


app.get('/quizzes/id/:id/name/:name', function (req, res, next) {
    console.log("&&&&= " + req.params);
    var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8'));
	var quizId = req.params.id;
    var quizName = req.params.name;
    
	if (data[quizId]) {
		res.render('quizzes', {"data": data[quizId], "id": quizId, "name": quizName});
	} else {
		next();
	}
});

app.get('/teacher-hub/create-quiz/:id', function(req, res, next) {
	res.render('quizCreator.handlebars');
});


app.get('/', function(req, res) {
	res.status(200).render('homePage', {});
});


app.get('*', function(req, res) {	
	res.status(404).render('404', {

	});
});

app.listen(port, function() {
	console.log("Server is on port", port);
});
