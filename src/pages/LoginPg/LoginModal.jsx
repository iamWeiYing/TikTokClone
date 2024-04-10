import React, { useState } from 'react';
import { Button, Flex, Modal } from 'antd';
import { UserOutlined, GoogleOutlined } from '@ant-design/icons';

import './LoginModal.css';

import { signInWithPopup, signInAnonymously } from "firebase/auth";
import { auth, provider } from '../../firebase/config';


function LoginModal() {

    const [visible, setVisible] = useState(!JSON.parse(localStorage.getItem('isLogedIn')));

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

    const handleAnonymousLogin = async () => {
        try {
            const result = await signInAnonymously(auth);
            console.log(result);
            localStorage.setItem('user_token', result.user.accessToken);
            localStorage.setItem('user_data', JSON.stringify(result.user));
            localStorage.setItem('isLogedIn', true);
            localStorage.setItem('isAnonymous', JSON.stringify(result.user.isAnonymous));
            setVisible(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='loginModalContainer'>
            <Modal
                className='loginModal'
                title="Đăng nhập vào TikTok"
                centered={true}
                open={visible}
                closable={false}
                footer={null}
                onCancel={null}
            >
                <Flex
                    vertical
                    gap='12px'
                    style={{
                        width: '340px',
                        height: '100%',
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
                    <br />
                    <h5>HOẶC</h5>
                    <br />
                    <Button
                        onClick={handleAnonymousLogin}
                        style={{ background: '#FE2C55' }}
                        type='primary'
                        size='large'
                        block
                    >
                        Tiếp tục với tư cách là khách
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
        </div>
    );
}

export default LoginModal;