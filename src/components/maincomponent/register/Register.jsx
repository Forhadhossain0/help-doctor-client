import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import useAuth from "../../customehooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../customehooks/useAxiosPublic";




const Register = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const {createUser} = useAuth();
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const onSubmit = data => {


        createUser(data.email,data.password)
        .then(res=> {
            const userInfo = {displayName:data.name, email:data.email,photoURL: res.user.photoURL}

            updateProfile(res.user,{displayName:data.name, photoURL:data.photo })
            .then(()=>{
                axiosPublic.post('/users',userInfo)
                .then(res=>{
                    navigate('/');
                    console.log(res);
                })
            })
        })
    };

  
      

    return (
        <div className="md:h-[120vh] h-auto w-full bg-[#07332F] text-white">

            <section className="md:flex  gap-20 justify-between p-20 items-center h-full w-full">
               
            <div className=" w-[90%] mx-auto p-10  relative ">
                <img className="md:w-[80%] h-full" src="../../../../public//image/register.png" alt="" />
                <img className="w-1/2 h-[40%] top-0 right-0 absolute" src="../../../../public//image//Frame.png" alt="" />
            </div>

                <div className=" w-full">
                       <h1 className="font-bold mx-auto text-xl text-center pb-10">Sign Up to SOHOJ SEBA</h1>
                   
                    <form  onSubmit={handleSubmit(onSubmit)} className="md:w-[60%] w-full mx-auto flex justify-center mb-3" >
                        <div className="mx-auto w-full  ">
                            <div className="space-y-5">

                                <div>
                                  <input {...register('name',{required:true})} className="w-full rounded bg-[rgba(0,0,0,0.3)] p-4 outline-none " type="text" placeholder="Enter your Name " />
                                  {errors.name?.type === 'required' && <p className='text-red-500 text-[12px] w-full '>please enter your name </p>}
                                </div>

                                <div>
                                   <input {...register('email',{required:true, pattern:/@/})} className="w-full rounded bg-[rgba(0,0,0,0.3)] p-4 outline-none " type="email" placeholder="Enter your Email " />
                                   {errors.email?.type === 'required' && <p className='text-red-500 text-[12px] w-full '>please enter your email </p>}
                                   {errors.email?.type === 'pattern' && <p className='text-red-500  text-[12px] w-full '>invalid email type </p>}
                                </div>
                                
                                <div>
                                   <input {...register('password', {required:true, minLength:6, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])./})} className="w-full rounded bg-[rgba(0,0,0,0.3)] p-4 outline-none " type="password" placeholder="Enter your password " />
                                   {errors.password?.type === 'required' && <p className='text-red-500  text-[12px] w-full '>please enter your password </p>}
                                   {errors.password?.type === 'minLength' && <p className='text-red-500  text-[12px] w-full '>password must be 6 char or longer  </p>}
                                   {errors.password?.type === 'pattern' && <p className='text-red-500  text-[12px] w-full '> password must be atleast one uppercase lowercase,number & special char. </p>}
                                </div>
                   
                                <div>
                                   <input {...register('photo',{required:true})} className="w-full rounded bg-[rgba(0,0,0,0.3)] p-4 outline-none " type="text" placeholder="Enter your photoURL " />
                                   {errors.photo?.type === 'required' && <p className='text-red-500 text-[12px] w-full '>please enter your photo url  </p>}
                                </div>
                               
                                <input className="w-full mt-4 outline-none  rounded border-none bg-[#F7A582] btn-primary btn text-white " type="submit" value={'Create Account'} placeholder="Enter your password " />
                            </div>
                        </div>
                    </form>
                         <Link to={'/login'} className=" mx-auto text-center w-full "> <p>Already registered? Go to SIGN IN</p> </Link>
                </div>


            </section>
        </div>
    );
};

export default Register;