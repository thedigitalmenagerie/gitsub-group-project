console.log('CONNECTED .');

const arrNavBar = [{
    overview: [{
        linkIcon: './images/Overview (open book).webp',
        link: 'index.html',
    }],
    repositories: [{
        linkIcon: './images/Repo (Closed Book).webp',
        link: 'repo.html',
    }],
    projects: [{
        linkIcon: './images/Projects (Graph).webp',
        link: 'projects.html',
    }],
    packages: [{
        linkIcon: './images/Packages (box).webp',
        link: 'packages.html',
    }],
}];

const arrPersonHighlights = [{
        highlightIcon: '/images/Arctic Code Vault.webp',
        highlightDescription: 'https://archiveprogram.github.com/arctic-vault/',
        highlightLink: '',
    },
    {
        highlightIcon: './images/Star (Filled in).webp',
        highlightDescription: 'https://stars.github.com/',
        highlightLink: '',
    },
    {
        highlightIcon: './images/Star.webp',
        highlightDescription: '',
        highlightLink: '', // No link needed, just a tag
    },
];

const arrOrganizations = [{
        organizationIcon: './images/Neutron (Orgs).webp',
        organizationLink: 'https://github.com/nashville-software-school',
    },
    {
        organizationIcon: './images/orgs.webp',
        organizationLink: 'https://github.com/Urban-Green-Lab',
    },
    {
        organizationIcon: './images/orgs 2.webp',
        organizationLink: 'https://github.com/Autism-Possisble',
    },
];

const arrSponsors = [{
        sponsorID: 0,
        sponsorPicture: '/images/Avatar (sponsors).webp',
        sponsorLink: 'https://github.com/thedigitalmenagerie ',
    },
    {
        sponsorID: 1,
        sponsorPicture: '/images/Avatar (sponsors).webp',
        sponsorLink: 'https://github.com/danicrosby',
    },
    {
        sponsorID: 2,
        sponsorPicture: '/images/Avatar (sponsors).webp',
        sponsorLink: 'https://github.com/lindseysatterfield',
    },
    {
        sponsorID: 3,
        sponsorPicture: '/images/Avatar (sponsors).webp',
        sponsorLink: 'https://github.com/JuanDavila1101',
    },
    {
        sponsorID: 4,
        sponsorPicture: '/images/Avatar (sponsors).webp',
        sponsorLink: 'https://github.com/TrinityChristiana',
    },
    {
        sponsorID: 5,
        sponsorPicture: '/images/Avatar (sponsors).webp',
        sponsorLink: 'https://github.com/ajawashington',
    },
    {
        sponsorID: 6,
        sponsorPicture: '/images/Avatar (sponsors).webp',
        sponsorLink: 'https://github.com/BenJarrett',
    },
    {
        sponsorID: 7,
        sponsorPicture: '/images/Avatar (sponsors).webp',
        sponsorLink: 'https://github.com/caseywalker',
    },
]

const person = {
    personName: 'Dr. Teresa Vasquez',
    personNamePronunciation: '',
    personPicture: './images/Dr. T..jpg',
    personInformation: '',
    personStats: {
        statFolowers: 1.8,
        statFolowing: 27,
        statsStars: 329,
    },
    personAddresses: {
        phisicalLocation: {
            locationIcon: './images/location.webp',
            locationAddress: 'https://www.google.com/maps?q=nashville+tn&um=1&ie=UTF-8&sa=X&ved=2ahUKEwia5sSqu93uAhVIo1kKHZS8BdgQ_AUoAXoECBsQAw',
        },
        gitHub: {
            gitHubIcon: './images/location.webp',
            gitHubAddress: 'dr.teresavazquez@gmail.com',
        },
        webPage: {
            pageIcon: './images/Link (web page).webp',
            pageAddress: 'https://www.drteresavasquez.com/',
        },
        twitter: {
            twitterIcon: './images/twitter.webp',
            teitterAddress: 'https://twitter.com/login?lang=en-gb',
        },
    },
    sponsors: arrSponsors,
}


// LINKS

// 5 packages

// docker link -- https://www.docker.com/?utm_source=google&utm_medium=cpc&utm_campaign=dockerhomepage&utm_content=namer&utm_term=dockerhomepage&utm_budget=growth&gclid=Cj0KCQiAgomBBhDXARIsAFNyUqP7IuAWd7M9yGrY-D87ikBbLpSR4Mzd2RQtHIDalzpNadyjAlyg4kYaAoT_EALw_wcB
// docker container link -- https://www.docker.com/resources/what-container?gclid=Cj0KCQiAgomBBhDXARIsAFNyUqMwxmzuSjtAKHOeyuUainBg3qxEksx9tDeBia3gWtnVAslZoQS32kAaApuBEALw_wcB
// rubygems link -- https://rubygems.org/
// nuget link -- https://www.nuget.org/
// apache maven link -- https://maven.apache.org/

// 10 Repos (6 Overview/ 4 Repo Page)

