import React, { useEffect, useState } from "react";
import { ContainerStatistic, DashSingleStyle } from "./style-dash";
import { Global } from "./style-dash";
import axios from "axios";
const DashApp: React.FC = () => {
  const [data, setData] = useState<number[]>([]);
  const [value, setValue] = useState<number>(0);
  const [arr, setArr] = useState<string[]>([]);
  console.log("hell");
  useEffect(() => {
    axios
      .get(
        "http://www.randomnumberapi.com/api/v1.0/random?min=10&max=100&count=5"
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <>
      <Global>
        <ContainerStatistic>
          {data.map((el) => {
            return (
              <DashSingleStyle el={el}>
                {el}
                <p>Hello World</p>
              </DashSingleStyle>
            );
          })}
        </ContainerStatistic>
      </Global>
    </>
  );
};

export default DashApp;
