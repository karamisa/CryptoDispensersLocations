import { getConvertedData } from "../data/sampleLocs";


export const getLocations = async () => {
    const data = await getConvertedData();
    return data;
    }

export const getLocationsByType = async (type) => {
    const data = await getConvertedData();
    const locations = data.filter(location => location.type === type);
    return locations;
    }

