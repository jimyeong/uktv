import TEXT_INPUT from "./inputFields/TextInput";
import BASE_BUTTON from "./Buttons/BaseButton";
import BASE_TABLE from "./Tables/BaseTable";

// if it needs different types of searchbar, go like BARS = {SearchBar}
import SearchBar from "./searchBar/SearchBar";
import ProgressBar from "./ProgressBar/ProgressBar";
const INPUTS = {};
const BUTTONS = {};
const TABLES = {};

INPUTS.TEXT_INPUT = TEXT_INPUT;
BUTTONS.BASE_BUTTON = BASE_BUTTON;
TABLES.BASE_TABLE = BASE_TABLE;

export { INPUTS, BUTTONS, SearchBar, ProgressBar, TABLES };
