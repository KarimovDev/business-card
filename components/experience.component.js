import { useEffect, useState } from "react";
import { getDifferenceInDays } from "../helpers/dates.helper";

export default function Experience() {
  const [expInMonth, setExpInMonth] = useState(0);

  useEffect(() => {
    setExpInMonth(~~(getDifferenceInDays(new Date(2014, 7, 15)) / 30.4375));
  }, []);

  return <p>I have {expInMonth} month of professional developer experience.</p>;
}
