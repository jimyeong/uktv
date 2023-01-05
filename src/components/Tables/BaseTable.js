import React from "react";
import styled from "styled-components";
import { config } from "../../uiconfig";

const BASE_TABLE = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  thead {
    @media only screen and (max-width: ${config.breakpoint.md}px) {
      display: none;
    }
    td {
      text-transform: capitalize;
      font-weight: bold;
    }
  }
  tbody {
    tr {
      height: 35px;
      @media only screen and (max-width: ${config.breakpoint.md}px) {
        height: auto;
        border-top: 1px dashed #c8c8c8;
      }
      &:last-child {
        border-bottom: 1px dashed #c8c8c8;
      }
      td {
        @media only screen and (max-width: ${config.breakpoint.md}px) {
          width: 100%;
          font-size: 16px;
          font-weight: 200;
          color: #111;
          display: block;
          text-align: left;
          & {
            display: block;
            margin-bottom: 6px;
          }
          &:before {
            text-transform: capitalize;
            display: block;
            position: relative;
            left: 0;
            color: #222;
            font-weight: bold;
          }
        }
      }
    }
    > tr:nth-child(2n + 1) {
      background-color: #fff;
    }
    > tr:nth-child(2n) {
      background-color: #f9f8f9;
    }
  }
`;

export default BASE_TABLE;
