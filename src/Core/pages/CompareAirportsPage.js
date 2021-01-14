import React from 'react'
import { Title } from '../../../src/Typography/Title'
import { Subtitle } from '../../../src/Typography/Subtitle'
import { Paragraph } from '../../Typography/Paragraph'
import { InformationBox } from '../InformationBox'
import { Map } from '../Map'
import coordinates from './../../../public/assets/coordinates.json'

function CompareAirportsPage() {
  return (
    <section className="compare-page-container">
      <section className="compare-page-content">
        <div className="title">
          <Title>VERGELIJKEN VAN DE LUCHTHAVENS</Title>
          <Subtitle>2019 & 2020</Subtitle>
        </div>
        <div className="text-section">
          <div>
            <Paragraph>
              Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
              zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
              bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een
              zethaak met letters nam en ze door elkaar husselde om een
              font-catalogus te maken. Het heeft niet alleen vijf eeuwen
              overleefT. toen een onbekende drukker een zethaak met letters nam
              en ze door elkaar husselde om een font-catalogus.
            </Paragraph>
          </div>

          <InformationBox backgroundColor="red">
            <Subtitle>TITLE</Subtitle>
            <Paragraph>
              De Vliegtuigbewegingen van Schiphol zijn in 2020 met 89,9% gedaald
              ten opzichte van 2019
            </Paragraph>

            <Paragraph>2019: 41.892</Paragraph>
            <Paragraph>2020: 4.242</Paragraph>
          </InformationBox>
        </div>

        <section className="compare-chart">
          <h3>Luchtverkeer tijdens de lockdown</h3>
          <div className="chart"></div>
        </section>

        <section className="multiple-charts">
          {coordinates.airports.map((item, index) => {
            return (
              <div key={index} className="map-container">
                <p>{item.city}</p>
                <Map coordinates={item} />
              </div>
            )
          })}
        </section>
      </section>
    </section>
  )
}

export default CompareAirportsPage