import { useState, useEffect } from "react";
import { db } from "../../utils/Firebase";
import { getDocs, collection } from "@firebase/firestore";

export const MemberCount = () => {
  const [numMembers, setNumMembers] = useState(0);

  useEffect(() => {
    const fetchNumMembers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setNumMembers(querySnapshot.size);
    };
    fetchNumMembers();
  }, []);

  return (
    <div>
      <p>{numMembers} members</p>
    </div>
  );
};
