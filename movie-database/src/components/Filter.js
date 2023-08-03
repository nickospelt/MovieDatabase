import { React } from 'react'
import { useState } from 'react'

const Filter = ({ filterMovies }) => {
    const [enableFilter, setEnableFilter] = useState(false)
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        var start_year = start.substring(0,4)
        var start_month = start.substring(5,7)

        var end_year = end.substring(0,4)
        var end_month = end.substring(5,7)

        if (!start || !end || start_year > end_year || (start_year === end_year && start_month > end_month)) {
            alert("Please enter valid year range")
            return
        }

        filterMovies(start, end)
        setEnableFilter(false)

        setStart('')
        setEnd('')
    }

    return (
        <div className="filter">
            {enableFilter ?
                <form className="filter-form" onSubmit={onSubmit}>
                    <input className="text-field" id="start-area" type="text" placeholder="Start Date (yyyy-mm)..." value={start} onChange={(e) => setStart(e.target.value)}></input>
                    <input className="text-field" id="end-area" type="text" placeholder="End Date (yyyy-mm)..." value={end} onChange={(e) => setEnd(e.target.value)}></input>
                    <input className="btn" id="submit-filter-btn" type="submit" value="Filter"></input>
                </form>
                :
                <button className="btn" onClick={() => setEnableFilter(!enableFilter)}>Filter</button>
            }
        </div>
    )
}

export default Filter