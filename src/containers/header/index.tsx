import React, { useState } from 'react';
import loadable from '@loadable/component';
import { useDispatch } from 'react-redux';
import { logout, initializeForm } from 'reducers/auth';

const Header = loadable(() => import('components/common/Header'));

const HeaderContainer: React.FC = () => {
    const [hash, setHash] = useState(
        JSON.parse(localStorage.getItem('hash') || '{}'),
    );
    const dispatch = useDispatch();
    const onLogout = async () => {
        try {
            dispatch(logout(null));
            dispatch(initializeForm('login'));
            setHash({});
        } catch (e) {
            console.log(e);
        }
    };
    return <Header hash={hash} onLogout={onLogout} />;
};

export default HeaderContainer;
