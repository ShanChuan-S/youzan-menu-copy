import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from './components/header/index.jsx';
import CarouselList from './components/carouselList/index.jsx';
import SpecialList from './components/specialList/index.jsx';
import SafeModule from './components/safeModule/index.jsx';
import MainModule from './components/mainModule/index.jsx';
import IndustryModule from './components/industryModule/index.jsx';
import SceneModule from './components/sceneModule/index.jsx';
import CaseModelu from './components/caseModule/index.jsx';
import ServiceModule from './components/serviceModule/index.jsx';
import SassModule from './components/sassModule/index.jsx';
import AchievementModule from './components/achievementModule/index.jsx';
import PartnerModule from './components/partnerModule/index.jsx';
import PromoteModule from './components/promoteModule/index.jsx';
import Footer from './components/footer/index.jsx';
import FloatPoint from './components/floatPoint/index.jsx';
import PopTips from './components/dialog/index.jsx';

import './index.scss';
import 'antd/dist/antd.css';

class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <CarouselList />
                <SpecialList />
                <SafeModule />
                <MainModule />
                <IndustryModule />
                <SceneModule />
                <CaseModelu />
                <ServiceModule />
                <SassModule />
                <AchievementModule />
                <PartnerModule />
                <PromoteModule />
                <Footer />
                <FloatPoint />
                <PopTips />
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)