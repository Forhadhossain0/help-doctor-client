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
        // <div className="md:h-[120vh] w-full bg-[#8d017a] text-white">
        <div className="md:h-[120vh] w-full bg-no-repeat bg-[#6a298893] bg-cover bg-[url('https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148429738.jpg?w=740&t=st=1701457885~exp=1701458485~hmac=9dc009e1de6c915922f758e5235a8dfc2a2de81439167fb86701f714c46b3437')] text-white">

        <section className="md:flex  gap-20 justify-between items-center p-10  h-full mx-auto md:w-[90%] w-full">
           
 
            <div className=" md:w-[60%] h-[70%] w-full md:mt-0 mt-16 rounded-xl bg-cover shadow-white shadow bg-[url('https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148429738.jpg?w=740&t=st=1701457885~exp=1701458485~hmac=9dc009e1de6c915922f758e5235a8dfc2a2de81439167fb86701f714c46b3437')] ">
            <div className="w-full h-full  p-10  rounded-xl shadow shadow-white bg-[#7370ff71] ">
                   <h1 className="font-bold mx-auto text-xl text-center pb-10">Sign In to SOHOJ SEBA</h1>
               
                <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto flex justify-center mb-3" >
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

                            <input className="w-full mt-4 outline-none  rounded border-none hover:bg-[#d6d6d6] btn-primary bg-white btn text-purple-700 " type="submit" value={'Login'} placeholder="Enter your password " />
                        </div>
                    </div>
                </form>
                <Link to={'/register'} className="mx-auto text-center w-full " ><p>don't have an account ?<span className="underline"> please sing up</span></p></Link>
                 <input className="w-full mt-6 outline-none hover:border-[#2da4db]  border-white  hover:bg-[#2da4db] btn-primary bg-transparent  btn text-white " type="submit" value={'Continue whit Google'} placeholder="Enter your password " />
            </div>
            </div>


            <div className=" w-[90%] mx-auto p-20  relative ">
                <img className="md:w-[80%] h-full" src="https://i.ibb.co/PY669Xh/register.png" alt="" />
                <img className="w-[45%] h-[40%] top-0 right-0 absolute" src="https://i.ibb.co/NsBwh0y/Frame.png" alt="" />
            </div>


        </section>
    </div>
    );
};

export default Login;