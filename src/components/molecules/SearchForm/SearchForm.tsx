import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import Typography from "../../atoms/Typography/Typography";

import "./searchForm.scss";

interface Props {
    children?: any;
    className?: string;
}

const SearchForm: React.FC<Props> = ({
    children,
    className,
}) => {
    return (
        <div className={`search-form ${className ? className : ""}`}>
            <form>
                <Typography
                    bold
                    type="paragraph2"
                    variation="mobile"
                >
                    Search
                </Typography>
                <Input type="text" placeholder={'search...'}/>
                <Button model="filled">Search</Button>
            </form>
        </div>
    );
};

export default SearchForm;