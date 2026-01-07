import { JSX } from 'react/jsx-runtime';

declare const allZoomLevel: readonly [0, 1, 2];

declare type ColorType = "background" | "gridBackground" | "primary" | "secondary" | "tertiary" | "textPrimary" | "textSecondary" | "accent" | "disabled" | "border" | "placeholder" | "warning" | "button" | "tooltip" | "defaultTile" | "hover";

export declare type Config = {
    zoom: ZoomLevel;
    /**
     * Dictates filter button behavior
     * - `< 0` - filter button is hidden
     * - `0` - filter button is visible, no filter had been applied
     * - `> 0` - filter button visible - filters had been applied
     */
    filterButtonState?: number;
    /**
     * Language code: "en" | "pl" | "de"
     */
    lang?: LangCodes | string;
    isFiltersButtonVisible?: boolean;
    maxRecordsPerPage?: number;
    /**
     * property for changing behavior of showing tooltip hours
     * true - will show taken hours same as business days
     * false - will always show 0 taken hours on weekends in day view
     * @default false
     */
    includeTakenHoursOnWeekendsInDayView?: boolean;
    /**
     * show tooltip when hovering over tiles items
     * @default true
     */
    showTooltip?: boolean;
    translations?: LocaleType[];
    /**
     * show toggle button for changing theme (light/dark)
     */
    showThemeToggle?: boolean;
    /**
     * default theme (light/dark)
     * when theme toggle is displayed - this is a default value of the toggle
     * @default "light"
     */
    defaultTheme?: "light" | "dark";
    theme?: Theme;
    minZoom?: (typeof allZoomLevel)[number];
    maxZoom?: (typeof allZoomLevel)[number];
    dateFormat?: string;
    timeFormat?: string;
    /**
     * Enable drag and resize functionality for tiles
     * @default false
     */
    editable?: boolean;
};

declare type LangCodes = "en" | "pl" | "de" | "lt";

declare type LocaleType = {
    id: string;
    lang: Translation;
    translateCode: string;
    dayjsTranslations: string | ILocale | undefined;
};

declare type ParsedDatesRange = {
    startDate: Date;
    endDate: Date;
};

export declare const Scheduler: ({ data, config, startDate, onRangeChange, onVisibleViewportChange, onZoomChange, onTileClick, onFilterData, onClearFilterData, onItemClick, onTileUpdate, isLoading, searchValue, onSearchChange, defaultSearchValue }: SchedulerProps) => JSX.Element;

export declare type SchedulerData = SchedulerRow[];

declare type SchedulerItemClickData = Omit<SchedulerRow, "data">;

export declare type SchedulerProjectData = {
    /**
     * Unique Id of item
     */
    id: string;
    /**
     * Represents start date of from which tile will render
     */
    startDate: Date;
    /**
     * Represents end date to which tile will render
     */
    endDate: Date;
    /**
     * Indicates how much time is spent per day. Given in seconds and converted by Scheduler to hours/minutes
     */
    occupancy: number;
    /**
     * Title of item
     */
    title: string;
    /**
     * Subtitle of item. Optional
     */
    subtitle?: string;
    /**
     * Short description displayed on tile. Optional
     */
    description?: string;
    /**
     * Background color of the tile, given in rgb color model. If not given, default color (rgb(114, 141,226 )) is set. Optional
     */
    bgColor?: string;
};

export declare type SchedulerProps = {
    data: SchedulerData;
    isLoading?: boolean;
    config?: Config;
    startDate?: string;
    onRangeChange?: (range: ParsedDatesRange) => void;
    onVisibleViewportChange?: (viewport: ParsedDatesRange) => void;
    onZoomChange?: (zoom: 0 | 1 | 2) => void;
    onTileClick?: (data: SchedulerProjectData) => void;
    onFilterData?: () => void;
    onClearFilterData?: () => void;
    onItemClick?: (data: SchedulerItemClickData) => void;
    /**
     * Callback when a tile is updated via drag or resize.
     * Only called when config.editable is true.
     * Returns the tile id, new start date, and new end date.
     */
    onTileUpdate?: (payload: TileUpdatePayload) => void;
    /**
     * Controlled search value. When provided, the search input becomes controlled.
     * The component will display this value and call onSearchChange when user types.
     */
    searchValue?: string;
    /**
     * Callback fired when the search value changes (user types in search box).
     * Required when searchValue is provided for controlled mode.
     * Also fires in uncontrolled mode if provided (useful for tracking).
     */
    onSearchChange?: SearchChangeHandler;
    /**
     * Default search value for uncontrolled mode.
     * Only used on initial mount. Ignored if searchValue is provided.
     */
    defaultSearchValue?: string;
};

declare type SchedulerRow = {
    id: string;
    label: SchedulerRowLabel;
    data: SchedulerProjectData[];
};

declare type SchedulerRowLabel = {
    icon: string;
    title: string;
    subtitle: string;
};

/**
 * Handler type for search value changes
 */
export declare type SearchChangeHandler = (value: string) => void;

declare type Theme = {
    light?: Partial<Record<ColorType, string>>;
    dark?: Partial<Record<ColorType, string>>;
};

export declare type TileUpdatePayload = {
    id: string;
    startDate: Date;
    endDate: Date;
};

declare type Topbar = {
    filters: string;
    next: string;
    prev: string;
    today: string;
    view: string;
};

declare type Translation = {
    feelingEmpty: string;
    free: string;
    loadNext: string;
    loadPrevious: string;
    over: string;
    taken: string;
    topbar: Topbar;
    search: string;
    week: string;
};

export declare type ZoomLevel = ZoomLevelTuple[number];

declare type ZoomLevelTuple = typeof allZoomLevel;

export { }
