import React from "react";
import styled from "styled-components";
import { BUTTONS } from "../../../components";

const SortingControllerBlock = styled.div``;

// @@@

function SortingController({ keyword }) {
  const setKeyword = (keyword) => {
    if (keyword == "films") return "Sort by title";
    if (keyword == "vehicles" || keyword == "starships") return "Sort by name";
    return null;
  };
  let sortBy = setKeyword(keyword);
  if (sortBy)
    return (
      <SortingControllerBlock>
        <BUTTONS.BASE_BUTTON>{sortBy}</BUTTONS.BASE_BUTTON>
      </SortingControllerBlock>
    );
  return null;
}

export default React.memo(SortingController);
