import React, { useEffect } from 'react';

const useTitle = (title) => {
    return (
        useEffect(() => {
            document.title = `${title} - Jerins Parlour`;
        }, [title])
    );
};

export default useTitle;