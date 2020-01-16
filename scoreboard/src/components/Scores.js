// used for al lprops and state, export to components accordingly from here
import { useState } from "react";

export const Count = (val) => {
  const [count, setCount] = useState(0);

  return [count, setCount]
}