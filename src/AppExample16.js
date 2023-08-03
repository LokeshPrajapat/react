import React, { useEffect, useState } from "react";
import progress from './progress.gif'


const addStudent = (student) => {
    var promise = new Promise((resolve) => {
        var dataString = `id=${student.id}&name=${encodeURIComponent(student.name)}&jobType=${student.jobType}&company=${encodeURIComponent(student.company)}&salary=${student.salary}&salaryType=${student.salaryType}`;
        // alert(dataString);
        fetch('/addStudent', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": dataString
        }).then((response) => {
            return response.json();
        }).then((responseJSON) => {
            // alert(responseJSON);
            resolve(responseJSON);
        });
    });
    return promise;
}

const getStudents = () => {
    var promise = new Promise((resolve) => {
        fetch('/getStudents').then((response) => {
            return response.json();
        }).then((students) => {
            resolve(students);
        });
    });
    return promise;
}
const AppExample16 = () => {
    const [students, setStudents] = useState([]);
    const [title] = useState("Thinking Machines");
    const [placementsYear] = ['2023'];
    const [activeState, setActiveState] = useState('view');
    const [deletedStudent,setDeletedStudent]=useState({});
    const [editedStudent,setEditStudent]=useState({});
    useEffect(() => {
        getStudents().then((students) => {
            setStudents(students);
        })
    }, []);

    const changeActiveMode = (state) => {
        setActiveState(state);
    }

    const onStudentAdded = (student) => {
        students.push(student);
    }

    const editStudent=(id)=>{
        var s;
        students.forEach((student)=>{
            if(student.id===id) 
            {
                s={
                    "id":student.id,
                    "name":student.name,
                    "jobType":student.jobType,
                    "company":student.company,
                    "salary":student.salary,
                    "salaryType":student.salaryType
                }
                return;
            }
            setEditStudent(s);
        })
        setActiveState('edit');
    }
    const deleteStudent=(id)=>{
        setActiveState('delete')
        var s={};
        students.forEach((student)=>{
            if(student.id==id) 
            {
                s={
                    "id":student.id,
                    "name":student.name,
                    "jobType":student.jobType,
                    "company":student.company,
                    "salary":student.salary,
                    "salaryType":student.salaryType
                    // "text":"testing" 
                }
                return;
            }
            setDeletedStudent(s);
        })
         
    }

    return (
        <div>
            <TitleComponent title={title} placementsYear={placementsYear} />
            <TollBarComponent mode={activeState} changeActiveMode={changeActiveMode} />
            {activeState === 'view' && <StudentsListComponent students={students} changeActiveMode={changeActiveMode} deleteStudent={deleteStudent} editStudent={editStudent}/>}
            {activeState === 'add' && <StudentAddComponent onStudentAdded={onStudentAdded} changeActiveMode={changeActiveMode} />}
            {activeState==='delete' && <DeleteStudentComponent student={deletedStudent}/>}
            {activeState==='edit' && <EditStudentComponent student={editedStudent}/>}
        </div>
    )
}

const TollBarComponent = ({ mode, changeActiveMode }) => {
    const actionHandler = (ev) => {
        if (ev.target.getAttribute('id') === 'add') changeActiveMode('add');
        if (ev.target.getAttribute('id') === 'cancel') changeActiveMode('view');
    }
    return (
        <div>
            <hr />
            {mode === 'view' && <button type="button" id='add' onClick={actionHandler}>Add</button>}
            {(mode === 'add' || mode==='delete' || mode==='edit') && <button type="button" id='cancel' onClick={actionHandler}>Cancel</button>}
            <hr />
        </div>
    )
}
const TitleComponent = ({ title, placementsYear }) => {
    return (
        <div>
            <b>{title} Placements {placementsYear}</b>

        </div>
    )
}

const StudentsListComponent = ({ students,deleteStudent,editStudent }) => {

    const editHandler=(ev)=>{
       editStudent(ev.target.getAttribute('id'))
    }
    const deleteHandler=(ev)=>{
        deleteStudent(ev.target.getAttribute('id'));
    }

    return (
        <div>
            <ul>
                {students.map((student) => {
                    return (
                        <div>
                            <span>Name : {student.name}&nbsp;&nbsp;
                            <button type="button" id={student.id} onClick={editHandler}>Edit</button>&nbsp;&nbsp;
                            <button type="button" id={student.id} onClick={deleteHandler}>Delete</button>
                            </span><br></br>
                            <span>Company : {student.company}&nbsp;({student.jobType})</span><br></br>
                            <span>Salary : {student.salary}</span>
                            <hr />
                        </div>
                    )
                })
                }
            </ul>
        </div>
    )
}

