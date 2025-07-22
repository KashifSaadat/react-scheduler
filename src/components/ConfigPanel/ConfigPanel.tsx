import { FC, useState } from "react";
import dayjs from "dayjs";
import { ConfigFormValues } from "@/types/global";
import { formFieldsIds } from "@/constants";
import {
  StyledButton,
  StyledCheckbox,
  StyledForm,
  StyledInnerWrapper,
  StyledInput,
  StyledLabel,
  StyledWrapper
} from "./styles";
import { ConfigPanelProps } from "./types";

const ConfigPanel: FC<ConfigPanelProps> = ({ values, onSubmit }) => {
  const [inputValues, setInputValues] = useState<ConfigFormValues>(values);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setInputValues((prev) => ({
      ...prev,
      [name]: +inputValue
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(inputValues);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValues((prev) => ({
      ...prev,
      startDate: value ? dayjs(value).format("YYYY-MM-DD") : undefined
    }));
  };

  return (
    <StyledWrapper onMouseLeave={() => setIsExpanded(false)} $isExpanded={isExpanded} className="config-panel-wrapper">
      <StyledForm onSubmit={handleSubmit} className="config-panel-form">
        <StyledInnerWrapper className="config-panel-field">
          <StyledLabel htmlFor={formFieldsIds.peopleCount} className="config-panel-label">People count: </StyledLabel>
          <StyledInput
            id={formFieldsIds.peopleCount}
            name={formFieldsIds.peopleCount}
            type="number"
            value={inputValues.peopleCount}
            onChange={handleChange}
            min={0}
            title="How many people to display? Default: 5"
            className="config-panel-input"
          />
        </StyledInnerWrapper>
        <StyledInnerWrapper className="config-panel-field">
          <StyledLabel htmlFor={formFieldsIds.projectsPerYear} className="config-panel-label">Projects per year: </StyledLabel>
          <StyledInput
            id={formFieldsIds.projectsPerYear}
            name={formFieldsIds.projectsPerYear}
            value={inputValues.projectsPerYear}
            type="number"
            onChange={handleChange}
            min={0}
            title="Projects / year / person. Default: 5"
            className="config-panel-input"
          />
        </StyledInnerWrapper>
        <StyledInnerWrapper className="config-panel-field">
          <StyledLabel htmlFor={formFieldsIds.yearsCovered} className="config-panel-label">Years covered: </StyledLabel>
          <StyledInput
            id={formFieldsIds.yearsCovered}
            name={formFieldsIds.yearsCovered}
            value={inputValues.yearsCovered}
            type="number"
            onChange={handleChange}
            min={0}
            title="How many years back and forward? Default: 0"
            className="config-panel-input"
          />
        </StyledInnerWrapper>
        <StyledInnerWrapper className="config-panel-field">
          <StyledLabel htmlFor={formFieldsIds.startDate} className="config-panel-label">Starting date </StyledLabel>
          <StyledInput
            id={formFieldsIds.startDate}
            name={formFieldsIds.startDate}
            value={inputValues.startDate ?? ""}
            type="date"
            onChange={handleDateChange}
            title="When do you want to start your scheduler? Default: today"
            className="config-panel-input"
          ></StyledInput>
        </StyledInnerWrapper>
        <StyledInnerWrapper className="config-panel-field">
          <StyledLabel htmlFor={formFieldsIds.maxRecordsPerPage} className="config-panel-label">Records/page: </StyledLabel>
          <StyledInput
            id={formFieldsIds.maxRecordsPerPage}
            name={formFieldsIds.maxRecordsPerPage}
            value={inputValues.maxRecordsPerPage}
            type="number"
            onChange={handleChange}
            min={1}
            title="How many records per page? Default: 10"
            className="config-panel-input"
          />
        </StyledInnerWrapper>
        <StyledInnerWrapper className="config-panel-field">
          <StyledLabel htmlFor={formFieldsIds.isFullscreen} className="config-panel-label">Fullscreen: </StyledLabel>
          <StyledCheckbox
            id={formFieldsIds.isFullscreen}
            name={formFieldsIds.isFullscreen}
            checked={inputValues.isFullscreen}
            type="checkbox"
            onChange={handleChange}
            className="config-panel-checkbox"
          />
        </StyledInnerWrapper>
        {isExpanded ? (
          <StyledButton type="submit" className="config-panel-button config-panel-submit">Change</StyledButton>
        ) : (
          <StyledButton onClick={() => setIsExpanded(true)} type="button" className="config-panel-button config-panel-expand">
            Expand config panel
          </StyledButton>
        )}
      </StyledForm>
    </StyledWrapper>
  );
};

export default ConfigPanel;
