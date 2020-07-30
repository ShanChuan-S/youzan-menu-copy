import React, { PureComponent } from 'react';

import './index.scss';

class SafeModule extends PureComponent {
    render() {
        return(
            <div className='safe-container'>
                <span>有赞获评：</span>
                <span className='safe-name'>浙江省级高新技术企业研究开发中心</span>
                <a className='safe-url' href='//kjt.zj.gov.cn/art/2020/2/27/art_1228971341_42018764.html' target='_blank'>查看详情</a>
            </div>
        )
    }
}

export default SafeModule;