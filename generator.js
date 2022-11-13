const vowels = ['a', 'e', 'i', 'o', 'u'];
const plots = ["friends to lovers", "enemies to lovers", "rivals to lovers", "misunderstandings", "getting back together", "meeting years later", "strangers to lovers"];
const personalities = ["sun and moon", "opposites attract", "old married couple", "loud & listens quietly", "introvert & extrovert", "overprotective"];
const genres = ["fluff", "angst", "hurt/comfort", "lighthearted", "melancholy", "bittersweet"];
const aus = ["roommates", "neighbours", "soulmates", "high school", "college", "mafia", "occupations", "canon"];
const occupations = ["tattoo artist", "florist", "coffee shop", "college student", "actor", "singer", "office worker"];

function chooseRandomFromArray(array) {
    var index = array[Math.floor(Math.random() * (array.length - 1))];
    return index;
}

function identifier(string) {
    if (typeof string == "string") {
        var letter = string.slice(0, 1);
        if (vowels.includes(letter)) {
            return "an";
        } else {
            return "a";
        }
    }
}

function toTitle(string) {
    if (typeof string == "string") {
        return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
    }
}

function generateIdeas() {
    var au = chooseRandomFromArray(aus);
    if (au == "occupations") {
        au = `${chooseRandomFromArray(occupations)} & ${chooseRandomFromArray(occupations)}`;
    }
    var plot = chooseRandomFromArray(plots);
    var personality = chooseRandomFromArray(personalities);
    var genre = chooseRandomFromArray(genres);

    var sentence = `${toTitle(identifier(plot))} ${plot} story about ${identifier(personality)} ${personality} couple. The story is ${genre} and takes place in ${identifier(au)} ${au} setting.`;
    document.getElementById("sentence").innerHTML = sentence;
}
