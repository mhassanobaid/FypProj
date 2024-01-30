
import React, { useEffect } from 'react';
import RSCss from '../User/ReviewSliderCss.module.css';


export default function ReviewSlider() {




  return (
    


        <div >
          <section className={RSCss.revieW}>
            <div className={RSCss.reviewSlider}>
                    <div className={RSCss.wrapper}>
                        <div className={RSCss.boxReview}>
                          <div className={RSCss.inlineElements}> 
                          <img src={'/icons/touristIcon.png'} className={RSCss.cicularImage}></img>
                           <p >Alpha</p>
                           </div>
                           <pre >Embarking on the Murree tour was an absolute delight! From the breathtaking landscapes to the seamless organization, every moment was filled with awe and wonder.</pre>
                    
                      </div>
                    <div className={RSCss.boxReview}>
                    <div className={RSCss.inlineElements}> 
                          <img src={'/icons/touristIcon.png'} className={RSCss.cicularImage}></img>
                           <p >Beta</p>
                           </div>
                           <pre >The attention to detail and friendly tour guides made the experience truly memorable. Our group enjoyed the perfect balance of adventure, relaxation, and cultural exploration. The accommodations were top-notch, and the carefully crafted itinerary allowed us to discover hidden gems in every destination.</pre>
                    </div>
                    <div className={RSCss.boxReview}>
                    <div className={RSCss.inlineElements}> 
                          <img src={'/icons/touristIcon.png'} className={RSCss.cicularImage}></img>
                           <p >Alpha</p>
                           </div>
                           <pre >It was an unforgettable adventure that left us with lasting memories and a desire to explore more withThank you for the incredible journey, and we look forward to our next adventure with your exceptional team!</pre>
                    </div>

                    </div>
             </div>
          </section>
                

        </div>
    
  )
}
