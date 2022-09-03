import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {

    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || '', 
        issues: [],
        allIssues: [],
        addComment: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [issueComments, setIssueComments] = useState([])

    function signup(credentials) {
        axios.post("/auth/signup", credentials) 
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getComments()
            getUserIssues()
            getAllIssues()
            setUserState(prevUserState => ({
                ...prevUserState,
                user, 
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post("/auth/login", credentials) 
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getComments()
            getUserIssues()
            getAllIssues()
            setUserState(prevUserState => ({
                ...prevUserState,
                user, 
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: '',
            issues: [],
            allIssues: []
        })
    }

    function handleAuthErr(errMsg) {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }
    function resetAuthErr() {
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    function getAllIssues() {
        userAxios.get("/api/issue")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    allIssues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getUserIssues() {
        userAxios.get("/api/issue/user/allIssues")
            .then(res => {
                // console.log(res.data)
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addIssue(newIssue) {
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function upVote(_id) {
        userAxios.put(`/api/issue/${_id}/upVote`)
            .then(res => {
                return setUserState(prevState => ({
                    ...prevState,
                    allIssues: prevState.allIssues.map(prevVote => prevVote._id === _id ? res.data : prevVote)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function downVote(_id) {
        userAxios.put(`/api/issue/${_id}/downVote`)
            .then(res => {
                return setUserState(prevState => ({
                    ...prevState,
                    allIssues: prevState.allIssues.map(prevVote => prevVote._id === _id ? res.data : prevVote)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function addComment(newComment, issueId) {
        userAxios.post(`/api/comment/${issueId}`, newComment)
            .then(res => {
                return setIssueComments(prevState => 
                    [...prevState, res.data]
                )
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getComments() {
        userAxios.get("/api/comment")
            .then(res => {
                setIssueComments(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    // const getComments = async () => {
    //     try {
    //         const comments = await userAxios.get("/api/comment").then(res => {
    //             setIssueComments(res.data)
    //             const issues = userAxios.get("/api/issue").then(res => {
    //                 console.log(issueComments)
    //                 console.log(comments)
    //                 setUserState(prevState => ({
    //                     ...prevState,
    //                     allIssues: res.data.map(issue => {
    //                         issue.comment = issue.comment.map(eachId => {
    //                             let obj = issueComments.find(each => each._id == eachId)
    //                             return obj
    //                         })
    //                         return issue
    //                     })
    //                 }))
    //             })
    //         })
    //     }
    //     catch {

    //     }
    // }

    return (
        <UserContext.Provider value={{
            ...userState,
            issueComments,
            signup,
            login,logout,
            addIssue,
            upVote, downVote,
            addComment, getComments,
            resetAuthErr,
            getAllIssues
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

// semantic ui?