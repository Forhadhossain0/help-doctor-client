

const Footer = () => {
    return (
        <div>
<footer className="footer p-10   w-full mt-20 bg-[#032523] text-gray-200">
  <div className="w-60" >
    <img src="../../../../public/image/logo.png" className="h-16 w-[70%] " alt="" />
    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
    <button className="px-5 py-3 hover:bg-orange-400 transition-all mt-3 border text-lg font-bold rounded-xl border-orange-400">Appointment</button>
  </div> 

  <nav >
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

</footer>
        </div>
    );
};

export default Footer;