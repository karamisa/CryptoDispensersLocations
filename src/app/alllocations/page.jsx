import { prisma } from "@/db";
import Link from "next/link";

export default async function Page() {
  const locations = await prisma.location.findMany();


  return (
    <>
      <div>
        <h1>All Locations</h1>
      </div>

      <ul>
        {locations.map((location) => (
          <li key={location.storeCode}>
            <h2>{location.businessName}</h2>
            <p>{location.addressLine1}</p>
            <p>{location.addressLine2}</p>
            <p>{location.addressLine3}</p>
            <p>{location.addressLine4}</p>
            <p>{location.addressLine5}</p>
            <p>{location.subLocality}</p>
            <p>{location.locality}</p>
            <p>{location.administrativeArea}</p>
            <p>{location.countryRegion}</p>
            <p>{location.postalCode}</p>
            <p>{location.latitude}</p>
            <p>{location.longitude}</p>
            <p>{location.primaryPhone}</p>
            <p>{location.additionalPhones}</p>
            <p>{location.website}</p>
            <p>{location.primaryCategory}</p>
            <p>{location.additionalCategories}</p>
            <p>{location.sundayHours}</p>
            <p>{location.mondayHours}</p>
            <p>{location.tuesdayHours}</p>
            <p>{location.wednesdayHours}</p>
            <p>{location.thursdayHours}</p>
            <p>{location.fridayHours}</p>
            <p>{location.saturdayHours}</p>
            <p>{location.specialHours}</p>
            <p>{location.fromTheBusiness}</p>
            <p>{location.logoPhoto}</p>
            <p>{location.coverPhoto}</p>
            <Link href={`/location/${location.storeCode}`}>
              {location.businessName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
