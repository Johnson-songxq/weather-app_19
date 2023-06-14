##第一步：将设计好的 UI 划分为组件层级
在按照责任划分组件的时候，出现了重名，说明了这个组件**有可能**是一个通用组件，可以被复用

可读？
可维护？
可复用？

- 按照责任划分组件
- 按照复用划分组件

##第二步：使用 React 构建一个静态版本 （提升熟练 HTML/CSS），非动态（Javascript 的）动态的

##第三步：发现 UI 精简且完整的 state 表示

每一个 state 对应着至少一处 UI 变化
每一处 UI 变化都对应着一个 State

- 父传子, props
- 子传父, state lifting
- 兄弟相传/亲戚相传 state lifting

像傻子一样写 React。将写法固定下来，不要去思考，通过大量练习，形成肌肉记忆。

##第四步：验证 state 应该被放置在哪里

##步骤五：添加反向数据流(change handler)

- App(渲染 App 样式， 背景图片和布局，redux，路由)

  - WeatherCard （渲染 WeatherCard 样式，细节样式 + 布局）
    - CurrentCity（渲染 CurrentCity 样式，背景图片和布局）
      - Temperature （渲染 Temperature 样式，细节样式）
      - Weather（渲染 Weather 样式，细节样式）
      - Meta（渲染 Meta 样式，布局）
        - Humidity（渲染 Humidity 样式，细节样式）
        - Wind（渲染 Wind 样式，细节样式）
      - Name （渲染 Name 样式，细节样式）
  - Othercities （渲染 Othercities 样式，布局和统筹所有 cities）
    - City[] （渲染 City 样式，布局）
      - Name（渲染 Name 样式，细节样式）
      - Temperature （渲染 Temperature 样式，细节样式）
      - WeatherIcon （渲染 WeatherIcon 样式，细节样式）
  - Forecast （渲染样式，布局和统筹所有 days of week）
    - DayofWeek[] （渲染 DayofWeek 样式，布局）
      - Name（渲染 Name 样式，细节样式）
      - WeatherIcon（渲染 WeatherIcon 样式，细节样式）
      - Temperature（渲染 Temperature 样式，细节样式）

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
