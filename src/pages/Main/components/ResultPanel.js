import React from "react";
import styled from "styled-components";
import { ProgressBar } from "../../../components";
import Ship from "./Ship";
import Vehicle from "./Vehicle";
import Film from "./Film";

const ResultPanelBlock = styled.div`
  margin-top: 38px;
  .current_keyword {
    font-weight: light;
    color: #555;
    font-size: 18px;
    margin-bottom: 20px;
    text-align: right;
    margin-bottom: 40px;
  }
`;

const SEARCH_TYPE = {
  vehicles: "vehicles",
  starships: "starships",
  films: "films",
};

function ResultPanel({ status, keyword }) {
  const { loading, data, error } = status;
  const setSearchStatus = () => {
    if (loading) {
      return <ProgressBar>loading</ProgressBar>;
    } else {
      if (data) {
        if (data.count > 0) {
          if (keyword === SEARCH_TYPE.vehicles)
            return <Vehicle vehicles={data.results} />;
          if (keyword === SEARCH_TYPE.starships)
            return <Ship ships={data.results} />;
          if (keyword === SEARCH_TYPE.films)
            return <Film films={data.results} />;
          return <div>no result</div>;
        }
      }
      if (error) return <div>no result</div>;
    }
  };
  return (
    <ResultPanelBlock>
      <div className="current_keyword">
        current keyword: <span>{keyword}</span>
      </div>
      {setSearchStatus()}
    </ResultPanelBlock>
  );
}

export default ResultPanel;
