// When you recently visited your little nephew, he told you a sad story: there's a bully at school who steals his lunch every day, and locks it away in his locker. He also leaves a note with a strange, coded message. Your nephew gave you one of the notes in hope that you can decipher it for him. And you did: it looks like all the digits in it are replaced with letters and vice versa. Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.
// The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.

function solution(note) {
  return note.replace(/\d|[a-j]/g, (char) => {
    if (char >= "a" && char <= "j") {
      return String.fromCharCode(
        char.charCodeAt(0) - "a".charCodeAt(0) + "0".charCodeAt(0)
      );
    };

    return String.fromCharCode(
      char.charCodeAt(0) - "0".charCodeAt(0) + "a".charCodeAt(0)
    );
  });
}
