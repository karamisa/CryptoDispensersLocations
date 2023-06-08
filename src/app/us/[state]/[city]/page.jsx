import { Hero } from "@/cmps/Hero";
import { LocationList } from "@/cmps/LocationList";


async function fetchLocationsInCity(state, city) {
    const locations = await prisma.location.findMany({
        where: {
            administrativeArea: state,
            locality: city,
        },
    });
    return locations;
}


export default async function CitiesPage({params: {city, state}}) {
    
    const items = await fetchLocationsInCity(state, city);
    console.log(items)
    return (
        <div>
            <Hero />
            <LocationList locations={items} />
        </div>
    );
}  