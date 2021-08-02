import React, { useState, useEffect } from "react";
import { Menubar } from 'primereact/menubar';

export default function HeaderBar() {
    const items = [
        {
            label: 'TodoNav'
        },
        {
            label: 'TSID',
            items: [
                {
                    label: 'NTAP'
                },
                {
                    label: 'IMSD'
                },
                {
                    label: 'MQSI'
                },
                {
                    label: 'MITD'
                },
                {
                    label: 'DAPD'
                }
            ]
        }

    ]
    return (
        <div className="HeaderBar">
            <Menubar model={items} />
        </div>
    );
    
}
