import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MultiCarousel from '../components/MultiCarousel';
import Card from 'react-bootstrap/Card';
import ScrollToTopButton from '../components/ScrollToTopButton'

export default function Home() {
    const [hoverMobile, setHoverMobile] = useState(0)
    function getMobilePhoto() {
        if (hoverMobile == 1) {
            return 'https://frupro.com/wp-content/uploads/2021/06/2-1.png'
        }
        if (hoverMobile == 2) {
            return 'https://frupro.com/wp-content/uploads/2021/06/3-1.png'
        }
        if (hoverMobile == 3) {
            return 'https://frupro.com/wp-content/uploads/2021/06/4-1.png'
        }
        if (hoverMobile == 4) {
            return 'https://frupro.com/wp-content/uploads/2021/06/5-1.png'
        }
        if (hoverMobile == 5) {
            return 'https://frupro.com/wp-content/uploads/2021/06/6-1.png'
        }
        if (hoverMobile == 6) {
            return 'https://frupro.com/wp-content/uploads/2021/06/7-1.png'
        }
        return 'https://frupro.com/wp-content/uploads/2021/06/1-1.png'
    }
    return (
        <div>
            <Container fluid>
                <Row className='text-white fw-bold' style={{ backgroundImage: `url(https://frupro.com/wp-content/uploads/2021/06/fresh-produce-market.png)`, backgroundSize: 'cover', backgroundPosition: 'center', height: '700px' }}>
                    <Col md={6} className='my-auto mx-auto'>
                        <img src="https://frupro.com/wp-content/uploads/2021/06/MicrosoftTeams-image-1.png" alt="" className='img-fluid' style={{marginTop:'50px'}}/>
                    </Col>
                    <Col md={6} className='my-auto mx-auto mobile-centered'>
                        <h1 className='text-white fs-1 fw-bold mb-5'>One Platform for all <br></br> businesses in fresh produce</h1>
                        <p className='mb-3'>Grow your network, market your <br></br> brand and boost revenue.</p>
                        <p>Built for the industry bt the industry</p>
                        <Button variant='primary' className='fw-bold bt-color-2 me-lg-3 rounded-pill px-4 py-2 mx-1'>Learn More</Button>
                        <Button variant='primary' className='fw-bold bt-color me-lg-3 rounded-pill px-4 py-2 mx-1'>Learn More</Button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={12} style={{ marginTop: '100px' }} className="align-items-center justify-content-center">
                        <h2 className='fw-bold text-center mb-4'>Fruit and Veg Industry Simplified</h2>
                        <p>Whether you’re looking to trade fresh fruit and veg online, overcome fresh produce supply chain challenges or connect with new suppliers and buyers, you are at the right place.</p>
                        <p>FruPro is the online platform that connects the fresh produce supply chain, providing major networking opportunities for companies to expand their trade reach. Using our digital platform streamlines end-to-end operations to make business quick and efficient.</p>
                        <p>With generations of fresh produce experience, we provide expert guidance to bolster your brand and boost profits. In our work on sustainability, we have reduced food waste costs for businesses by providing simple ways to donate perishable fresh produce.</p>
                        <iframe className='mobile-size-video shadow-md' width="100%" height="653" src="https://www.youtube.com/embed/nWHxG-8-1ic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h2 className='text-center fw-bold mb-5' style={{ marginTop: '100px', fontSize: '30px' }}>FruPro Makes It Easy for You to</h2>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ backgroundImage: `url(https://frupro.com/wp-content/uploads/2021/06/App-Case-Rectangle-2.png)`, backgroundSize: 'contain', backgroundPosition: 'center', height: '100%' }}>
                <Container>
                    <Row className='p-md-5 text-decoration-none text-white justify-content-center align-items'>
                        <Col md='4' xs='3'>
                            <Link to="#" className={hoverMobile == 1 || hoverMobile == 0 ? 'hover-mob' : 'muted'} onMouseEnter={() => setHoverMobile(1)}
                                onMouseLeave={() => setHoverMobile(0)} >
                                <h2 className='fw-bold mobile-btn-font mobile-router' style={{ marginTop: '50px' }}><img src="./images/icn-1.png" alt="" className='icon-mobile-resp'/> Find</h2>
                                <hr />
                                <p style={{ fontSize: '20px' }} className='text-overflow mobile-btn-font text-mobile-font'>Find new people, business, and produce from our wide network.</p>
                            </Link>
                            <Link to="#" className={hoverMobile == 2 || hoverMobile == 0 ? 'hover-mob' : 'muted'} onMouseEnter={() => setHoverMobile(2)}
                                onMouseLeave={() => setHoverMobile(0)} >
                                <h2 className='fw-bold mobile-btn-font mobile-router' style={{ marginTop: '55px' }}><img src="./images/icn-2.png" alt="" className='icon-mobile-resp'/> Connect</h2>
                                <hr />
                                <p style={{ fontSize: '20px' }} className='text-overflow mobile-btn-font text-mobile-font'>Connect with fresh produce professionals from around the world.</p>
                            </Link>
                            <Link to="#" className={hoverMobile == 3 || hoverMobile == 0 ? 'hover-mob' : 'muted'} onMouseEnter={() => setHoverMobile(3)}
                                onMouseLeave={() => setHoverMobile(0)} >
                                <h2 className='fw-bold mobile-btn-font mobile-router' style={{ marginTop: '65px' }}><img src="./images/icn-3.png" alt="" className='icon-mobile-resp'/> Redistribute</h2>
                                <hr />
                                <p style={{ fontSize: '20px' }} className='text-overflow mobile-btn-font text-mobile-font'>Redistribute produce bound for waste directly to charity partners.</p>
                            </Link>
                        </Col>
                        <Col md='4' xs='5'>
                            <img src={getMobilePhoto()} alt="" className='img-fluid mt-5' width={326} height={626} />
                        </Col>
                        <Col md='4' xs='3'>
                            <Link to="#" className={hoverMobile == 4 || hoverMobile == 0 ? 'hover-mob' : 'muted'} onMouseEnter={() => setHoverMobile(4)}
                                onMouseLeave={() => setHoverMobile(0)} >
                                <h2 className='fw-bold mobile-btn-font mobile-router' style={{ marginTop: '40px' }}><img src="./images/icn-4.png" alt="" className='icon-mobile-resp'/> Post</h2>
                                <hr />
                                <p style={{ fontSize: '20px' }} className='text-overflow mobile-btn-font text-mobile-font'>Using our live feed, post <br /> your produce for sale or place demands for what you need.</p>
                            </Link>
                            <Link to="#" className={hoverMobile == 5 || hoverMobile == 0 ? 'hover-mob' : 'muted'} onMouseEnter={() => setHoverMobile(5)}
                                onMouseLeave={() => setHoverMobile(0)} >
                                <h2 className='fw-bold mobile-btn-font mobile-router' style={{ marginTop: '40px' }}><img src="./images/icn-5.png" alt="" className='icon-mobile-resp'/> Optimise</h2>
                                <hr />
                                <p style={{ fontSize: '20px' }} className='text-overflow mobile-btn-font text-mobile-font'>Save time and effort. Our digital platform helps you optimise operations.</p>
                            </Link>
                            <Link to="#" className={hoverMobile == 6 || hoverMobile == 0 ? 'hover-mob' : 'muted'} onMouseEnter={() => setHoverMobile(6)}
                                onMouseLeave={() => setHoverMobile(0)} >
                                <h2 className='fw-bold mobile-btn-font mobile-router' style={{ marginTop: '40px' }}><img src="./images/icn-6.png" alt="" className='icon-mobile-resp'/> Grow</h2>
                                <hr />
                                <p style={{ fontSize: '20px' }} className='text-overflow mobile-btn-font text-mobile-font'>Receive expert advice and you consultancy. Grow your network and boost profits.</p>
                            </Link>
                        </Col>
                        <Col>
                            <p style={{ marginTop: '30px', fontSize: '25px' }} className='text-center fw-bold mobile-btn-font mobile-router'>Use FruPro to connect with a wide network, optimise operations <br /> and access guidance that will boost profits</p>
                        </Col>
                    </Row>
                </Container> 
            </Container>
            <Container className='text-center'>
                <Row style={{ marginTop: '100px' }}>
                    <h2 className='fw-bold text-center'>Our Story</h2>
                </Row>
                <Row className='mt-5'>
                    <p>In 2019, our CEO Will conceived of an idea. His vision was to transform the siloed fresh produce supply chain and digitally connect the B2B industry. After a successful venture ‘WT Hills Imports’ in 2016 and a family business with 130 years of fresh produce experience, he brought FruPro to life with co-founders Ollie (COO) and Kov (CTO).</p>
                </Row>
                <Row className='gap-0'>
                    <Col xs sm={4} >
                        <img src="https://i0.wp.com/frupro.com/wp-content/uploads/2022/10/2-2.png?fit=529%2C720&ssl=1" alt="" className='img-fluid' />
                    </Col>
                    <Col xs sm={4} >
                        <img src="https://i0.wp.com/frupro.com/wp-content/uploads/2022/10/9-1-1.png?fit=529%2C720&ssl=1" alt="" className='img-fluid' />
                    </Col>
                    <Col xs sm={4} >
                        <img src="https://i0.wp.com/frupro.com/wp-content/uploads/2022/10/4-2.png?fit=529%2C720&ssl=1" alt="" className='img-fluid' />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <p>Kov’s experience in technological solutions for industry pioneers was crucial to the FruPro’s success. With an extensive professional portfolio, including Product Director in Advanced Analytics and AI Solutions at GSK, Kov has progressed the platform through its digital transformation.</p>
                    <p>Ollie’s background in business transformation consulting ensured smooth operations at every step. Prior to FruPro, Ollie organised an annual charity event, providing 50,000 meals for the homeless and this dedication to reducing food insecurity remains a core tenet of FruPro. His family have a potato and arable farming background.</p>
                    <p>Now, with the support of a wider international team, FruPro has become the essential platform for the fresh produce supply chain. Aiming to support the next five generations of fresh produce, FruPro connects, guides and optimises fresh produce business.</p>
                </Row>
                <Row style={{ marginTop: '100px', marginBottom: '100px' }}>
                    <h2 className='fw-bold'>Our Commitment to Sustainability</h2>
                </Row>
                <Row className='my-5'>
                    <Col md={4} xs={12}>
                        <FontAwesomeIcon icon="fa-solid fa-trash" color='#e7732a' size='4x' className='mb-5' />
                        <p>Food waste is now a bigger contributor to climate change than plastic, with 1kg of food waste being sent to landfill equating to 25,000 plastic bottles in terms of carbon emissions.</p>
                    </Col>
                    <Col md={4} xs={12}>
                        <FontAwesomeIcon icon="fa-solid fa-globe" color='#e7732a' size='4x' className='mb-5' />
                        <p>Between 6-8% of global greenhouse gas emissions occur as a result of wasted food. If food waste was a country, it would be the third-largest greenhouse gas emitter.
                        </p>
                    </Col>
                    <Col md={4} xs={12}>
                        <FontAwesomeIcon icon="fa-solid fa-temperature-full" color='#e7732a' size='4x' className='mb-5' />
                        <p>Shockingly, 33% of all fruit and veg that is grown is wasted yet, 7.3 million people in the UK (as of April 2022) are lacking sufficient access to affordable or nutritious food.</p>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col md={4} xs={12}>
                        <FontAwesomeIcon icon="fa-solid fa-handshake" color='#e7732a' size='4x' className='mb-5' />
                        <p>Food waste is now a bigger contributor to climate change than plastic, with 1kg of food waste being sent to landfill equating to 25,000 plastic bottles in terms of carbon emissions.</p>
                    </Col>
                    <Col md={4} xs={12}>
                        <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" color='#e7732a' size='4x' className='mb-5' />
                        <p>Between 6-8% of global greenhouse gas emissions occur as a result of wasted food. If food waste was a country, it would be the third-largest greenhouse gas emitter.
                        </p>
                    </Col>
                    <Col md={4} xs={12}>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-plus" color='#e7732a' size='4x' className='mb-5' />
                        <p>Shockingly, 33% of all fruit and veg that is grown is wasted yet, 7.3 million people in the UK (as of April 2022) are lacking sufficient access to affordable or nutritious food.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '100px' }}>
                    <Col md={12} sm={12} className='mb-5'>
                        <h2 className='fw-bold'>Featured In</h2>
                    </Col>
                    <Col md={12} sm={12}>
                        <MultiCarousel />
                    </Col>
                </Row>
                <Row style={{ marginTop: '100px' }}>
                    <Col md={12} sm={12} className='mb-5'>
                        <h2 className='fw-bold'>Fresh Produce Blog</h2>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md={4} sm={12}>
                        <Card style={{ width: '100%', maxHeight: '100%' }} className='border-none card-height mb-sm-5'>
                            <Card.Img variant="top" src="https://frupro.com/wp-content/uploads/2022/11/sustainability-500x417.jpg" />
                            <Card.Body className='p-5 text-start'>
                                <Card.Title className='fw-bold mt-5 mb-4' style={{ fontSize: '22px' }}> <FontAwesomeIcon icon="fa-solid fa-caret-right" color='#e7732a' size='1x' className='me-3' />Sustainability in Fresh Produce</Card.Title>
                                <Card.Text style={{ fontSize: '16px' }} className='mb-5'>
                                    Sustainability in Business - Fresh Produce Futures Al Gore challenged us all in 2018 when he said that the current…
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={12}>
                        <Card style={{ width: '100%', maxHeight: '100%' }} className='border-none card-height mb-sm-5'>
                            <Card.Img variant="top" src="https://frupro.com/wp-content/uploads/2022/10/food-waste-500x417.png" />
                            <Card.Body className='p-5 text-start'>
                                <Card.Title className='fw-bold mt-5 mb-4' style={{ fontSize: '22px' }}> <FontAwesomeIcon icon="fa-solid fa-caret-right" color='#e7732a' size='1x' className='me-3' />Food Waste Facts and How to Reduce It (2022)</Card.Title>
                                <Card.Text style={{ fontSize: '16px' }} className='mb-5'>
                                    Food waste facts and how to reduce it Food waste is problem that we cannot ignore. Financially, environmentally and socially…
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={12}>
                        <Card style={{ width: '100%', maxHeight: '100%' }} className='border-none card-height mb-sm-5'>
                            <Card.Img variant="top" src="https://frupro.com/wp-content/uploads/2022/08/Tomatoes-1-500x417.png" />
                            <Card.Body className='p-5 text-start'>
                                <Card.Title className='fw-bold mt-5 mb-4' style={{ fontSize: '22px' }}> <FontAwesomeIcon icon="fa-solid fa-caret-right" color='#e7732a' size='1x' className='me-3' />State of the Fruit and Veg Industry: Challenges and Chances for Growth – Q3 2022</Card.Title>
                                <Card.Text style={{ fontSize: '16px' }} className='mb-5'>
                                    State of the Fruit and Veg Industry: Challenges and Chances for Growth - Q3 2022 I wouldn’t be the first…
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ padding: '100px',}} className='text-center text-white background-filter position-relative mobile-position'>
                <Container>
                    <Row className='mb-5'>
                        <Col md={12} sm={12}>
                            <h4 className='fw-bold' style={{fontSize:'30px'}}>Businesses in Fresh Produce</h4>
                        </Col>
                    </Row>
                    <Row className='mb-3 align-items-center justify-content-center'>
                        <Col md={6} sm={12} className='text-center'>
                            <p className='text-center' style={{fontSize:'20px'}}>We’re listening, developing and optimising the fresh produce platform for the entire supply chain.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} sm={12}>
                            <Button variant="success" className='fw-bold bt-color-2 rounded-4 px-4 py-3 mobile-btn-font'>JOIN FRUPRO, ENCHANCE YOUR BUSINESS!</Button>
                        </Col>
                    </Row>
                    <Row className='position-absolute bottom-0 start-50 translate-middle-x' >
                        <Col md={12} className='text-center'>
                            <ScrollToTopButton className='text-center scroll-to'/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
