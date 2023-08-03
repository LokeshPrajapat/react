import React, { useEffect, useState } from "react";

const getEmployees=()=>{
    var promise=new Promise((resolve)=>{
        fetch("/placements").then((response)=>{
            return response.json();
        }).then((employees)=>{
            resolve(employees);
        })
    });
    return promise;
}

const AppExample14=()=>{
    const [employees,setEmployees]=useState([]);
    useEffect(()=>{
        getEmployees().then((emps)=>{
            setEmployees(emps);
        })
    },[]);
    return(
    <div>
       <EmployeeList employees={employees}/>
    </div>
    )
}

const EmployeeList=({employees})=>{
    return (
    <div>
        <ul>
            {
                employees.map((employee)=>{
                    return(
                        <li key={employee.id}>{employee.firstName} {employee.lastName}</li>
                    )
                })
            }
        </ul>
    </div>)
}
export default AppExample14;