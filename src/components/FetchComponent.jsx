import React, { useEffect, useState } from 'react';
import DatePickerComponent from './DatePickerComponent';
import TableComponent from './TableComponent';
import SearchComponent from './SearchComponent';
import Wrapper from '../UI/Wrapper';
import Footer from '../UI/Footer';
import './Styles.css';

const FetchComponent = () => {
  // -----------------------------------------------------------------------------------------
  // Getting the token

  const urlSA = 'https://testapi.mehrwerk.de/v2/iam/oauth/token';
  const requestOptions = {
    method: 'POST',
    headers: {
      'X-API-KEY': '1rBWgg2EUGo7nF5aJmmnKkrhVajj2z3r8JhuHRy28PvrFqef1C',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: 'rlm',
      client_secret: 'KF}YAMgR-B+?@Ha}',
      grant_type: 'client_credentials',
    }),
  };

  const [data, setData] = useState([]);
  const getToken = async () => {
    const response = await fetch(urlSA, requestOptions);
    const data = await response.json();
    setData(data);
    // console.log(data);
  };

  //------------------------------------------------------------------------------------------

  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2Njc4OTMzMzUsImlkIjoiU0EtcmxtIiwibmFtZSI6bnVsbCwic2NvcGUiOltdLCJ0eXBlIjoic2VydmljZUFjY291bnQiLCJjb250cmFjdHMiOm51bGwsInJvbGVzIjpbImlhbTphY2Nlc3NVc2VycyIsImlhbTptYW5hZ2VVc2VycyIsInBhcDp1c2UiLCJjYXNoYmFjazp1c2UiXSwidGVuYW50IjoiUkxNIn0.SMZn_WQi_nPk4ee82Hk1bge9qBT_7AIe2G-ERk1ODACE9SBjjwurhrh1MLuZ5QJdnIC33tN5qGhSqKx01wzlKeBkJNaMAOzrP41FqtXhP-5isPZhjHGpHSZ5GH12fvDPNx8KpzIYBqxVWwMsB2X4-jLngrp4Hut4mShZ8pEjIPrg_OY6bRbImvx-hFb23GtzOJRXQ5yB0pjdRzxiKXD4wOQuhZUuPvS3RmvjJqM40zVLNFVAJDw677V846usyDUZ8JtGff7_uZsIwqUkmVQjwD2EfYxErKQRuByRnx6APBbhiifI7uSwa08Jf6mKXUu2YEybYqWDtX4_d_k-0dfEjH5esxR1BpByU_F2smR0xHMCoKm-35tUw-Kzya-LlPs8z76rRLhT0AQ6pOW3f4XqxhOC1ysAqspEPMkILKkPiN7-XlpVZYslD1TTfGghEDDrhpB7iglMMqTOpuYcvzgDZ5axJEWhsCTPgRFZ0cLnlQtgb6A3tVdJkDXHMvFC2QUGxHqTdhm1M6U2iG_ipIMEeSZa4PfMuvEtPIegoq0bykLpfyKOHtfmB7GuwOIZISKS6B9mgAS1mI6fq4XsWJp9cUJXCHxxs9mn1xfmmoNB_HXIFgvXa6qVLm0wW-tR5sQLiGTSHvDfObXFP4Sk6-ti8XtWbdyWEmB2jHe5HUPxkD4';

  const url =
    'https://testapi.mehrwerk.de/v3/cashback/transactions?fkn=UD12662183&itemsPerPage=72';

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'X-API-KEY': '1rBWgg2EUGo7nF5aJmmnKkrhVajj2z3r8JhuHRy28PvrFqef1C',
    },
  };

  //   const params = new URLSearchParams({
  //     itemsPerPage: 72,
  //     // startDate: '',
  //     // endDate: '',
  //     // sort: '',
  //     // direction: '',
  //   });

  //   const getTransactions = async () => {
  //     const response2 = await fetch(url, options);
  //     const data2 = await response2.json();
  //     setTransactions(data2);
  //     console.log(data2);
  //     console.log(transactions, 'data2');
  //   };

  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    getToken();
    //  getTransactions();
  }, []);

  // `${url}${startValue ? `&startDate=${startValue}` : ''}${
  //   endValue ? `&endDate=${endValue}` : ''
  // }?q=${searchTerm}`

  const fetchData = () => {
    fetch(
      `${url}${startValue ? `&startDate=${startValue}` : ''}${
        endValue ? `&endDate=${endValue}` : ''
      }`,
      options
    )
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((filteredDates) => {
        setTransactions(filteredDates);
        console.log(filteredDates, 'FILTERED');
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });

    // <TableComponent filteredDates={dataTobePassed} />;
  };

  useEffect(() => {
    fetchData();
    // fetch(url, options)
    //   .then((response2) => {
    //     if (response2.status >= 200 && response2.status <= 299) {
    //       return response2.json();
    //     } else {
    //       setIsLoading(false);
    //       setIsError(true);
    //       throw new Error(response2.statusText);
    //     }
    //   })
    //   .then((transaction) => {
    //     // const { id, shopName, date, price, cashOutAmount, status } =
    //     //   transaction;
    //     setTransactions(transaction);
    //     setIsLoading(false);
    //     console.log(transaction, 'hosteghe abranke');
    //   })
    //   .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading ... </h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Something went wrong!</h1>
      </div>
    );
  }

  return (
    <div className='content'>
      <Wrapper />
      <DatePickerComponent
        setStartValue={setStartValue}
        setEndValue={setEndValue}
        startValue={startValue}
        endValue={endValue}
        searchHandle={fetchData}
      />
      <SearchComponent
        searchTransHandle={setSearchTerm}
        searchTerm={searchTerm}
        searchHandle={fetchData}
      />
      <TableComponent transactions={transactions} />
      <Footer />
    </div>
  );
};

export default FetchComponent;
