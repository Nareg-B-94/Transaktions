import { useState } from 'react';
import PrintIcon from '@mui/icons-material/Print';
import GetAppIcon from '@mui/icons-material/GetApp';
import SearchIcon from '@mui/icons-material/Search';
import './SearchComponent.css';

const SearchComponent = (props) => {
  const { searchTerm, setSearchTerm, searchTransHandle } = props;

  return (
    <div className='content2'>
      <div className='searchDiv'>
        <input
          type='text'
          value={searchTerm}
          placeholder='Transaktionen durchsuchen'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button onClick={searchTransHandle}>
          <SearchIcon />
        </button>
      </div>
      <div className='actionButtons'>
        <div className='divider'>
          <button onClick={() => window.print()}>
            <PrintIcon />
          </button>
          <span>drucken</span>
        </div>
        <div className='divider'>
          <button onClick={() => window.location.reload()}>
            <GetAppIcon />
          </button>
          <span>exportieren</span>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
