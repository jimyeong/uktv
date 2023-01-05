import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { INPUTS, BUTTONS, SearchBar, ProgressBar } from "../../components";
import { useInput } from "../../hooks/useInput";
import { _axios } from "../../server";
import { useAsync } from "../../hooks/useAsync";
import ResultPanel from "./components/ResultPanel";
import { config } from "../../uiconfig";
import SortingController from "./components/SortingController";

const MainBlock = styled.div``;
const PageContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  margin-top: 40px;

  @media only screen and (max-width: ${config.breakpoint.md}px) {
    width: 100%;
  } ;
`;

const initialState = { values: "" };

function Main() {
  const inputState = { values: "" };
  const [pageData, setPageData] = useState({ current_keyword: "", sortBy: 0 });

  const [inputValues, onReset, onChange] = useInput(inputState);
  const [{ loading, error, data }, fetchData] = useAsync(async () => {
    if (pageData.current_keyword != "") {
      const result = await _axios.get(`/${pageData.current_keyword}`);
      return result;
    }
  }, [pageData.current_keyword]);

  const getSearchKeyword = useCallback(
    (keyword) => {
      setPageData({
        ...pageData,
        current_keyword: keyword,
      });
    },
    [pageData]
  );
  useEffect(() => {
    if (pageData.current_keyword != "") {
    }
  }, [pageData.current_keyword]);

  useEffect(() => {}, [data]);

  return (
    <MainBlock>
      <PageContainer>
        <SearchBar inputId="keyword" callback={getSearchKeyword} />
        <SortingController keyword={pageData.current_keyword} />

        <ResultPanel
          status={{ loading, error, data }}
          keyword={pageData.current_keyword}
        ></ResultPanel>
      </PageContainer>
    </MainBlock>
  );
}

export default React.memo(Main);
