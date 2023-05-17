import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCamera, faClockRotateLeft, faCrop} from '@fortawesome/free-solid-svg-icons'
import {Layout, Menu, theme} from 'antd';
import {useState} from 'react';
import './menu.css'

const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('自动裁剪', 'crop', <FontAwesomeIcon icon={faCrop} />),
    getItem('识别文字', 'OCR', <FontAwesomeIcon icon={faCamera} />),
    getItem('历史识别', 'history', <FontAwesomeIcon icon={faClockRotateLeft} />),
];
const MenuSide = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical">
                    {/*logo*/}
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
            <Layout>
                <Content
                    style={{
                        margin: 0,
                    }}
                >
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    />
                    this is content
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    AutoCropOCR ©2023 Created by Meina
                </Footer>
            </Layout>
        </Layout>
    );
};
export default MenuSide;