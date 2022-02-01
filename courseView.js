import {useState,useEffect} from 'react';
import axios from 'axios'
import {AiFillEdit, AiFillEye, AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const CourseTable = () => {
  const [courses, setCourses] = useState([]);

    useEffect(() => {
        loadCourses();
      }, [])
      
      const loadCourses = async () => {
        const {data}= await axios.get('/api/courses');
        setCourses(data);
      }
    
    return (
      <>
        {/* <div className="container">
            <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Course Code</th>
      <th scope="col">Course Title</th>
      <th scope="col">Credit Load</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div> */}
  <div className="container">
    <div className="row">
      <div className="col">
      {courses.map((course) => (
          <div className="task" key={course._id}>
     <h4>{course.code}{' '}</h4>
     <p>{course.title}</p>
     <hr />
     <AiFillEdit/> 
     <Link to={`/courses/view/${course.slug}`}><AiFillEye/></Link>5

     <AiFillDelete/>

     </div>))}
        </div>
      </div>
    </div>
        
     
</>
    )
}


export default CourseTable
