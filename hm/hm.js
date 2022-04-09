// start animation
$(document).ready(function(){
  $("#playButton").click(function(){
    $(".opening").fadeOut(750);
    $(".title").addClass('active');
    $(".wrapper").delay(1000).fadeIn(800);
  });
});

window.onload = function() {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories;           // Topics
  var chosenCategory;       // Selected Topic
  var getHint;              // Hint for the topic
  var word;                 // selected word
  var guess;                // Guess
  var geusses = [ ];         // Stored guesses
  var lives;                // Lives
  var counter;              // Correct guesses count
  var space;                // Number of letters in the word '_'

  // Get Elements
  var showLives = document.getElementById("lives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");

  // Alphabet UI
  var buttons = function() {
  myButtons = document.getElementById('buttons');
  letters = document.createElement('ul');

    for(var i=0;i<alphabet.length;i++) {
      letters.id='alphabet';
      list = document.createElement('li');
      list.id='letter';
      list.innerHTML=alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

  // Select Category
  var selectCat = function() {
    if(chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Category is Music";
    }
    else if(chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Category is Movies";
    }
    else if(chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Category is Cities";
    }
  }

  // Geusses ul
  result = function() {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for(var i=0;i<word.length;i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if(word[i] === '-') {
        guess.innerHTML = '-';
        space = 1;
      }
      else {
        guess.innerHTML = '_';
      }

        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
  }

  // Show lives
  comments = function() {
    showLives.innerHTML = "You have " + lives + " lives";
    if(lives<1){
      showLives.innerHTML = "Game Over";
    }
    for(var i=0;i<geusses.length;i++) {
      if(counter + space  === geusses.length) {
        showLives.innerHTML = "You win!";
      }
    }
  }

  // Animate man
  var animate = function() {
    var drawMe = lives;
    drawArray[drawMe]();
  }

  // Hangman
  canvas = function() {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  head = function() {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(140, 35, 10, 0, Math.PI*2, true);
    context.stroke();
  }

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
  }

  frame1 = function() {
		draw(50, 150, 200 ,150);
	};
	
	frame2 = function() {
		draw(60, 0, 60 ,170);
	};
	
	frame3 = function() {
		draw(50, 5, 150 ,5);
	};
	
	frame4 = function() {
		draw(140, 5, 140 ,25);
	};
	
	torso = function() {
		draw(140, 46, 140 ,80);
	};
	
	rightArm = function() {
		draw(140, 56, 180, 60);
	};
	
	leftArm = function() {
		draw(140, 56, 100 ,60);
	};
	
	rightLeg = function() {
		draw(140, 80, 180 ,110);
	};
	
	leftLeg = function() {
		draw(140, 80, 100 ,110);
	};

  drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

  // Onclick function
  check = function() {
    list.onclick = function() {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for(var i=0;i<word.length;i++) {
        if(word[i]===geuss) {
          geusses[i].innerHTML = geuss;
          counter+=1;
        }
      }
      var j = (word.indexOf(geuss));
      if(j===-1){
        lives-=1;
        comments();
        animate();
      }
      else{
        comments();
      }
    }
  }

  // Play
  play = function() {
    categories = [
      ["despacito", "bohemian-rhapsody", "one-dance", "fly-me-to-the-moon", "shallow", "sweet-caroline", "lost-stars", "shape-of-you"],
      ["gladiator", "jaws", "avengers", "spider-man", "shawshank-redemption", "the-godfather", "harry-potter", "finding-nemo"],
      ["jakarta", "budapest", "canberra", "lisbon", "madrid", "taipei", "seoul", "ottawa"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();

  // Hint
  getHint.onclick = function() {

    hints = [
      ["It is second most viewed video on Youtube", "A very famous song by Queen", "Drake's most streamed song on spotify", "First music to be played on the moon", 
      "From the movie 'A Star is born'", "England soccer fans sing this song", "From the movie 'Begin Again'", "Most streamed song on spotify"],
      ["Historical drama", "Giant great white shark", "A group of superheroes ", "Tom Holland, Tobey Maguire and Andrew Garfield played this character", 
      "Andy and Red are the main characters of this movie", "I'm gonna make him an offer he can't refuse.", "Based on a novel written JK Rowling", "Animated fish"],
      ["Capital city of the country with the largest number of Muslims", "Has the largest synagogue in Europe", "Capital of Australia", "Capital of Portugal", "Capital of Spain",
      "A famous building with 101 stories is located in this city", "Psy was born here", "Capital of the country who has a beaver as its emblem"]
    ];

    var catagoryIndex  = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: " + hints [catagoryIndex][hintIndex];
  };

  // Reset
    document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "Clue: -";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}