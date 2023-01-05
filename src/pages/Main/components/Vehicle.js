import React from "react";
import styled from "styled-components";
import { TABLES } from "../../../components";
import { config } from "../../../uiconfig";

const VehicleContainer = styled.div`
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

function Vehicle({ vehicles }) {
  return (
    <VehicleContainer>
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
          {vehicles.map((vehicle, key) => {
            return (
              <tr key={key}>
                <td>{vehicle.name}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.manufacturer}</td>
                <td>{vehicle.cost_in_credits}</td>
                <td>{vehicle.length}</td>
                <td>{vehicle.crew}</td>
                <td>{vehicle.passengers}</td>
                <td>{vehicle.cargo_capacity}</td>
              </tr>
            );
          })}
        </tbody>
      </TABLES.BASE_TABLE>
    </VehicleContainer>
  );
}

export default Vehicle;
