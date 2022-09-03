import React, {useState, useEffect} from "react"

function QuizQuestion(props) {

    const [points, setPoints] = useState(0)

    const handleClick = (event) => {
        setPoints(event.target.value)
    }
    const updatePoints = () => {
        let x = parseInt(points)
        // console.log("calculatePoints from quizQuestion")
        props.noteQuizAnswers(props.id, x)
        // console.log(x)
    }

    useEffect(() => {
        updatePoints()
    }, [points])

    const answers = props.options.map((option, index) => {
        return (
            <div>
                <input className="answers" key={props.name+index} type="radio" name={props.name} value={option.points} />
                {option.answer}
            </div> 
        )
    })
    return (
        
        <div className="quiz" onChange={handleClick}>
            {/* {console.log("quizQuestion rendered")} */}
            <h4  key={props.question}>{props.question}</h4>
            {answers}
        </div>
    )
}

export default QuizQuestion
