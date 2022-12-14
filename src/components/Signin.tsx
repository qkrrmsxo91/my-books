import React from 'react'
import { Col, Input , Row, Button } from 'antd';
import { useRef } from 'react';
import styles from './Signin.module.css';

type LoginReqType = {
    email: string;
    password: string;
}

interface SigninProps {
    login: (reqData: LoginReqType) => void;
}

const Signin: React.FC<SigninProps> = () => {
    const emailRef = useRef<Input>(null);
    const passwordRef = useRef<Input>(null);
    
    return (
        <Row align="middle" className={styles.signin_row}>
            <Col span={24}>
                <Row className={styles.signin_contents}>
                    <Col span= {12}>
                        <img 
                            src="/bg.signin.png"
                            alt="Signin"
                            className={styles.signin_bg}
                        />
                    </Col>
                    <Col span= {12}>
                        <div className={styles.signin_title}>My Books</div>
                        <div className={styles.signin_subtitle}>
                            Please Note Your Opinion
                        </div>
                        <div className={styles.signin_underline}/>
                        <div className={styles.email_title}>
                            Email
                            <span className={styles.required}> *</span>
                        </div>
                        <div className={styles.input_area}>
                            <Input
                                className={styles.input}
                                placeholder="Email"
                                autoComplete="email"                        
                                ref={emailRef}
                            />
                        </div>
                        <div className={styles.password_title}>PassWord
                            <span className={styles.required}> *</span>
                        </div>
                        <div className={styles.input_area}>
                            <Input
                                className={styles.input} 
                                type="password"
                                autoComplete="current-password"                              
                                ref={passwordRef}
                            />
                        </div>
                        <div className={styles.button_area}>
                            <Button className={styles.button} size="large"
                                onClick={Click}>
                                Sign In
                            </Button>
                        </div>  
                    </Col>                        
                </Row>
            </Col>
        </Row>
    );
    
    function Click() {
        const email = emailRef.current!.state.value;
        const password = passwordRef.current!.state.value;
    }
}

export default Signin
