import React, { useMemo } from "react";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import moment from "moment/moment";
import { ExperienceDetails } from "../../../types/profileDataTypes";
import SectionVisibilityHOC from "../../Organisms/SectionWrapper/SectionWrapper";
import T from "../../../translations/en_IN";
import constants from "../../../helpers/constants";
import "./WorkExperience.scss";

const WorkExperience = () => {
  const {
    profileData: { experience },
  } = useProfileDataContext();

  const calculatedExperience = useMemo((): Array<ExperienceDetails> => {
    return experience.map((exp): ExperienceDetails => {
      const fromDate = moment(exp.fromDate);
      const toDate = exp.toDate !== "Present" ? moment(exp.toDate) : moment();

      const years = toDate.diff(fromDate, "year");
      fromDate.add(years, "years");
      const months = toDate.diff(fromDate, "months");
      fromDate.add(months, "months");

      let yearsOfExp = "";
      let monthsOfExp = "";

      if (years > 1) {
        yearsOfExp = `${years} years`;
      } else if (years === 1) {
        yearsOfExp = `${years} year`;
      }

      if (months > 1) {
        monthsOfExp = `${months} months`;
      } else if (months === 1) {
        monthsOfExp = `${years} month`;
      }

      exp.totalYears = `${yearsOfExp} ${monthsOfExp}`;
      return exp;
    });
  }, [experience]);

  function getFromToDates(fromDate: string, toDate: string): string {
    return `${fromDate.substring(3)} - ${
      toDate.includes("Present") ? toDate : toDate.substring(3)
    }`;
  }

  return (
    <>
      <div className="section-title h2 bold">{T.WORK_EXPERIENCE}</div>
      <div className="subsection work-experience-content">
        {calculatedExperience.map((experienceDetail, key) => {
          return (
            <div key={String(key)} className="subsection-data">
              <span className="h3 grey1 bold">{experienceDetail.name}</span>
              <div className="label primary-color letterspacing-2">
                <span>
                  {getFromToDates(
                    experienceDetail.fromDate,
                    experienceDetail.toDate
                  )}
                </span>
                <span className="dot" />
                <span>{experienceDetail.totalYears}</span>
              </div>
              <div className="summary grey-1 body-text">
                {experienceDetail.summary}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionVisibilityHOC(
  WorkExperience,
  constants.classNames.WORK_EXPERIENCE
);
