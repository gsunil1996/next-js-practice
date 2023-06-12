import EventList from '@/components/events/eventList/EventList';
import EventsSearch from '@/components/events/eventsSearch/EventsSearch';
import { getAllEvents } from '@/dummy-data'
import { useRouter } from 'next/router';
import React from 'react';

const AllEventsPage = () => {
    const events = getAllEvents();
    const router = useRouter();
    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </>
    )
}

export default AllEventsPage