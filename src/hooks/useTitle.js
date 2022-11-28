import { useEffect } from 'react';

const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - Fire News`
    }, [title])

}

export default useTitle;