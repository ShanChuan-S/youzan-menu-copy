import React, { PureComponent } from 'react';

import './index.scss';
import Item from 'antd/lib/list/Item';

const partnerData = {
    title: '合作伙伴',
    img: '//img.yzcdn.cn/upload_files/2020/05/25/FnGB5mEEB7v3PppBinu4kxbVyIBU.png'
}

class PartnerModule extends PureComponent {
    render() {
        return(
            <div className='partner-container'>
                <h3 className='title'>{partnerData.title}</h3>
                <div className='img-container'>
                    <img src={partnerData.img} />
                </div>
            </div>
        )
    }
}

export default PartnerModule;