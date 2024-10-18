import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Searchbar from "./Searchbar";

const DoctorDetails = () => {
  const param = useParams();
  const id = param.id;

  const [searchText, setSearchText] = useState("");
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDoctorDetails();
  }, []);

  async function getDoctorDetails() {
    setLoading(true);
    try {
      const url = `https://raushan736834.github.io/HackthonApi/AllData.json`;
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);
      setDoctor(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="flex flex-col">
      <header className="bg-white shadow flex">
        <Searchbar
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onSearch=""
        />
      </header>
      <div className="mx-20 max-w-24xl px-4 py-6 my-5 sm:px-6 lg:px-8 bg-gray-100 rounded-lg  justify-evenly">
        {(
          doctor?.map((doc) => {
            return (
              <div>
                <div className="flex justify-between">
                  <div className="flex max-w-[85%]">
                    <div>
                      <img
                        src={userLogo}
                        className="rounded-full aspect-square max-w-36 m-10"
                      />
                    </div>
                    <div className="mr-40 ">
                      <h2 className="font-bold text-xl mt-10 text-cyan-800">
                        {doctor_name}
                      </h2>
                      <div>
                        <div className="my-1.5 ">
                          <span className="text-sm ">{specialization}</span>
                        </div>
                        <div className="mb-1.5">
                          <span className="text-sm">
                            {experience_years} years experience overall
                          </span>
                        </div>
                      </div>

                      <div className="border-b-2 border-black">
                        <span className="text-small-big">
                          ₹{consultation_fees} charge/day
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" flex-col mr-20  content-center">
                    <div className="flex justify-center">
                      <div className="">
                        <span>Available Today</span>
                      </div>
                    </div>
                    <div className="">
                      <button
                        className="w-48 py-5 bg-sky-500/100 hover:bg-sky-600 rounded-md text-white font-semibold"
                        onClick={() => handleClick(id, specialization)}
                      >
                        Book Clinic Visit
                      </button>
                    </div>
                  </div>
                </div>
                {selectedId === id && (
                  <AppointmentForm
                    id={selectedId}
                    specialization={selectedSpecialization}
                  />
                )}
              </div>
            );
          })
        )}
      </div>
    </main>
  );
};

export default DoctorDetails;