import { ebooksConfig, ebooksConfigAll } from '@/configs/ebooksConfig';
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

interface Props {
  userEmail: string;
  firstName: string;
  productIds: string[];
}

export const OwnerConfirmation: React.FC<Props> = ({
  userEmail,
  firstName,
  productIds,
}) => (
  <Html>
    <Head />
    <Preview>{capitalizeFirstLetter(firstName)} zakupiła Ebooka</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ padding: 12 }}>
          <Row>
            <Column>
              <Text style={{ ...global.paragraphWithBold }}>
                {capitalizeFirstLetter(firstName)} zakupiła Ebooka!
              </Text>
            </Column>
          </Row>
        </Section>
        <Hr style={global.hr} />
        <Section style={message}>
          <Img
            src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/LogoBezNapisu1.png`}
            alt="Paula Trenuje Logo"
            width={70}
            height={70}
            className="object-contain"
            style={{ margin: 'auto' }}
          />
          <Heading style={global.heading}>Ebook kupiony!</Heading>
          <Text style={global.text}>Twoje zamówienie jest zrealizowane</Text>
          <Text style={{ ...global.text, marginTop: 24 }}>
            Ten email jest potwierdzeniem zakupu przez{' '}
            {capitalizeFirstLetter(userEmail)}. Zakupione zostały produkty:{' '}
            {productIds.join(', ')}
          </Text>
        </Section>
        <Hr style={global.hr} />
        <Section
          style={{ ...paddingX, paddingTop: '40px', paddingBottom: '40px' }}
        >
          {productIds.map((id, index) => {
            const productData = ebooksConfigAll.find(
              (ebook) => ebook.id === id
            );
            if (productData) {
              const downloadlink = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/email-send/pdf-waterproof/${userEmail}/${id}`;
              return (
                <Row align="left" key={id}>
                  <Column>
                    <Link href={downloadlink}>
                      <Img
                        src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${productData.picture}`}
                        alt={`${productData.title} image`}
                        width="150"
                      />
                    </Link>
                  </Column>
                  <Column style={{ paddingLeft: '12px' }}>
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
        <Section style={menu.container} align="center">
          <Text style={global.heading}>PaulaTrenuje.pl</Text>
          <Row style={categories.container}>
            <Row style={paddingYSmall} align="center">
              <Link
                href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}`}
                style={categories.text}
              >
                Strona główna
              </Link>
            </Row>
            <Row style={paddingYSmall} align="center">
              <Link
                href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/#ebooki`}
                style={categories.text}
              >
                Ebooki
              </Link>
            </Row>
            <Row style={paddingYSmall} align="center">
              <Link
                href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/#personalne`}
                style={categories.text}
              >
                Treningi personalne
              </Link>
            </Row>
          </Row>
        </Section>
        <Hr style={{ ...global.hr }} />
        <Section style={{ ...message, padding: 20 }}>
          <Row style={{ ...footer.policy }}>
            <Row align="center">
              <Link
                href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/regulamin`}
                style={footer.text}
                className="cursor-pointer"
              >
                Regulamin
              </Link>
            </Row>
            <Row align="center">
              <Link
                href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/polityka-prywatnosci`}
                style={footer.text}
                className="cursor-pointer"
              >
                Polityka prywatności
              </Link>
            </Row>
          </Row>
          <Text style={{ ...footer.text, paddingTop: 12, paddingBottom: 12 }}>
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

export default OwnerConfirmation;

const paddingX = {
  paddingLeft: '40px',
  paddingRight: '40px',
};

const paddingY = {
  paddingTop: '22px',
  paddingBottom: '22px',
};

const paddingYSmall = {
  paddingTop: '6px',
  paddingBottom: '6px',
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
  paragraphWithBold: { ...paragraph, fontSize: '16px', fontWeight: '500' },
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
  border: '1px solid #E5E5E5',
};

const message = {
  padding: '40px 74px',
  textAlign: 'center',
} as React.CSSProperties;

const menu = {
  container: {
    padding: '20px',
    backgroundColor: '#F7F7F7',
    textAlign: 'center',
  } as React.CSSProperties,
  content: {
    ...paddingY,
    paddingLeft: '20px',
    paddingRight: '20px',
  },
};

const categories = {
  container: {
    width: '370px',
    margin: 'auto',
  },
  text: {
    fontWeight: '500',
    color: '#000',
  },
};

const footer = {
  policy: {
    width: '370px',
    margin: 'auto',
  },
  text: {
    color: '#AFAFAF',
    fontSize: '13px',
  } as React.CSSProperties,
};
