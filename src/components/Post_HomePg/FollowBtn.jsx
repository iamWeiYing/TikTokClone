import React, { useState } from 'react';
import { Button, ConfigProvider } from 'antd';

function FollowBtn() {
    const [followed, setFollowed] = useState(true);

    function toggleHandle() {
        setFollowed(!followed);
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 0,
                },
                components: {
                    Button: {
                        fontWeight: 600,
                        contentFontSize: 16,
                    }
                },
            }}
        >
            <Button
                type="default"
                onClick={toggleHandle}
                style={{
                    color: followed ? 'red' : 'black',
                    borderColor: followed ? 'red' : 'black',
                    marginLeft: 10,
                }}
            >
                {followed ? 'Follow' : 'Đang Follow'}
            </Button>
        </ConfigProvider>
    );
}

export default FollowBtn;