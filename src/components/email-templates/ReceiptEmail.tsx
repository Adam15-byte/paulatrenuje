import { ebooksConfig } from '@/configs/ebooksConfig';
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';
import { capitalizeFirstLetter } from '@/utils/stringUtils';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

interface Props {
  userEmail: string;
  firstName: string;
  moneyCharged: number;
  productIds: string[];
}

export const ReceiptEmail: React.FC<Props> = ({
  userEmail,
  firstName,
  moneyCharged,
  productIds,
}) => (
  <Html>
    <Head />
    <Preview>Miłych treningów, przynoszę twoje ebooki!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section className="bg-pink p-4">
          <Row>
            <Column>
              <Text style={global.paragraphWithBold}>
                Dziękuję za zamówienie {capitalizeFirstLetter(firstName)}!
              </Text>
            </Column>
          </Row>
        </Section>
        <Hr style={global.hr} />
        <Section style={message}>
          <Img
            src="https://www.paulatreningi.pl/LogoBezNapisu1.png"
            alt="Paula Trenuje Logo"
            width={70}
            height={70}
            className="object-contain"
            style={{ margin: 'auto' }}
          />
          <Heading style={global.heading}>Czas działać</Heading>
          <Text style={global.text}>Twoje zamówienie jest zrealizowane</Text>
          <Text style={{ ...global.text, marginTop: 24 }}>
            Ten email jest potwierdzeniem płatności, która została zrealizowana
            zgodnie z wybraną przez Ciebie metodą płatności. Użyj linków poniżej
            aby pobrać kupione produkty.
          </Text>
        </Section>
        <Hr style={global.hr} />
        <Hr style={global.hr} />
        <Section
          style={{ ...paddingX, paddingTop: '40px', paddingBottom: '40px' }}
        >
          {productIds.map((id, index) => {
            const productData = ebooksConfig.find((ebook) => ebook.id === id);
            if (productData) {
              const downloadlink = `https://www.paulatreningi.pl/api/email-send/pdf-waterproof/${userEmail}/${id}`;
              return (
                <Row key={id}>
                  <Column>
                    <Link href={downloadlink}>
                      <Img
                        src={`https://www.paulatreningi.pl${productData.picture}`}
                        alt={`${productData.title} image`}
                        width="150"
                      />
                    </Link>
                  </Column>
                  <Column
                    style={{ verticalAlign: 'middle', paddingLeft: '12px' }}
                  >
                    <Text
                      style={{
                        ...paragraph,
                        fontWeight: '500',
                        fontSize: '18px',
                      }}
                    >
                      {productData.title}
                    </Text>
                    <Link
                      href={downloadlink}
                      style={{
                        ...global.text,
                        fontSize: '18px',
                        color: '#f88231',
                      }}
                    >
                      Pobierz
                    </Link>
                  </Column>
                </Row>
              );
            }
          })}
        </Section>
        <Hr style={global.hr} />
        <Section style={menu.container}>
          <Text style={global.heading}>PaulaTreningi.com</Text>
          <Row style={categories.container}>
            <Column align="center">
              <Link href="https://paulatreningi.pl" style={categories.text}>
                Strona główna
              </Link>
            </Column>
            <Column align="center">
              <Link
                href="https://paulatreningi.pl/#ebooki"
                style={categories.text}
              >
                Ebooki
              </Link>
            </Column>
            <Column align="center">
              <Link
                href="https://paulatreningi.pl/#personalne"
                style={categories.text}
              >
                Treningi personalne
              </Link>
            </Column>
          </Row>
        </Section>
        <Hr style={{ ...global.hr, marginTop: '12px' }} />
        <Section style={paddingY}>
          <Row style={footer.policy}>
            <Column className="mr-8">
              <Link
                href="https://paulatreningi.pl/regulamin"
                style={footer.text}
                className="cursor-pointer"
              >
                Regulamin
              </Link>
            </Column>
            <Column>
              <Link
                href="https://paulatreningi.pl/polityka-prywatnosci"
                style={footer.text}
                className="cursor-pointer"
              >
                Polityka prywatności
              </Link>
            </Column>
          </Row>
          <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
            Skontaktuj się ze mną na instagramie jeśli masz pytania.
          </Text>
          <Text style={footer.text}>
            © 2024 PaulaTreningi, All Rights Reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ReceiptEmail;

const paddingX = {
  paddingLeft: '40px',
  paddingRight: '40px',
};

const paddingY = {
  paddingTop: '22px',
  paddingBottom: '22px',
};

const paragraph = {
  margin: '0',
  lineHeight: '2',
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph },
  heading: {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: '-1px',
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: '#747474',
    fontWeight: '500',
  },
  button: {
    border: '1px solid #929292',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '10px 0px',
    width: '220px',
    display: 'block',
    textAlign: 'center',
    fontWeight: 500,
    color: '#000',
  } as React.CSSProperties,
  hr: {
    borderColor: '#E5E5E5',
    margin: '0',
  },
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '10px auto',
  width: '600px',
  border: '1px solid #E5E5E5',
};

const track = {
  container: {
    padding: '22px 40px',
    backgroundColor: '#F7F7F7',
  },
  number: {
    margin: '12px 0 0 0',
    fontWeight: 500,
    lineHeight: '1.4',
    color: '#6F6F6F',
  },
};

const message = {
  padding: '40px 74px',
  textAlign: 'center',
} as React.CSSProperties;

const recomendationsText = {
  margin: '0',
  fontSize: '15px',
  lineHeight: '1',
  paddingLeft: '10px',
  paddingRight: '10px',
};

const recomendations = {
  container: {
    padding: '20px 0',
  },
  product: {
    verticalAlign: 'top',
    textAlign: 'left' as const,
    paddingLeft: '2px',
    paddingRight: '2px',
  },
  title: { ...recomendationsText, paddingTop: '12px', fontWeight: '500' },
  text: {
    ...recomendationsText,
    paddingTop: '4px',
    color: '#747474',
  },
};

const menu = {
  container: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',
    backgroundColor: '#F7F7F7',
  },
  content: {
    ...paddingY,
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  title: {
    paddingLeft: '20px',
    paddingRight: '20px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '13.5px',
    marginTop: 0,
    fontWeight: 500,
    color: '#000',
  },
  tel: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '32px',
    paddingBottom: '22px',
  },
};

const categories = {
  container: {
    width: '370px',
    margin: 'auto',
    paddingTop: '12px',
  },
  text: {
    fontWeight: '500',
    color: '#000',
  },
};

const footer = {
  policy: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    alignItems: 'center',
  },
  text: {
    margin: '0',
    color: '#AFAFAF',
    fontSize: '13px',
    textAlign: 'center',
  } as React.CSSProperties,
};
