import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const schema = Yup.object().shape({
    username: Yup.string().required('This field is required').min(6, '6 caracters'),
    email: Yup.string().required('This field is required').min(15, '15 caracters'),
    channel: Yup.string().required('This field is required').min(6, '6 caracters'),
});

const YoutubeForm = () => {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            username: "",
            email: "",
            channel: "",
        },
    });

    return (
        <>
            <FormContainer
                onSubmit={handleSubmit((data: object) => {
                    console.log(data);
                })}>
                <label htmlFor="username">Username</label>
                <input
                    {...register("username")}
                    type="text"
                    id="username"
                    name="username"
                />

                <label htmlFor="email">E-mail</label>
                <input
                    {...register("email")}
                    type="email"
                    id="email"
                    name="email"
                />

                <label htmlFor="channel">Channel</label>
                <input
                    {...register("channel")}
                    type="text"
                    id="channel"
                    name="channel"
                />

                <button type="submit">Submit</button>
            </FormContainer>
        </>
    );
};

export default YoutubeForm;

const FormContainer = styled.form``;
