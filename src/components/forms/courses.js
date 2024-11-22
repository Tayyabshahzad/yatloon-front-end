export default function Courses({ courses, handleCourseChange }) {
  return (
      <div className="w-full text-black rounded-lg overflow-hidden"> 
          <select 
              id="course"
              onChange={(e) => handleCourseChange(e.target.value)}
              required
          >
              <option value="">Select a course</option>
              {courses.map(course => (
                  <option key={course.id} value={course.id}>
                      {course.title}
                  </option>
              ))}
          </select>
      </div>
  );
}
