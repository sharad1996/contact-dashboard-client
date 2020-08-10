import React from 'react'
import { Input } from 'antd'

const { Search } = Input;

export const SearchBox = () => {
    return (
        <div className="search">
            <Search
                placeholder="Search Contact"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />
        </div>
    );
}