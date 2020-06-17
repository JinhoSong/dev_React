import React from "react";
import StickyBox from "react-sticky-box";
const BoxPage = () => {
    return (
        <div>
            <div className="row">
                <StickyBox offsetTop={20} offsetBottom={20}>
                    <div>Sidebar</div>
                </StickyBox>
                <div>Content</div>
            </div>
        </div>
    );
}

export default BoxPage;
