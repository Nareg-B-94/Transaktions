import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './DatePickerComponent.css';

export default function BasicDatePicker(props) {
  const { startValue, endValue, setStartValue, setEndValue, searchHandle } =
    props;

  //   const token =
  //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2Njc1NTQxNTgsImlkIjoiU0EtcmxtIiwibmFtZSI6bnVsbCwic2NvcGUiOltdLCJ0eXBlIjoic2VydmljZUFjY291bnQiLCJjb250cmFjdHMiOm51bGwsInJvbGVzIjpbImlhbTphY2Nlc3NVc2VycyIsImlhbTptYW5hZ2VVc2VycyIsInBhcDp1c2UiLCJjYXNoYmFjazp1c2UiXSwidGVuYW50IjoiUkxNIn0.Db_SLkarPGPwZQK2HDBfoyUZdiJKm_mx78be4fVyczbTkPwpXg8tYsbWZPi7swd-wDINrNjFT6Vxw99V91B8uT53gCpxvwXMXBpQcsQAF7gXy0puG2Sl6zncE4jXh_HjD7dZVT0qyoJAScysuczi3WVMSkyZJJwBhkEA3LsHmJJR5OacF3qNw9cC7Yx8xhgmgBR5qsW48WztAiREW8jPLYISjwxiFHh_Spw2Htm6BnDcvTJtwouxJcRsy7CdxGG7j4AVQ_9lDppyFLD0F9-QVWcifUB5ixM0aAcslhfzJmiWdHSECRpCZku2Qyn7yLxKIKntk7rLzATWB1hJI8NwTLXKFaasqyj8Bo7DsJHVlWVRc8fzOeIowW44XVM_qbvmd9UF0brFSavC44Jltxm6UebvdO912MFZGKPVwmRtgaBskbDqqNd-UMj_JZSwbycaa4wkdLAwmyFN9aC7_RIFkE5vKLA9iGSINGWScl7M8tpjQY8HsDYCCf3_KoCPAdhUfxcBFem5etT5fRZlprkDvlzW2PRW6bRJhHag1CWfbSVemrEgoGyP3IoATuqDYVqGErmHyOB1JUuA1jFH8Swxh8aZI6hjtKoWZwN7KEuxz8NohIb5dxqUgmtacsJwehzt3E7gc8rx7dn7HwqulHOO18wInd2pZc6Znlqw0Ipn9PQ';

  //   const [dataTobePassed, setDatatoBePassed] = React.useState([]);

  //    const url2 = `https://testapi.mehrwerk.de/v3/cashback/transactions?fkn=UD12662183&itemsPerPage=72&startDate=${startValue}&endDate=${endValue}`;

  //   const options = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'X-API-KEY': '1rBWgg2EUGo7nF5aJmmnKkrhVajj2z3r8JhuHRy28PvrFqef1C',
  //     },
  //   };

  //   const searchHandle = () => {

  // fetch(url, options)
  //   .then((response3) => {
  //     if (response3.status >= 200 && response3.status <= 299) {
  //       return response3.json();
  //     } else {
  //       throw new Error(response3.statusText);
  //     }
  //   })
  //   .then((filteredDates) => {
  //     setDatatoBePassed(filteredDates);
  //     console.log(filteredDates, 'FILTERED');
  //   });
  // <TableComponent filteredDates={dataTobePassed} />;
  //   };

  return (
    <div className='justify'>
      <div className='startDiv'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <span>Zeitraum:</span>
          <DatePicker
            label='dd.mm.yyyy'
            value={startValue}
            onChange={(newValue1) => {
              setStartValue(newValue1);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div className='endDiv'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <span>bis :</span>
          <DatePicker
            label='dd.mm.yyyy'
            value={endValue}
            onChange={(newValue2) => {
              setEndValue(newValue2);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <button className='btn' onClick={searchHandle}>
          search
        </button>
      </div>
    </div>
  );
}
