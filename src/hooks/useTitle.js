import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Dentistry Services`;
    }, [title])
};

export default useTitle;