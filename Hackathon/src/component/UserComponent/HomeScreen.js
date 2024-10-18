// import defaultDoctorImage from "../../assets/img/img1.jpeg";
// import defaultDoctorImage1 from "../../assets/img/img2.jpeg";
// import defaultDoctorImage2 from "../../assets/img/img3.jpeg";
// import AppointmentForm from "./AppointmentForm";
// import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../UserComponent/ExampleCarouselImage';
// import userLogo from "../../assets/img/user.jpeg";
// import { useEffect } from "react";
// import Shimmer from "../UserComponent/Shimmer";



// const HomeScreen = ({
//     id,
//     profile_photo,
//     experience_years,
//     locality,
//     specialization,
//     consultation_fees,
//     clinic_name,
//     city,
// }) => {
    
//     const [searchText, setSearchText] = useState("");
//     const [doctor, setDoctor] = useState(null);
//     const [doctor_name,setDoctorName] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [selectedId, setSelectedId] = useState(null);
//     const [selectedSpecialization, setSelectedSpecialization] = useState(null);
    

//     const [index, setIndex] = useState(0);  // Moved the carousel index state here
//     useEffect(() => {
//         getDoctorDetails();
//     }, []);

//     async function getDoctorDetails() {
//         setLoading(true);
//         try {
//             const url = `https://raushan736834.github.io/HackthonApi/AllData.json`
            
//             ;
//             const response = await fetch(url);
//             const json = await response.json();
//             console.log(json);
//             setDoctor(json);  // Assuming setDoctor is used to store the entire doctor object
//             setDoctorName(json.doctor_name); // Assuming setDoctorName is used for only the doctor's name
//             console.log(json.doctor_name); // Log the doctor name from the response directly
//         } catch (error) {
//             setError(error); // Handle error case
//         } finally {
//             setLoading(false); // Set loading state back to false once complete
//         }
//     }
//     if (loading) {
//         return <Shimmer />;
//       }
    
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       }

//     const handleClick = (id, specialization) => {
//         if (selectedId === id) {
//             setSelectedId(null);
//             setSelectedSpecialization(null); // Hide the form if it's already open
//         } else {
//             setSelectedId(id);
//             setSelectedSpecialization(specialization); // Show the form if it's not open
//         }
//     };

//     const handleSelect = (selectedIndex) => {
//         setIndex(selectedIndex);
//     };