const StudentAddComponent = ({ onStudentAdded, changeActiveMode }) => {
    const [id, setID] = useState(0);
    const [name, setName] = useState('');
    const [company, setCompany] = useState("");
    const [salary, setSalary] = useState(0);
    const [salaryType, setSalaryType] = useState('Y');
    const [fullTimeChecked, setFullTimeChecked] = useState("checked");
    const [internshipChecked, setInternshipChecked] = useState("");
    const [placementType, setPlacementType] = useState("F");
    const [idError, setIdError] = useState("");
    const [nameError, setNameError] = useState("");
    const [companyError, setCompanyError] = useState("");
    const [salaryError, setSalaryError] = useState("");
    const [formError, setFormError] = useState("");
    const [displayWhat, setDisplayWhat] = useState("addFormSection");

    const idChanged = (ev) => {
        setID(ev.currentTarget.value);
    }
    const nameChanged = (ev) => {
        setName(ev.currentTarget.value);
    }
    const companyChanged = (ev) => {
        setCompany(ev.currentTarget.value);
    }
    const salaryChanged = (ev) => {
        setSalary(ev.currentTarget.value);
    }

    const salaryTypeChanged = (ev) => {
        setSalaryType(ev.currentTarget.value);
    }

    const placementTypeChanged = (ev) => {

        if (ev.target.value === "F" && ev.target.checked) {

            setFullTimeChecked("checked");
            setInternshipChecked("");
            setPlacementType("F");
        }
        if (ev.target.value === "I" && ev.target.checked) {

            setFullTimeChecked("");
            setInternshipChecked("checked");
            setPlacementType("I");
        }
    }

    const clearAllError = () => {
        setFormError("")
        setIdError("");
        setNameError("");
        setCompanyError("");
        setSalaryError("");
    }

    const clearForm = () => {
        setID(0);
        setName("");
        setCompany("");
        setPlacementType("F");
        setFullTimeChecked("checked");
        setInternshipChecked("");
        setSalary(0);
        setSalaryType("Y");
    }

    const addHandler = () => {
        var hasErrors = false;
        clearAllError();
        if (id === "" || id <= 0) {
            setIdError("*");
            hasErrors = true
        }
        if (name === "") {
            setNameError("*");
            hasErrors = true
        }
        if (company === "") {
            setCompanyError("*");
            hasErrors = true
        }
        if (salary === "" || salary <= 0) {
            setSalaryError("*");
            hasErrors = true
        }
        if (hasErrors === true) return;
        var student = {
            "id": id,
            "name": name,
            "jobType": placementType,
            "company": company,
            "salary": salary,
            "salaryType": salaryType
        }
        setDisplayWhat("processingSection");
        addStudent(student).then((responseJSON) => {
            if (responseJSON.success === true) {
                if (student.salaryType === 'M') {
                    student.salary = salary + " per month";
                }
                else {
                    var s = salary / 100000;
                    student.salary = s + " LPA";
                }
                if (student.jobType === "Y") student.jobType = "Full time";
                else student.jobType = 'Internship';
                onStudentAdded(student);
                clearForm();
                setDisplayWhat("addMoreSection");
            }
            else {
                setFormError(responseJSON.error);
                setDisplayWhat('addFormSection');
            }
        })
    }

    const clickHandler = (ev) => {
        if (ev.target.value === 'yes') {
            setDisplayWhat("addFormSection");
        }
        if (ev.target.value === 'no') changeActiveMode('view');
    }

    if (displayWhat === 'addFormSection') return (
        <div>
            <div style={{ color: 'red' }}>{formError}</div>
            <label htmlFor="id">ID. </label>
            <input type="number" id='id' name='id' value={id} onChange={idChanged} />
            <span style={{ color: 'red' }}>{idError}</span>
            <br />
            <label htmlFor="name" name='name' value={name} >Name</label>
            <input type="text" id="name" onChange={nameChanged} value={name} />
            <span style={{ color: 'red' }}>{nameError}</span><br />
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name='company' value={company} onChange={companyChanged} />
            <span style={{ color: 'red' }}>{companyError}</span><br />
            Placement Type : Full Time <input type="radio" id="fulltime" name='jobType' value='F' checked={fullTimeChecked} onChange={placementTypeChanged} />
            &nbsp;&nbsp;&nbsp;
            Internship <input type="radio" id='internship' name='jobType' value='I' checked={internshipChecked} onChange={placementTypeChanged} /><br />
            <label htmlFor="salary">Salary</label>
            <input type="text" id='salary' name="salary" value={salary} onChange={salaryChanged} />
            <span style={{ color: 'red' }}>{salaryError}</span>
            &nbsp;
            <select id="salaryType" value={salaryType} onChange={salaryTypeChanged}>
                <option value={'Y'}>per annum</option>
                <option value={'M'}>per month</option>
            </select><br />
            <button type="button" onClick={addHandler}>Save</button>
        </div>
    )
    if (displayWhat === 'processingSection') return (
        <div>
            <img src={progress} />
        </div>
    )
    if (displayWhat === 'addMoreSection') return (
        <div>
            <b>Add more student ??</b><br></br>
            <button type="button" value='yes' onClick={clickHandler}>Yes</button>&nbsp;&nbsp;&nbsp;
            <button type="button" value='no' onClick={clickHandler}>No</button>
        </div>
    )
}

const DeleteStudentComponent=({student})=>{
    const confirmHandler=()=>{
        alert(student.id);
    }
   
    return(
        <div>
            Id : {student.id}<br/>
            Name : {student.name}<br/>
            Company : {student.company} ({student.jobType})<br/>
            Salary : {student.salary} <br/>
            <b>Do you want to delete the student??</b><br/>
            <button type="button" onClick={confirmHandler}>confirm</button>
        </div>
    )
}

const EditStudentComponent=({student})=>{

    return(
        <div>
            edit component
        </div>
    )
}

export default AppExample16;