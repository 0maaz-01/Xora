import clsx from "clsx";
import { useState } from "react";

// We need to import both of these libraries to make SlideDown work properly
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);

  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">

        {/*This div will wrap our all questions inside it.*/}
        <div
            className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"

            /*If we are clicking on the question that is already selected or opened then unselect it or close it.*/
            onClick={() => { setActiveId(activeId === item.id ? null : item.id)}} >

            <div className="flex-1">   {/* flex-1 helps the element to expand nicely*/}

                {/*To display the numbers along with the questions*/}
                <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
                    {index < 10 ? "0" : ""}   {/*Agr 10 se chota h to aage zero laga do*/}
                    {index}
                </div>
                
                {/*To display the questions on the screen*/}
                <div
                    className={clsx(
                      "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
                      active && "max-lg:text-p1",
                  )}
                  >
                    {item.question}
                </div>
            </div>

            <div
              className={clsx( // faq-icon represents the plus sign that we convert to a minus sign
                "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
                // if the question is clicked then rotate the vertical bar in the plus sign horizontally.
                active && "before:bg-p1 after:rotate-0 after:bg-p1",
              )}
            >
                <div className="g4 size-11/12 rounded-full shadow-300" />
            </div>
      </div>
          
          {/*To display the answers of the question on the screen*/}
          {/*SlideDown Component imported from slidedown library*/}
          <SlideDown>
              {activeId === item.id && (
                <div className="body-3 px-7 py-3.5">{item.answer}</div>
              )}
          </SlideDown> 
        
        {/*Adding effects to the box while displaying the answer on the screen.*/}
        <div
          className={clsx(
            "g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute",
            // if the user has clicked on the question then we will change the color of the entire box
            active && "opacity-100",
          )}
        > 
            {/*To change the color if the box while displaying the answers*/}
            <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
            {/*Answer box ke starting me light blue wali higlighted line banane ke liye*/}
            <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
        </div>
    </div>
  );
};
export default FaqItem;