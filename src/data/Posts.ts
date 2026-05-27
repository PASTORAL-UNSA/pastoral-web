import type PostCard from "../interfaces/PostCard";

const posts: PostCard[] = [
  {
    title: "Concurso de altares a la Virgen en Sociales",
    categories: ["Universidad", "Espiritualidad", "Cultura"],
    description:
      "Revive los mejores momentos del concurso de altares realizado en la Facultad de Sociales, una actividad que fortaleció la fe y la creatividad de nuestra comunidad universitaria.",
    mins: 5,
    urlPost: "./news/altares-sociales",
    urlImage: "./alt5.jpeg",
  },
  {
    title: "Concurso de altares a la Virgen en Ingeniería",
    categories: ["Universidad", "Espiritualidad", "Cultura"],
    description:
      "Conoce cómo se vivió el concurso de altares en la Facultad de Ingeniería, donde estudiantes y docentes participaron con entusiasmo en esta expresión de devoción y tradición.",
    mins: 7,
    urlPost: "./post",
    urlImage: "./cat3.jpeg",
  }
];

export default posts;
