import * as stack from './stack.js';

window.onload = function () {
    console.log("done");

    var pop = document.getElementById('pop');
    var push = document.getElementById('push');
    var peek = document.getElementById('peek');
    var display = document.getElementById('top_of_stack');

    pop.addEventListener("click", function() {
        var text = "Tog bort " + stack.pop();
        alert(text);
        display.innerHTML = stack.peek();
    });

    push.addEventListener("click", function() {
        var x = prompt("Vad ska vi lägga på stacken?");
        stack.push(x);
        display.innerHTML = x;
    });

    peek.addEventListener("click", function() {
        // If-sats för att skriva ut "Stacken är tom.." om inget pushats
        // när man klickar på "Vad finns överst på stacken?"
        // (Detta används enbart för testet)
        if (stack.peek() === undefined) {
          display.innerHTML = "Stacken är tom.."
        } else {
          display.innerHTML = stack.peek();
      }
    });
};
