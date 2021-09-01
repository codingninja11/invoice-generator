import { useState, useEffect } from "react";
import "./App.css";
import Table from "./Tab";

function App() {
  const [bucket, setBucket] = useState([]); //hooks(array)
  const [sum, setSum] = useState(0);
  const [tax, setTax] = useState(0);

  const addItem = (e) => {
    const data = {
      id: e.target.form[0].value,
      name: e.target.form[1].value,
      quantity: parseInt(e.target.form[2].value),
      rate: parseInt(e.target.form[3].value),
      amount: parseInt(e.target.form[4].value),
    };
    setBucket([...bucket, data]); //spread operator for restoring
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < bucket.length; i++) {
      totalVal += bucket[i].amount; // for total billing
    }
    setSum(totalVal);
  };

  useEffect(() => {
    total();
  }, [bucket, total]);

  return (
    <>
      <div
        style={{
          overflowX: "hidden",
          overflowY: "auto",
          minHeight: "90vh",
          padding: "1rem",
          backgroundColor: "#F4F7EA",
          backgroundImage: `url('bg.jpg')`,
        }}
      >
        {/* header */}
        <div
          className="header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="logo">
            <img src="./logo.png" alt="LOGO" width="90px" height="60px" />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <div style={{ textAlign: "center" }} className="marginBottom">
              <b>TAX INVOICE</b>
            </div>
            <div>
              Invoice Number : <input type="text" placeholder="#"/>
            </div>
          </div>
        </div>

        {/* form */}
        <form action="">
          <div className="form">
            <div className="from marginBottom">From,</div>
            <div className="address marginBottom">
              Address Line 1 : <input type="text" />
            </div>
            <div className="address marginBottom">
              Address Line 2 : <input type="text" />
            </div>
            <div className="state marginBottom">
              {" "}
              State : {" "}
              <select>
                <option value="0">Select State:</option>
                <option value="1">Bihar</option>
                <option value="2">UP</option>
                <option value="3">Kolkata</option>
                <option value="4">Odhisha</option>
              </select>
            </div>
            <div className="marginBottom">To,</div>
            <div className="address marginBottom">
              Address Line 1 : <input type="text" />
            </div>
            <div className="address marginBottom">
              Address Line 2 : <input type="text" />
            </div>
            <div className="state marginBottom">
              {" "}
              State : {" "}
              <select>
                <option value="0">Select State:</option>
                <option value="1">Bihar</option>
                <option value="2">UP</option>
                <option value="3">Kolkata</option>
                <option value="4">Odhisha</option>
              </select>
            </div>
          </div>
        </form>

        {/* invoice date */}
        <div style={{ marginBottom: "1rem" }}>
          <div className="date" style={{ backgroundColor: "#D99BCC" }}>
            <div className="width">Invoice Date</div>
            <div className="width">Due Date</div>
          </div>
          <div className="date" style={{ backgroundColor: "#9BCCD9" }}>
            <div className="width">
              <input
                type="date"
                name=""
                id=""
              />
            </div>
            <div className="width">
              <input type="date" name="" id="" />
            </div>
          </div>
        </div>

        {/* item section */}

        <div>
          {/* table header */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="item">#</div>
            <div className="item">Item Name</div>
            <div className="item">Quantity</div>
            <div className="item">Rate</div>
            <div className="item">Amount</div>
          </div>

          {/* table data */}
          {bucket.map((item, index) => {
            return (
              <div key={index}>
                <Table item={item} />
              </div>
            );
          })}

          {/* form  */}
          <form action="">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "0.5rem",
              }}
            >
              <div className="content">
                <input
                  type="text"
                  name="id"
                  placeholder="#"
                />
              </div>
              <div className="content">
                <input
                  type="text"
                  name="name"
                  placeholder="item name"
                />
              </div>
              <div className="content">
                <input
                  type="text"
                  name="quantity"
                  placeholder="quantity"
                />
              </div>
              <div className="content">
                <input type="text" name="rate" placeholder="rate" />
              </div>
              <div className="content">
                <input type="text" name="amount" placeholder="amount" />
              </div>
            </div>
            <input
              type="submit"
              value="Add item"
              style={{
                fontWeight: "bold",
                lineHeight: "20px",
                width: "80px",
                backgroundColor: "#CFDEE7",
                marginTop: "1rem",
              }}
              onClick={(e) => {
                addItem(e);
                e.preventDefault();
                console.log(bucket);
              }}
            />
          </form>
        </div>
        <hr style={{ border: "3px solid black" }} />
        <div
          style={{
            display: "flex",
            alignContent: "flex-end",
            flexFlow: "column wrap",
          }}
        >
          <div style={{ marginBottom: "0.5rem" }}>Sub Total : {sum}</div>

          <div style={{ marginBottom: "0.5rem" }}>
            <label>Tax (in %) : </label>
            <input
              style={{ width: "30%", textAlign: "center" }}
              type="text"
              value={tax}
              onChange={(e) => {
                e.preventDefault();
                setTax(e.target.value);
              }}
            />
          </div>
          <div style={{ marginBottom: "0.5rem" }}>
            Total : {sum + (sum * tax) / 100}
          </div>
        </div>

        <hr style={{ border: "3px solid black" }} />
      </div>
    </>
  );
}

export default App;
