

const Footer = () => {
    return (
        <div className="mt-20  h-full  w-full bg-cover bg-no-repeat  md:bg-white md:bg-[url(https://cdn1.vectorstock.com/i/1000x1000/53/00/blue-medical-background-with-text-space-vector-25875300.jpg)]">
<footer className="footer  px-10 md:pt-24 pt-10  pb-10  md:h-full bg-[#1e796d71]  w-full  bg-center  text-gray-200">
  
  <div className="md:w-60 md:mx-auto " >
    <img src="https://i.ibb.co/CsRQNv1/logoup.png" className=" -ml-2 -mt-10 w-[50%] h-[130%] " alt="" />
    <p className="-mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
    <button className="px-5 py-3  hover:bg-orange-400 transition-all mt-3 border text-lg font-bold rounded-xl border-orange-400">Appointment</button>
  </div> 

  <nav >
    <header className=" font-bold text-lg text-white">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className=" font-bold text-lg text-white">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className=" font-bold text-lg text-white">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
  <nav>
    <header className=" font-bold text-lg text-white">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

</footer>
        </div>
    );
};

export default Footer;