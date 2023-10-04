import { useContext, useEffect } from "react";
import styled from "styled-components";
import { LoginContext } from "../../../context/LoginContext";

const LoginPage = () => {
    const {state} = useContext(LoginContext)

    useEffect(() => {
        console.log(state);
    })

    return (
        <>
            <PageContainer>
                <FormLog>
                    <TitleForm>Login Form:</TitleForm>
                    <EmailLabel>
                        Email:
                        <EmailInput
                            type="text"
                            placeholder="Digite seu email"
                        />
                    </EmailLabel>
                    <PassLabel>
                        Senha:
                        <PassInput
                            type="text"
                            placeholder="Digite sua senha"
                        />
                    </PassLabel>
                    <FormSubmitBtn
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                        }}>
                        Submit
                    </FormSubmitBtn>
                </FormLog>
            </PageContainer>
        </>
    );
};

const PageContainer = styled.div`
    --light-gray: #33333350;
    --radius-input: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 50vw;
    border: 1px solid red;
    background-color: white;
    border-radius: 10px;
    border: 2px solid blueviolet;
`;

const TitleForm = styled.h1``;

const FormLog = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2em;
    position: relative;
`;

const EmailLabel = styled.label`
    display: flex;
    flex-direction: column;
    
`;

const PassLabel = styled.label`
    display: flex;
    flex-direction: column;
    
`;

const EmailInput = styled.input`
    flex: 1;
    border-radius: var(--radius-input);
    border: 2px solid var(--light-gray);
    padding: 1em 1em;
    font-size: 16px;
    color: #6e6c6c;
`;

const PassInput = styled.input`
    flex: 1;
    border-radius: var(--radius-input);
    border: 2px solid var(--light-gray);
    padding: 1em 1em;
    font-size: 16px;
    color: #6e6c6c;
`;

const FormSubmitBtn = styled.button`
    border-radius: 4px;
    flex: 1;
    font-weight: bold;
    color:#464847;
    font-size: 16px;
    padding: .5em .5em;
    background-color: rgb(255, 0, 106);
    cursor: pointer;
    transition-duration: 300ms;
    position: relative;
    z-index: 2;


    &:hover {
        background-color: rgb(206, 203, 203);
        color: rgb(255, 0, 106);
    }
`;

export default LoginPage;
