import React, { useState, useEffect } from 'react';
import { FormControl,FormLabel,RadioGroup,FormControlLabel,Button,FormHelperText,Radio} from '@material-ui/core';
import axios from 'axios';
function QuestionCard (props) {
  
  let [valueSelected,setValue] = useState(0);
  
  const handleSubmit = (event) => {
   
    props.handleAnswers(event.target.value,props.question._id,props.question.rightAnswer);
    event.preventDefault();
     
  }
  
  // const isInstructor = props.isInstructor
  return (
    <div>
      <form>
  <FormControl component="fieldset">
  <FormLabel component="legend">{props.question.questionText}</FormLabel>
  <RadioGroup aria-label="ques" name="ques1" value={valueSelected} onChange={e=>{handleSubmit(e)}} >
    <FormControlLabel value={props.question.answerOptions[0].option_code} control={<Radio />} label={props.question.answerOptions[0].option_name} />
    <FormControlLabel value={props.question.answerOptions[1].option_code} control={<Radio />} label={props.question.answerOptions[1].option_name} />
    <FormControlLabel value={props.question.answerOptions[2].option_code} control={<Radio />} label={props.question.answerOptions[2].option_name} />
    <FormControlLabel value={props.question.answerOptions[3].option_code} control={<Radio />} label={props.question.answerOptions[3].option_name} />
  </RadioGroup>
</FormControl>
</form>
</div>
  )
}

export default QuestionCard