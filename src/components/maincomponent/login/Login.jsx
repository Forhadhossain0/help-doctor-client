import { Link } from "react-router-dom";
import useAuth from "../../customehooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../customehooks/useAxiosPublic";


const Login = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const {logInUser} = useAuth();
    const axiosPublic = useAxiosPublic()

    const onSubmit = (event)=>{
        logInUser(event.email,event.password)
        .then(res=> {
            const userInfo = {displayName : res.user.displayName , email: res.user.email,photoURL: res.user.photoURL}
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res)
            })
        })
    }




    return (
        <div className="md:h-[120vh] w-full bg-[#07332F] text-white">

        <section className="md:flex  gap-20 justify-between items-center p-10  h-full w-full">
           
            <div className=" w-[90%] mx-auto p-10  relative ">
                <img className="md:w-[80%] h-full" src="../../../../public//image/register.png" alt="" />
                <img className="w-1/2 h-[40%] top-0 right-0 absolute" src="../../../../public//image//Frame.png" alt="" />
            </div>

            <div className=" w-full">
                   <h1 className="font-bold mx-auto text-xl text-center pb-10">Sign In to SOHOJ SEBA</h1>
               
                <form onSubmit={handleSubmit(onSubmit)} className="md:w-[60%] mx-auto flex justify-center mb-3" >
                    <div className="mx-auto w-full  ">
                        <div className="space-y-6">
                            
                            <div>
                              <input {...register('email',{required:true,pattern:/@/})} className="w-full rounded bg-[rgba(0,0,0,0.3)] p-4 outline-none " type="email" placeholder="Enter your Email " />
                              {errors.email?.type === 'required' && <p className='text-red-500 text-[12px] w-full '>please enter your email </p>}
                              {errors.email?.type === 'pattern' && <p className='text-red-500  text-[12px] w-full '>invalid email type </p>}
                            </div>

                             <div>
                              <input {...register('password',{required:true})} className="w-full rounded bg-[rgba(0,0,0,0.3)] p-4 outline-none " type="password" placeholder="Enter your password " />
                               {errors.password?.type === 'required' && <p className='text-red-500  text-[12px] w-full '>please enter your password</p>}
                            </div>

                            <input className="w-full mt-4 outline-none  rounded border-none hover:bg-[#F7A582] btn-primary btn text-white " type="submit" value={'Login'} placeholder="Enter your password " />
                        </div>
                    </div>
                </form>
                <Link to={'/register'} className="mx-auto text-center w-full " ><p>Dont have an account ? Go to SIGN UP</p></Link>
            </div>


        </section>
    </div>
    );
};

export default Login;