import React from "react";
import { TABLES } from "../../../components";
import { Utils } from "../../../Utils";
import { config } from "../../../uiconfig";
import styled from "styled-components";

const FilmContainer = styled.div`
  thead {
  }
  tbody {
    td {
      @media only screen and (max-width: ${config.breakpoint.md}px) {
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
        &:nth-child(1):before {
          content: "title:";
        }
        &:nth-child(2):before {
          content: "episode number:";
        }
        &:nth-child(3):before {
          content: "director:";
        }
        &:nth-child(4):before {
          content: "producer:";
        }
        &:nth-child(5):before {
          content: "release_date:";
        }
        &:nth-child(6):before {
          content: "opening crawl:";
        }
      }
    }
  }
`;

function Film({ films }) {
  const maxLength = window.innerWidth <= config.breakpoint.md ? 60 : 120;
  console.log("innerwidth@@@", window.innerWidth);
  console.log("breakPiunt@@@", config.breakpoint.md);
  return (
    <FilmContainer>
      <TABLES.BASE_TABLE>
        <thead>
          <tr>
            <td>title</td>
            <td>episode_number</td>
            <td>director</td>
            <td>producer</td>
            <td>release_date</td>
            <td>opening crawl</td>
          </tr>
        </thead>
        <tbody>
          {films.map((film, key) => {
            return (
              <tr key={key}>
                <td>{film.title}</td>
                <td>{film.episode_id}</td>
                <td>{film.director}</td>
                <td>{film.producer}</td>
                <td>{film.release_date}</td>
                <td>{film.opening_crawl}</td>
              </tr>
            );
          })}
        </tbody>
      </TABLES.BASE_TABLE>
    </FilmContainer>
  );
}

export default Film;
