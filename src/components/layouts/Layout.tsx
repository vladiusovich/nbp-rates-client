import React from "react";
import S from "./Layout.styled";
import Footer from "./footer/Footer";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <S.container>
            <S.content>
                {/* <Outlet /> */}
                {children}
            </S.content>
            <Footer />
        </S.container>
    );
};

export default Layout;
