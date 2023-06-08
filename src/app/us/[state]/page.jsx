import { DirectorySection } from "@/cmps/DirectorySection";
import { Hero } from "@/cmps/Hero";

async function fetchCitiesWithLocationCount(state) {
    const citiesWithCount = await prisma.location.groupBy({
        by: ["locality"],
        where: {
            administrativeArea: state,
        },
        _count: { id: true },
    });
  
    const data = citiesWithCount.map((city) => {
      return {
        count: city._count.id,
        name: city.locality,
        href: `/us/${state}/${city.locality}`,
      };
    });
  
    //sort by us state name
    const sortedData = data.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    return sortedData;
  }


export default async function StatePage({params: {state}}) {
    console.log(state)
    const items = await fetchCitiesWithLocationCount(state);
    return (
        <div>
            <Hero />
            <DirectorySection title={`United States / ${state}`} locations={items} />
        </div>
    );
}