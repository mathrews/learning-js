import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const YoutubeFormFromVideo = () => {
    const { register, handleSubmit, control } = useForm();

    return (
        <>
            <form
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
            </form>
            <DevTool control={control} />
        </>
    );
};

export default YoutubeFormFromVideo;