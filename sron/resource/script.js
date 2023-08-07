function generate_exam() {
  var questions = [
    {
      question: "太阳系有几个行星",
      score: 2
    },
    {
      question: "天然卫星是什么",
      score: 4
    },
    {
      question: "为什么水星最高温和最低温差距这么大？",
      score: 4
    },
    {
      question: "在夜空中最亮的恒星是",
      score: 3
    },
    {
      question: "请排列以下星等数值，来说明哪个更亮，哪个更暗，哪个在中间:-2,1.9,1.86,9.3,-22.88",
      score: 5
    },
    {
      question: "我们所在的星系为",
      score: 2
    },
    {
      question: "在太空中开一枪会咋样，为什么(假如子弹能发射出去)",
      score: 6
    },
    {
      question: "为什么在太空听不到声音",
      score: 4
    },
    {
      question: "请说出地球大气主要成分",
      score: 3
    },
    {
      question: "目前距离地球最远的航天器为",
      score: 2
    },
    {
      question: "美国国家航天局缩写为",
      score: 2
    },
    {
      question: "请简要说明日全食发生的原理",
      score: 6
    }
  ];

  var exam = document.getElementById('exam');
  exam.innerHTML = ''; // 清空内容

  // 随机排序题目
  questions.sort(function() {
    return 0.5 - Math.random();
  });

  var totalScore = 0;
  var passingScore = 0;
  //var fullScore = 0;

  for (var i = 0; i < 12; i++) {//生成12道题目
    var questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    var questionText = document.createElement('p');
    questionText.textContent = '题目 ' + (i + 1) + ': ' + questions[i].question + '(' + questions[i].score + '分)';
    var scoreText = document.createElement('span');
    scoreText.className = 'score';
    questionDiv.appendChild(questionText);
    questionDiv.appendChild(scoreText);
    exam.appendChild(questionDiv);
	totalScore += questions[i].score;//计算总分
}
        //fullScore += questions[i].score; // Assuming each question has a maximum score of 10.
  passingScore += totalScore * 0.7;
	//显示分数等信息
  var resultDiv = document.createElement('div');
  resultDiv.className = 'result';
  var passingRate = (passingScore / totalScore * 100).toFixed(1);
  var resultText = document.createElement('p');
  resultText.textContent = '通过分：' + passingScore + '分'+
                           ' 满分：' + totalScore + '分';
  resultDiv.appendChild(resultText);
  exam.appendChild(resultDiv);
}