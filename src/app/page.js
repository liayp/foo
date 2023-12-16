import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          mainHeader={'About us'}
        />
        <div className="font-konten2 max-w-md mx-auto mt-10 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste quos suscipit tempora? Aperiam esse fugiat inventore laboriosam officiis quam rem!
          </p>
          <p>At consectetur delectus ducimus est facere iure molestias obcaecati quaerat vitae voluptate? Aspernatur dolor explicabo iste minus molestiae pariatur provident quibusdam saepe?</p>
          <p>Laborum molestias neque nulla obcaecati odio quia quod reprehenderit sit vitae voluptates? Eos, tenetur.</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          mainHeader={'Contact us'}
        />
        <div className="mt-8 font-konten2">
          <div class="footer-flex-box">
            <div className="footer-table-info">
                <h3 className="h3-title">open hours</h3>
                <ul>
                    <li><i className="uil uil-clock"></i> Mon-Thurs : 9am - 22pm</li>
                    <li><i className="uil uil-clock"></i> Fri-Sun : 11am - 22pm</li>
                </ul>
            </div>
            <div className="footer-menu food-nav-menu">
                <h3 className="h3-title">Links</h3>
                <ul className="column-2">
                    <li>
                        <a href="#home" className="footer-active-menu">Home</a>
                    </li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-menu">
                <h3 class="h3-title">Company</h3>
                <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
