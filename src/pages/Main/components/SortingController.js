import React, { useContext } from "react";
import styled from "styled-components";
import { BUTTONS } from "../../../components";
import { MainContext } from "../Main";

const SortingControllerBlock = styled.div``;

// @@@

function SortingController() {
  const pageContext = useContext(MainContext);
  const { keyword, status, isSorted, pageData, setPageData } = pageContext;
  const { loading, data, error } = status;
  const setKeyword = (keyword) => {
    if (keyword == "films") return "By TITLE!";
    if (keyword == "vehicles" || keyword == "starships") return "By NAME!";
    return null;
  };
  const onClick = () => {
    setPageData({
      ...pageData,
      isSorted: !pageData.isSorted,
    });
  };
  const sortBy = setKeyword(keyword);
  const text = pageData.isSorted
    ? `Back to original order`
    : `Sorted ${sortBy}`;

  const showflag = sortBy ? true : false;

  if (showflag)
    return (
      <SortingControllerBlock style={{ marginTop: "16px" }}>
        <BUTTONS.BASE_BUTTON
          backgroundColor={pageData.isSorted && "#ff5252"}
          onClick={onClick}
        >
          {text}
        </BUTTONS.BASE_BUTTON>
      </SortingControllerBlock>
    );
  return null;
}

export default React.memo(SortingController);
