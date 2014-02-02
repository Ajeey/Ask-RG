$(document).ready(function(){
  
  var answers = ["I have made it absolutely crystal clear right in front of the press what I think about this issue.", 
  "One asks questions that don't actually reach to the heart of the issue. You are talking about India, we have had a 1 hour conversation here, you haven't asked me 1 question about how we are going to build this country, how we are going to take this country forward, you haven't asked me one question on how we are going to empower our people, you haven't asked me one question on what we are going to do for youngsters, you are not interested in that.",
  "The fundamental question this is, are we going to open up the system? Are we going to close the system? ",
  "The real issue here is participation of people in politics. It is bringing youngsters into the political system, it's opening out the political system. That's where nobody wants to talk."
  ]



  $('#ask').click(function(e){
    e.preventDefault();
    message = answers[Math.floor(Math.random() * answers.length)];
    $('#answer').show().html(message);
  });

    
});