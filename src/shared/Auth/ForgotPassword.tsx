import { LOGIN_USER } from '@/src/graphql/actions/login.action';
import styles from '@/src/utils/style';
import { useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from "zod";

const ForgotPasswordSchema = z.object({
    email: z.string().email(),
})

type ForgotPasswordSchema = z.infer<typeof ForgotPasswordSchema>

const ForgotPassword = ({ setActiveState }: { setActiveState: (e: string) => void}) => {
    const [Login, { loading }] = useMutation(LOGIN_USER)
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(ForgotPasswordSchema)
    })
 
    const onSubmit = async (data: ForgotPasswordSchema) => {
       console.log(data)
    }
    return (
        <div>
            <h1 className={`${styles.title}`}>Forgot your password?</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className={`${styles.label}`}>Enter your Email</label>
                <input
                    {...register("email")}
                    type="email"
                    placeholder="loginmail@gmail.com"
                    className={`${styles.input}`}
                />
                {errors.email && (
                    <span className="text-red-500 block mt-1">
                        {`${errors.email.message}`}
                    </span>
                )}
                <br/>
                  <input
                        type="submit"
                        value="Submit"
                        disabled={isSubmitting}
                        className={`${styles.button} mt-3`}
                    />
                <h5 className='text-center pt-4 font-Poppins text-[14px]'>
                    Or Go Back To
                    <span
                        className="text-[#2190ff] pl-1 cursor-pointer"
                        onClick={() => setActiveState("Login")}
                    >
                        Login
                    </span>
                </h5>
            </form>
        </div>
    )
}

export default ForgotPassword