import { useCallback, useMemo, useState } from "react";
import dayjs from "dayjs";
import { createMockData } from "./mock/appMock";
import { ParsedDatesRange } from "./utils/getDatesRange";
import { ConfigFormValues, SchedulerProjectData } from "./types/global";
import ConfigPanel from "./components/ConfigPanel";
import { StyledSchedulerFrame } from "./styles";
import { Scheduler } from ".";

function App() {
  const [values, setValues] = useState<ConfigFormValues>({
    peopleCount: 15,
    projectsPerYear: 5,
    yearsCovered: 0,
    startDate: undefined,
    maxRecordsPerPage: 50,
    isFullscreen: true
  });

  const { peopleCount, projectsPerYear, yearsCovered, isFullscreen, maxRecordsPerPage } = values;

  const mocked = useMemo(
    () => createMockData(+peopleCount, +yearsCovered, +projectsPerYear),
    [peopleCount, projectsPerYear, yearsCovered]
  );

  const [range, setRange] = useState<ParsedDatesRange>({
    startDate: new Date(),
    endDate: new Date()
  });

  const [visibleViewport, setVisibleViewport] = useState<ParsedDatesRange>({
    startDate: new Date(),
    endDate: new Date()
  });

  const handleRangeChange = useCallback((range: ParsedDatesRange) => {
    setRange(range);
  }, []);

  const handleVisibleViewportChange = useCallback((viewport: ParsedDatesRange) => {
    setVisibleViewport(viewport);
    console.log("Visible viewport changed:", {
      start: viewport.startDate.toLocaleDateString(),
      end: viewport.endDate.toLocaleDateString()
    });
  }, []);

  const filteredData = useMemo(
    () =>
      mocked.map((person) => ({
        ...person,
        data: person.data.filter(
          (project) =>
            dayjs(project.startDate).isBetween(range.startDate, range.endDate) ||
            dayjs(project.endDate).isBetween(range.startDate, range.endDate) ||
            (dayjs(project.startDate).isBefore(range.startDate, "day") &&
              dayjs(project.endDate).isAfter(range.endDate, "day"))
        )
      })),
    [mocked, range.endDate, range.startDate]
  );

  // Filter data based on visible viewport for display purposes
  const visibleFilteredData = useMemo(
    () =>
      filteredData.map((person) => ({
        ...person,
        data: person.data.filter(
          (project) =>
            dayjs(project.startDate).isBetween(visibleViewport.startDate, visibleViewport.endDate) ||
            dayjs(project.endDate).isBetween(visibleViewport.startDate, visibleViewport.endDate) ||
            (dayjs(project.startDate).isBefore(visibleViewport.startDate, "day") &&
              dayjs(project.endDate).isAfter(visibleViewport.endDate, "day"))
        )
      })),
    [filteredData, visibleViewport.endDate, visibleViewport.startDate]
  );

  const handleFilterData = () => console.log(`Filters button was clicked.`);

  const handleTileClick = (data: SchedulerProjectData) =>
    console.log(
      `Item ${data.title} - ${data.subtitle} was clicked. \n==============\nStart date: ${data.startDate} \n==============\nEnd date: ${data.endDate}\n==============\nOccupancy: ${data.occupancy}`
    );

  return (
    <>
      <ConfigPanel values={values} onSubmit={setValues} />
      
      {/* Visible Viewport Indicator */}
      <div style={{ 
        padding: '10px', 
        backgroundColor: '#f0f0f0', 
        borderBottom: '1px solid #ccc',
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif'
      }}>
        <strong>Full Range:</strong> {range.startDate.toLocaleDateString()} - {range.endDate.toLocaleDateString()}
        <br />
        <strong>Visible Viewport:</strong> {visibleViewport.startDate.toLocaleDateString()} - {visibleViewport.endDate.toLocaleDateString()}
        <br />
        <strong>Projects in Visible Viewport:</strong> {visibleFilteredData.reduce((total, person) => total + person.data.length, 0)}
      </div>
      
      {isFullscreen ? (
        <Scheduler
          startDate={values.startDate ? new Date(values.startDate).toISOString() : undefined}
          onRangeChange={handleRangeChange}
          onVisibleViewportChange={handleVisibleViewportChange}
          data={filteredData}
          isLoading={false}
          onTileClick={handleTileClick}
          onFilterData={handleFilterData}
          config={{ zoom: 0, maxRecordsPerPage: maxRecordsPerPage, showThemeToggle: true }}
          onItemClick={(data) => console.log("clicked: ", data)}
        />
      ) : (
        <StyledSchedulerFrame>
          <Scheduler
            startDate={values.startDate ? new Date(values.startDate).toISOString() : undefined}
            onRangeChange={handleRangeChange}
            onVisibleViewportChange={handleVisibleViewportChange}
            isLoading={false}
            data={filteredData}
            onTileClick={handleTileClick}
            onFilterData={handleFilterData}
            onItemClick={(data) => console.log("clicked: ", data)}
          />
        </StyledSchedulerFrame>
      )}
    </>
  );
}

export default App;
