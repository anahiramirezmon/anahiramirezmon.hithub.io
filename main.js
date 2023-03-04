let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #d4776c;">Soy estudiante de Ingeniería Petrolera en la Universidad Nacional Autónoma de México.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
