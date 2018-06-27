expect(shout('hello')).toEqual('HELLO')
expect(whisper("HELLO")).toEqual("hello")
function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function sayHiToGrandma() {
  console.log("Hi, Grandma!")
  return `I can't hear you!`
}
