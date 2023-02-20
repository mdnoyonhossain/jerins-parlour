import React, { useEffect } from 'react';

const useDashboardPage = (title) => {
    return (
        useEffect(() => {
            document.title = `${title}`;
        }, [title])
    );
};

export default useDashboardPage;