//Question bank
var questionBank= [
    {
        question : 'ما هي السورة الملقبة بعروس القرآن ؟',
        option : ['سورة يس','سورة الفاتحة','سورة الرحمن','سورة البقرة'],
        answer : 'سورة الرحمن'
    },
    {
        question : ' متى تم خَلق سيدنا آدم عليه السلام ؟',
        option : ['يوم الاحد','يوم الجمعة','يوم الاثنين','يوم الاربعاء'],
        answer : 'يوم الجمعة'
    },
    {
        question : ' كم كان عمر النبي صلى الله عليه وسلم عندما بعث ؟',
        option : ['40 سنة','20 سنة','30 سنة','50 سنة'],
        answer : '40 سنة'
    },
    {
        question : 'كم عدد أولي العزم من الرسل ؟',
        option : ['ستة',' أربعة','سبعة','خمسة'],
        answer : 'خمسة'
    },
    {
        question : 'في أي عام فرض رمضان على المسلمين ؟',
        option : ['في العام الثاني للهجرة','في العام الثالث للهجرة','في العام الاول للهجرة','في العام الخامس للهجرة'],
        answer : 'في العام الثاني للهجرة'
    },
    {
        question : 'ما هي السورة التي كانت السبب في إسلام عمر بن الخطاب رضي الله عنه ؟',
        option : ['سوره البقره','سوره يس','سوره التوبه','سوره طه'],
        answer : 'سوره طه'
    },
    {
        question : 'كم هي المدَّة التي استغرقها نزول القرآن الكريم ؟',
        option : ['25 سنة','23 سنة','26 سنة','27 سنة'],
        answer : '23 سنة'
    },
    {
        question : 'كم حجة أدى النبي صلى الله عليه وسلم ؟',
        option : ['مرتين','4 مرات','3 مرات','مره'],
        answer : 'مره'
    },
    {
        question : 'كم عمرة أدى النبي صلى الله عليه وسلم ؟',
        option : ['4 عمرات','عمرتين','5 عمرات','عمره واحده'],
        answer : '4 عمرات'
    },
    {
        question : 'كم عدد السجدات في القرآن الكريم ؟',
        option : ['15 سجدة','11 سجدة','14 سجدة','16 سجدة'],
        answer : '14 سجدة'
    },
    {
        question : 'من هو أبو الأنبياء ؟',
        option : ['سيدنا إبراهيم','سيدنا نوح','سيدنا أدم','سيدنا يوسف'],
        answer : 'سيدنا إبراهيم'
    },
    {
        question : 'كم عدد السنوات التي صام فيها رسول الله شهر رمضان المبارك ؟',
        option : ['7 سنوات','8 سنوات','10 سنوات','9 سنوات'],
        answer : '9 سنوات'
    },
    {
        question : 'ما هي السورة التي لم تبدأ بـ بسم الله الرحمن الرحيم ؟',
        option : ['سورة البقرة','سورة التوبة','سورة يس','سورة الكهف'],
        answer : 'سورة التوبة'
    },
    {
        question : 'متي قام سيدنا عثمان بن عفان بتجميع القرأن الكريم ؟',
        option : ['في الرابع والعشرون هجريا','في السادس والعشلاون هجريا','في الخامس والعشرون هجريا','في الثالث والعشرون هجريا'],
        answer : 'في الخامس والعشرون هجريا'
    },
    {
        question : 'ما هي أقصر سورة في كتاب الله العزيز ؟',
        option : ['سورة الاخلاص','سورة العصر','سورة الناس','سورة الكوثر'],
        answer : 'سورة الكوثر'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'rgb(79 226 61)';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}

displayQuestion();