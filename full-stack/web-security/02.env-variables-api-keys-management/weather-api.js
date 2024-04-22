import fs from "fs";

// Read the weather data from JSON
const weather_data = JSON.parse(fs.readFileSync("./weather-data.json", "UTF-8"));

// Returns premium weather data for a given Zip Code using the API key
export const getWeather = (zip_code, API_KEY) => {
    if (API_KEY !== "Th151sb4D3x4Mp13of4n4P1K3y"){  // Check API key
        console.log("The provided API key is not valid. Please double check your API key.");
        return 0;
    }

    if (zip_code in weather_data) {
        return weather_data[zip_code]
    } else {    // Ask to try an existing zip_code if the given zip code does not exist in the "database"
        const zip_codes = Object.keys(weather_data)
        const random_zip_code = zip_codes[zip_codes.length * Math.random() << 0];
        console.log("That zip code was not found. Why don't you try '" + random_zip_code + "'?")
        return -1
    }
}
