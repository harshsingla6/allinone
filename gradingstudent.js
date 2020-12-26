function gradingStudents(grades) {
    return grades.map((studentGrade) => {
      let rounding = studentGrade % 5;
      if (studentGrade < 38) {
          console.log(studentGrade)
        return studentGrade;
      }
      else if (rounding >= 3) {
        console.log(studentGrade + 5 - rounding)
        return studentGrade + 5 - rounding;
      }
      console.log(studentGrade)
      return studentGrade;
    });
  }
  gradingStudents([73,67,38,33])