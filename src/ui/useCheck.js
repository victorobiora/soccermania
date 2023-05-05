//This is a custom hook that serves as a sort of route protection.
//if a user visits for example '/play/level. This means he/she is trying to access a page
//that needs questions to be set first. This exported function prevents that 
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const useCheck = () => {
const router = useRouter()
const questionsLoaded  = useSelector(state => state.q.questions)

useEffect(()=> {
if(questionsLoaded.length === 0){
    router.push('/')
}
}, [])

return 'done'

}

export default useCheck;