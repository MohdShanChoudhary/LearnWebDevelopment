import React from "react";

// Base Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student Subclass
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // Call parent constructor
    this.course = course;
  }

  // Override method
  getInfo() {
    return `${super.getInfo()}, Course: ${this.course}`;
  }
}

// Teacher Subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Override method
  getInfo() {
    return `${super.getInfo()}, Subject: ${this.subject}`;
  }
}

const PersonDemo = () => {
  const student = new Student("Alice", 20, "Computer Science");
  const teacher = new Teacher("Mr. Smith", 40, "Mathematics");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Person Class Hierarchy Demo</h2>
      <p><strong>Student:</strong> {student.getInfo()}</p>
      <p><strong>Teacher:</strong> {teacher.getInfo()}</p>
    </div>
  );
};

export default PersonDemo;
