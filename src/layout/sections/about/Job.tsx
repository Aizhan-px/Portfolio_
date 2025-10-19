
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.styled.tsx";

type JobProps = {
    title: string;
    company: string;
    location?: string;
    type: "full time" | "internship";
    date: string;
};

export const Job = ({ title, company,type, location, date }: JobProps) => {
    return (
        <JobCard>

            <JobTitle>{title}  <Badge type={type === "full time" ? "Full Time" : "Internship"}></Badge></JobTitle>
            <JobGrid>
                <InfoRow>
                    <Icon height="12px" width="12px" iconId="building" />
                    <Company>{company}</Company>
                </InfoRow>

                {location && (
                    <InfoRow>
                        <Icon height="12px" width="12px" iconId="location" />
                        <Location>{location}</Location>
                    </InfoRow>
                )}

                <InfoRow>
                    <Icon height="12px" width="12px" iconId="calendar" />
                    <Date>{date}</Date>
                </InfoRow>
            </JobGrid>

        </JobCard>
    );
};

const JobCard = styled.div`
    padding: 16px 0;
    border-bottom: 1px solid #c7c7c8;
`

const JobGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  gap: 8px;
`

const InfoRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px; 
  font-size: 14px;
   
`


const JobTitle = styled.h2`
    display: grid;
    grid-column: 1 / span 2;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0;
    color: ${theme.colors.grayLight};
`
const Company = styled.span`
  font-size: 14px;
`

const Location = styled.span`
  font-size: 14px;
`

const Badge = styled.span<{ type: string }>`
  justify-self: end;
  background: ${({ type }) =>
    type === "full time" ?  "#D7FFE0" : "#dbeafe"};
  color: ${({ type }) =>
    type === "full time" ? "#166534" : "rgba(12,138,80,0.56)"};
  padding: 4px 21px;
  border-radius: 24px;
  font-size: 9px;
`

const Date = styled.span`
    display:flex;
  justify-self: end;
  font-size: 12px;
`
