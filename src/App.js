import { useState } from "react"

const App=()=>{
  const [title,setTitle]=useState("Thinking Machines");
  const [placementYear,setPlacementYear]=useState("2023")
  const [searchWhat,setSearchWhat]=useState("None");
  const [selectedStudent,setSelectedStudent]=useState({});
  const students=[
    {"id":"101","name":"Lokesh Prajapati","type":"Full time" ,"company":"Yash","package":"6 LPA" },
    {"id":"102","name":"Anshika Sethiya","type":"Full time" ,"company":"MS","package":"20 LPA" },
    {"id":"103","name":"Mukul Panchal","type":"Internship" ,"company":"Impetus","package":"10 LPA" },
    {"id":"104","name":"Shubham Baghel","type":"Full time" ,"company":"Amazon","package":"11 LPA" }
  ];
   
  const onSearch=(ev)=>{
    if(ev.currentTarget.value.length<3)
    {
      setSearchWhat("None");
      return;
    }
    setSearchWhat(ev.currentTarget.value.trim().toLowerCase());
    setSelectedStudent("");
  }

  const filteredStudents=students.filter((student)=>{
    if(searchWhat==="None") return true ;
    return student.company.toLowerCase().includes(searchWhat);
  });

  const showDetail=(ev)=>{
    var studentId=ev.currentTarget.getAttribute("id");
    for(var i=0;i<students.length;i++)
    {
      if(students[i].id===studentId) 
      {
        setSelectedStudent(students[i]);
        break;
      }
    }
  }
  return (
    <div>
      
     <TitleComponent title={title} placementYear={placementYear}/>
     <SearchBoxComponent onSearch={onSearch}/>
     <b>Filter :{searchWhat}</b>
     <PlacementListComponent students={filteredStudents} showDetail={showDetail}/>
     <PlacementDetailComponent student={selectedStudent}/>
    </div>
  )
}
const TitleComponent=(props)=>{
  return (
    <div>
      <h1>{props.title} - {props.placementYear}</h1>
    </div>
  )
}
const SearchBoxComponent=(props)=>{
  const searchIt=(ev)=>{
   props.onSearch(ev);
  }
  return (
    <div>
      <label htmlFor="search">Apply Filter</label>
      <input type='text' id='search' onChange={searchIt}/>
    </div>
  )
}

const PlacementListComponent=(props)=>{
  const clickHandler=(ev)=>{
    props.showDetail(ev);
  }
  return(
    <div>
        <ul>
          {
            props.students.map((student)=>{
              return (
                <li key={student.id} id={student.id} onClick={clickHandler}>{student.name} ({student.company})</li>
              )
            })
          }
        </ul>
    </div>
  )
}

const PlacementDetailComponent=(props)=>{
  return (
    <div>
      Name :{props.student.name}<br></br>
      Company:{props.student.company}
    </div>
  )
}

export default App; 