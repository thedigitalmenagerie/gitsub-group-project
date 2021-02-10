console.log('CONNECTED');

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
const arrCardTypes = ['Pinned',
    'Packages',
    'Repos',
    'Projects',
];

const currentPage = arrCardTypes[0];


const PrintBio = () => {
    let developerFormForm = ` `;

    PrintToDom('#bio-form', developerFormForm);
}
const PrintNavBar = () => {
    let navBar = ` `;

    PrintToDom('#Nav-Bar', navBar);
}



const PrintPinnedProjects = () => {
    let pinnedProjects = ` `;

    // call = BuildStudentCard(projectCards, divID)
    // BuildStudentCard(arrRepositories, arrRepositories[0] );

    PrintToDom('#This is the tag for the ', pinnedProjects);
}
const GetPinnedCard = () => {
    return `make pin Card `;
}




const PrintRepoFormWithSearchBar = () => {
    let reposFormWithSearchBar = ` `;

    PrintToDom('#this is the tag for the repos', reposFormWithSearchBar);
}
const GetRepoCard = () => {
    return `Make the Repo card `;
}
const PrintCreateNewRepoForm = () => {
    let newRepoForm = ` `;

    PrintToDom('#new-repo-form', newRepoForm);
}
const ClearNewRepoForm = () => {
    // Clear Repo form here
}




const PrintProjectsFormWithSearchBar = () => {
    let projectFormWithSearchBar = ` `;

    PrintToDom('#this is the tag for the project ', projectFormWithSearchBar);
}
const GetProjectCard = () => {
    return `Make the project card `;
}
const PrintCreateNewProjectForm = () => {
    let newProjectForm = ` `;

    PrintToDom('#new-project-form', newProjectForm);
}
const ClearCreateNewProjectForm = () => {
    // Clear Project form here
}




const GetPackageCard = () => {
    return `make Packages Card `;
}


const PrintFooterBar = () => {
    let footerBar = ` `;

    PrintToDom('#Footer-Bar', footerBar);
}

// Print to DOM HERE 
// Print output to DOM = Document Object Model
// divID = targeted ID to print to 
// textToPrint = the text we want to output to the specified ID
const PrintToDom = (divID, textToPrint) => {
    const selectedDiv = document.querySelector(divID);
    selectedDiv.innerHTML = textToPrint;
}



const BuildStudentCard = (cards, divID) => {
    let domString = '';

    cards.forEach((card) => {

        if (divID === arrCardTypes[0]) {
            domString += `${GetPinnedCard(card)}`;
        } else if (divID === arrCardTypes[1]) {
            domString += `${GetRepoCard(card)}`;
        } else if (divID === arrCardTypes[2]) {
            domString += `${GetProjectCard(card)}`;
        } else if (divID === arrCardTypes[3]) {
            domString += `${GetPackageCard(card)}`;
        }
    })

    PrintToDom(divID, domString);
}

// Add New Project 

// Add new Repo


// Delete project

// Delete Repo

// Handle search bar 

// Handle Sorting

// Button Events

const ButtonEvents = () => {
    //     document.querySelector('#btnStartSorting').addEventListener('click', PrintStudentForm);
    //     document.querySelector(sortedNamesID).addEventListener('click', expelStudent);
    //     document.querySelector('form').addEventListener('submit', GetFirstYearsInfo);
    //     document.querySelector('#btnSortStudentBy').addEventListener('click', GetFirstYearsInfo);
    //     document.querySelector('#btnAscendingDescending').addEventListener('click', GetFirstYearsInfo);
}

// init call()

const init = () => {
    // ButtonEvents();
}

init();
