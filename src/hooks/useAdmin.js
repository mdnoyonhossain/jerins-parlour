import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState('');
    const [isAdminLoadin, setIsAdminLoadin] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoadin(false);
                })
        }
    }, [email]);

    return [isAdmin, isAdminLoadin];
}

export default useAdmin;