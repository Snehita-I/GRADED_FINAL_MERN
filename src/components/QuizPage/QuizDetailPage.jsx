import React, { useState, useEffect , useRef } from 'react'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import QuestionCard from './QuestionCard'
import bg from '../Images/bg_assignment_detail.jpg'



function QuestionsList (props) {

  console.log("QuesListProps: "+props.quizId);
  let [totalScore,setScore]=useState(0);
  const [quizId, setQuizId]=useState(props.quizId);
  const [userId, setUserId]=useState(props.userId);
  const [user, setUser]=useState();

  function handleAnswers(answerSelected,questionId,rightAnswer){

    
    if(rightAnswer===answerSelected)
      totalScore+=1;
    alert("score"+totalScore);
  }
  
  const handleSubmit = async () => {
  
    alert("enetered");
    alert("TOTAL"+totalScore);
    alert("QuizID"+quizId);
    axios({
      method: 'post',
      url: 'http://localhost:5000/quizzes/update/'+quizId,
      data: {
        "studentAnswer":{
            "studentScore":totalScore,
            "studentId":userId
        }
      }
       
    }).then(()=>
      alert("Answer added")
    ).catch((err)=>
      alert("Answer not added"+err)
    )
  }
    console.log("questions:1234 ",props.quizQuestions);
    const questions= props.quizQuestions;
    let questionItems = []
        questions.forEach(async(question)=>{
        questionItems.push(<QuestionCard 
          handleAnswers = {handleAnswers}
          question={question}
          key={question._id}
        />);
      }) 
    alert(props.present+"preeee");
    return (
      <div>
      {!props.present && <ul>{questionItems}</ul>}
      {!props.present && <button onClick={handleSubmit}>Submit</button>}
      {props.present && <p>Test Already Given!!!</p>}
      </div>
    )
  }

  


function QuizDetailPage (props) {
  console.log("pro: ",props);
  const refContainer = useRef([]);
  let visible = true;
  const [quizQuestions,setQuizQuestions]=useState([])
  const { userId, userName } = useParams()
  const [isInstructor, setIsInstructor] = useState(false)
  const { register, handleSubmit } = useForm();
  console.log("before pass"+props.location.state.quiz.quizId)
  const qi = props.location.state.quiz._id;
  const [present,setPresent]=useState(false)
  useEffect(() => { 
    
    async function fetchData(){
      
    let dataTemp = []
    console.log("here"+props.location.state.quiz.quizQuestions);
    const quizQuestionsObtained = props.location.state.quiz.quizQuestions;
      quizQuestionsObtained.map(async (question)=>{
      console.log("Q "+question);
      const response1 = await axios.get('http://localhost:5000/quizQuestions/'+question);
      console.log("res1: ",response1.data);
      dataTemp.push(response1.data);
      setQuizQuestions([...dataTemp]);
      });
      
      await props.location.state.quiz.studentsAnswers.map((student)=>{
          if(student.studentId===userId){
              setPresent(true);
          }
      });
      
    }
    fetchData();
  }, [props.location.state.quiz.quizQuestions, props.location.state.quiz.studentsAnswers, userId])
  console.log("final final"+quizQuestions[0])

  return (
    <div className='container'>
    <div className='w-full bg-white'>
        <div className=' mr-0 bg-white  w-full h-14 flex justify-between'>
           <div className='mx-5 pt-3 text-xl text-gray-600 font-bold'>GitGrader</div>
           <div className='text-gray-600 text-lg pt-3 mr-3'>{userName}</div>
        </div>
        <div className='mx-40  flex-col my-5 '>
                    <div className=' rounded-lg h-52 flex ' style={{ backgroundColor: '#390069' }}>
                        <div className='flex-col'>
                            <div className='mx-10 pt-8'>
                                <text className='text-4xl text-white font-bold '>{props.location.state.quiz.quizName}</text>
                            </div>
                            <div className='mx-10 pt-8'>
                                <text className='text-xl text-white'>{props.location.state.quiz.quizText}</text>
                            </div>
                        </div>
                        <div className='h-48 w-56 ml-32'>
                             <img src={bg} className='h-48 w-56'/>
                        </div>
                    </div>
          </div>
          <div className='flex'>
                        <div className='container flex-3 w-4/5  shadow-inner my-7  rounded-lg border-gray-300 border-2 p-5'>
                        <div>
                       
                        <QuestionsList present = {present}quizQuestions={quizQuestions} userId={userId} quizId={qi}/>

                                    
                        </div>
                        </div>
             </div>
    </div>
    </div>

  )
}
export default QuizDetailPage