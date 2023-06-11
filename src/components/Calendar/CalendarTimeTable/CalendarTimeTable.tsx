import React, { FC } from "react";
import Container from "../../../ui/Container/Container";
import styled from "styled-components";
import { useAppSelector } from "../../../hooks/redux";
import TableItem from "../../../ui/TableItem/TableItem";
import { getHours, padTo2Digits } from "../../../utils/dates/dates";
import Row from "../../../ui/Row/Row";

const StyledSection = styled.div`
  overflow: hidden;
`;

const StyledTable = styled.div`
  width: 100%;
  margin-top: -1px;
  margin-bottom: -1px;
`;

const StyledOverflow = styled.div`
  width: 100%;
  overflow: hidden;
`;

const StyledTableRow = styled.div`
  display: flex;
  margin-right: -2px;
  margin-left: -2px;
`;

const StyledTimeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  color: rgb(185, 185, 185);
`;

const CalendarTimeTable: FC = () => {
  const { week } = useAppSelector((state) => state.calendarReducer);
  const hours = getHours();

  return (
    <StyledSection>
      <Container>
        <StyledTable>
          {hours.map((hour) => (
            <Row key={hour}>
              <StyledTimeItem>{padTo2Digits(hour)}:00</StyledTimeItem>
              <StyledOverflow>
                <StyledTableRow>
                  {week.map((day, i) => (
                    <TableItem day={day.day} hour={hour} key={i} />
                  ))}
                </StyledTableRow>
              </StyledOverflow>
            </Row>
          ))}
        </StyledTable>
      </Container>
    </StyledSection>
  );
};

export default CalendarTimeTable;
