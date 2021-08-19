import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'
import Fade from 'react-reveal/Fade'
import { ParallaxProvider } from 'react-scroll-parallax'
import '@redq/reuse-modal/lib/index.css'
import { Icon } from 'react-icons-kit'
import { location } from 'react-icons-kit/icomoon/location'
import { phone } from 'react-icons-kit/icomoon/phone'
import { home } from 'react-icons-kit/entypo/home'
import { x } from 'react-icons-kit/feather/x'
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider'
import LanguageSwitcher from '@deadline/common/LanguageSwitcher'
import languageConfig from '@deadline/common/LanguageSwitcher/config'
import NormalClock from '@deadline/components/NormalClock/NormalClock.js'
import { androidMenu } from 'react-icons-kit/ionicons/androidMenu'
import Button from '@deadline/components/Button'
import ContactForm from '@deadline/components/MaterialContactFormTwo/MaterialContactForm'
import SubscriptionForm from '@deadline/components/ContactForm/ContactForm'
import MainContentWrapper, {
  LogoImageContainer,
  GradientDiv,
  ParticleWrapper,
  SidebarButton,
  MainContentSection,
  SubscriptionWrapper,
  MainWrapper,
  NormalClockWrapper,
  SideBar,
  Overlay,
  FooterSection,
  SidebarContent,
  About,
  Contact,
  Info,
  InfoItem,
  InfoIcon,
  SidebarClose
} from '@deadline/common/ui/twenty.style'
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/six'
// Language translation files
import localPor from '@deadline/common/data/translation/escuro/pt.json'
import localEng from '@deadline/common/data/translation/escuro/en.json'
import { Container, SocialShare, SEO } from '../components'
import LogoImage from '@deadline/common/static/images/logoTwo.png'
// Language translation Config
const messages = {
  pt: localPor,
  en: localEng
}

const deadline = new Date(
  Date.parse(new Date('13 august 2021 00:00:00 GMT')) + 45 * 24 * 60 * 60 * 1000
)

const IndexPage = () => {
  const [state, setState] = useState({
    toggle: false
  })

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle
    })
  }

  return (
    <ParallaxProvider>
      <LanguageProvider messages={messages}>
        <React.Fragment>
          <SEO title='title' />
          <MainWrapper className={state.toggle === true ? 'sidebar-open' : ''}>
            <MainContentWrapper>
              <LogoImageContainer>
                <Link to={'/'}>
                  <img src={LogoImage} alt='logo' />
                </Link>
                {state.toggle === false ? (
                  <SidebarButton>
                    <Button
                      icon={<Icon icon={androidMenu} size={25} />}
                      onClick={toggleHandle}
                    />
                  </SidebarButton>
                ) : (
                  ''
                )}
              </LogoImageContainer>
              <ParticleWrapper>
                <Particles
                  params={{
                    particles: {
                      number: {
                        value: 100,
                        density: {
                          enable: true,
                          value_area: 600
                        }
                      },
                      shape: {
                        type: 'circle',
                        stroke: {
                          width: 0
                        }
                      },
                      opacity: {
                        value: 0.2,
                        random: false,
                        anim: {
                          enable: false,
                          speed: 1,
                          opacity_min: 0.1,
                          sync: false
                        }
                      },
                      size: {
                        value: 7,
                        random: true,
                        anim: {
                          value: 4
                        }
                      },
                      line_linked: {
                        enable: true,
                        distance: 100,
                        opacity: 0.4,
                        width: 1
                      },
                      move: {
                        enable: true,
                        speed: 3,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 1200
                        }
                      }
                    },
                    interactivity: {
                      detect_on: 'canvas',
                      events: {
                        onhover: {
                          enable: true,
                          mode: 'grab'
                        },
                        onclick: {
                          enable: true,
                          mode: 'push'
                        },
                        resize: true
                      },
                      modes: {
                        grab: {
                          distance: 300,
                          line_linked: {
                            opacity: 0.4,
                            enable: true
                          }
                        },
                        push: {
                          particles_nb: 8
                        },
                        remove: {
                          particles_nb: 2
                        }
                      }
                    },
                    retina_detect: true
                  }}
                />
              </ParticleWrapper>
              <GradientDiv />
              <Container className='mainContainer'>
                <MainContentSection>
                  <Fade>
                    <NormalClockWrapper>
                      <NormalClock countdown={deadline} divider='true' />
                    </NormalClockWrapper>
                  </Fade>
                  <h2>
                    <FormattedMessage id='mainMessage' />
                  </h2>
                  <p>
                    <FormattedMessage id='description' />
                  </p>
                  <SubscriptionWrapper>
                    <SubscriptionForm />
                  </SubscriptionWrapper>
                </MainContentSection>
              </Container>
              <FooterSection>
                <SocialShare items={SOCIAL_PROFILES} />
                <p>
                  <FormattedMessage id='copyrightText' />
                </p>
              </FooterSection>
            </MainContentWrapper>
            <SideBar className={state.toggle === true ? 'expand' : ''}>
              <SidebarContent>
                <SidebarClose type='submit' aria-label='close'>
                  <Icon icon={x} size={33} onClick={toggleHandle} />
                </SidebarClose>
                <About>
                  <h2>
                    <FormattedMessage id='aboutTitle' />
                  </h2>
                  <p>
                    <FormattedMessage id='aboutText' />
                  </p>
                </About>

                <Contact>
                  <h2>
                    <FormattedMessage id='contactTitle' />
                  </h2>
                  <ContactForm />
                </Contact>

                <Info>
                  <InfoItem>
                    <InfoIcon>
                      <Icon icon={location} size={33} />
                    </InfoIcon>
                    <h4>
                      <FormattedMessage id='addressTitle' />
                    </h4>
                    <p>
                      <FormattedMessage id='addressDetails' />
                    </p>
                  </InfoItem>

                  <InfoItem>
                    <InfoIcon>
                      <Icon icon={phone} size={32} />
                    </InfoIcon>
                    <h4>
                      <FormattedMessage id='phoneTitle' />
                    </h4>
                    <p>
                      <FormattedMessage id='phoneNumbers' />
                    </p>
                  </InfoItem>

                  <InfoItem>
                    <InfoIcon>
                      <Icon icon={home} size={32} />
                    </InfoIcon>
                    <h4>
                      <FormattedMessage id='websiteTitle' />
                    </h4>
                    <p>
                      <FormattedMessage id='Websites' />
                    </p>
                  </InfoItem>
                </Info>
              </SidebarContent>
              <Overlay className={state.toggle === true ? 'expand' : ''} />
            </SideBar>
          </MainWrapper>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </ParallaxProvider>
  )
}

export default IndexPage
