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
       
        let role = 'user'
        createUser(data.email,data.password)
        .then(res=> {
            const lowercasedEmail = data.email.toLowerCase();
            const userInfo = {displayName:data.name,  email:lowercasedEmail,  photoURL: res.user.photoURL, role}

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
        <div className="md:h-[120vh] h-auto w-full bg-[#8d017a] bg-no-repeat bg-[#6a298893] bg-cover bg-[url('https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148429738.jpg?w=740&t=st=1701457885~exp=1701458485~hmac=9dc009e1de6c915922f758e5235a8dfc2a2de81439167fb86701f714c46b3437')] text-white">
         {/* <div className="md:h-[120vh] h-auto w-full bg-[#018d4c] bg-no-repeat  bg-cover  text-white"> */}

            <section className="md:flex  gap-28 justify-between p-28 items-center h-full w-full">
               
  
                <div className=" w-full md:w-[55%] rounded-xl px-8 pt-4 h-[88%] border bg-[#ff5ff721] ">
                       <h1 className="font-bold mx-auto text-xl text-center pb-5">Sign Up to SOHOJ SEBA</h1>
                   
                    <form  onSubmit={handleSubmit(onSubmit)} className=" w-full mx-auto flex justify-center mb-3" >
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
                               
                                <input className="w-full mt-4 outline-none  rounded border-none hover:bg-[#d6d6d6] btn-primary bg-white btn text-purple-700 " type="submit" value={'Create Account'} placeholder="Enter your password " />
                            </div>
                        </div>
                    </form>
                         <Link to={'/login'} className=" mx-auto text-center w-full "> <p>already registered? <span className="underline">please login</span></p> </Link>
                </div>


             <div className=" w-[90%] mx-auto p-10  relative ">
                <img className="md:w-[70%] h-full" src="https://i.ibb.co/PY669Xh/register.png" alt="" />
                <img className="w-[30%] h-[30%] top-0 right-10 absolute" src="https://i.ibb.co/NsBwh0y/Frame.png" alt="" />
            </div>

            </section>
        </div>
    );
};

export default Register;