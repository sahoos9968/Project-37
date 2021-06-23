class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    for (var plr in allContestants){
      var correctAns = 2;
      if (correctAns === allContestants{plr}.answer){
        fill("green")
      }
      else{
        fill("red")
      }
    }
    //write code to show a heading for showing the result of Quiz
    text(allContestants{plr}: +""+allContestants{plr}.answer,200,50)

    //call getContestantInfo( ) here

    getContestantInfo();
    
    if (allContestants !== undefined){
      fill("blue");
      textSize("25");
      text("-- NOTE: The players with the right answer are in green --",130,230)
    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
