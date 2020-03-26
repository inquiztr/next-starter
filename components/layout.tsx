import Header from './header';
import Footer from './footer';
import React, { ReactNode } from 'react';
interface Props {
    children: ReactNode;
}
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
};

const Layout: React.FunctionComponent<Props> = (props: Props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Layout;
