import React, { useState, useCallback, useEffect, createContext } from "react";
import styled from "styled-components";
import { INPUTS, BUTTONS, SearchBar, ProgressBar } from "../../components";
import { useInput } from "../../hooks/useInput";
import { _axios } from "../../server";
import { useAsync } from "../../hooks/useAsync";
import ResultPanel from "./components/ResultPanel";
import { config } from "../../uiconfig";
import SortingController from "./components/SortingController";
import { Utils } from "../../Utils";

const MainBlock = styled.div``;
const PageContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  margin-top: 40px;

  @media only screen and (max-width: ${config.breakpoint.md}px) {
    width: 100%;
  } ;
`;

const initialState = { keyword: "", isSorted: false, sortedArray: null };
export const MainContext = createContext(initialState);

function Main() {
  const inputState = { values: "" };
  const [pageData, setPageData] = useState(initialState);

  const [inputValues, onReset, onChange] = useInput(inputState);
  const [{ loading, error, data }, fetchData] = useAsync(async () => {
    if (pageData.keyword != "") {
      const result = await _axios.get(`/${pageData.keyword}`);
      if (pageData.isSorted) {
        if (pageData.keyword == "vehicles" || pageData.keyword == "starships") {
          const sorted = result.data.results.sort(Utils.compareChars("name"));
          result.data.results = sorted;
        }
        if (pageData.keyword == "films") {
          const sorted = result.data.results.sort(Utils.compareChars("title"));
          result.data.results = sorted;
        }
      }
      return result;
    }
  }, [pageData.keyword, pageData.isSorted]);

  useEffect(() => {}, [data]);
  const status = { loading, error, data };
  const { keyword, sortBy } = pageData;

  return (
    <MainBlock>
      <PageContainer>
        <MainContext.Provider
          value={{
            keyword,
            sortBy,
            setPageData,
            pageData,
            status,
          }}
        >
          <SearchBar inputId="keyword" />
          <SortingController />
          <ResultPanel />
        </MainContext.Provider>
      </PageContainer>
    </MainBlock>
  );
}

export default React.memo(Main);
