const multiplyValue = (x: number, y: number = 2) => {
  return x * y;
};


const processInput = (x: string | number | boolean) => {
  if (typeof x == "string") {
    return x.replaceAll(" ", "").toLowerCase();
  } else if (typeof x == "number") {
    return x * 10;
  } else if (typeof x == "boolean") {
    if (x == true) {
      return "Active";
    } else if (x == false) {
      return "Inactive";
    }
  }
};


const formatCoordinate = (coordinate: readonly [number, number, string]) => {
  return `Location: ${coordinate[2]} (${coordinate[0]},${coordinate[1]})`;
};


function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  for (const arr of arrays) {
    result.push(...arr);
  }

  return result;
}


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};


function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
}
