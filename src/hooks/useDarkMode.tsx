import React from 'react'
import useMutationObservable from './useMutationObservable';

type ReturnProps = {
    isDarkMode: boolean;
}

function useDarkMode(): ReturnProps {
    const bodyElement = document.querySelector("body") as HTMLBodyElement;
    const initialState = bodyElement.classList.contains('dark');
    const [isDarkMode, setIsDarkMode] = React.useState(initialState);

    const onClassNameMutation = React.useCallback((mutationList: MutationRecord[]) => {
        if (mutationList[0].attributeName === "class") {
            const targetMutated = mutationList[0].target as HTMLBodyElement;
            setIsDarkMode(targetMutated.classList.contains('dark'));
        }

    }, [isDarkMode])

    useMutationObservable(bodyElement, onClassNameMutation)

    return {
        isDarkMode
    }
}

export default useDarkMode;