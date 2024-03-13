import React from 'react';
import { ConfigProvider, Input } from 'antd';

const { Search } = Input;

function SearchBox() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 23,
                    controlHeight: 46,
                    fontSize: 17,
                },
            }}
        >
            <Search
                placeholder="Tìm kiếm"
                allowClear
                onSearch={(value, _e, info) => console.log(info?.source, value)}
                style={{
                    width: '100%',
                }}
            />
        </ConfigProvider>
    );
}

export default SearchBox;