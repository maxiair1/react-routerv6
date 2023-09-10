import { useState } from "react";

export const BlogFilter = ({ postSearch, latestSearch, setSearchParams }) => {

    const [postSearchState, setPostSearchState] = useState(postSearch);
    const [latestSearchState, setLatestSearchState] = useState(latestSearch);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const queryPost = form.search.value;
        const queryLatest = form.latest.checked;
        const param = {};

        if (queryPost.length) param.post = queryPost || "";
        if (queryLatest) param.latest = queryLatest;
        setSearchParams(param);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="search" name="search" onChange={ (e) => setPostSearchState(e.target.value) }
                   value={ postSearchState }/>
            <label style={ { padding: '0 1rem' } }>
                <input type="checkbox" name="latest" checked={ latestSearchState }
                       onChange={ e => setLatestSearchState(e.target.checked) }/> New only
            </label>
            <input type="submit" value="Search"/>
        </form>
    )
}