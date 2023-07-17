import React from 'react';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { IStackProps, IStackStyles, IStackTokens, Stack, TextField } from '@fluentui/react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import Plot from 'react-plotly.js';
import { Icon } from 'leaflet';
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

function App() {
  const [value, setValue] = React.useState('');

  return (
    <FluentProvider theme={darkTheme}>
      <Stack horizontalAlign="center" styles={stackStyles}>
        <Stack style={{width: '60%', border: '1px solid #193253', padding: '1.5rem', margin: '1.5rem'}}>
          <h1>Szacunkowa Produkcja Energii z fotowoltaiki</h1>
          <span>Wprowadź informacje na temat instalacji i sprawdź estymowaną historyczną produkcję energii na podstawie przygotowanych danych</span>
          <Stack style={{ border: '1px solid', padding: '1rem', margin: '1rem' }} horizontal disableShrink horizontalAlign="space-between" >
            <Stack horizontal tokens={themedExtraSmallStackTokens}>
              <Stack >
                <Input type="number" title='Zainstalowana moc' placeholder="zainstalowana moc"></Input>
                <Input type="number" title="kąt nachylenia" placeholder="kąt nachylenia"></Input>
                <Input type="number" title="azymut" placeholder="azymut"></Input>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <MapContainer style={{ height: '30vh' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
              <TileLayer

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
            <Input type="text" title="adres" placeholder="adres"></Input>
            { /* here is a plot from values from api*/}
            <Plot 
            style={{ width: '100%', height: '100%' }}
            
            data={[
              {
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                mode: "lines",
              },
            ]} layout={{ title: "Chart Title" }} />
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
