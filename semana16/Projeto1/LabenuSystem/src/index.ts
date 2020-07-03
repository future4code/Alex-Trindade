import { Teacher, TEACHER_SPECIALTY } from "./Teacher";
import { Student } from "./Student";
import { School } from "./School";

const action = process.argv[2].toLowerCase();

switch (action) {
  case "criar estudante":
    const newStudent: Student = new Student(
      process.argv[3].toLowerCase(),
      process.argv[4],
      process.argv[5],
      process.argv[6],
      process.argv[7]
    );

    new School().createStudent(newStudent);
    break;
  case "criar docente":
    const newTeacher: Teacher = new Teacher(
      process.argv[3],
      process.argv[4],
      process.argv[5],
      [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.REDUX]
    );

    new School().createTeacher(newTeacher);
    break;
  default:
    console.log("Função inválida.");
    break;
}
