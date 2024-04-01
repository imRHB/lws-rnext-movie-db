import React from "react";

export default function PhotosLayout({ children, modal }) {
    return (
        <React.Fragment>
            {children}
            {modal}
        </React.Fragment>
    );
}
