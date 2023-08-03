import { faLeaf, fas } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

const getCompanies = () => {
    var promise = new Promise((resolve, reject) => {
        fetch('/companies').then((response) => {
            if (!response.ok) throw Error("OOPS , can't fetch data try after some time. ")
            return response.json();
        }).then((companies) => {
            resolve(companies);
        }).catch((error) => {
            reject(error.message);
        });
    });
    return promise;
}

const getStudents = () => {
    var promise = new Promise((resolve, reject) => {
        fetch('/getStudents').then((response) => {
            if (!response.ok) throw Error("OOPS , can't fetch the data try after some time");
            return response.json();
        }).then((students) => {
            resolve(students);
        }).catch((error) => {
            reject(error);
        });
    });
    return promise;
}

const PlacementDashboard = () => {
    const [companies, setCompanies] = useState([]);
    const [students, setStudents] = useState([]);
    const [filter, setFilter] = useState({ jobType: [], salaryType: [], companies: [] });

    const applyFilter = (f) => {
            alert(JSON.stringify(f));
            setFilter(f);
    }

    useEffect(() => {
        getCompanies().then((companies) => {
            setCompanies(companies);
        }, (error) => {
            alert(error);
        });
        getStudents().then((students) => {
            setStudents(students);
            console.log(students);
        }, (error) => {
            alert(error.message);
        });
    }, [])
    return (
        <div>
            <HeaderComponent />
            <div style={{ display: 'flex', marginLeft: '25px', padding: '10px' }}>
                <div style={{ marginLeft: '2px', padding: "10px", borderRight: '2px solid #d14c13    ' }}>
                    <div style={{ width: '100%', background: '#d14c13', color: 'white', textAlign: 'center' }}>F I L T E R S</div>
                    <FilterComponent companies={companies} onChange={applyFilter} />
                </div>
                <div style={{ flexGrow: 1, marginLeft: '10px' }}>
                    <b>Students</b>
                    <StudentsListComponent students={students} filterBy={filter} />
                </div>
            </div>
        </div>
    )
}

const FilterComponent = ({ companies, onChange }) => {

    const [jobTypeState, setJobTypeState] = useState([]);
    const [salaryTypeState, setSalaryTypeState] = useState([]);
    const [companiesState, setCompaniesState] = useState([]);

    useEffect(() => {
        var j = [];
        j.push({ "type": "F", "state": false });
        j.push({ "type": "I", "state": false });
        setJobTypeState(j);
        var s = [];
        s.push({ "type": "M", "state": false });
        s.push({ "type": "Y", "state": false });
        setSalaryTypeState(s);
        var c = [];
        // companies.forEach((company) => {
        //     c.push({ "name": company.name, "state": false });
        // });
        for(var i=0;i<companies.length;i++)
        {
            c.push({"name":companies[i].name,"state":false});
        }       
        setCompaniesState(c); 
       
    }, []);

    const jobTypesChanged = (jt) => {
        var filter = {};
        filter.salaryType = salaryTypeState;
        filter.companies = companiesState;
        var j = [];
        j.push({ "type": "F", "state": jt.fulltime });
        j.push({ "type": "I", "state": jt.internship });
        setJobTypeState(j);
        filter.jobType = j;
        onChange(filter);
        //alert(JSON.stringify(jt));  
    }
    const salaryTypesChanged = (st) => {
        var filter = {};
        filter.jobType = jobTypeState;
        filter.companies = companiesState;
        var s = [];
        s.push({ "type": "M", "state": st.monthlySalary });
        s.push({ "type": "Y", "state": st.yearlySalary });
        setSalaryTypeState(s);
        filter.salaryType = s;
        onChange(filter);
        //alert(JSON.stringify(st));
    }

    const companiesStateChange=(c)=>{
        var filter={};
        filter.salaryType=salaryTypeState;
        filter.jobType=jobTypeState;
        var companies=[];
       c.forEach((com)=>{
            companies.push(com);
       })
       setCompaniesState(companies);
        filter.companies=companies;   
        onChange(filter);
    }

    return (
        <div>
            <JobTypeComponent onChange={jobTypesChanged} />
            <SalaryTypeComponent onChange={salaryTypesChanged} />
            <CompaniesComponent companies={companies} onChange={companiesStateChange}/>
        </div>
    )
}

const HeaderComponent = () => {
    return (
        <div>
            <h1 style={{ marginLeft: '40px' }}>Thinking Machines - PlacementYear (2023)</h1>
        </div>
    )
}

const JobTypeComponent = ({ onChange }) => {
    const [fulltimeChecked, setFulltimeChecked] = useState(false);
    const [internshipChecked, setInternshipChecked] = useState(false);

    const stateChange = (ev) => {


        var jobTypesState = {
            fulltime: fulltimeChecked,
            internship: internshipChecked
        }
        if (ev.currentTarget.value === 'F') {
            setFulltimeChecked(ev.currentTarget.checked);
            jobTypesState.fulltime = ev.currentTarget.checked;
        }
        if (ev.currentTarget.value === 'I') {
            setInternshipChecked(ev.currentTarget.checked);
            jobTypesState.internship = ev.currentTarget.checked;
        }

        onChange(jobTypesState);
    }

    return (
        <fieldset>
            <legend>Job Type</legend>
            <input type="checkbox" onChange={stateChange} checked={fulltimeChecked} value='F' />Full Time<br />
            <input type="checkbox" onChange={stateChange} checked={internshipChecked} value='I' />Internship
        </fieldset>
    )
}

