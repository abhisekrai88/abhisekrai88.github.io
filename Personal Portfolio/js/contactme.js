$(document).ready(function(){

    if($('.character-counter').length > 0){
      var maximumCharacters = 50;
      
      $('textarea').keyup(function(){
        var $this = $(this);
        var $parentElement = $this.parent();
        var $characterCounter = $parentElement.find('.character-counter');
        var $charactersRemaining = $parentElement.find('.characters-remaining');
        
        var typedText = $this.val();
        var textLength = typedText.length;
        var charactersRemaining = maximumCharacters - textLength; 
        
        // chop the text to the desired length
        if(charactersRemaining <= 0){
          $this.val(typedText.substr(0, maximumCharacters));
          charactersRemaining = 0;
          textLength = maximumCharacters;
        }      
        if($characterCounter.length){
          $characterCounter.text(textLength);
        }
        if($charactersRemaining.length){
          $charactersRemaining.text(charactersRemaining);
        }
      });
    }
  
  });
  