const Form = ({ countrySearch, handleCountrySearch }) => {
    return (
        <div>
          find countries:
          <input  autoFocus="on"value={countrySearch} onChange={handleCountrySearch}  />
        </div>
    )
        
   
}
export default Form;