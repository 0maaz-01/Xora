import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
            <div>
                <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
                    Curiosity Didn't Kill the Cat, But It Did Bring You Here.
                </h3> 
                {/*body-1 is a custom utility class*/}
                <p className="body-1 max-lg:max-w-sm">
                    You've got questions, we've got answers.
                </p>
            </div>
          
          {/*To build a partially visible line that connects faqs with price section*/}
          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
            <div className="container flex gap-10 max-lg:block">
                
                {/*Creating the icon for the image*/}
                <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
                  <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
                </div>


                {/*The next two divs will basically divide the faqs into into two parts to display them on the screen*/}

                {/*To display the first half faq on the left portion of the screen.*/}
                <div className="relative flex-1 pt-24">
                  {faq.slice(0, halfLength).map((item, index) => (
                    <FaqItem key={item.id} item={item} index={index} />
                    ))}
                </div>
                
                {/*To display the second half faq on the right portion of the screen.*/}
                <div className="relative flex-1  lg:pt-24">
                    {faq.slice(halfLength).map((item, index) => (
                      // FaqItem is the component in FaqItem.jsx 
                      <FaqItem key={item.id} item={item} index={halfLength + index} />
                    ))}
                </div>
            </div>
            
            {/*To create a line that seperates the two faq portion of the screen only on desktop */}
            <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;