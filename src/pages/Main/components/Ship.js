import React from "react";
import styled from "styled-components";
import { TABLES } from "../../../components";
import { config } from "../../../uiconfig";

const ShipContainer = styled.div`
  tbody {
    td {
      @media only screen and (max-width: ${config.breakpoint.md}px) {
        &:nth-child(1):before {
          content: "name:";
        }
        &:nth-child(2):before {
          content: "model:";
        }
        &:nth-child(3):before {
          content: "manufacturer:";
        }
        &:nth-child(4):before {
          content: "cost in credits:";
        }
        &:nth-child(5):before {
          content: "length:";
        }
        &:nth-child(6):before {
          content: "crew:";
        }
        &:nth-child(7):before {
          content: "passengers:";
        }
        &:nth-child(8):before {
          content: "cargo capacity:";
        }
      }
    }
  }
`;

function Ship({ ships }) {
  return (
    <ShipContainer>
      <TABLES.BASE_TABLE>
        <thead>
          <tr>
            <td>Name</td>
            <td>Model</td>
            <td>Manufacturer</td>
            <td>Cost in credits</td>
            <td>Length</td>
            <td>Crew</td>
            <td>Passengers</td>
            <td>Cargo capacity</td>
          </tr>
        </thead>
        <tbody>
          {ships.map((ship, key) => {
            return (
              <tr key={key}>
                <td>{ship.name}</td>
                <td>{ship.model}</td>
                <td>{ship.manufacturer}</td>
                <td>{ship.cost_in_credits}</td>
                <td>{ship.length}</td>
                <td>{ship.crew}</td>
                <td>{ship.passengers}</td>
                <td>{ship.cargo_capacity}</td>
              </tr>
            );
          })}
        </tbody>
      </TABLES.BASE_TABLE>
    </ShipContainer>
  );
}

export default Ship;
