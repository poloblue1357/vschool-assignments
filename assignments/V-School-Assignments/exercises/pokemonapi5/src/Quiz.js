import React, {useState} from "react"
import "./styles.css"
import questionsQuiz from "./questionsQuiz"
import {useHistory} from "react-router-dom"
import QuizQuestion from "./quizQuestion"

function Quiz(props) {

    const history = useHistory()

    const [quizAnswer, setQuizAnswers] = useState({
        q1Ans: 0,
        q2Ans: 0,
        q3Ans: 0,
        q4Ans: 0,
        q5Ans: 0,
    })
    
    const noteQuizAnswers = (id, points) => {
        setQuizAnswers(prevAnswer => ({...prevAnswer, [id]: points}))
    }
    const [totalPoints, setTotalPoints] = useState(0)

    const calculatePoints = () => {
        findPokemon(quizAnswer.q1Ans + quizAnswer.q2Ans + quizAnswer.q3Ans + quizAnswer.q4Ans + quizAnswer.q5Ans)
    }
    
    const handleSubmit = (event) => {
        // alert("Your answers were submitted! Click the link for result!")
        event.preventDefault()
        calculatePoints()
        console.log(totalPoints)
    }

    const survey = questionsQuiz.map((quiz, index) => {
        return (
            <QuizQuestion noteQuizAnswers={noteQuizAnswers} id={quiz.id} key={quiz.question+index} question={quiz.question} options={quiz.options} name={quiz.name}/>
        ) 
    }) 

    // const [image, setImage] = useState({imageSrc: '', imageAlt: ''})
    const findPokemon = (totalPoints) => {
        const state = {}
        if(totalPoints > 0 && totalPoints < 6) {
            
                state.imageSrc= "https://images.pokemontcg.io/dp4/3_hires.png" 
                state.imageAlt= "Darkrai"
            
        } else if(totalPoints > 5 && totalPoints < 11) {
            
                state.imageSrc= "https://images.pokemontcg.io/basep/1_hires.png" 
                state.imageAlt= "Pikachu"
           
        } else if(totalPoints > 10 && totalPoints < 16) {
            
                state.imageSrc= "https://images.pokemontcg.io/bw5/1_hires.png" 
                state.imageAlt= "Bulbasaur"
            
        } else if(totalPoints > 15) {
            
                state.imageSrc= "https://images.pokemontcg.io/sm75/1_hires.png" 
                state.imageAlt= "Charmander"
            
        }
        const location = {
            pathname: "/quiz/quizresult",
            state: state
        }
        history.push(location)
    }

    // useEffect(() => {
    //     findPokemon()
    // }, [totalPoints])
    // console.log(image)

    // const tryingHistory = (e) => {
    //     e.preventDefault()
    //     console.log("waiting three seconds")
    //     setTimeout(() => {
    //         history.pushState("/quiz/quizresult")
    //     }, 3000)
    // }

    return (
        <div className="quiz">
            {/* {console.log("quiz Component was rendered")} */}
            <h2>Which Starting Pokemon Is Best For You?</h2>
            <img className="quizImages" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmspoweruser.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fpokemon-ash-and-pikachu.jpg&f=1&nofb=1" alt="pokemon"/>
            <p>Is Pikachu the best Pokemon for you? Will Charmander lead you to success?</p>
            <p> Is Bulbasaur your Pokemon of choice?</p>
            <p>Take our quiz below to find out your best starting Pokemon!</p>
            <img className="quizImages" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ld_O3q-uWr62dtc8_a4YNQHaEo%26pid%3DApi&f=1" alt="quizpic1"/>
            
            <br />
            <br />

            <h1>Pokemon Quiz: </h1>
            <form onSubmit={handleSubmit} className="quiz">
                {survey}
                <hr />
                
                    <button style={{margin: "10px", backgroundColor: "black", color: "orange", fontSize: "20px"}}>Find Your Pokemon!</button>
                    <br />
                    {/* <Link to={location}  style={{fontSize: "25px"}}>Click To See Result!</Link> */}
            </form>  
        </div>
    )
}

export default Quiz