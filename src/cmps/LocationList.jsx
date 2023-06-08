import { LocationCard } from "./LocationCard";

export function LocationList({locations}) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
        ))}
    </ul>
  )
}
