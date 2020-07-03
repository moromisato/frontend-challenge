import React, { useEffect, useState } from 'react';
import Menu from '@material-ui/icons/Menu';
import IdentifcationCard from '../../components/IdentifcationCard';
import OpportunitiesCard from '../../components/OpportunitisCard';
import SalesCard from '../../components/SalesCard';
import CreditLimitCard from '../../components/CreditLimitCard';
import FinancialSecuritiesCard from '../../components/FinancialSecuritiesCard';
import LocationCard from '../../components/LocationCard';
import ActivitiesCard from '../../components/ActivitiesCard';

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
                <div className="first-column">
                    <IdentifcationCard user={user} />
                    <OpportunitiesCard opportunities={user['opportunities']} />
                    <SalesCard />
                </div>
                <div className="second-column">
                    <LocationCard location={user['location']} />
                    <CreditLimitCard creditLimits={user['credit_limits']} />
                    <FinancialSecuritiesCard financialSecurities={user['financial_securities']} />
                </div>
                <div className="third-column">
                    <ActivitiesCard activities={user['activities']} />
                </div>
            </div>
        </div>
    );
}
