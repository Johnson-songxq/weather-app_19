# How to write a React Web Application
## 1st split the UI into components
You may spli the UI into components according to their responsibilities.  If some of the componets have same name, they may be a common component which can be reused.  So make a reusable component.

Pay attention to the following methodologies:
- readable
- maintanable
- reusable

## 2nd make a static web application with React

## 3rd find those 'state' in the UI
Every state is according to one specific change in the UI
Every change in the UI is according to a 'state'

Pay attention to the props passing
- parent->children: props
- children->parent: state lifting
- sibling -> sibling: state lifting

## 4th verify the location where states should be placed

## 5th add reverse data flow (change handler)

## Final componments 
- App(overall App style，background picture and layout，redux，routing)
  - WeatherCard （WeatherCard style，detailed style and layout）
    - CurrentCity（CurrentCity style，background picture and layout）
      - Temperature （Temperature style，detail）
      - Weather（Weather style，detail）
      - Meta（Meta style，layout）
        - Humidity（Humidity style，layout）
        - Wind（Wind style，detailed layout）
      - Name （Name style，detailed layout）
  - Othercities （Othercities style）
    - City[] （City style and layout）
      - Name（Name style and layout）
      - Temperature （Temperature style and layout）
      - WeatherIcon （WeatherIcon style，and layout）
  - Forecast （style，layout of days of week）
    - DayofWeek[] （DayofWeek style and layout）
      - Name（Name style and layout）
      - WeatherIcon（WeatherIcon style and detail）
      - Temperature（Temperature style and detail）

- Temperature
- WeatherIcon
- Name
- SubSection
- BackgroundImage

```jsx
const CITIES = [
  { name: "Melbourne", lat: "-37.8142176", lon: "144.9631608" },
  { name: "Sydney", lat: "-33.8698439", lon: "151.2082848" },
  { name: "Brisbane", lat: "-27.4689682", lon: "153.0234991" },
  { name: "Adelaide", lat: "-34.9281805", lon: "138.5999312" },
  { name: "Perth", lat: "-31.9558964", lon: "115.8605801" },
  { name: "Hobart", lat: "-42.8825088", lon: "147.3281233" },
  { name: "Darwin", lat: "-12.46044", lon: "130.8410469" },
];
```
