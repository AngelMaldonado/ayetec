import { Body, Container, Head, Html, Section, Text } from "@react-email/components";
import * as React from "react";

export default function Contact({ name, email, phone, message }: { name: string, email: string, phone: string, message: string }) {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Section>
            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>¡Hola!</Text>
            <Text style={{ marginTop: "10px" }}>
              Mensaje de un nuevo cliente desde el formulario de contacto de AyE
            </Text>
            <Text style={{ marginTop: "10px" }}>
              <strong>Nombre:</strong> {name}
            </Text>
            <Text style={{ marginTop: "10px" }}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ marginTop: "10px" }}>
              <strong>Mensaje:</strong> {message}
            </Text>
            <Text style={{ marginTop: "10px" }}>
              <strong>Teléfono:</strong> {phone}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}