const SalaryTypeComponent = ({ onChange }) => {
    const [monthlySalaryChecked, setMonthlySalaryChecked] = useState(false);
    const [yearlySalaryChecked, setYearlySalaryChecked] = useState(false);

    const stateChange = (ev) => {
        var salaryTypesState = {
            monthlySalary: monthlySalaryChecked,
            yearlySalary: yearlySalaryChecked
        }
        if (ev.currentTarget.value === 'M') {
            setMonthlySalaryChecked(ev.currentTarget.checked);
            salaryTypesState.monthlySalary = ev.currentTarget.checked;
        }
        if (ev.currentTarget.value === "Y") {
            setYearlySalaryChecked(ev.currentTarget.checked);
            salaryTypesState.yearlySalary = ev.currentTarget.checked;
        }
        onChange(salaryTypesState);
    }

    return (
        <fieldset>
            <legend>Salary Type</legend>
            <input type="checkbox" value='M' onChange={stateChange} checked={monthlySalaryChecked} />Monthly<br />
            <input type="checkbox" value='Y' onChange={stateChange} checked={yearlySalaryChecked} />Yearly
        </fieldset>
    )
}

const CompaniesComponent = ({ companies, onChange }) => {
    var c = [];
    companies.forEach((company) => {
        c.push({ "name": company.name, "state": false });
    });
    const companyStateChange = (ev) => {
         c[ev.currentTarget.id].state= !c[ev.currentTarget.id].state;
        onChange(c);
        
    }

    return (
        <fieldset>
            <legend>Company</legend>
            {
                companies.map((company, index) => {
                    return (
                        <span key={company.name}>
                            <input type="checkbox" id={index} onChange={companyStateChange} value={company.name} /> {company.name} ({company.studentsCount})<br />
                        </span>
                    )
                })
            }
        </fieldset>

    )
}

const StudentsListComponent = ({ students, filterBy }) => {
    var filteredStudents = [];
    var considerFullTime = false;
    var considerInternship = false;
    var considerYearly = false;
    var considerMonthly = false;
    if (filterBy.jobType.length == 2 || filterBy.salaryType.length == 2) {
        considerFullTime = filterBy.jobType[0].state;
        considerInternship = filterBy.jobType[1].state;
        considerMonthly = filterBy.salaryType[0].state;
        considerYearly = filterBy.salaryType[1].state;
    }
    students.forEach((student) => {

        // if (student.jobType.substring(0, 1).toUpperCase() == "F" && student.salary.toUpperCase().includes("LPA")) 
        // {
        //     if (considerFullTime == true) 
        //     {
        //         filteredStudents.push(student);
        //         return;
        //     }
        //     if(considerYearly==true)
        //     {
        //         filteredStudents.push(student);
        //         return; 
        //     }
        // }
        // if (student.jobType.substring(0, 1).toUpperCase() == "I" && student.salary.toUpperCase().includes("MONTH")) 
        // {
        //     if (considerInternship == true)
        //     {
        //         filteredStudents.push(student);
        //         return;
        //     }
        //     if(considerMonthly==true)
        //     {
        //         filteredStudents.push(student);
        //         return;
        //     }
        // }
        // filteredStudents.push(student);
        if (considerFullTime == true || considerYearly == true) {
            if (student.jobType.substring(0, 1).toUpperCase() == "F" && considerFullTime == true) {
                filteredStudents.push(student);
                return;
            }
            if (student.salary.toUpperCase().includes("LPA") && considerYearly == true) {
                filteredStudents.push(student);
                return;
            }
        }
        if (considerInternship == true || considerMonthly == true) {
            if (student.jobType.substring(0, 1).toUpperCase() == "I" && considerInternship == true) {
                filteredStudents.push(student);
                return;
            }
            if (student.salary.toUpperCase().includes("MONTH") && considerMonthly == true) {
                filteredStudents.push(student);
                return;
            }
        }

    });

    return (
        <div>
            <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>S.No.</th>
                        <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>Name</th>
                        <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>Company</th>
                        <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>Job Type</th>
                        <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredStudents.map((student, index) => {
                            return (
                                <tr>
                                    <td style={{ border: "1px solid black", borderCollapse: "collapse" }}>{index + 1}</td>
                                    <td style={{ border: "1px solid black", borderCollapse: "collapse" }}>{student.name}</td>
                                    <td style={{ border: "1px solid black", borderCollapse: "collapse" }}>{student.company}</td>
                                    <td style={{ border: "1px solid black", borderCollapse: "collapse" }}>{student.jobType}</td>
                                    <td style={{ border: "1px solid black", borderCollapse: "collapse" }}>{student.salary}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default PlacementDashboard;