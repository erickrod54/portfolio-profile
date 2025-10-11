
/**Portfolio-erick - version 50.01 - FourOFourComponent -
 * Features:
 * 
 *      --> Building 'FourOFourComponent' 
 * 
 * Notes: To substite the legacy body implementation.
 */


const FourOFourComponent = () => {

    return(

        <div class="main_wrapper">
        <div class="main">
            <div class="antenna">
            <div class="antenna_shadow"></div>
            <div class="a1"></div>
            <div class="a1d"></div>
            <div class="a2"></div>
            <div class="a2d"></div>
            <div class="a_base"></div>
            </div>
            <div class="tv">
            <div class="cruve">
                {/**this svg is not rendering */}
                <svg
  class="curve_svg" // Changed 'class' to 'className' for React
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  // REMOVED: xmlns:xlink="http://www.w3.org/1999/xlink" (This caused the error)
  viewBox="0 0 189.929 189.929"
  xmlSpace="preserve" // Changed 'xml:space' to 'xmlSpace' (CamelCase)
>
  <path
    d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
    C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
  ></path>
</svg>

            </div>
            <div class="display_div">
                <div class="screen_out">
                <div class="screen_out1">
                    <div class="screen">
                    <span class="notfound_text"> NOT FOUND</span>
                    </div>
                    <div class="screenM">
                    <span class="notfound_text"> NOT FOUND</span>
                    </div>
                </div>
                </div>
            </div>
            <div class="lines">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <div class="buttons_div">
                <div class="b1"><div></div></div>
                <div class="b2"></div>
                <div class="speakers">
                <div class="g1">
                    <div class="g11"></div>
                    <div class="g12"></div>
                    <div class="g13"></div>
                </div>
                <div class="g"></div>
                <div class="g"></div>
                </div>
            </div>
            </div>
            <div class="bottom">
            <div class="base1"></div>
            <div class="base2"></div>
            <div class="base3"></div>
            </div>
        </div>
        <div class="text_404">
            <div class="text_4041">4</div>
            <div class="text_4042">0</div>
            <div class="text_4043">4</div>
        </div>
        </div>        
    )
}

export default FourOFourComponent;