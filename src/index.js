const messages = [
  "oscar",
  "carlos",
  "lala",
  "marcerlo",
  "aghata",
  "ramona",
  "richard",
  "laura",
  "luz",
  "javier",
  "ana"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];

  console.log(message);
}

module.exports = { randomMsg };