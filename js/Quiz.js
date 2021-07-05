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
    
    if(buttonPressed(button)){
      input1.hide()
        input2.hide()
      
    }

    //write code to change the background color here
    backgroundImage=background('black')

    //write code to show a heading for showing the result of Quiz
    if(contestant.answer===2){
      fill('green')
      text(contestant.name+":"+contestant.answer,425,370)
    }else{
      fill('red')
      text(contestant.name+":"+contestant.answer,425,385)
    
    }
    

    

    //call getContestantInfo( ) here
    Constestant.getPlayerInfo()


    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){

    }

    //write code to add a note here
    text("Constestants who answered correct are shown in green",425,350)

    //write code to highlight contest who answered correctly
    
  }

}
