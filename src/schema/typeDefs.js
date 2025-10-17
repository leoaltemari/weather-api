const typeDefs = `#graphql
  type BuienradarInfo {
    copyright: String
    terms: String
  }

  type StationMeasurement {
    stationid: Int
    stationname: String
    regio: String
    lat: Float
    lon: Float
    temperature: Float
    groundtemperature: Float
    feeltemperature: Float
    winddirection: String
    windspeed: Float
    windspeedBft: Int
    windgusts: Float
    airpressure: Float
    humidity: Float
    precipitation: Float
    sunpower: Float
    rainFallLast24Hour: Float
    rainFallLastHour: Float
    visibility: Float
    weatherdescription: String
    iconurl: String
    fullIconUrl: String
    graphUrl: String
    timestamp: String
    winddirectiondegrees: Int
  }

  type ActualWeather {
    actualradarurl: String
    sunrise: String
    sunset: String
    stationmeasurements: [StationMeasurement]
  }

  type FiveDayForecast {
    day: String
    mintemperature: String
    maxtemperature: String
    mintemperatureMax: Int
    mintemperatureMin: Int
    maxtemperatureMax: Int
    maxtemperatureMin: Int
    rainChance: Int
    sunChance: Int
    windDirection: String
    wind: Int
    mmRainMin: Float
    mmRainMax: Float
    weatherdescription: String
    iconurl: String
    fullIconUrl: String
  }

  type WeatherReport {
    title: String
    summary: String
    text: String
  }

  type Forecast {
    weatherreport: WeatherReport
    shortterm: WeatherReport
    longterm: WeatherReport
    fivedayforecast: [FiveDayForecast]
  }

  type WeatherData {
    buienradar: BuienradarInfo
    actual: ActualWeather
    forecast: Forecast
  }

  type Query {
    weatherData: WeatherData
  }
`;

export default typeDefs;
