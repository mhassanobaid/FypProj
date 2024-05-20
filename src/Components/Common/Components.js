// Example in your React component file
import styled from 'styled-components';


export const HeaderForContAb = styled.div`
  position: relative;

  video {
    width: ${(props) => (props.fullWidth ? '100vw' : '100%')};
    
    height: ${(props) => (props.fullScreen ? '100vh' : '50vh')};
    z-index: 10000;
  object-fit: cover; 
  }
`;

export const Container = styled.div`
background-color: #fff;
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
top: ${props => (props.top || -65)}px;
overflow: hidden;
width: ${props => (props.width || 678)}px;
max-width: 100%;
min-height: 430px;
right: ${props => (props.right || 0)}px;
`;

export const wlcomeText = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: none;
            position: absolute;
            top: 28px;
            left:100px;

            h4{
                 font-family: comic sans ms;
                 font-size: 20px;
                 margin: 0px;
                 padding: 0px;
                 color: black;
                 background-color: white;
                 
            }
`;

export const SignUpContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinIn !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
`;


export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;

width:${props=>(props.width||50)}%;
right: ${props => (props.right || 340)}px;
z-index: 2;
${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;

`;

export const Formed = styled.form.attrs({
  enctype: "multipart/form-data",
  method: "post", // Add method attribute
  action: "/TCSignUp"
})`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
font-weight: bold;
margin: 0;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
 padding: ${props => props.paddingTB ? `${props.paddingTB}px` : '12px'} ${props => props.paddingLR ? `${props.paddingLR}px` : '15px'};
margin: 8px 0;
width: ${props=>props.wid?`${props.wid}px`:'100%'};
padding-left: 30px

`;

export const TourDetailDv = styled.div`
width: 700px; 
height: 430px;
max-width: 100%;
max-height: 100%;
overflow: hidden;
background-color: wheat;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);



`;
export const OuterTourDet = styled.div`

display: flex;

justify-content: center;
align-items: center;
margin-top: -1vh;

 

`;

export const Footer = styled.div`

background-color: #1172D4;
  color: white;
  padding: 10px;
  
  position: absolute;
  top: 100vh;
  left: 0;
  right: 0;
  width: 100%;
  
  height: 100px;
  background-size:cover; /* or 'contain' depending on your preference */
  background-position:center right;
  background-repeat:no-repeat;

`;

export const FooterContent = styled.div`

display: flex;
  
  align-items: center;

`;

export const FooterNewsLetterSignup=styled.div`

display: flex;
  align-items: center;
  margin-left: 70px;

`;

export const FooterSignupIcon= styled.div`

margin-left: 20px;
  cursor: pointer;
`;

export const FooterRights = styled.div`
margin-left: 350px;
`;

export const FooterAnotherSction = styled.div`

padding: 0px;
  position: absolute;
  left: 80px;
  top:50px;
`;

export const FooterFb = styled.div`

margin: 0px;
  position: absolute;
  left: 250px;
  top: 20px;
  cursor: pointer;

`;







export const TourDetLogo = styled.div`

img{
height: 65px;
  width: 65px;
  position: absolute;
  top: 10px;
  left: 15px;
  background-color: #082848;
  z-index: 30;}

`;

export const TourDetImg=styled.div`
 
 img{
    width: 100vw;
    height: 30vh;
    background-size: cover;
 }
      
 
`;

export const SlideShowContainer=styled.div`
   
   width: ${props => props.width || '100vw'};
  height: ${props => props.height || '25vh'};
  margin: 0 auto;
  z-index: 300;
  background-color: ${props=>props.color || 'none'};
  position: ${props=>props.pos || 'none'};
  left: ${props=>props.left || 'none'};
  top: ${props=>props.top || 'none'};
  

`;



export const Button = styled.button`
   border-radius: 20px;
   /* border: 1px solid #ff4b2b; */
   border: none; 
   /* background-color: #ff4b2b; */
   background-color: #1172D4;
   
   /* color: #ffffff; */
   color: white;
   font-size: 11px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   
   cursor: pointer;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
   &:hover{
          color: #ff4b2b;
          background-color: #ffffff;
          font-weight: bold;
          font-size: 11px;
          border: 1px solid #ff4b2b;
          
   }
`;
export const GhostButton = styled(Button)`
background-color: white;
border-color: #ffffff;
color: #1172D4;

`;

export const Anchor = styled.a`
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #ff416c;
background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
background: linear-gradient(to right, #ff4b2b, #ff416c);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  margin-right: 40px;
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
font-size: 14px;
  font-weight: 100;
  line-height: 18px;
  letter-spacing: 0.4px;
  margin: 20px 0 30px 0px;
`;

export const UserWelcome = styled.p`

color: red;
font-weight: bold;
text-align: center;


`;


export const TourCompanyInfo = styled.div`

     height: 200px;
     width: 250px;
   
     background-color: lightblue;
     position: relative;
     top:70px;
     left:40px;
     max-width: 100%; /* Adjust the maximum width as needed */
  max-height: 100%; /* Adjust the maximum height as needed */
  overflow: hidden;
    h4{
         margin-top:10px;
         margin-left: 60px;
         margin-bottom: 10px;
         padding: 0;
         
    }
    p{
      margin-left: 10px;
      margin-bottom:0px;
      padding: 0px;
    }
    pre{
      margin-left: 10px;
      margin-top: 8px;
      font-size: 16px;
      margin-bottom: 8px;
    }
   h5{
    font-size: 16px;
    margin: 0px;
    padding: 0px;
    position: relative;
    left:40px;
    bottom: 30px
   }
   span{
    position: relative;
    bottom: 17px;
    left:10px
   }
   


`;
export const Roomicon1=styled.div`
          position: relative;
          left: 8px;
          bottom: 18px;
          
`;
export const Roomicon=styled.div`
          position: relative;
          left: 8px;
          
`;

export const BookingDet = styled.div`


height: ${(props) => (props.height ? `${props.height}px` : '350px')};
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  display: inline-block; /* Render as inline block */
  vertical-align: top; /* Align to the top of the line */
  margin-top: ${(props) => (props.mgTop ? `${props.mgTop}px` : '0px')};
  position: relative;
  bottom: ${(props)=>(props.bt?`${props.bt}px`:'155px')};
  left:  ${(props)=>(props.left?`${props.left}px`:'-155px')};
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px;
  padding-right: ${(props)=>(props.pr?`${props.pr}px`: '130px')};

  /* Responsive Styles */
  @media (max-width: 768px) {
    height: auto; /* Adjust height as needed */
    width: 90%; /* Adjust width as needed */
    position: static;
  }

    

`;

export const HDef = styled.div`
   position: relative;
   left:350px;
   text-decoration: underline;
   text-decoration-color: #1172D4 ;
    
          

`;

export const TourCardContainerr = styled.div`
  display: flex;
  
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 10px;
  margin-left: 90px;
  margin-top: 10px;
`;

export const TourCardd = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
    padding:10px;
  width: ${props => (props.width ? props.width : "280px")};
  height: ${props => (props.height ? props.height : "unset")};
  margin-top: 5px;
  margin-top: ${props => (props.marginTop ? props.marginTop : "unset")};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : "unset")};
  
`;
