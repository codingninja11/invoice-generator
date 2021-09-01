const Table = ({ item }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="content">{item.id}</div>
      <div className="content">{item.name}</div>
      <div className="content">{item.quantity}</div>
      <div className="content">{item.rate}</div>
      <div className="content">{item.amount}</div>
    </div>
  );
};

export default Table;
