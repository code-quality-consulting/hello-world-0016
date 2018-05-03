export function makeGreeting(name = "world", language = "English") {
    if (language === "Spanish") {
        return "¡Hola mundo!";
    }
    return "Hello" + " " + name + "!";
}