// Honey-Rae -- https://github.com/thedigitalmenagerie/sorting-hat , https://github.com/thedigitalmenagerie/pet-adoption
// Lindsey https://github.com/lindseysatterfield/sorting-hat , https://github.com/lindseysatterfield/pet-adoption

// 6 Project Boards

// Group -- https://github.com/nss-evening-cohort-14/gitsub-e14-1-devs-to-ever-dev/projects 
// HR https://github.com/users/thedigitalmenagerie/projects/1
// LS https://github.com/lindseysatterfield/sorting-hat/projects/1


//#Packages

const arrPackagesTypes = [{
        packageIcon: './images/docker.webp',
        packageType: 'Docker',
    },
    {
        packageIcon: './images/apache maven (feather).webp',
        packageType: 'Apache Maven',
    },
    {
        packageIcon: './images/nuget-256.webp',
        packageType: 'NuGet',
    },
    {
        packageIcon: './images/ruby.webp',
        packageType: 'RubyGems',
    },
    {
        packageIcon: './images/npm.webp',
        packageType: 'npm',
    },
    {
        packageIcon: './images/docker.webp',
        packageType: 'Containers',
    }
];

let packagesID = 6;
const arrPackages = [{
        packagesID: 0,
        packagesDescription: '',
        packagesLink: 'https://www.docker.com/?utm_source=google&utm_medium=cpc&utm_campaign=dockerhomepage&utm_content=namer&utm_term=dockerhomepage&utm_budget=growth&gclid=Cj0KCQiAgomBBhDXARIsAFNyUqP7IuAWd7M9yGrY-D87ikBbLpSR4Mzd2RQtHIDalzpNadyjAlyg4kYaAoT_EALw_wcB',
        packagesAlpha: true,
        typeOfPackage: arrPackagesTypes[0],
    },
    {
        packagesID: 1,
        packagesDescription: '',
        packagesLink: 'https://maven.apache.org/',
        packagesAlpha: true,
        typeOfPackage: arrPackagesTypes[0],
    },
    {
        packagesID: 2,
        packagesDescription: '',
        packagesLink: 'https://www.nuget.org/',
        packagesAlpha: true,
        typeOfPackage: arrPackagesTypes[0],
    },
    {
        packagesID: 3,
        packagesDescription: '',
        packagesLink: 'https://rubygems.org/',
        packagesAlpha: true,
        typeOfPackage: arrPackagesTypes[0],
    },
    {
        packagesID: 4,
        packagesDescription: 'https://www.nuget.org/',
        packagesLink: '',
        packagesAlpha: true,
        typeOfPackage: arrPackagesTypes[0],
    },
    {
        packagesID: 5,
        packagesDescription: 'https://www.docker.com/resources/what-container?gclid=Cj0KCQiAgomBBhDXARIsAFNyUqMwxmzuSjtAKHOeyuUainBg3qxEksx9tDeBia3gWtnVAslZoQS32kAaApuBEALw_wcB',
        packagesLink: '',
        packagesAlpha: true,
        typeOfPackage: arrPackagesTypes[0],
    },


];

//#endPackages

//#Repository

const arrRepoLocations = [
    'netlify',
    'Jamstack',
    'Lorem-ipsum-generator',
    'medical',
    'serverless',
    'react',
    'countdown',
    'hacktoberfest',
    'http',
    'status-codes',
    'gifts',
    'rihanna',
    'donation',
    'landing-page'
];

let repositoryID = 4;
const arrRepositories = [{
        repoID = 0,
        repoTitle: '',
        repoLink: 'https://github.com/thedigitalmenagerie/sorting-hat',
        repoDescription: '',
        arrListOfButtons: ['netlify', 'Jamstack', '', ''],
        repoLanguage: '',
        starsCount: 0,
        // this is needed here three dot Icon
        pinned: false,
        repoMTILicense: true,
        issuesNeedHelp: '',
        repoLastUpdate: '2021-02-07', //YYYYMMDD https://www.w3schools.com/js/js_date_formats.asp
    },
    {
        repoID = 1,
        repoTitle: '',
        repoLink: 'https://github.com/thedigitalmenagerie/pet-adoption',
        repoDescription: '',
        arrListOfButtons: ['', '', '', ''],
        repoLanguage: '',
        starsCount: 0,
        // this is needed here three dot Icon
        pinned: false,
        repoMTILicense: true,
        issuesNeedHelp: '',
        repoLastUpdate: '2021-02-07', //YYYYMMDD https://www.w3schools.com/js/js_date_formats.asp
    },
    {
        repoID = 2,
        repoTitle: '',
        repoLink: 'https://github.com/lindseysatterfield/sorting-hat ',
        repoDescription: '',
        arrListOfButtons: ['', '', '', ''],
        repoLanguage: '',
        starsCount: 0,
        // this is needed here three dot Icon
        pinned: false,
        repoMTILicense: true,
        issuesNeedHelp: '',
        repoLastUpdate: '2021-02-07', //YYYYMMDD https://www.w3schools.com/js/js_date_formats.asp
    },
    {
        repoID = 3,
        repoTitle: '',
        repoLink: 'https://github.com/lindseysatterfield/pet-adoption',
        repoDescription: '',
        arrListOfButtons: ['', '', '', ''],
        repoLanguage: '',
        starsCount: 0,
        // this is needed here three dot Icon
        pinned: false,
        repoMTILicense: true,
        issuesNeedHelp: '',
        repoLastUpdate: '2021-02-07', //YYYYMMDD https://www.w3schools.com/js/js_date_formats.asp
    },
]

