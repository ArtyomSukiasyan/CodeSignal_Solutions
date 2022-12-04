// During your most recent trip to Codelandia you decided to buy a brand new CodePlayer, a music player that (allegedly) can work with any possible media format. As it turns out, this isn't true: the player can't read lyrics written in the LRC format. It can, however, read the SubRip format, so now you want to translate all the lyrics you have from LRC to SubRip.
// Since you are a pro programmer (no noob would ever get to Codelandia!), you're happy to implement a function that, given lrcLyrics and songLength, returns the lyrics in SubRip format.

function solution(lrcLyrics, songLength) {
  const size = lrcLyrics.length;
  const r = [];

  for (let i = 0; i < size; ++i) {
    const line = lrcLyrics[i];
    const a = line.substring(1, 9);
    let b;
    let isSongLength = false;

    if (i < size - 1) {
      b = lrcLyrics[i + 1].substring(1, 9);
    } else {
      b = songLength;
      isSongLength = true;
    }

    r.push(`${i + 1}`);
    const x = parseTime(a);
    const y = parseTime(b, isSongLength);
    r.push(`${x} --> ${y}`);
    r.push(line.substring(11));

    if (i < size - 1) {
      r.push("");
    }
  }

  return r;
}

function parseTime(t, isSongLength) {
  const a = Number(t.substring(0, 2));
  const b = t.substring(3, 5);
  const c = t.substring(6);

  let h = isSongLength ? `${a}` : `${Math.floor(a / 60)}`;
  let m = isSongLength ? `${b}` : `${a % 60}`;
  const s = isSongLength ? c : b;
  const x = isSongLength ? "000" : c + "0";

  if (h.length === 1) {
    h = "0" + h;
  }

  if (m.length == 1) {
    m = "0" + m;
  }

  return `${h}:${m}:${s},${x}`;
}
