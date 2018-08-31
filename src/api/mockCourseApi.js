import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    author: "cory-house",
    length: "5:08",
    category: "JavaScript",
    completed: false,
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    author: "cory-house",
    length: "3:10",
    category: "Software Practices",
    completed: true,
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    author: "cory-house",
    length: "2:52",
    category: "Software Architecture",
    completed: false,
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    author: "cory-house",
    length: "2:30",
    category: "Career",
    completed: true,
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    author: "cory-house",
    length: "5:10",
    category: "HTML5",
    completed: false,
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minCourseTitleLength = 1;
        const urlValidator = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
        
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        } 

        if (urlValidator.test(course.watchHref) === false) {
          reject(`Course link must contain http:// or https:// protocol.`)
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          course.id = generateId(course);
          course.completed = false;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.id == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }

  static completedCourse(courseId) {
    const course = Object.assign({}, courses.filter(elem => elem.id === courseId)[0])
    // debugger
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        course.completed = !course.completed
        const completedCourseIndex = courses.findIndex(a => a.id == courseId);
        courses.splice(completedCourseIndex, 1, course);
        resolve(course);
      }, delay);
    });
  }
}



export default CourseApi;