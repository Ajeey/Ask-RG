$(document).ready(function(){
  
  var answers = ["I have made it absolutely crystal clear right in front of the press what I think about this issue.", 
  "One asks questions that don't actually reach to the heart of the issue. You are talking about India, we have had a 1 hour conversation here, you haven't asked me 1 question about how we are going to build this country, how we are going to take this country forward, you haven't asked me one question on how we are going to empower our people, you haven't asked me one question on what we are going to do for youngsters, you are not interested in that.",
  "The fundamental question this is, are we going to open up the system? Are we going to close the system? ",
  "The real issue here is participation of people in politics. It is bringing youngsters into the political system, it's opening out the political system. That's where nobody wants to talk.",
  "To understand that question you have to understand a little bit about who Rahul Gandhi is and what Rahul Gandhi's circumstances have been and if you delve into that you will get an answer to the question of what Rahul Gandhi is scared off and what he is not scared off. The real question is what I am doing sitting here.",
  "I will answer the question and that will give you some insight into how Rahul Gandhi thinks. For that I will have to expand a little bit about my growing up, how I grew up and the circumstances in which I grew up. What I saw when I was a child ,was my father, who was a pilot, and because of circumstances was thrown into the political system and all I saw when was small after my grandmother died was my father in constant-constant combat with the system in India and then I saw him die actually.",
  "I look like an anomaly in the environment that I'm in. Maybe that's what you're saying and frankly in a lot of ways, I am an anomaly in the environment that I'm in",
  "The real thing is that it's a heart thing. It's a soul thing. Why are you here? I asked you that question, why am I sitting here? I'm sitting here because I feel with all my heart that we need to change the system here and not enough people are actually asking that question.",
  "The real issue here is participation of people in politics. It is bringing youngsters into the political system, it's opening out the political system. That's where nobody wants to talk.",
  "What I feel is that this country needs to look at the fundamental issues at hand, the fundamental political issue at hand is that our Political system is controlled by too few people",
  "What Rahul Gandhi wants to do, is Rahul Gandhi and millions of youngsters in this country want to change the way the system in this country works. What Rahul Gandhi wants to do is empower the women in this country, wants to unleash the power of these women, I mean we talk about being a superpower...",
  "On all subjects. One has to take care that one is not creating imbalances in the system. And that's something that one has to discuss.",
  "You're more than welcome to ask these questions. But let's also move the debate to a place where we're actually reaching towards fundamentals.",
  "Well, what if I ask you the same question?",
  "What Rahul Gandhi wants to do, is Rahul Gandhi and millions of youngsters in this country want to change the way the system in this country works. What Rahul Gandhi wants to do is empower the women in this country, wants to unleash the power of these women, I mean we talk about being a superpower.",
  "Again, and maybe the seventh time I want to repeat it to you. What are those deeper questions?",
  "Let me just go back and let me give you... Let me go further than that. The central question in all this is who chooses political candidates and how?",
  "But the real issue at hand here is empowering the women of this country, giving them true power. We talk about India being a superpower we can only be half a superpower if our women are not empowered. What I want to do is going forward is basically focus on three things. Focus on empowering our people, truly empowering our people, giving them democratic rights within the political party. I want youngsters who come in and really, really push democracy in the party. I want to empower them and I want to make India, together with everybody, taking everybody together I want to put India on the manufacturing map, I want to make this the centre of manufacturing in the world. I want to make this place at least as much as a manufacturing power as China.",
  "What I feel is that this country needs to look at the fundamental issues at hand, the fundamental political issue at hand is that our Political system is controlled by too few people.",
  "My response is that we have completely changed the paradigm with our rights based development model",
  "My response to that is that in the last 10 years, we gave the country the fastest economic growth its ever had.",
  "The real issue here is participation of people in politics. It is bringing youngsters into the political system, it's opening out the political system. That's where nobody wants to talk.",
  "I will answer the question and that will give you some insight into how Rahul Gandhi thinks. For that I will have to expand a little bit about my growing up, how I grew up and the circumstances in which I grew up. What I saw when I was a child ,was my father, who was a pilot, and because of circumstances was thrown into the political system and all I saw when was small after my grandmother died was my father in constant-constant combat with the system in India and then I saw him die actually.",
  "My response is that, we did more for opening up the system than any Govt before us.",
  "Let me just go back and let me give you... Let me go further than that. The central question in all this is who chooses political candidates and how?"
  ]



  $('#ask').click(function(e){
    e.preventDefault();

    if ( $('input').val() === '') {
      alert(" Ask a question, trying to fool me huh?");
    } else {
      message = answers[Math.floor(Math.random() * answers.length)];

      $('#loading').show();

      var timer = setInterval(getAnswer, 1500);

      function getAnswer() {
        $('#loading').hide();
        $('#ans').show();
        $('#answer').show().html(message);
        $('small').show();
      }
      
    }
  });

    
});