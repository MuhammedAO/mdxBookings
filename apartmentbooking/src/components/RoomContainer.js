import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomConsumer } from '../context'
import Spinner from './Spinner'

export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
            (value) => {
            const {loading, sortedRooms, rooms} = value
            if (loading) {
                return <Spinner/>
            }
            return (
                <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
             </>
            )   
            }
            }
        </RoomConsumer>
    
    )
}
