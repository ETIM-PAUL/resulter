import axios from 'axios';
import {useState,} from 'react';
import { toast } from "react-toastify";

const AddCourse = () => {
const [code, setCode] = useState("");
const [title, setTitle] = useState("");
const [courseDescription, setCourseDescription] = useState("");
const [creditLoad, setCreditLoad ]= useState("");
const [department, setDepartment ]= useState("");
const [faculty, setFaculty ]= useState("");
const [semester, setSemester] = useState("");
const [loading, setLoading] = useState(false);



const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    try{
        const { data } = await axios.post ("/api/add-course", {
            code,title,creditLoad,department,faculty,semester,courseDescription
        });
        toast("Great! Now you can start adding results");
        setCode(""); setTitle(""); setCourseDescription(""); setCreditLoad(""); setDepartment(""); setFaculty("");setSemester("");
        setLoading("false");
        
    }
    catch (err){
        toast(err.response.data)
    }
}


    return (
        <div className="container col-6">
            <br/>
        <form className="row g-3" onSubmit={() =>handleSubmit}>
        
        <div className="col-md-6">
          <label for="courseCode" className="form-label">Course Code</label>
          <input 
          type="text" 
          className="form-control" 
          id="inputCourseCode" 
          value={code}
          onChange={(e) => setCode(e.target.value)}  />
        </div>

        <div className="col-md-6">
          <label for="courseTitle" className="form-label">Course Title</label>
          <input type="text" className="form-control" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="col-md-12">
          <textarea cols="80" rows="5" onChange={(e) => setCourseDescription(e.target.value)}
          value={courseDescription} placeholder="Course Description">

          </textarea>
        </div>

        <div className="col-9">
          <label for="inputDept" className="form-label">Department</label>
          <input type="text" className="form-control" id="inputDept" value={department} 
          onChange={(e) => setDepartment(e.target.value)} />
        </div>
        <div className="col-3">
          <label  className="form-label">Credit Load</label>
          <select id="inputCL" className="form-select"  value={creditLoad} 
            onChange={(e) => setCreditLoad(e.target.value)} >     
            <option selected>Choose...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="col-md-6">
          <label for="inputFaculty" className="form-label">Faculty</label>
          <input type="text" className="form-control" id="inputFaculty" value={faculty} 
          onChange={(e) => setFaculty(e.target.value)}/>
       
        </div>
        <div className="col-md-4">
          <label for="inputSemester" className="form-label">Semester</label>
          <select id="inputSemester" className="form-select"
          value={semester} onChange={(e) => setSemester(e.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option>First Semester</option>
            <option>Second Semester</option>
          </select>
        </div>
        <span
         className="d-block btn btn-primary p-2 bg-primary text-white text-center"
         onClick={handleSubmit}
           disabled={loading}
           loading={loading}
           type="primary"
           size="large"
           shape="round"
         > {loading ? "Saving..." : "Save"}</span>
      </form>
      </div>
    )}



export default AddCourse
