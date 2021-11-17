import {useState} from 'react'

const useBooleanToggler = ({initialValue} = {initialValue: false}) => {
    const [isToggled, setIsToggled] = useState(Boolean(initialValue))
    const toggle = () => {
        setIsToggled(!isToggled)
    }

    const unToggle = () => {
        setIsToggled(false)
    }

    const reToggle = () => {
        setIsToggled(true)
    }

    return {isToggled, toggle, unToggle, reToggle}
}

const useWorkingIndicator = ({initialValue} = {initialValue: false}) => {
    const {
        isToggled: isWorking,
        reToggle: startWork,
        unToggle: finishWork,
    } = useBooleanToggler({initialValue})
    return {isWorking, startWork, finishWork}
}

export {useWorkingIndicator}
export default useBooleanToggler
