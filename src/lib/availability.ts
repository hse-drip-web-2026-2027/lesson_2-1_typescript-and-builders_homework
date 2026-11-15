import type { Booking, WorkshopId } from '../models/booking'
import { TYPESCRIPT_CAPACITY, BUILD_CAPACITY } from '../data/capacities'

const CAPACITIES: Record<WorkshopId, number> = {
  typescript: TYPESCRIPT_CAPACITY,
  build: BUILD_CAPACITY,
}

export function countWorkshopSeats(items: Booking[], workshop: WorkshopId): number {
  let total = 0
  items.forEach((booking) => {
    if (booking.workshop === workshop) total += booking.seats
  })
  return total
}

export function getRemainingSeats(items: Booking[], workshop: WorkshopId): number {
  return CAPACITIES[workshop] - countWorkshopSeats(items, workshop)
}