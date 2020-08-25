import React from 'react';

import Masuk from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-out/sign-up.component'

import './masuk-keluar.styles.scss';

const MasukKeluar = () => (
    <div className="masuk-keluar">
        <Masuk />
        <SignUp />
    </div>
);

export default MasukKeluar;