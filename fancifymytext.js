document.addEventListener("DOMContentLoaded", function() {
    // Make text bigger when "Bigger!" button is clicked
    document.getElementById("biggerButton").onclick = function() {
        document.getElementById("userText").style.fontSize = "24pt";
    };

    // Apply fancy style
    document.getElementById("fancyShmancy").onchange = function() {
        if (document.getElementById("fancyShmancy").checked) {
            var textArea = document.getElementById("userText");
            textArea.style.fontWeight = "bold";
            textArea.style.color = "blue";
            textArea.style.textDecoration = "underline";
        }
    };

    // Remove fancy style and revert to normal
    document.getElementById("boringBetty").onchange = function() {
        if (document.getElementById("boringBetty").checked) {
            var textArea = document.getElementById("userText");
            textArea.style.fontWeight = "normal";
            textArea.style.color = "black";
            textArea.style.textDecoration = "none";
        }
    };

    // "Moo" button functionality
    document.getElementById("mooButton").onclick = function() {
        var textArea = document.getElementById("userText");
        var text = textArea.value.toUpperCase();
        var sentences = text.split(".");
        for (var i = 0; i < sentences.length; i++) {
            if (sentences[i].trim().length > 0) {
                sentences[i] = sentences[i].trim() + "-MOO";
            }
        }
        textArea.value = sentences.join(". ").trim();
    };
});
