import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Password } from "./icons/Password";
import { StudentNumber } from "./icons/StudentNumber";

export default function LoginModal({ visible, closeHandler }) {
    return (
        <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text
                    h1
                    size={60}
                    css={{
                        textGradient: "90deg, $blue500 -20%, $pink500 50%",
                    }}
                    weight="bold"
                >
                    한움
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="학번"
                    contentLeft={<StudentNumber fill="currentColor" />}
                />
                <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="비밀번호"
                    contentLeft={<Password fill="currentColor" />}
                />
                <Row justify="space-between">
                    <Checkbox>
                        <Text size={14}>로그인 유지</Text>
                    </Checkbox>
                    <Text size={14}>비밀번호 찾기</Text>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onClick={closeHandler}>
                    닫기
                </Button>
                <Button auto onClick={closeHandler}>
                    로그인
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
