import { Teacher } from "./Teacher";
import { FileManager } from "./FileManager";
import { Student } from "./Student";

export class School {
  private students: Student[] = [];
  private teachers: Teacher[] = [];
  private fileManager: FileManager = new FileManager("src/students.json");

  public createStudent(student: Student): void {
    if (
      !student.name ||
      !student.id ||
      !student.email ||
      !student.hobbies ||
      !student.birthDate
    ) {
      throw new Error("Dados inválidos");
    }

    const fileData: any = this.fileManager.readFile();

    this.students = fileData.map((item: Student) => {
      return new Student(
        item.id,
        item.name,
        item.email,
        item.birthDate,
        item.hobbies
      );
    });

    this.students.push(
      new Student(
        student.id,
        student.name,
        student.email,
        student.birthDate,
        student.hobbies
      )
    );

    this.fileManager.writeFile(this.students);
    console.log("Criado com sucesso.");
  }

  public createTeacher(teacher: Teacher): void {
    if (!teacher.name || !teacher.id || !teacher.email) {
      throw new Error("Dados inválidos");
    }

    this.fileManager.setFilePath("src/teachers.json");
    const fileData: any = this.fileManager.readFile();

    this.teachers = fileData.map((item: Teacher) => {
      return new Teacher(item.id, item.name, item.email, item.specialties);
    });

    this.teachers.push(
      new Teacher(teacher.id, teacher.name, teacher.email, teacher.specialties)
    );

    this.fileManager.writeFile(this.teachers);
    console.log("Criado com sucesso.");
  }
}