//     return (
//         < div className="bg-white m-3 max-w-20xl hover:bg-gray-300 rounded-xl" >
//             {console.log(doctor)}
//             <div className="mt-8">
//                 <Carousel activeIndex={index} onSelect={handleSelect} interval={2000} pause="hover" wrap={true}>
//                     <Carousel.Item>
//                         <ExampleCarouselImage text="First slide" imageUrl={defaultDoctorImage} />
//                         <Carousel.Caption>
//                             <h3>First slide label</h3>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <ExampleCarouselImage text="Second slide" imageUrl={defaultDoctorImage1} />
//                         <Carousel.Caption>
//                             <h3>Second slide label</h3>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <ExampleCarouselImage text="Third slide" imageUrl={defaultDoctorImage2} />
//                         <Carousel.Caption>
//                             <h3>Third slide label</h3>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                 </Carousel>
//             </div>
//             <div className="mx-20 max-w-24xl px-4 py-6 my-5 sm:px-6 lg:px-8 bg-gray-100 rounded-lg  justify-evenly">
//                 {(
//                     doctor?.map((doc) => {
//                         return (
//                             <div>
//                                 <div className="flex justify-between">
//                                     <div className="flex max-w-[85%]">
//                                         <div>
//                                             <img
//                                                 src={userLogo}
//                                                 className="rounded-full aspect-square max-w-36 m-10"
//                                             />
//                                         </div>
//                                         <div className="mr-40 ">
//                                             <h2 className="font-bold text-xl mt-10 text-cyan-800">
//                                                 {doctor?.doctor_name}
//                                                 {console.log(doctor?.doctor_name)}
//                                             </h2>
//                                             <div>
//                                                 <div className="my-1.5 ">
//                                                     <span className="text-sm ">{specialization}</span>
//                                                 </div>
//                                                 <div className="mb-1.5">
//                                                     <span className="text-sm">
//                                                         {doctor?.experience_years} years experience overall
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             <div className="border-b-2 border-black">
//                                                 <span className="text-small-big">
//                                                     ₹{consultation_fees} charge/day
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className=" flex-col mr-20  content-center">
//                                         <div className="flex justify-center">
//                                             <div className="">
//                                                 <span>Available Today</span>
//                                             </div>
//                                         </div>
//                                         <div className="">
//                                             <button
//                                                 className="w-48 py-5 bg-sky-500/100 hover:bg-sky-600 rounded-md text-white font-semibold"
//                                                 onClick={() => handleClick(id, specialization)}
//                                             >
//                                                 Book Clinic Visit
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {selectedId === id && (
//                                     <AppointmentForm
//                                         id={selectedId}
//                                         specialization={selectedSpecialization}
//                                     />
//                                 )}
//                             </div>
//                         );
//                     })
//                 )}
//             </div>

//         </div>
//     );
// };

// export default HomeScreen;
import defaultDoctorImage from "../../assets/img/img1.jpeg";
import defaultDoctorImage1 from "../../assets/img/img2.jpeg";
import defaultDoctorImage2 from "../../assets/img/img3.jpeg";
import AppointmentForm from "./AppointmentForm";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../UserComponent/ExampleCarouselImage';
import userLogo from "../../assets/img/user.jpeg";
import Shimmer from "../UserComponent/Shimmer";

const HomeScreen = () => {
    const [searchText, setSearchText] = useState("");
    const [doctor, setDoctor] = useState([]);
    const [doctor_name, setDoctorName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedSpecialization, setSelectedSpecialization] = useState(null);
    const [index, setIndex] = useState(0);  // Carousel index

    useEffect(() => {
        getDoctorDetails();
    }, []);

    async function getDoctorDetails() {
        setLoading(true);
        try {
            const url = `https://raushan736834.github.io/HackthonApi/AllData.json`;
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setDoctor(json);  // Store the array of doctor objects
        } catch (error) {
            setError(error); // Handle error case
        } finally {
            setLoading(false); // Set loading state back to false once complete
        }
    }

    if (loading) {
        return <Shimmer />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleClick = (id, specialization) => {
        if (selectedId === id) {
            setSelectedId(null);
            setSelectedSpecialization(null); // Hide the form if it's already open
        } else {
            setSelectedId(id);
            setSelectedSpecialization(specialization); // Show the form if it's not open
        }
    };

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="bg-white m-3 max-w-20xl hover:bg-gray-300 rounded-xl">
            {console.log(doctor)}
            <div className="mt-8">
                <Carousel activeIndex={index} onSelect={handleSelect} interval={2000} pause="hover" wrap={true}>
                    <Carousel.Item>
                        <ExampleCarouselImage text="First slide" imageUrl={defaultDoctorImage} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Second slide" imageUrl={defaultDoctorImage1} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Third slide" imageUrl={defaultDoctorImage2} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="mx-20 max-w-24xl px-4 py-6 my-5 sm:px-6 lg:px-8 bg-gray-100 rounded-lg justify-evenly">
                {doctor?.map((doc) => {
                    return (
                        <div key={doc.id}>
                            <div className="flex justify-between">
                                <div className="flex max-w-[85%]">
                                    <div>
                                        <img
                                            src={ userLogo}  // Use doctor profile photo if available
                                            className="rounded-full aspect-square max-w-36 m-10"
                                        />
                                    </div>
                                    <div className="mr-40">
                                        <h2 className="font-bold text-xl mt-10 text-cyan-800">
                                            {doc.doctor_name}
                                        </h2>
                                        <div>
                                            <div className="my-1.5">
                                                <span className="text-sm">{doc.specialization}</span>
                                            </div>
                                            <div className="mb-1.5">
                                                <span className="text-sm">
                                                    {doc.experience_years} years experience overall
                                                </span>
                                            </div>
                                        </div>

                                        <div className="border-b-2 border-black">
                                            <span className="text-small-big">
                                                ₹{doc.consultation_fees} charge/day
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex-col mr-20 content-center">
                                    <div className="flex justify-center">
                                        <div>
                                            <span>Available Today</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="w-48 py-5 bg-sky-500/100 hover:bg-sky-600 rounded-md text-white font-semibold"
                                            onClick={() => handleClick(doc.id, doc.specialization)}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {selectedId === doc.id && (
                                <AppointmentForm id={selectedId} specialization={selectedSpecialization} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomeScreen;