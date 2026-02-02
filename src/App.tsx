import Hero from './components/Hero';
import WhatIs from './components/WhatIs';
import HowItWorks from './components/HowItWorks';
import EditorialValue from './components/EditorialValue';
import Footer from './components/Footer';

function App() {
    return (
        <main className="bg-black min-h-screen">
            <Hero />
            <WhatIs />
            <HowItWorks />
            <EditorialValue />
            <Footer />
        </main>
    );
}

export default App;
