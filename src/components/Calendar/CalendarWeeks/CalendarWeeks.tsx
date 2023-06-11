import React, { FC } from "react";
import Container from "../../../ui/Container/Container";
import Row from "../../../ui/Row/Row";
import styled from "styled-components";
import { weekNames, monthsNames } from "../../../utils/dates/dates";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { calendarSlice } from "../../../store/reducers/calendar";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const StyledContent = styled.div`
  margin-left: 60px;
`;

const StyledDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  width: 100%;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
`;

const StyledBackground = styled.div`
  background-color: #f6f6f6;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
`;

interface StyledSpanProps {
  active: string;
}

const StyledBlock = styled.div<StyledSpanProps>`
  background-color: ${(props) => (props.active === "true" ? `#dc3434` : `inherit`)};
  border-radius: 100%;
  color: ${(props) => (props.active === "true" ? `#fff` : `#000`)};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 25px;
  width: 25px;
  padding: 5px;
`;

const CalendarWeeks: FC = () => {
  const { week, date } = useAppSelector((state) => state.calendarReducer);
  const { setDate } = calendarSlice.actions;
  const dispatch = useAppDispatch();

  const nextClickHandler = (): void => {
    dispatch(setDate(date + 1000 * 60 * 60 * 24 * 7));
  };

  const prevClickHandler = (): void => {
    dispatch(setDate(date - 1000 * 60 * 60 * 24 * 7));
  };

  return (
    <StyledBackground>
      <Container>
        <StyledContent>
          <Row>
            {week.map((day, index) => (
              <StyledDay key={index}>
                <span>{weekNames[index]}</span>
                <StyledBlock active={String(day.isCurrentDay)}>
                  <span>{new Date(day.day).getDate()}</span>
                </StyledBlock>
              </StyledDay>
            ))}
          </Row>
          <Row>
            <StyledColumn>
              <button onClick={prevClickHandler}>
                <TfiAngleLeft color="#dc3434" size={15} strokeWidth={2} />
              </button>
            </StyledColumn>
            <StyledColumn>
              <span>
                {monthsNames[new Date(date).getMonth()]}{" "}
                {new Date(date).getFullYear()}
              </span>
            </StyledColumn>
            <StyledColumn>
              <button onClick={nextClickHandler}>
                <TfiAngleRight color="#dc3434" size={15} strokeWidth={2} />
              </button>
            </StyledColumn>
          </Row>
        </StyledContent>
      </Container>
    </StyledBackground>
  );
};

export default CalendarWeeks;
