document.addEventListener('keypress', (event) => {
    var name = event.key;
    var code = event.keyCode;

    if (code == 32) {
        name = 'Spacebar';
    }

    document.getElementById("key").innerHTML = name;
    document.getElementById("keycode").innerHTML = code;
  }, false);