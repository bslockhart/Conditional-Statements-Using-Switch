// Let's choose a direction

// Instruct to choose
alert("Choose a direction.");

var chooseNow = function () {
  // Ask which way
  var askMe = prompt("Will you go left or right?");

  // Check direction
  switch (askMe) {
    case "LEFT":
    case "left":
      alert("You have choosen left.");
      break;

    case "RIGHT":
    case "right":
      alert("You have choosen right.");
      break;

    default:
      var wrongDir = confirm("You must choose only left or right. Choose again?");
      switch (wrongDir) {
        case true:
          chooseNow();
        default:
          alert("You stay in place");
          break;
      }
  }
};

chooseNow();
