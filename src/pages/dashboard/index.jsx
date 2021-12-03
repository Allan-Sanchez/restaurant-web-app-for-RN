import React, { useContext, useState, useEffect } from "react";
import CardDish from "../../components/ui/CardDish";
import { FirebaseContext } from "../../firebase";
export default function index() {
  const { firebase } = useContext(FirebaseContext);
  const [data, setData] = useState([]);

  const response = async () => {
    const res = await firebase.getCollections("dishes");
    setData(res);
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <>
      <div className="grid xl:grid-cols-2">
        {data.map((item) => (
          <CardDish key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}
