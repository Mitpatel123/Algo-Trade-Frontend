import React from "react";

export default function PageContainer(props) {
    return (
        <div style={{ padding: 10, flexGrow: 1, width: "100%", color: '#FFFF' }}>
            {props.children}
        </div>
    );
}
