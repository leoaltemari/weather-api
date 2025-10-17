<div align="center">

# 🌦️ Buienradar GraphQL Proxy API

**A modern GraphQL proxy for Dutch weather data**

[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=graphql&logoColor=white)](https://graphql.org/)
[![Apollo Server](https://img.shields.io/badge/Apollo%20Server-5.0-311C87?style=flat&logo=apollo-graphql&logoColor=white)](https://www.apollographql.com/)

</div>

---

## 📖 Overview

A lightweight GraphQL API that acts as a proxy to [Buienradar's](https://www.buienradar.nl/) public weather data feed. Provides typed GraphQL schema, CORS support, error handling, and timeout protection for consuming applications.

### ✨ Features

- 🔄 **Proxy Layer** — Abstracts upstream API complexities
- 🛡️ **Type Safety** — Fully typed GraphQL schema
- ⚡ **Timeout Protection** — Configurable request timeouts
- 🌐 **CORS Ready** — Pre-configured for web clients
- 📊 **Apollo Explorer** — Built-in GraphQL playground
- 🪵 **Structured Logging** — Timestamped error & info logs

**Upstream Source:** `https://data.buienradar.nl/2.0/feed/json`

---

## 🚀 Quick Start

### Prerequisites

```bash
Node.js 20+ recommended
```

### Installation

```bash
npm install
```

### Configuration

Environment variables (all optional):

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `4000` | Server port |
| `BUIENRADAR_URL` | `https://data.buienradar.nl/2.0/feed/json` | Upstream API URL |
| `REQUEST_TIMEOUT_MS` | `8000` | Request timeout in milliseconds |

### Run

```bash
npm start
```

🎉 Server ready at **http://localhost:4000/**
🔍 Open the URL to access Apollo Explorer

---

## 🌐 CORS Policy

Configured origins:
- `http://localhost:4200` — Local development
- `https://leoaltemari.github.io` — GitHub Pages deployment

---

## 📝 Usage

### Root Query

```graphql
weatherData: WeatherData
```

### Example Query

```graphql
query GetWeather {
  weatherData {
    buienradar {
      copyright
      terms
    }
    actual {
      sunrise
      sunset
      stationmeasurements {
        stationid
        stationname
        temperature
        windspeed
        weatherdescription
      }
    }
    forecast {
      weatherreport {
        title
        summary
      }
      fivedayforecast {
        day
        mintemperature
        maxtemperature
        rainChance
        weatherdescription
      }
    }
  }
}
```
---
