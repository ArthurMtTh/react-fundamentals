import React from "react";
import students from "../../data/students";

const listStudents = (props) => {

    const studentList = students.map((student) => {
        return (
            <li key={student.id}>
                {student.id}. {student.name} G: {student.grade}
            </li>
        )
    })

    return (
        <div>
            <ul>
                {studentList}
            </ul>
        </div>
    )
}

export default listStudents;