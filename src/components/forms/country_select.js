import { CountryDropdown } from 'react-country-region-selector';


export default function CountrySelect({country, handleCountryChange}){


  const selectCountry = (val) => {
    handleCountryChange(val)
  }

    return (
      <div className='text-black rounded-lg overflow-hidden'>
        <CountryDropdown
          value={country}
          onChange={(val) => selectCountry(val)} />
      </div>
    );
}