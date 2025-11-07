import React from 'react'
import Hero from '../Component/Home/Hero'
import Partner from './sections/Partner'
import Distribution from './sections/Distributin-network'
import CTA from './sections/CTA'
import { fetchSanityData } from '../utils/sanity'

const page = async () => {
    const query = `*[_type == "distributionPage"][0]{
        hero{
            title,
            background{
                image{
                    asset->{
                        _ref,
                        _id,
                        url,
                        metadata{
                            dimensions{
                                width,
                                height
                            }
                        }
                    }
                },
                alt
            }
        },
        whyPartner{
            eyebrow,
            title,
            intro,
            bullets,
            image{
                image{
                    asset->{
                        _ref,
                        _id,
                        url
                    }
                },
                alt
            }
        },
        globalDistribution{
            title,
            kicker,
            intro,
            regions,
            image{
                image{
                    asset->{
                        _ref,
                        _id,
                        url
                    }
                },
                alt
            }
        },
        privateLabel,
        fastLeadTimes{
            title,
            description,
            bullets,
            image{
                image{
                    asset->{
                        _ref,
                        _id,
                        url
                    }
                },
                alt
            }
        },
        cta,
        contact
    }`;

    let heroData = null;
    let whyPartnerData = null;
    let globalDistributionData = null;
    let privateLabelData = null;
    let fastLeadTimesData = null;
    let ctaData = null;

    try {
        const data = await fetchSanityData(query, 'drafts');

        console.log('=== SANITY API RESPONSE ===');
        console.log('Full API Response:', JSON.stringify(data, null, 2));

        heroData = data?.hero || null;
        whyPartnerData = data?.whyPartner || null;
        globalDistributionData = data?.globalDistribution || null;
        privateLabelData = data?.privateLabel || null;
        fastLeadTimesData = data?.fastLeadTimes || null;
        ctaData = data?.cta || null;

        console.log('Hero Data:', JSON.stringify(heroData, null, 2));
        console.log('Why Partner Data:', JSON.stringify(whyPartnerData, null, 2));
        console.log('Global Distribution Data:', JSON.stringify(globalDistributionData, null, 2));
        console.log('Fast Lead Times Data:', JSON.stringify(fastLeadTimesData, null, 2));
        console.log('CTA Data:', JSON.stringify(ctaData, null, 2));
        console.log('=== END SANITY RESPONSE ===');

    } catch (error) {
        console.error('Error fetching data:', error);
        console.error('Error details:', error.message);
        console.error('Error stack:', error.stack);
    }

    return (
        <div>
            <Hero heroData={heroData} />
            <Partner whyPartnerData={whyPartnerData} />
            <Distribution globalDistributionData={globalDistributionData} privateLabelData={privateLabelData} />
            <CTA ctaData={ctaData} fastLeadTimesData={fastLeadTimesData} />
        </div>
    )
}

export default page;