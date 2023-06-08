import { DirectoryLocation } from "./DirectoryLocation";


export const DirectorySection = ({ title='United States', locations }) => (
  <div className="my-8 px-4 md:px-24 lg:px-24">
    <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        {title} 
    </h2>
    <ul
      role="list"
      className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {locations.map((location, index) => (
        <DirectoryLocation
          key={index}
          name={location.name}
          count={location.count}
          href = {location.href}
        />
      ))}
    </ul>
  </div>
);

