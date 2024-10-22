import React from 'react';
import './App.css';

function Courses() {
  const courseList = ['Computer Science', 'Information Technology', 'Artificial Intelligence', 'Data Science'];

  return (
    <section className="coursesSection">
      <h2>Our Courses</h2>
      <div className="coursesContainer">
        {courseList.map((course, index) => (
          <div key={index} className="courseBox">{course}</div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
