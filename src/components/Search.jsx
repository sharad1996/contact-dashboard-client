import React from 'react'
import { Input } from 'antd'

const { Search } = Input;

export const SearchBox = (props) => {
    return (
        <div>
            <Search
                className="search-contact"
                placeholder="Search Contact"
                onSearch={value => props.onChangeSearch(value)}
            />
        </div>
    );
}