const vowels = ['a', 'e', 'i', 'o', 'u'];
const plots = ["friends to lovers", "enemies to lovers", "rivals to lovers", "misunderstandings", "getting back together", "meeting years later", "strangers to lovers", "breakup", "hanahaki", "unrequieted love"];
const personalities = ["sun and moon", "polar opposites", "always bickering", "loud & listens quietly", "introvert & extrovert", "overprotective", "idiots in love", "star-crossed lovers"];
const genres = ["fluff", "angst", "hurt/comfort", "lighthearted", "melancholy", "bittersweet", "angst with a happy ending", "crack"];
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
