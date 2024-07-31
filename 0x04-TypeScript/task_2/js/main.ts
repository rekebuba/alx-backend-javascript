interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }

  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

const createEmployee = (salary: number | string):Teacher | Director => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }

  return new Director();
}

const isDirector = (employee: Teacher | Director): boolean => {
  return (employee instanceof Director);
}

const executeWork = (employee: Teacher | Director): string => {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  } else {
    return (employee as Teacher).workTeacherTasks();
  }
}

const teachClass = (todayClass: 'Math' | 'History'): string => {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }

  return 'Teaching History';

}
