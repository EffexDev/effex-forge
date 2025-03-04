import basicHosting from '../assets/basicHosting.jpg'
import basicStatic from '../assets/basicStatic.jpg'
import standardPlan from '../assets/standardPlan.jpg'


export const plansData = [
    {
        id: 1,
        title: "Basic - Hosting Only",
        description: `Domain Management\n
        SSL Certificate\n
        Free Professional Emails`,
        price: 19.99,
        site: "Self-Provided Site",
        img: basicHosting,
        alt: "Basic - Hosting Plan",
        button: "Get a Quote"
    },
    {
        id: 2,
        title: "Basic - Static Site",
        description: `Domain Management\n
        SSL Certificate\n
        Free Professional Emails\n
        Basic React.js Site`,
        price: 39.99,
        site: "Website from $149",
        img: basicStatic,
        alt: "Basic - Static Site",
        button: "Get a Quote"
    },
    {
        id: 3,
        title: "Standard",
        description: `Basic Features  +\n
        Managed CMS\n
        eCommerce Capabilities\n
        Monthly Updates\n
        Monthly Backups`,
        price: 69.99,
        site: "Website from $299",
        img: standardPlan,
        alt: "Standard Plan",
        button: "Get a Quote"
    },
] 