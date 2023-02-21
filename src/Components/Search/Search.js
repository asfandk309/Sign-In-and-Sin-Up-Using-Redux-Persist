import './Search.css'
function Search({ handleSearch, text, setText, error }) {

    return (
        <div className='container-search mt-3 p-4'>
            <div className='row'>
                <div className='col-1 '>
                    <img src="images/icon-search.svg" alt="Search Icon" />
                </div>
                <div className='col-8'>
                    <input type="text"
                        placeholder="Search Github username..."
                        className='form-control search-input'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='col-2'>
                    <span className='error'>{error}</span>
                </div>
                <div className='col-1'>
                    <div>
                        <button className='btn btn-primary button-style'
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Search;



