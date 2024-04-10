import React, { useState } from 'react';
import { ConfigProvider, Button, Flex, Modal } from 'antd';
import { UserOutlined, GoogleOutlined } from '@ant-design/icons';


import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../../firebase/config';

function LoginButton() {

    const [visible, setVisible] = useState(false);
    const showModal = () => {
        setVisible(true);
    };
    const handleCancel = () => {
        setVisible(false);
    };

    const handleGoogleLogin = async () => {
        provider.setCustomParameters({
            prompt: 'select_account',
        });
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            localStorage.setItem('user_token', result.user.accessToken);
            localStorage.setItem('user_data', JSON.stringify(result.user));
            localStorage.setItem('isLogedIn', true);
            localStorage.setItem('isAnonymous', JSON.stringify(result.user.isAnonymous));
            setVisible(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 5,
                    controlHeight: 36,
                },
                components: {
                    Button: {
                        contentFontSize: 17.5,
                    },
                },
            }}
        >
            <Button
                style={{ background: '#FE2C55', fontWeight: 600 }}
                type='primary'
                onClick={showModal}
                onCancel={handleCancel}
            >
                Đăng nhập
            </Button>
            <Modal
                className='loginModal'
                title="Đăng nhập vào TikTok"
                centered={true}
                footer={null}
                open={visible}
                onCancel={handleCancel}
            >
                <Flex
                    vertical
                    gap="12px"
                    style={{
                        width: '340px',
                        margin: '0 45px'
                    }}
                >
                    <Button

                        size='large'
                        block
                    >
                        <UserOutlined style={{ float: 'left', marginTop: '4px' }} />
                        Tiếp tục với TikTok ID
                    </Button>
                    <Button
                        onClick={handleGoogleLogin}
                        size='large'
                        block
                    >
                        <GoogleOutlined style={{ float: 'left', marginTop: '4px' }} />
                        Tiếp tục với Google
                    </Button>
                </Flex>
                <div className='footer'>
                    <p style={{ fontSize: 12 }}>
                        Bằng việc tiếp tục với tài khoản có vị trí tại Vietnam,
                        bạn đồng ý với <a>Điều khoản Sử dụng</a>,
                        đồng thời xác nhận rằng bạn đã đọc <a>Chính sách Quyền riêng tư</a> của chúng tôi.
                    </p>
                    <br />
                    <p style={{ fontSize: 17 }}>Bạn không có tài khoản? <a>Đăng ký</a></p>
                </div>
            </Modal>
        </ConfigProvider>
    );
}

export default LoginButton;