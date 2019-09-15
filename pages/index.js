import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

const cardInfo = [
  {
    info: "Ensimmäinen maa joka juridisesti hyväksyi homojen rekisteröidyn parisuhteen",
    country: "DNK"
  },
  {
    info: "Maailman suurin HIV/AIDS-osuus väestöstä",
    country: "SWZ"
  },
  {
    info: "Suurin äitiyskuolleisuus kehittyneissä maissa",
    country: "USA"
  },
  {
    info: "Lainsäädäntö kaikkein oikeudenmukaisin koskien LGBTQ+-vähemmistöä",
    country: "CAN"
  },
  {
    info: "Yksi niistä maista joissa e-pillerit ovat ilmaisia",
    country: "FRA"
  },
  {
    info: "Ensisynnyttäjän keski-ikä 18 vuotta",
    country: "NGA"
  },
  {
    info: "Pohjoismaa jossa saa valita passiinsa vapaasti kolmannen sukupuolen",
    country: "ISL"
  }
];

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const bold = {
  fontWeight: "bold",
  paddingBottom: "1em"
}

const normal = {
  fontWeight: "normal",
  paddingBottom: "1em"
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "",
      questions: cardInfo
    }
  }

  render() {
    return (
      <div className="App">
        <div style={wrapperStyles}>
          <ComposableMap
            projectionConfig={{
              scale: 205,
              rotation: [-11,0,0],
            }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto",
            }}
            >
            <ZoomableGroup center={[0,20]} disablePanning>
              <Geographies geography="/static/world-50m.json">
                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                  <Geography
                    key={i}
                    onClick={() => {
                      if (geography.properties.ISO_A3 == this.state.selected) {
                        alert("CORRECT")
                        this.setState(prev => ({
                          questions: prev.questions.filter(x => x.country !== prev.selected),
                          selected: ""
                        }))
                      }
                    }}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#607D8B",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                ))}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
        <div className="cards">
          {this.state.questions.map(({info, country}) => 
            <div 
              className="card" 
              key={country} 
              onClick={() => this.setState({selected: country})} 
              style={this.state.selected == country ? bold : normal} 
            >
              <label>{info}</label>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App;
