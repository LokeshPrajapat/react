import React, { useEffect, useReducer } from "react";
import progress from './progress.gif'

const getStudents=()=>{
    var promise=new Promise((resolve,reject)=>{
        fetch('/getStudents').then((response)=>{
            if(!response.ok)
            {    
              throw Error("Unable to fetch data,try after some time..");  
            }
            console.log(response.ok);
            return response.json()
        }).then((students)=>{
            console.log(students);
            resolve(students);
        }).catch((error)=>{
            console.log(error);
            reject(error);
        });
    });
    return promise;
}

const AppExample19=()=>{

    useEffect(()=>{
        getStudents().then((students)=>{
            console.log(" Done"+students);
            studentsStateDispatcher({"students":students,"viewState":ViewStates.loaded});
        },(error)=>{
            console.log("Done Error "+error);
            studentsStateDispatcher({"error":error,"viewState":ViewStates.loadingError});
        }); 
    },[]);

    const ViewStates={
        "loading":1,
        "loaded":2,
        "loadingError":3
    }
    Object.freeze(ViewStates);

    const studentsStateReducer=(state,action)=>{
        var ss={...state};
        if(action.viewState==ViewStates.loaded)
        {   
            ss.viewState=ViewStates.loaded;
            ss.students=action.students;
        }
        if(action.viewState==ViewStates.loadingError)
        {   
            ss.viewState=ViewStates.loadingError;
            ss.error="Unable to fecth the data";
        }
        else{
            if(ss.error) delete ss.error;
        }
        return ss;
    }

    const  [studentsState,studentsStateDispatcher]=useReducer(studentsStateReducer,{"students":[],"viewState":ViewStates.loading});

    return(
        <div>
           {studentsState.viewState==ViewStates.loading && <ProcessingImageComponent/>}
           {studentsState.viewState==ViewStates.loaded && <StudentsListComponent students={studentsState.students}/>}
           {studentsState.viewState==ViewStates.loadingError && <ErrorComponent error={studentsState.error}/>}
        </div>
    )
}

const StudentsListComponent=({students})=>{
    return (
        <div>
            <ul>
                {
                    students.map((student)=>{
                        return(
                            <li key={student.id}>{student.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const ProcessingImageComponent=()=>{
    return(
        <div>
            <img src={progress} />
        </div>
    )
}

const ErrorComponent=({error})=>{
    return(
        <div>
            <h1 style={{color:'red'}}>{error}</h1>
        </div>
    )
}

export default AppExample19;