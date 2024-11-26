import React from 'react'
import HeroSection from './HeroSection'
import FeaturedTopics from './FeaturedTopics';
import ActiveMembers from './ActiveMembers';
import JoinUs from './JoinUs';

function CommunityHome() {
  return (
    <main className='min-h-screen'>
        <HeroSection/>
        <FeaturedTopics/>
        <ActiveMembers/>
        <JoinUs/>
    </main>
  )
}

export default CommunityHome;