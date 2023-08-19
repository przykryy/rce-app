import React, { useEffect } from 'react';
import './style.scss';
import { IStackStyles, IStackTokens, Stack } from '@fluentui/react';
import Plot from 'react-plotly.js';
import { BrandVariants, FluentProvider, createDarkTheme, createLightTheme, Theme, Input } from '@fluentui/react-components';


const myNewTheme: BrandVariants = {
  10: "#020305",
  20: "#111723",
  30: "#16263D",
  40: "#193253",
  50: "#1B3F6A",
  60: "#1B4C82",
  70: "#18599B",
  80: "#1267B4",
  90: "#3174C2",
  100: "#4F82C8",
  110: "#6790CF",
  120: "#7D9ED5",
  130: "#92ACDC",
  140: "#A6BAE2",
  150: "#BAC9E9",
  160: "#CDD8EF"
};

const lightTheme: Theme = {
  ...createLightTheme(myNewTheme),
};

const darkTheme: Theme = {
  ...createDarkTheme(myNewTheme),
};

darkTheme.colorBrandForeground1 = myNewTheme[110];
darkTheme.colorBrandForeground2 = myNewTheme[120];

export function App() {
  // const [data, setData] = useState({});
  useEffect(() => {
    fetch('/api', {
      method: 'POST',
      body: JSON.stringify(
        {
          'start': '2023-07-10',
          'end': '2023-07-11',
          'lat': 52.1077,
          'lon': 22.1306,
          'azimuth': 0,
          'angle': 30,
          'peak_power': 7000,
        }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      // .then(data => setData(data))
      .then(data => console.log(data));
  }, []);


  return (
    <FluentProvider theme={lightTheme}>
      <Stack horizontalAlign="center" styles={stackStyles}>
        <Stack style={{ width: '60%', border: '1px solid #193253', padding: '1.5rem', margin: '1.5rem' }}>
          <h1>Szacunkowa Produkcja Energii z fotowoltaiki</h1>
          <span>Wprowadź informacje na temat instalacji i sprawdź estymowaną historyczną produkcję energii na podstawie przygotowanych danych</span>
          <Stack style={{ border: '1px solid', padding: '1rem', margin: '1rem' }} horizontal disableShrink horizontalAlign="space-between" >
            <Stack horizontal tokens={themedExtraSmallStackTokens}>
              <Stack >
                <Input type="number" title='Zainstalowana moc' placeholder="zainstalowana moc"></Input>
                <Input type="number" title="kąt nachylenia" placeholder="kąt nachylenia"></Input>
                <Input type="number" title="azymut" placeholder="azymut"></Input>
              </Stack>
              <Stack>
                <h3>Mapa tutaj</h3>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <h3>Prognozowana produkcja energii z fotowoltaiki</h3>
            { /* here is a plot from values from api*/}
            <Plot
              style={{ width: '100%', height: '100%' }}

              data={[
                {
                  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  mode: "lines",
                },
                {
                  x: [1, 5, 3, 5, 5, 6, 5, 8, 5, 10],
                  y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 100],
                  mode: "lines",
                },
              ]} config={{ autosizable: true }} layout={{ title: "Prognozowana produkcja energii z fotowoltaiki" }} />
          </Stack>
          <Stack>
            <h3>Zysk z produkcji przy rozliczeniu net-billing</h3>
            { /* here is a plot from values from api*/}
            <Plot
              style={{ width: '100%', height: '100%' }}

              data={[
                {
                  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  mode: "lines",
                },
              ]} layout={{ title: "Zysk z produkcji przy rozliczeniu net-billing" }} />
          </Stack>
          <Stack>
            { /* contact us component*/}
          </Stack>
        </Stack>
      </Stack>
    </FluentProvider>
  );
}

const themedExtraSmallStackTokens: IStackTokens = {
  childrenGap: 's2',
  padding: 's2',
};

const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inner: { width: '100%', border: '1px solid' }
};

export default App;

