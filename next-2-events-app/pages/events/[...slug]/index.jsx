import EventList from '@/components/events/eventList/EventList';
import ResultsTitle from '@/components/results-title/results-title';
import Button from '@/components/ui/button/Button';
import ErrorAlert from '@/components/ui/error-alert/error-alert';
import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router'
import React from 'react'

const FilteredEventsPage = () => {
    const router = useRouter();
    const filteredData = router.query.slug;

    if (!filteredData) {
        return <p className='center' >Loading...</p>
    }

    const numYear = +filteredData[0];
    const numMonth = +filteredData[1];

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return (
            <>
                <ErrorAlert>Invalid filter, please adjust values!</ErrorAlert>
                <div className='center' >
                    <Button link='/events' >Show All Events</Button>
                </div>
            </>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>No Events Found for choosen filter!</ErrorAlert>
                <div className='center' >
                    <Button link='/events' >Show All Events</Button>
                </div>
            </>
        )
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </div>
    )
}

export default FilteredEventsPage