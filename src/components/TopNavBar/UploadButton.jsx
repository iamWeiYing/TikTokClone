import React from 'react';
import { ConfigProvider, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


function UploadButton() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 0,
                    controlHeight: 36,
                },
                components: {
                    Button: {
                        contentFontSize: 17,
                    },
                },
            }}
        >
            <Button
                icon={<PlusOutlined
                    style={{
                        fontSize: 16,
                        strokeWidth: "40",
                        stroke: "black"
                    }}
                />}
                style={{fontWeight: 600}}
            >
                Tải lên
            </Button>
        </ConfigProvider>
    );
}

export default UploadButton;