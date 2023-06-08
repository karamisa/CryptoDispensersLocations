import { DirectorySection } from "./DirectorySection";

export function DirectoryList({ section }) {
  return (
    <div className="my-8 px-4 md:px-24 lg:px-24">
        <DirectorySection title={section.title} locations={section.locations} />
    </div>
  )
}

  