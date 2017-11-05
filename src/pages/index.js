import React, { Component } from "react";

import Title from "../components/title";
import Section from "../components/section";
import Button from "../components/button";
import Member from "../components/member";

import pyconSelfie from "../assets/pycon-selfie.jpg";
import pyconItalia from "../assets/image.jpg";

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Section background={pyconSelfie}>
          <Title>Chi Siamo</Title>

          <div
            dangerouslySetInnerHTML={{
              __html: this.props.data.whoWeAre.edges[0].node.html
            }}
          />
        </Section>

        <Section yellow>
          <Title>Consiglio Associativo</Title>

          <div>
            <Member name="Patrick Arminio" bio="President" />
            <Member name="Simone Zinanni" bio="Vice President" />
            <Member name="Matteo Benci" bio="Treasurer" />
          </div>
        </Section>

        <Section background={pyconItalia} maxWidthInner={500}>
          <Title white>PyCon Italia</Title>

          <div
            dangerouslySetInnerHTML={{
              __html: this.props.data.pycon.edges[0].node.html
            }}
            style={{ color: "white" }}
          />

          <Button href="https://www.pycon.it" target="_blank">
            Visita il sito
          </Button>
        </Section>
      </div>
    );
  }
}

export const query = graphql`
  query Home {
    whoWeAre: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/home/who-we-are.md$/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
    pycon: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/home/pycon.md$/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;

export default IndexPage;
