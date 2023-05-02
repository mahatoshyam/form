import axios from "axios";
import React, { useEffect } from "react";
export default function Home() {
  const [first, setfirst] = React.useState({
    name: "",
    email: "",
    description: "",
    value: [],
    loading: true,
  });

  const getResponse = async (e) => {
    e.preventDefault();
    try {
      setfirst((prev) => ({
        ...prev,
        loading: true,
      }));
      const res = await axios.post(`${window.location.origin}/api/form`, {
        name: first.name,
        email: first.email,
        description: first.description,
      });
      alert("Your form was successfully Submitted");

      document.getElementById("resett").click();
      getValues();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getValues = async () => {
    setfirst((prev) => ({
      ...prev,
      loading: true,
    }));

    const res = await axios(`${window.location.origin}/api/form`);
    setfirst((prev) => ({
      ...prev,
      value: res.data,
      loading: false,
    }));
  };

  useEffect(() => {
    getValues();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <form onSubmit={getResponse}>
          <div className="px-4 mt-3 mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              required
              className="form-control"
              value={first.name}
              onChange={(e) => {
                setfirst({
                  ...first,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="px-4 mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={first.email}
              required
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={(e) => {
                setfirst({
                  ...first,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="px-4 mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              required
              value={first.description}
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => {
                setfirst({
                  ...first,
                  description: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
            <button
              type="reset"
              id="resett"
              className="btn btn-danger me-4"
              onClick={(e) => {
                setfirst({
                  ...first,
                  name: "",
                  email: "",
                  description: "",
                });
              }}
            >
              Reset
            </button>
          </div>
        </form>

        {first?.loading ? (
          <div className="text-center container-fluid">
            <h3>Fetching Details...</h3>
          </div>
        ) : (
          <>
            {first?.value?.length > 0 ? (
              <div className="table mt-3 container-fluid ">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {first?.value?.map((e) => {
                      return (
                        <tr key={e.id}>
                          <th scope="row">{e?.id}</th>
                          <td>{e?.name}</td>
                          <td>{e?.email}</td>
                          <td>{e?.description}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <h3 className="mt-5 text-center">No Data Available</h3>
            )}
          </>
        )}
      </div>
    </>
  );
}
