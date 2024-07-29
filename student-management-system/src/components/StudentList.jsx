function StudentList() {

  return (
    <>
        <h1>Student List</h1>
    <div className="student-list">

        {students && students.map((student)=>{    
        return <div key={student.id} className='student'>
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
        </div>
        }
        )}
    </div>
    </>
  )
}

export default StudentList
