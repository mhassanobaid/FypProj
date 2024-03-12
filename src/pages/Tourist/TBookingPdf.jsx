import {React,useEffect,useState} from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer,PDFDownloadLink } from '@react-pdf/renderer';
import { useUser } from '../../Components/User/UserContext';
import { TourDetailDv,OuterTourDet,TourDetImg,TourDetLogo,Button,SlideShowContainer,TourCompanyInfo,Roomicon,Roomicon1,BookingDet } from '../../Components/Common/Components';
import ImageSlideshow from '../../Components/Common/ImageSlideshow';
import logo from '../../Assets/images/logo.png';
import LinkList from '../../Components/Common/LinkList';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Common/Footer';
import congrat from '../../Assets/images/congrats.png';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
  },
});
const buttonSt = {
   marginLeft: '450px',

}

const TBookingPdf = ({ tourDetails, accountDetails }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const loc = useLocation();
  const CompDetail = loc.state?.CompDet ?? {};
  const mgs = loc.state?.Msg?? false;
  const [sucessMsg, setSucessMsg] = useState(mgs);
  const bookTourId = loc.state?.BookTourId;
  const [bookedTour, setBookedTour] = useState({});
  const { updateUser } = useUser();
  const [cancelDet,setCancelDet] = useState(false);
  

  const bookedTourss = user?.bookedTours;
   
  useEffect(() => {
    if (!user || !user.selectedTour) {
      navigate('/');
    }}, [user, navigate]);
  // const { id,naam, location, image,price, tourists,touristsGoing,totalAmount } = user.bookedTours;
  useEffect(() => {
    if (user && user.bookedTours) {
      // Assuming you have only one booked tour for simplicity, otherwise, you need to iterate over booked tours
      let foundTour = bookedTourss.find(tour => tour.id === bookTourId);
      // Update state with the found tour
      console.log(foundTour);
      setBookedTour(foundTour || {});
      console.log(bookedTour);
      
     }
  }, [user, bookTourId, bookedTourss]);
  const handleCancel = () => {
    
    console.log(bookTourId);
    updateUser((user) => ({
      ...user,
      bookedTours: user.bookedTours.filter((tour) => tour.id !== bookTourId),

    }));
    setCancelDet(true);
    // navigate('/');
  };
 
  const handleSuccess = ()=>{
  
    setSucessMsg(true);

  }
  const divSt = {

    width: '500px',
    height: '300px',
    position: 'relative',
    left: '30vw',
    top: '10px',
    border: '1px solid rgba(0, 0, 0, 0.6)',
    overflow: 'hidden'
    
     
  }
  const handleSuces=()=>{
     navigate('/');
    
  }
  const handleDash=()=>{
    navigate('/');
  }

  return (
   <> <TourDetLogo>
    <img src={logo} alt="" /></TourDetLogo>
    <LinkList  />
    <SlideShowContainer>
      <ImageSlideshow interval={2000} />
      </SlideShowContainer>
      <LinkList  />
      {cancelDet && (<>
        <div style={divSt}>
          <img src={congrat} style={{ height: "40px", width: "40px" }} />
          <pre
            style={{
              display: "inline",
              position: "relative",
              top: "-16px",
              fontSize: "20px",
            }}
          >
            Tour cancelled successfully
          </pre>
          <Button
            onClick={handleDash}
            style={{ marginTop: "30vh", marginLeft: "8px" }}
          >
            Move to Dashboard
          </Button>
        </div>
      </>)}
      {!cancelDet && (<>
    { !(sucessMsg) && (<>
          <PDFDownloadLink document={<MyPDFDocument bookedTour={bookedTour} CompDetail={CompDetail} />} fileName="booking_details.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
          </PDFDownloadLink>
          <PDFViewer style={{ width: '100%', height: '50vh', marginTop: '5px' }}>
            <MyPDFDocument bookedTour={bookedTour} CompDetail={CompDetail} />
          </PDFViewer>
        </>)}
    {sucessMsg && (
      <div style={divSt}>
            <img src={congrat} style={{height:'40px',width:'40px'}}/>
              <pre style={{display:'inline',position:'relative',top:'-16px',fontSize:'20px'}}>Congratulations tour booked Successfully</pre>
              <Button onClick={handleSuces} style={{marginTop:'30vh',marginLeft:'8px'}}>Move to Dashboard</Button>
              <Button style={{marginLeft:'50px'}} onClick={handleCancel}>Cancel Tour</Button>
      </div>
    )}
    { !(sucessMsg) &&  (<><Button style={buttonSt} onClick={handleSuccess}>Book Tour</Button><Button style={{marginLeft:'50px'}} onClick={handleCancel}>Cancel Tour</Button></>)
    }
</>)}
    <Footer Top={130}/>
  </>
  );
};
const MyPDFDocument = ({ bookedTour, CompDetail }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Tour Booking Details</Text>
        <Text style={styles.detail}>Tour Name: {bookedTour.naam || ''}</Text>
        <Text style={styles.detail}>Location: {bookedTour.location || ''}</Text>
        <Text style={styles.detail}>Price per Tourist: ${bookedTour.price || ''}</Text>
        <Text style={styles.detail}>Number of Tourists Allowed in package: {bookedTour.tourists || ''}</Text>
        <Text style={styles.detail}>Number of Tourists going in package: {bookedTour.touristsGoing || ''}</Text>
        <Text style={styles.detail}>Total Amount to Pay: ${bookedTour.totalAmount || ''}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Company Account Details</Text>
        <Text style={styles.detail}>Account Number: {CompDetail.accountNumber}</Text>
        <Text style={styles.detail}>Bank Name: {CompDetail.bankName}</Text>
        <Text style={styles.detail}>Account Holder: {CompDetail.accountHolder}</Text>
      </View>
    </Page>
  </Document>
);
export default TBookingPdf;