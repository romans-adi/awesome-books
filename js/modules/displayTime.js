import { DateTime } from '../../node_modules/luxon/src/luxon.js';

const displayCurrentDateTime = () => {
  document.querySelector('#current-date-time').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default displayCurrentDateTime;
