import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { isAbsolute } from "path/posix";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          mainHeader={'Our Location'}
        />
        <div className="max-w-md mx-auto mt-10 flex flex-col gap-4">
        
          <iframe src="https://www.google.com/maps/dir//Cafe+%26+Resto+Coconut+Beach/data=!4m8!4m7!1m0!1m5!1m1!1s0x327ea58584878f7b:0xe986a501ebdd25a8!2m2!1d123.27139369999999!2d0.9156591"></iframe>
              
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          mainHeader={'Contact us'}
        />
        <div className="mt-14 text-left">
          <div className="footer-flex-box flex flex-wrap">          
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h2 className="text-lg font-serif font-extrabold mb-4">Our Location</h2>
                <p className="text-slate-800">Boroko Utara</p>
                <p className="text-slate-800">Jalan Trans Sulawesi</p>
                <p className="text-slate-800">Kaidipang </p> 
                <p className="text-slate-800">North Bolaang Mongondow Regency</p>
                <p className="text-slate-800">North Sulawesi 95765</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h2 className="text-lg font-serif font-extrabold mb-4">Connect With Us</h2>
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                      
                    </a>
                    <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                        
                    </a>
                    <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                      
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/3">
                <h2 className="text-lg font-serif font-extrabold mb-4">Operating Hours</h2>
                <p className="text-slate-800">Monday - Friday: 9 AM - 6 PM</p>
                <p className="text-slate-800">Saturday: 10 AM - 4 PM</p>
                <p className="text-slate-800">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
