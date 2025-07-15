const materiasPorSemestre = [
  {
    semestre: "I",
    materias: [
      "Lógica matemática",
      "Programación básica",
      "Proyecto de vida",
      "Gestión básica de la información",
      "Precálculo",
      "Introducción a la ingeniería",
      "CEPLEC I"
    ]
  },
  {
    semestre: "II",
    materias: [
      "Inglés I",
      "CEPLEC II",
      "Cálculo diferencial",
      "Álgebra lineal",
      "Metodología de la investigación",
      "Cátedra Minuto de Dios",
      "Programación orientada a objetos"
    ]
  },
  {
    semestre: "III",
    materias: [
      "Inglés II",
      "Cálculo integral",
      "Física mecánica",
      "Emprendimiento",
      "Estructura de datos",
      "Sistemas operativos"
    ]
  },
  {
    semestre: "IV",
    materias: [
      "Inglés III",
      "Física eléctrica",
      "Desarrollo social contemporáneo",
      "Redes de computadores",
      "Bases de datos",
      "Electiva CPC"
    ]
  },
  {
    semestre: "V",
    materias: [
      "Probabilidad y estadística",
      "Práctica en responsabilidad social",
      "Programación web",
      "Ingeniería de software",
      "Interconectividad",
      "Sistemas transaccionales"
    ]
  },
  {
    semestre: "VI",
    materias: [
      "Ecuaciones diferenciales",
      "Electivas CMD Ingenieros sin fronteras",
      "Desarrollo basado en plataformas",
      "Diseño de algoritmos",
      "Sistemas distribuidos",
      "Arquitectura de datos",
      "Electiva CPC"
    ]
  },
  {
    semestre: "VII",
    materias: [
      "Matemática discreta",
      "Ética profesional",
      "Electiva CMD",
      "Arquitectura de software",
      "Estructura de internet, servicios y servidores",
      "Plan de negocios",
      "Bases de datos masivas"
    ]
  },
  {
    semestre: "VIII",
    materias: [
      "Métodos numéricos",
      "Electiva CMD",
      "Electiva CP",
      "Seguridad de la información",
      "Ingeniería económica",
      "Minería de datos",
      "Electiva CPC"
    ]
  },
  {
    semestre: "IX",
    materias: [
      "Seminario de investigación en ingeniería",
      "Electiva CMD",
      "Calidad y gestión de proyectos informáticos",
      "Gestión de infraestructura",
      "Electiva CPC",
      "Práctica profesional"
    ]
  },
  {
    semestre: "X",
    materias: [
      "Electiva CMD ingeniería y desarrollo regional",
      "Electiva CP",
      "Electiva CP",
      "Electiva CPC",
      "Opción de grado"
    ]
  }
];

// Renderizar la malla
const contenedor = document.getElementById("malla");

materiasPorSemestre.forEach((sem) => {
  const div = document.createElement("div");
  div.className = "semestre";
  div.innerHTML = `<h2>Semestre ${sem.semestre}</h2>`;

  sem.materias.forEach(materia => {
    const m = document.createElement("div");
    m.className = "materia";
    m.textContent = materia;
    m.addEventListener("click", () => {
      m.classList.toggle("completada");
    });
    div.appendChild(m);
  });

  contenedor.appendChild(div);
});
