import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">TOPI</h1>
                    <span className="subtitle">BELI SEKARANG</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">JAKET</h1>
                    <span className="subtitle">BELI SEKARANG</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SNEAKER</h1>
                    <span className="subtitle">BELI SEKARANG</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">WANITA</h1>
                    <span className="subtitle">BELI SEKARANG</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">PRIA</h1>
                    <span className="subtitle">BELI SEKARANG</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;