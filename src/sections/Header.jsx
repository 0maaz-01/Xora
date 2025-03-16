import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    // if we have scrolled more than 32 pixels in Y direction then we will call setHasScrolled function and turn its state to be true
      setHasScrolled(window.scrollY > 32);
    };

    // for browser to track the whether we have scolled or not
    window.addEventListener("scroll", handleScroll);

    // to increase the efficiency we will remove the event listener after the user stops scrolling
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  // We are placing this NavLink inside the const Header so that when we click on any section on NavBar in mobile, the website will first close the navbar and then scroll to the desired part of the page.
  // also in other devices when we reach that section the navbar will highlight that section that is all because 
  // Reusable component that we will use multiple times
  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}   // Header ke andar daalne se ye hua -- jaise hi kisi navbar ke button pe click hua phone pe to pehle navbar band hoga
                                         // bcoz hamne isOpen me false set kr diya fir scroll hoga
      to={title}        // the destination of the link
      offset={-100}
      spy
      smooth
      activeClass="nav-active"   // base-bold makes the text bold 
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  return (
    // for making responsive websites we will keep everything inside header
    <header
      className={clsx(                       // transition all for smoothly changing the color of the navbar
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        // if the user has scrolled more than 32 pixels than turn the color of the navbar to black.
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]",
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>


        {/*With the help of clsx we will show different output according to conditions.*/}
        {/*Initially we will not display the navigation bar for mobiles but if we are on mobile phones or tablets (max-lg) then we will start displaying the navbar*/}
        
        <div                //  this div is added to expand the navbar across the screen with evenly distributed spaces between them
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                
                {/*instead of using div, h1, h3 we will use li to make the websites more responsive*/}
                <li className="nav-li">
                  <NavLink title="features" />
                
                {/*it will seperate two elements in navbar on desktop*/}
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                {/*nav-logo for logos, ye apne aap center pe le aaya*/}
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}            // Offset {-250} will scroll the page to 250 pixels before the target, spy, offset and smooth are from react-scroll. spy helps us to detect on which page we are on, navbar me jis page me h vo wala page highlighted hoga, smooth for smooth scrolling 
                    spy
                    smooth

                    // to hide the logo in mobile devices
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                {/*instead of using div, h1, h3 we will use li to make the websites more responsive*/}
                {/*nav-link for adding a link in the website*/}
                <li className="nav-li">
                {/*it will seperate two elements in navbar on desktop*/}
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>


            {/*for adding the background image in the navbar of a mobile phone or tablet*/}
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              {/*outline of the image*/}
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              {/*filling the image*/}
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>    {/*this div is added to spend the navbar across the screen with evenly distributed spaces between them*/}


        {/*mobile screen pe navigation bar and use close krne ka sign show krne ke liye*/}   
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          
        // previous state ka ulta krdo jab bhi ye button click ho
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;