//#endRepository

//#Projects
const projectCount = 3;
const arrProjects = [{
        projectID: 0,
        projectName: 'Example1',
        projectDescription: 'No description',
        projectLastUpdate: '2021-02-07', //YYYYMMDD https://www.w3schools.com/js/js_date_formats.asp
        projectPrivate: true,
        projectOpen: true,
    },
    {
        projectID: 1,
        projectName: 'my-goals',
        projectDescription: 'No description',
        projectLastUpdate: '2021-02-07', //YYYYMMDD https://www.w3schools.com/js/js_date_formats.asp
        projectPrivate: false,
        projectOpen: true,
    },
    {
        projectID: 2,
        projectName: 'Sample My Goals',
        projectDescription: '',
        projectLastUpdate: '2021-02-07', //YYYYMMDD https://www.w3schools.com/js/js_date_formats.asp
        projectPrivate: false,
        projectOpen: true,
    },
]


//#endProjects

//#Footer

const arrFooter = [{
        footerItem: 'Terms',
        footerItemLink: 'https://docs.github.com/en/github/site-policy/github-terms-of-service',
    },
    {
        footerItem: 'Privacy',
        footerItemLink: 'https://docs.github.com/en/github/site-policy/github-privacy-statement',
    },
    {
        footerItem: 'Security',
        footerItemLink: 'https://github.com/security',
    },
    {
        footerItem: 'Status',
        footerItemLink: 'https://twitter.com/githubstatus',
    },
    {
        footerItem: 'Help',
        footerItemLink: 'https://support.github.com/',
    },
    {
        footerItem: 'Contact GitHub',
        footerItemLink: 'https://support.github.com/request',
    },
    {
        footerItem: 'Pricing',
        footerItemLink: 'https://github.com/pricing',
    },
    {
        footerItem: 'API',
        footerItemLink: 'https://docs.github.com/en/rest/overview/libraries',
    },
    {
        footerItem: 'Training',
        footerItemLink: 'https://lab.github.com/',
    },
    {
        footerItem: 'Blog',
        footerItemLink: 'https://pages.github.com/',
    },
    {
        footerItem: 'About',
        footerItemLink: 'https://github.com/about',
    },
];


//#endFooter

const PrintProfile = () => {
    let developerFormForm = ` `;

    PrintToDom('#profile-container', developerFormForm);
}
const PrintNavBar = () => {
    let navBar = ` `;

    PrintToDom('#nav-container', navBar);
}



const PrintPinnedCards = () => {
    let pinnedCards = `  `;

    arrRepositories.forEach((card) => {



        //Each pinned card is here
        domString += `



                     `;

    })

    PrintToDom('#top-row', pinnedCards);
}

const PrintRepoCardsWithSearchBar = () => {
    // add search bar to the top of the page
    let repoCardsWithSearchBar = `   `;

    arrRepositories.forEach((card) => {



        //Each Repo card is here
        repoCardsWithSearchBar += `



                     `;

    })

    PrintToDom('#top-row', repoCardsWithSearchBar);
}


const PrintProjectsFormWithSearchBar = () => {
    // add search bar to the top of the page
    let projectCardsWithSearchBar = `   `;

    arrProjects.forEach((card) => {



        //Each Project card is here 
        projectCardsWithSearchBar += `



                     `;

    })

    PrintToDom('#top-row', projectCardsWithSearchBar);
}


const PrintPackagesCards = () => {
    let packageCards = `  `;

    arrPackages.forEach((card) => {



        //Each Package card is here
        domString += `



                     `;

    })

    PrintToDom('#top-row', packageCards);
}


// Print to DOM HERE 
// Print output to DOM = Document Object Model
// divID = targeted ID to print to 
// textToPrint = the text we want to output to the specified ID
const PrintToDom = (divID, textToPrint) => {
    const selectedDiv = document.querySelector(divID);
    selectedDiv.innerHTML = textToPrint;
}



// Add New Project 

// Add new Repo

// Delete project

// Delete Repo

// Handle search bar 

// Handle Sorting

// Button Events

const ButtonEvents = () => {
    //     document.querySelector('#nav-bar-pinned-id').addEventListener('click', PrintPinnedCards);
    //     document.querySelector('#nav-bar-repo-id').addEventListener('click', PrintRepoCardsWithSearchBar);
    //     document.querySelector('#nav-bar-projects-id').addEventListener('click', PrintProjectsFormWithSearchBar);
    //     document.querySelector('#nav-bar-packages-id').addEventListener('click', PrintPackagesCards);
}

// init call()

const init = () => {
    // ButtonEvents();
}

init();
