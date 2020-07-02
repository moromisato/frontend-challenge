import React, { useEffect, useState } from 'react';
import Menu from '@material-ui/icons/Menu';
import IdentifcationCard from '../../components/IdentifcationCard';
import OpportunitiesCard from '../../components/OpportunitisCard';
import SalesCard from '../../components/SalesCard';

import { User } from '../../mock';
import './styles.css';

export default function Home() {
    const [user, setUser] = useState({});

    useEffect(() => {
        function loadUser() {
            return User;
        }

        setUser(loadUser);
    }, []);

    return (
        <div className="home-container">
            <div className="header">
                <Menu />
            </div>
            <div className="body">
                <IdentifcationCard user={user} />
                <OpportunitiesCard opportunities={user['opportunities']} />
                <SalesCard />
            </div>
        </div>
    );
}
