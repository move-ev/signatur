import {
  Button,
  Column,
  Container,
  Hr,
  Html,
  Row,
  Text,
} from "@react-email/components";
import type { CSSProperties } from "react";

export default function Footer() {
  return (
    <Html style={footer}>
      <Container style={container}>
        <Text style={name}>Christoph Langer</Text>
        <Text style={position}>Ressortleitung für IT</Text>

        <Hr style={divider} />

        <Row style={{ marginBottom: "4px", marginTop: "0px" }}>
          <Column style={labelColumn}>
            <Text style={label}>Email</Text>
          </Column>
          <Column>
            <Button style={value} href="mailto:christoph.langer@move-ev.de">
              christoph.langer@move-ev.de
            </Button>
          </Column>
        </Row>
        <Row style={{ marginBottom: "4px", marginTop: "0px" }}>
          <Column style={labelColumn}>
            <Text style={label}>Telefon</Text>
          </Column>
          <Column>
            <Button style={value} href="tel:+4917612345678">
              +49 176 12345678
            </Button>
          </Column>
        </Row>
        <Row style={{ marginBottom: "0px", marginTop: "0px" }}>
          <Column style={labelColumn}>
            <Text style={labelLast}>Web</Text>
          </Column>
          <Column>
            <Button style={value} href="https://move-ev.de">
              https://move-ev.de
            </Button>
          </Column>
        </Row>
        <Hr style={divider} />
        <Text
          style={{
            fontSize: "12px",
            fontWeight: "400",
            color: "#71717a",
            marginBottom: "0px",
            marginTop: "0px",
            lineHeight: "1.5",
          }}
        >
          Vertretungsberechtiger Vorstand:{" "}
          <Button
            href="mailto:jan.henke@move-ev.de"
            style={{ textDecoration: "underline", color: "#008DF2" }}
          >
            Jan Henke
          </Button>
          ,
          <br />
          <Button
            href="mailto:antonia.pfeifer@move-ev.de"
            style={{ textDecoration: "underline", color: "#008DF2" }}
          >
            Antonia Pfeifer
          </Button>
          ,{" "}
          <Button
            href="mailto:claudius.ruppel@move-ev.de"
            style={{ textDecoration: "underline", color: "#008DF2" }}
          >
            Claudius Ruppel
          </Button>
          ,{" "}
          <Button
            href="mailto:lennard.lohmann@move-ev.de"
            style={{ textDecoration: "underline", color: "#008DF2" }}
          >
            Lennard Lohmann
          </Button>
        </Text>
        <Text
          style={{
            fontSize: "12px",
            fontWeight: "400",
            color: "#71717a",
            marginBottom: "0px",
            marginTop: "6px",
          }}
        >
          Registergericht: Amtsgericht Münster
        </Text>
        <Text
          style={{
            fontSize: "12px",
            fontWeight: "400",
            color: "#71717a",
            marginBottom: "0px",
            marginTop: "6px",
          }}
        >
          Registernummer: VR 3742
        </Text>
        <Hr style={divider} />
        <Text
          style={{
            fontSize: "12px",
            fontWeight: "400",
            color: "#71717a",
            marginBottom: "0px",
            marginTop: "6px",
            lineHeight: "1.7",
          }}
        >
          Mitglied im Bundesverband Deutscher Studentischer
          Unternehmensberatungen e. V. (
          <Button
            href="https://www.bdsu.de"
            style={{ textDecoration: "underline", color: "#008DF2" }}
          >
            www.bdsu.de
          </Button>
          ) Mitglied im ConsultingNet NRW
        </Text>
        <Hr style={divider} />
        <Text style={copyright}>
          Unter Berücksichtigung der EU-DSGVO informieren wir Sie darüber, dass
          wir die von Ihnen angegebenen persönlichen Daten zum Zwecke der
          Bearbeitung und Beantwortung Ihrer Nachricht speichern. Detaillierte
          Informationen zu den Datenschutzhinweisen finden Sie auch direkt auf
          unserer Internetseite unter https://move-ev.de/datenschutz/ Hinweis:
          Diese E-Mail enthält vertrauliche und/oder rechtlich geschützte
          Informationen. Wenn Sie nicht der/die richtige Adressat*in sind oder
          diese E-Mail irrtümlich erhalten haben, informieren Sie bitte sofort
          den/die Absender*in und vernichten Sie diese E-Mail. Das unerlaubte
          Kopieren sowie die unbefugte Weitergabe dieser E-Mail sind nicht
          gestattet.
        </Text>
      </Container>
    </Html>
  );
}

const footer: CSSProperties = {
  fontFamily:
    "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
};

const container: CSSProperties = {
  padding: "0px",
  margin: "0px",
  textAlign: "left",
};

const name: CSSProperties = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#18181b",
  marginBottom: "0px",
  marginTop: "0px",
  lineHeight: "1.7",
};

const position: CSSProperties = {
  fontSize: "12px",
  fontWeight: "400",
  color: "#71717a",
  marginBottom: "0px",
  marginTop: "0px",
  lineHeight: "1.7",
};

const divider: CSSProperties = {
  borderColor: "#e4e4e7",
  marginBottom: "12px",
  marginTop: "12px",
  maxWidth: "100%",
};

const label: CSSProperties = {
  fontSize: "12px",
  fontWeight: "400",
  color: "#71717a",
  marginTop: "0px",
  marginBottom: "0px",
  lineHeight: "1.7",
};

const labelLast: CSSProperties = {
  ...label,
  marginBottom: "0px",
};

const labelColumn: CSSProperties = {
  width: "96px",
};

const value: CSSProperties = {
  fontSize: "12px",
  fontWeight: "400",
  color: "#008DF2",
  marginBottom: "0px",
  marginTop: "0px",
  lineHeight: "1.7",
};

const copyright: CSSProperties = {
  fontSize: "10px",
  fontWeight: "400",
  color: "#a1a1aa",
  marginBottom: "0px",
  marginTop: "0px",
  lineHeight: "1.5",
};
