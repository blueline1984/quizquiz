export function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export function chageTimer(duration) {
  let seconds = Math.floor(duration % 60);
  let minutes = Math.floor((duration % 3600) / 60);
  let hours = Math.floor(duration / 3600);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}
