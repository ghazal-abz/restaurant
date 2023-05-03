import {BsSearch} from 'react-icons/bs';
import {useState} from "react";

const SearchBar = () => {
    const [value, setValue] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmit} className="search flex-fill flex-box align-items-center">
            <div className="input-group">
                <input
                    className="form-control rounded-end pe-5 border-success"
                    type="text"
                    placeholder="جستجوی فست فود ..."
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <BsSearch className='position-absolute top-50 translate-middle-y text-muted me-3' />
            </div>
        </form>
    )
}
export default SearchBar;
