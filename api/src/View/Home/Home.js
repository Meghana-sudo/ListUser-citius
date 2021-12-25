
import React, { useEffect, useState } from "react";
import DisplayInfo from "./../../components/DisplayInfo/DisplayInfo";

const Home = () => {
  const [infos, setInfos] = useState([]);
  console.log(infos);
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("male and female");
  const[uage,setAge]=useState(100);
  const[maxAge,setmaxAge]=useState(0);

  useEffect(() => {
    fetch(
      `https://randomuser.me/api/?nat=${country}&gender=${gender}&results=100`
    )
      .then((res) => res.json())
      .then((data) => setInfos(data.results));
  }, [country, gender,uage]);


  console.log(uage)

  function changeAge(){
    setmaxAge(18)
    setAge(0)
  }

  function changeAgeTeen(){
    setAge(30)
    setmaxAge(18)
  }

  function changeAgeDefault(){
    setAge(100)
  }

  function changeAgeAdult(){
    setAge(100)
    setmaxAge(30)
  }

  return (
    <section className="bg-secondary">
      <div className="container">
        <h1 className="py-5 text-center fw-bold text-uppercase text-white">
          Users Info
        </h1>
        <h4 className="text-white">Total Users: {infos.length}</h4>

        <div className="row mb-4">
          <div className="col-md-4">
            <div className="d-flex">
              <select
                class="form-select mr-4 w-50"
                onChange={(e) => setCountry(e.target.value)}
                aria-label="Default select example"
              >
                <option defaultValue>Select Country</option>
                <option value="AU">Australia</option>
                <option value="US">USA</option>
                <option value="BR">Brazil</option>
                <option value="DK">Denmark</option>
                <option value="TR">Turkey</option>
              </select>{" "}
              <select
                class="form-select mx-3 w-50"
                onChange={(e) => setGender(e.target.value)}
                aria-label="Default select example"
              >
                <option defaultValue>Male and Female</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <button className="btn btn-outline-light mx-2" onClick={changeAgeDefault}>All</button>
            <button className="btn btn-outline-light mx-2" onClick={changeAge}>0-18</button>
            <button className="btn btn-outline-light mx-2" onClick={changeAgeTeen}>18-30</button>
            <button className="btn btn-outline-light mx-2" onClick={changeAgeAdult}>30+</button>
          </div>
          <div className="col-md-4">
            <h5 className="mx-4 text-white">
              Displaying  for{" "}
              <span className="text-warning text-capitalize">{gender}</span>
            </h5>
          </div>
        </div>

        <div className="row">
       
          {
            infos.filter((item)=>item.dob.age<=uage&& item.dob.age>maxAge).map((info) => (
            <DisplayInfo info={info} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
