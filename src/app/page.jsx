import { Hero } from "@/cmps/Hero";
import { DirectorySection } from "@/cmps/DirectorySection";
import { prisma } from "@/db";
import { lookup } from "us";

async function fetchStatesWithLocationCount() {
  const statesWithCount = await prisma.location.groupBy({
    by: ["administrativeArea"],
    _count: { id: true },
  });

  const data = statesWithCount.map((state) => {
    return {
      count: state._count.id,
      name: lookup(state.administrativeArea).name,
      ISO: state.administrativeArea,
      href: `/us/${state.administrativeArea}`,
    };
  });

  //sort by us state name
  const sortedData = data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return sortedData;
}

export default async function Home() {
  const items = await fetchStatesWithLocationCount();
  return (
    <div>
      <Hero />
      <DirectorySection title="US" locations={items} />
    </div>
  );
}
