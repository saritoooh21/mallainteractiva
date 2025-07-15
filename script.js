const materiasPorSemestre = [
  {
    semestre: "I",
    materias: [
      { nombre: "Gestión básica de la información", creditos: 3 },
      { nombre: "CEPLEC I", creditos: 2 },
      { nombre: "Precálculo", creditos: 3 },
      { nombre: "Lógica matemática", creditos: 2 },
      { nombre: "Introducción a la ingeniería", creditos: 1 },
      { nombre: "Proyecto de vida", creditos: 2 },
      { nombre: "Programación básica", creditos: 2 },
    ]
  },
  {
    semestre: "II",
    materias: [
      { nombre: "Inglés I", creditos: 3 },
      { nombre: "CEPLEC II", creditos: 2 },
      { nombre: "Cálculo diferencial", creditos: 3 },
      { nombre: "Álgebra lineal", creditos: 2 },
      { nombre: "Metodología de la investigación", creditos: 2 },
      { nombre: "Cátedra Minuto de Dios", creditos: 2 },
      { nombre: "Programación orientada a objetos", creditos: 3 },
    ]
  },
  {
    semestre: "III",
    materias: [
      { nombre: "Inglés II", creditos: 3 },
      { nombre: "Cálculo integral", creditos: 3 },
      { nombre: "Física mecánica", creditos: 3 },
      { nombre: "Emprendimiento", creditos: 2 },
      { nombre: "Estructura de datos", creditos: 3 },
      { nombre: "Sistemas operativos", creditos: 3 },
    ]
  },
  {
    semestre: "IV",
    materias: [
      { nombre: "Inglés III", creditos: 3 },
      { nombre: "Física eléctrica", creditos: 3 },
      { nombre: "Desarrollo social contemporáneo", creditos: 2 },
      { nombre: "Redes de computadores", creditos: 3 },
      { nombre: "Bases de datos", creditos: 3 },
      { nombre: "Electiva CPC", creditos: 2 },
    ]
  },
  {
    semestre: "V",
    materias: [
      { nombre: "Probabilidad y estadística", creditos: 2 },
      { nombre: "Práctica en responsabilidad social", creditos: 3 },
      { nombre: "Programación web", creditos: 3 },
      { nombre: "Ingeniería de software", creditos: 3 },
      { nombre: "Interconectividad", creditos: 3 },
      { nombre: "Sistemas transaccionales", creditos: 3 },
    ]
  },
  {
    semestre: "VI",
    materias: [
      { nombre: "Ecuaciones diferenciales", creditos: 2 },
      { nombre: "Electiva CMD: Ingenieros sin fronteras", creditos: 3 },
      { nombre: "Desarrollo basado en plataformas", creditos: 2 },
      { nombre: "Diseño de algoritmos", creditos: 2 },
      { nombre: "Sistemas distribuidos", creditos: 3 },
      { nombre: "Arquitectura de datos", creditos: 3 },
      { nombre: "Electiva CPC", creditos: 2 },
    ]
  },
  {
    semestre: "VII",
    materias: [
      { nombre: "Matemática discreta", creditos: 2 },
      { nombre: "Ética profesional", creditos: 2 },
      { nombre: "Electiva CMD", creditos: 2 },
      { nombre: "Arquitectura de software", creditos: 3 },
      { nombre: "Estructura de internet, servicios y servidores", creditos: 3 },
      { nombre: "Plan de negocios", creditos: 2 },
      { nombre: "Bases de datos masivas", creditos: 3 },
    ]
  },
  {
    semestre: "VIII",
    materias: [
      { nombre: "Métodos numéricos", creditos: 2 },
      { nombre: "Electiva CMD", creditos: 2 },
      { nombre: "Electiva CP", creditos: 2 },
      { nombre: "Seguridad de la información", creditos: 2 },
      { nombre: "Ingeniería económica", creditos: 2 },
      { nombre: "Minería de datos", creditos: 3 },
      { nombre: "Electiva CPC", creditos: 3 },
    ]
  },
  {
    semestre: "IX",
    materias: [
      { nombre: "Seminario de investigación en ingeniería", creditos: 1 },
      { nombre: "Electiva CMD", creditos: 2 },
      { nombre: "Calidad y gestión de proyectos informáticos", creditos: 2 },
      { nombre: "Gestión de infraestructura", creditos: 3 },
      { nombre: "Electiva CPC", creditos: 3 },
      { nombre: "Práctica profesional", creditos: 6 },
    ]
  },
  {
    semestre: "X",
    materias: [
      { nombre: "Electiva CMD: Ingeniería y desarrollo regional", creditos: 2 },
      { nombre: "Electiva CP", creditos: 2 },
      { nombre: "Electiva CP", creditos: 2 },
      { nombre: "Electiva CPC", creditos: 3 },
      { nombre: "Opción de grado", creditos: 5 },
    ]
  }
];

const contenedor = document.getElementById("malla");

materiasPorSemestre.forEach((sem) => {
  const div = document.createElement("div");
  div.className = "semestre";
  div.innerHTML = `<h2>Semestre ${sem.semestre}</h2>`;

  sem.materias.forEach(materia => {
    const m = document.createElement("div");
    m.className = "materia";

    m.innerHTML = `
      <span class="nombre">${materia.nombre}</span>
      <span class="creditos">${materia.creditos} cr</span>
    `;

    m.addEventListener("click", () => {
      m.classList.toggle("completada");
    });

    div.appendChild(m);
  });

  contenedor.appendChild(div);
});
