import { React, useEffect, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useUser } from "../../Components/User/UserContext";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import {
  TourDetailDv,
  OuterTourDet,
  TourDetImg,
  TourDetLogo,
  Button,
  SlideShowContainer,
  TourCompanyInfo,
  Roomicon,
  Roomicon1,
  BookingDet,
} from "../../Components/Common/Components";
import ImageSlideshow from "../../Components/Common/ImageSlideshow";
import logo from "../../Assets/images/logo.png";
import LinkList from "../../Components/Common/LinkList";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Common/Footer";
import congrat from "../../Assets/images/congrats.png";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,

    fontWeight: "bolder",
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
  },
});
const buttonSt = {
  marginLeft: "450px",
};

const TBookingPdf = ({ tourDetails, accountDetails }) => {
  const { user } = useUser();
  const { updateUser } = useUser();
  const navigate = useNavigate();
  const loc = useLocation();
  // const CompDetail = loc.state?.tourCmp ?? {};
  // const mgs = loc.state?.Msg?? false;
  // const [CompDetail, setSucessMsg] = useState(mgs);
  // const bookTourId = loc.state?.BookTourId;
  const { tourCmp, BookTourId } = loc.state;
  console.log("KMLASHAH" + JSON.stringify(tourCmp) + "HERASHA" + BookTourId);
  const [bookedTour, setBookedTour] = useState({});
  const [cancelDet, setCancelDet] = useState(false);
  const [sucessMsg, setSucessMsg] = useState(false);

  const bookedTourss = user?.prefered;

  useEffect(() => {
    if (!user?.selectedTour) {
      navigate("/");
    }
  }, [user, navigate]);

  // const { id,naam, location, image,price, tourists,touristsGoing,totalAmount } = user.bookedTours;
   /*   userid: user.id,
            tourid: tourId,
            title: user.selectedTour.title,
            location: user.selectedTour.location,
            image_url: user.selectedTour.image_url,
            tourists_going: touristsValue,
            total_amount: totalPrice,
            number_of_persons: number_of_persons,
            departure_date: departure_date,
            bookedAt: currentTimeStamp,
            price: price,
            descreption: descreption,
            company_id: company_id */
  useEffect(() => {
    if (user && user.bookedTours) {
      // Assuming you have only one booked tour for simplicity, otherwise, you need to iterate over booked tours
      let foundTour = bookedTourss;
      // Update state with the found tour
      console.log("FOUNDED TOUR in TBOOKINGPDF\n");
      console.log(foundTour);
      setBookedTour(foundTour || {});
      console.log("BOOKED TOUR TBOOKINGPDF");
      console.log(bookedTour);
      console.log(user);
    }
  }, [user, BookTourId, bookedTourss]);
  /*  userid: user.id,
          tourid: tourId,
          title: title, // Using the correct local variables
          location: location, // Using the correct local variables
          image_url: image_url, // Using the correct local variables
          tourists_going: touristsValue,
          total_amount: totalPrice,
          departure_date: departure_date,
          bookedAt: currentTimeStamp,
          price: price,
          descreption: descreption,
          company_id: company_id,
          number_of_persons: number_of_persons, */
  const {
    bookedAt,
    departure_date,
    descreption,
    image_url,
    location,
    number_of_persons,
    price,
    title,
    total_amount,
    tourid,
    tourists_going,
    number_of_days
  } = bookedTour;
  const handleCancel = async () => {
              
    try {
      // Send a POST request to the server to delete the tour
      const response = await fetch("http://localhost:8199/ppppp/Demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tourId: tourid,
          userId: user.id,
          touristGoing: tourists_going,
          action: "cancelTour",
        }), // Send the tourId to be deleted
      });

      if (response.ok) {
        // If the deletion is successful, update the user's bookedTours array
        updateUser((user) => ({
          ...user,
          bookedTours: user.bookedTours.filter(
            (tour) => tour.tourid !== tourid
          ),
        }));
        setCancelDet(true); // Set tourCancelled state to true
      } else {
        console.error("Error: Failed to cancel tour");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // navigate('/');
  };

  const handleSuccess = async () => {
    console.log("INSIDE HANDLE SUCCESS (*_*)\n");
    const currentTimeStamp = new Date().toISOString();
    console.log(
      "Current Date and Time: when book is clicked",
      currentTimeStamp
    );
    console.log(
      "I am in TbookingPDF Book Package button showing tourId " + tourid
    ); //line 47
    console.log(
      "I am in TbookingPDF Package button showing userId " + user.id
    ); //userid

    const updatedUser = { ...user };
    updatedUser.bookedTours = updatedUser.bookedTours ?? [];
    // let userid = user.id;
    let status = "booked";
    let userid = user.id;
    const objj = {
      userid: userid,
      image_url: image_url,
      tourId: tourid,
      title: title,
      price: price,
      location: location,
      number_of_persons: number_of_persons,
      touristsValue: tourists_going,
      totalPrice: total_amount,
      departure_date: departure_date,
    };
  

    try {
      const response = await fetch("http://localhost:8199/ppppp/Demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...objj, action: "bookTour" }), // Adding action property
      });

      if (response.ok) {
        updatedUser.bookedTours.push({
          userid: userid,
          tourid: tourid,
          title: title,
          image_url: image_url,
          location: location,
          tourists_going: tourists_going,
          total_amount: total_amount,
          departure_date: departure_date,
          bookedAt: currentTimeStamp,
          price: price,
          number_of_days: number_of_days
         
        });
        setSucessMsg(true);
        console.log("Success: Data sent successfula");
        console.log("Me TbookPrint ke book tour wala button se hun");
        // console.log("USER SESSIOM<>:-__-" + JSON.stringify(user));
        // navigate("/");
      } else {
        console.error("Error: Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("Me in TBooking showing user");
    console.log(user);
  };
  const handleCancelDetail = () => {
    navigate("/tbooking", { state: { tourCmp, tourId:tourid } });
  };
  const divSt = {
    width: "500px",
    height: "300px",
    position: "relative",
    left: "30vw",
    top: "-130px",
    border: "1px solid rgba(0, 0, 0, 0.6)",
    overflow: "hidden",
  };
  const handleSuces = () => {
    navigate("/");
  };
  const handleDash = () => {
    navigate("/");
  };

  return (
    <>
      {" "}
      <TourDetLogo>
        <img src={logo} alt="" />
      </TourDetLogo>
      <LinkList />
      <SlideShowContainer>
        <ImageSlideshow interval={2000} />
      </SlideShowContainer>
      <LinkList />
      <TourCompanyInfo>
        <h4>{tourCmp.company_name}</h4>
        <p>{location}</p>
        <pre>12 reviews</pre>
        <Roomicon>
          <LocalParkingIcon fontSize="large"></LocalParkingIcon>
        </Roomicon>
        <h5>Free Parking</h5>
        <Roomicon1>
          {" "}
          <Diversity3Icon fontSize="large"></Diversity3Icon>
        </Roomicon1>
        <span>
          <h5>Family rooms</h5>
        </span>
      </TourCompanyInfo>
      {cancelDet && (
        <>
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
        </>
      )}
      {!cancelDet && (
        <>
          {!sucessMsg && (
            <>
              <PDFDownloadLink style={{marginTop:"-190px",position:"absolute",left:"330px"}}
                document={
                  <MyPDFDocument bookedTour={bookedTour} tourCmp={tourCmp} />
                }
                fileName="booking_details.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Download PDF"
                }
              </PDFDownloadLink>
              <PDFViewer
                style={{ width: "70%", height: "50vh", marginTop: "-160px",marginLeft:"324px" }}
              >
                <MyPDFDocument bookedTour={bookedTour} tourCmp={tourCmp} />
              </PDFViewer>
            </>
          )}
          {sucessMsg && (
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
                Congratulations tour booked Successfully
              </pre>
              <Button
                onClick={handleSuces}
                style={{ marginTop: "30vh", marginLeft: "8px" }}
              >
                Move to Dashboard
              </Button>
              <Button style={{ marginLeft: "50px" }} onClick={handleCancel}>
                Cancel Detail
              </Button>
            </div>
          )}
          {!sucessMsg && (
            <>
              <Button style={buttonSt} onClick={handleSuccess}>
                Book Tour
              </Button>
              <Button
                style={{ marginLeft: "50px" }}
                onClick={handleCancelDetail}
              >
                Cancel Detail
              </Button>
            </>
          )}
        </>
      )}
      <Footer Top={130} />
    </>
  );
};
const MyPDFDocument = ({ bookedTour, tourCmp }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Tour Booking Details</Text>
        <Text style={styles.detail}>Tour Name: {bookedTour.title || ""}</Text>
        <Text style={styles.detail}>Location: {bookedTour.location || ""}</Text>
        <Text style={styles.detail}>
          Price per Tourist: ${bookedTour.price || ""}
        </Text>
        <Text style={styles.detail}>
          Number of Tourists Allowed in package:{" "}
          {bookedTour.number_of_persons || ""}
        </Text>
        <Text style={styles.detail}>
          Number of Tourists going in package: {bookedTour.tourists_going || ""}
        </Text>
        <Text style={styles.detail}>
          Total Amount to Pay: ${bookedTour.total_amount || ""}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Company Account Details</Text>
        <Text style={styles.detail}>Company Name: {tourCmp.company_name}</Text>
        <Text style={styles.detail}>
          Account Number: {tourCmp.account_number}
        </Text>
        <Text style={styles.detail}>Bank Name: {tourCmp.bank_name}</Text>
        <Text style={styles.detail}>
          Account Holder: {tourCmp.account_holder}
        </Text>
        <Text style={styles.detail}>Account Holder CNIC: {tourCmp.cnic}</Text>
      </View>
    </Page>
  </Document>
);
export default TBookingPdf;
