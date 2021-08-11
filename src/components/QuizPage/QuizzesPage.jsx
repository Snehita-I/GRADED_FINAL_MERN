import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import QuizCard from './QuizCard.jsx'
import axios from 'axios'
function QuizList (props) {
  const quizzes = props.quizzes
  const isInstructor = props.isInstructor
 //console.log('assignments: ', assignments)
  const quizItems = quizzes.map((quiz) =>
      <QuizCard
        quiz={quiz}
        userName={props.userName}
        userId={props.userId}
        key={quiz._id.toString()}
        isInstructor={isInstructor}
      />
  )
  return (
      <ul>{quizItems}</ul>
  )
}

function QuizzesPage (props) {
 // console.log("hh");
  const [data, setData] = useState([])
  const userId = props.match.params.userId;
  const userName = props.match.params.userName;
  const classId = props.match.params.classId;
  const isInstructor = props.match.params.isInstructor;
  console.log(props);
  //const { userId, userName } = useParams()
  
  useEffect(() => {
    
      async function fetchData(){
      const response = await axios.get('http://localhost:5000/quizzes');
        console.log("quizzes: ",response.data);
        let dataTemp = []
        let isPartOfAssignment = false
        // eslint-disable-next-line no-undef
        
        const len =  response.data.length;
        console.log("len",len);
        let i;
        for(i=0;i<len;i++){
            // eslint-disable-next-line no-loop-func
            if(response.data[i].courseCode.trim()==classId.trim()){
                dataTemp.push(response.data[i]);
            }
        }
    
        console.log("dataTemp",dataTemp);
        dataTemp.sort(function (a, b) {
            const keyA = a.quizTime;
            const keyB = b.quizTime;
            // Compare the 2 dates
            if (keyA < keyB) return 1
            if (keyA > keyB) return -1
            return 0;
        });
    //console.log('firebase')
    setData([...dataTemp])
    console.log("data"+data);
   }
    fetchData();

  }, [classId, data, userId])
  return (
      <div className='component bg-gray-200'>
            <div className='component bg-purple-600 bg-opacity-80 mx-auto h-14 flex justify-between'>
              <p className='mx-5 pt-3 text-xl text-white font-bold'>GitGrader</p>
              <button className='mx-5 pt-3 text-xl text-white '>
                <a href={'/classesPage/' + userId + '/' + userName}>Classes</a>
               </button>
              <p className='text-white text-lg pt-3 mr-3'>{userName}</p>
            </div>
            <div className='container mx-auto self-center flex-row items-center justify-center w-4/5'>
                <QuizList quizzes={data} userId={userId} userName={userName} isInstructor={isInstructor}/>

            </div>
     </div>
  )
}
export default QuizzesPage;