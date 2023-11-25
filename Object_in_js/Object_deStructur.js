// object de-structure
const course = {
    courseName: "js in hindi",
    coursePrice: 999,
    courseInstructor : "Love Babbar"
}

console.log(course.courseInstructor)

// another method to access
const { courseName,courseInstructor,coursePrice } = course
console.log(courseName)
console.log(courseInstructor)
console.log(coursePrice)


// if you want give another name  ( bada name  => chota name de sakta hai)
const { courseName: Name } = course
console.log(Name)