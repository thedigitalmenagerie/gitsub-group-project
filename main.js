const arrPersonHighlights = [
	{
		highlightIcon        : '/images/Arctic Code Vault.webp',
		highlightDescription : 'https://archiveprogram.github.com/arctic-vault/',
		highlightLink        : ''
	},
	{
		highlightIcon        : './images/Star (Filled in).webp',
		highlightDescription : 'https://stars.github.com/',
		highlightLink        : ''
	},
	{
		highlightIcon        : './images/Star.webp',
		highlightDescription : '',
		highlightLink        : '' // No link needed, just a tag
	}
];

const arrOrganizations = [
	{
		organizationIcon : './images/Neutron (Orgs).webp',
		organizationLink : 'https://github.com/nashville-software-school'
	},
	{
		organizationIcon : './images/orgs.webp',
		organizationLink : 'https://github.com/Urban-Green-Lab'
	},
	{
		organizationIcon : './images/orgs 2.webp',
		organizationLink : 'https://github.com/Autism-Possisble'
	}
];

//#Packages

const arrPackagesTypes = [
	{
		packageIcon : './images/docker.webp',
		packageType : 'Docker'
	},
	{
		packageIcon : './images/apache maven (feather).webp',
		packageType : 'Apache Maven'
	},
	{
		packageIcon : './images/nuget-256.webp',
		packageType : 'NuGet'
	},
	{
		packageIcon : './images/ruby.webp',
		packageType : 'RubyGems'
	},
	{
		packageIcon : './images/npm.webp',
		packageType : 'npm'
	},
	{
		packageIcon : './images/docker.webp',
		packageType : 'Containers'
	}
];

const arrSponsors = [
	{
		sponsorID      : 0,
		sponsorPicture : '/images/Avatar (sponsors).webp',
		sponsorLink    : 'https://github.com/thedigitalmenagerie '
	},
	{
		sponsorID      : 1,
		sponsorPicture : '/images/Avatar (sponsors).webp',
		sponsorLink    : 'https://github.com/danicrosby'
	},
	{
		sponsorID      : 2,
		sponsorPicture : '/images/Avatar (sponsors).webp',
		sponsorLink    : 'https://github.com/lindseysatterfield'
	},
	{
		sponsorID      : 3,
		sponsorPicture : '/images/Avatar (sponsors).webp',
		sponsorLink    : 'https://github.com/JuanDavila1101'
	},
	{
		sponsorID      : 4,
		sponsorPicture : '/images/Avatar (sponsors).webp',
		sponsorLink    : 'https://github.com/TrinityChristiana'
	},
	{
		sponsorID      : 5,
		sponsorPicture : '/images/Avatar (sponsors).webp',
		sponsorLink    : 'https://github.com/ajawashington'
	},
	{
		sponsorID      : 6,
		sponsorPicture : '/images/Avatar (sponsors).webp',
		sponsorLink    : 'https://github.com/BenJarrett'
	},
	{
		sponsorID      : 7,
		sponsorPicture : '/images/Avatar (sponsors).webp',
		sponsorLink    : 'https://github.com/caseywalker'
	}
];

const person = {
	personName              : 'Dr. Teresa Vasquez',
	personNamePronunciation : '',
	personPicture           : './images/Dr. T..jpg',
	personInformation       : '',
	personStats             : {
		statFolowers : 1.8,
		statFolowing : 27,
		statsStars   : 329
	},
	personAddresses         : {
		phisicalLocation : {
			locationIcon    : './images/location.webp',
			locationAddress :'https://www.google.com/maps?q=nashville+tn&um=1&ie=UTF-8&sa=X&ved=2ahUKEwia5sSqu93uAhVIo1kKHZS8BdgQ_AUoAXoECBsQAw'
		},
		gitHub           : {
			gitHubIcon    : './images/location.webp',
			gitHubAddress : 'dr.teresavazquez@gmail.com'
		},
		webPage          : {
			pageIcon    : './images/Link (web page).webp',
			pageAddress : 'https://www.drteresavasquez.com/'
		},
		twitter          : {
			twitterIcon    : './images/twitter.webp',
			teitterAddress : 'https://twitter.com/login?lang=en-gb'
		}
	},
	sponsors                : arrSponsors
};

//#Packages

let packagesCount = 6;
const arrPackages = [
	{
		packagesID          : 0,
		packageIcon         : './images/docker.webp',
		packageType         : 'Docker',
		packagesDescription :
			'A software platform used for building applications based on containers -- small and lightweight execution environments.',
		packagesLink        :
			'https://www.docker.com/?utm_source=google&utm_medium=cpc&utm_campaign=dockerhomepage&utm_content=namer&utm_term=dockerhomepage&utm_budget=growth&gclid=Cj0KCQiAgomBBhDXARIsAFNyUqP7IuAWd7M9yGrY-D87ikBbLpSR4Mzd2RQtHIDalzpNadyjAlyg4kYaAoT_EALw_wcB',
		packagesAlpha       : true
		// typeOfPackage       : arrPackagesTypes[0]
	},
	{
		packagesID          : 1,
		packageIcon         : './images/apache maven (feather).webp',
		packageType         : 'Apache Maven',
		packagesDescription :
			'A default package manager used for the Java programming language and the Java runtime environment.',
		packagesLink        : 'https://maven.apache.org/',
		packagesAlpha       : true
		// typeOfPackage       : arrPackagesTypes[1]
	},
	{
		packagesID          : 2,
		packageIcon         : './images/nuget-256.webp',
		packageType         : 'NuGet',
		packagesDescription :
			'A free and open source package manager used for Microsoft development platforms uncluding .NET.',
		packagesLink        : 'https://www.nuget.org/',
		packagesAlpha       : true
		// typeOfPackage       : arrPackagesTypes[2]
	},
	{
		packagesID          : 3,
		packageIcon         : './images/ruby.webp',
		packageType         : 'RubyGems',
		packagesDescription :
			'A standard format for distributing Ruby programs and libraries used for the Ruby programming language.',
		packagesLink        : 'https://rubygems.org/',
		packagesAlpha       : true
		// typeOfPackage       : arrPackagesTypes[3]
	},
	{
		packagesID          : 4,
		packageIcon         : './images/npm.webp',
		packageType         : 'npm',
		packagesDescription :
			'A package manager for JavaScript included with Node.js npm makes it easy for developers to share and reuse code.',
		packagesLink        : 'https://www.nuget.org/',
		packagesAlpha       : true
		// typeOfPackage       : arrPackagesTypes[4]
	},
	{
		packagesID          : 5,
		packageIcon         : './images/docker.webp',
		packageType         : 'Containers',
		packagesDescription :
			'A single place for your team to manage Docker images and decide who can see and access your images.',

		packagesLink        :
			'https://www.docker.com/resources/what-container?gclid=Cj0KCQiAgomBBhDXARIsAFNyUqMwxmzuSjtAKHOeyuUainBg3qxEksx9tDeBia3gWtnVAslZoQS32kAaApuBEALw_wcB',
		packagesAlpha       : false
		// typeOfPackage       : arrPackagesTypes[5]
	}
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

const arrRepositories = [
	{
		repoID           : 0,
		repoTitle        : 'greys-anatomy-lorem-ipsum-generator',
		repoLink         : 'https://github.com/thedigitalmenagerie/sorting-hat',
		repoDescription  : "A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/pinned-icon.png',
		repoLanguageIcon : '../images/yellow-square.png',
		repoStarIcon     : './images/star-icon.webp',
		repoForkedIcon   : './images/forked-repo-icon.png',
		repo3DotIcon     : './images/3-dot-icon.webp ',
		repoLanguage     : 'javascript',
		starsCount       : 8,
		pinned           : false,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : '2021-02-07',
		reposForked      : 10,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		],
	},
	{
		repoID           : 1,
		repoTitle        : 'how-many-days-until',
		repoLink         : 'https://github.com/thedigitalmenagerie/pet-adoption',
		repoDescription  : 'A React countdown app of days between today and next year.',
		repoPinnedIcon   : './images/pinned-icon.png',
		repoLanguageIcon : '../images/yellow-square.png',
		repoStarIcon     : './images/star-icon.webp',
		repoForkedIcon   : './images/forked-repo-icon.png',
		repo3DotIcon     : './images/3-dot-icon.webp ',
		repoLanguage     : 'javascript',
		starsCount       : 0,
		pinned           : false,
		repoMITLicense   : true,
		issuesNeedHelp   : 0,
		repoLastUpdate   : '2021-02-07',
		reposForked      : 21,
		arrListOfButtons : [
			'react',
			'countdown',
			'hacktoberfest'
		],
	},
	{
		repoID           : 2,
		repoTitle        : 'httriri',
		repoLink         : 'https://github.com/lindseysatterfield/sorting-hat ',
		repoDescription  : 'HTTRiRi - HTTP Status Codes as Portrayed by Rihanna Gifs',
		repoPinnedIcon   : './images/pinned-icon.png',
		repoLanguageIcon : './images/blue-square-2.jpg',
		repoStarIcon     : './images/star-icon.webp',
		repoForkedIcon   : './images/forked-repo-icon.png',
		repo3DotIcon     : './images/3-dot-icon.webp ',
		repoLanguage     : 'TypeScript',
		starsCount       : 37,
		pinned           : false,
		repoMITLicense   : true,
		issuesNeedHelp   : 4,
		repoLastUpdate   : '2021-02-07',
		reposForked      : 12,
		arrListOfButtons : [
			'http',
			'status-codes',
			'gifts',
			'rihanna',
			'hacktoberfest'
		],
	},
	{
		repoID           : 3,
		repoTitle        : 'ambition-found-website',
		repoLink         : 'https://github.com/lindseysatterfield/pet-adoption',
		repoDescription  : 'Website for www.ambition.cor, micro-grant program to provide support for underrepresented people who need financial assistance purging professional development opportunities in the technology...',
		repoPinnedIcon   : './images/pinned-icon.png',
		repoLanguageIcon : '../images/yellow-square.png',
		repoStarIcon     : './images/star-icon.webp',
		repoForkedIcon   : './images/forked-repo-icon.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'javascript',
		starsCount       : 7,
		pinned           : false,
		repoMITLicense   : true,
		issuesNeedHelp   : 3,
		repoLastUpdate   : '2021-02-07',
		reposForked      : 45,
		arrListOfButtons : [
			'donation',
			'landing-page'
		],
	},
	{
		repoID           : 4,
		repoTitle        : 'honey-rae-sorting-hat',
		repoLink         : 'https://github.com/thedigitalmenagerie/sorting-hat',
		repoDescription  : "A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/pinned-icon.png',
		repoLanguageIcon : './images/red-square.png',
		repoStarIcon     : './images/star-icon.webp',
		repoForkedIcon   : './images/forked-repo-icon.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'HTML',
		starsCount       : 8,
		pinned           : true,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : '2021-02-07',
		reposForked      : 11,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		],
	},
	{
		repoID           : 5,
		repoTitle        : 'ls-sorting-hat',
		repoLink         : 'https://github.com/lindseysatterfield/sorting-hat',
		repoDescription  : "A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/pinned-icon.png',
		repoLanguageIcon : './images/blue-square-2.jpg',
		repoStarIcon     : './images/star-icon.webp',
		repoForkedIcon   : './images/forked-repo-icon.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'Typescript',
		starsCount       : 8,
		pinned           : false,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : '2021-02-07',
		reposForked      : 51,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		],
	},
	{
		repoID           : 6,
		repoTitle        : 'lindsey-pet-adoption',
		repoLink         : 'https://github.com/lindseysatterfield/pet-adoption',
		repoDescription  : "A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/pinned-icon.png',
		repoLanguageIcon : './images/red-square.png',
		repoStarIcon     : './images/star-icon.webp',
		repoForkedIcon   : './images/forked-repo-icon.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'HTML',
		starsCount       : 8,
		pinned           : true,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : '2021-02-07',
		reposForked      : 7,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		],
	},
	{
		repoID           : 7,
		repoTitle        : 'dc-personal-bio-stie',
		repoLink         : 'https://github.com/danicrosby/personal-bio-site',
		repoDescription  : "A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/pinned-icon.png',
		repoLanguageIcon : '../images/yellow-square.png',
		repoStarIcon     : './images/star-icon.webp',
		repoForkedIcon   : './images/forked-repo-icon.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'javascript',
		starsCount       : 8,
		pinned           : true,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : '2021-02-07',
		reposForked      : 11,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		],
	},
	{
		repoID           : 8,
		repoTitle        : 'dani-sorting-hat',
		repoLink         : 'https://github.com/danicrosby/sorting-hat',
		repoDescription  : "A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/pinned-icon.png',
		repoLanguageIcon : './images/red-square.png',
		repoStarIcon     : './images/star-icon.webp',
		repoForkedIcon   : './images/forked-repo-icon.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'HTML',
		starsCount       : 8,
		pinned           : false,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : '2021-02-07',
		reposForked      : 16,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		],
	},
	{
		repoID           : 9,
		repoTitle        : 'juan-sorting-hat',
		repoLink         : 'https://github.com/JuanDavila1101/sorting-hat',
		repoDescription  : "A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/pinned-icon.png',
		repoLanguageIcon : './images/blue-square-2.jpg',
		repoStarIcon     : './images/star-icon.webp',
		repoForkedIcon   : './images/forked-repo-icon.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'Typescript',
		starsCount       : 8,
		pinned           : true,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : '2021-02-07',
		reposForked      : 60,
				arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		],
	},
];

//#endRepository

//#Projects
const projectCount = 6;
const arrProjects = [
	{
		projectID          : 0,
		projectName        : 'Sorting Hat',
		projectDescription : 'Lindsey Satterfield',
		projectLink        : 'https://github.com/lindseysatterfield/sorting-hat/projects/1',
		projectLastUpdate  : './images/last updated (clock).webp',
		projectPrivate     : true,
		projectOpen        : true
	},
	{
		projectID          : 1,
		projectName        : 'Gitsub',
		projectDescription : 'Group',
		projectLink        :
			'https://github.com/nss-evening-cohort-14/gitsub-e14-1-devs-to-ever-dev/projects',
		projectLastUpdate  : './images/last updated (clock).webp',
		projectPrivate     : false,
		projectOpen        : true
	},
	{
		projectID          : 2,
		projectName        : 'Sorting Hat',
		projectDescription : 'Honey-Rae Swan',
		projectLink        : 'https://github.com/thedigitalmenagerie/sorting-hat/projects/1',
		projectLastUpdate  : './images/last updated (clock).webp',
		projectPrivate     : false,
		projectOpen        : true
	},
	{
		projectID          : 3,
		projectName        : 'Sorting Hat',
		projectDescription : 'Dani Crosby',
		projectLink        : 'https://github.com/danicrosby/sorting-hat/projects',
		projectLastUpdate  : './images/last updated (clock).webp',
		projectPrivate     : false,
		projectOpen        : true
	},
	{
		projectID          : 4,
		projectName        : 'My Goals',
		projectDescription : 'Honey-Rae Swan',
		projectLink        : 'https://github.com/users/thedigitalmenagerie/projects/1',
		projectLastUpdate  : './images/last updated (clock).webp',
		projectPrivate     : false,
		projectOpen        : true
	},
	{
		projectID          : 5,
		projectName        : 'Pet Adoption',
		projectDescription : 'Dani Crosby',
		projectLink        : 'https://github.com/danicrosby/pet-adoption/projects',
		projectLastUpdate  : './images/last updated (clock).webp',
		projectPrivate     : false,
		projectOpen        : true
	}
];

//#endProjects

//#Footer

// const arrFooter = [
// 	{
// 		footerItem     : 'Terms',
// 		footerItemLink : 'https://docs.github.com/en/github/site-policy/github-terms-of-service'
// 	},
// 	{
// 		footerItem     : 'Privacy',
// 		footerItemLink : 'https://docs.github.com/en/github/site-policy/github-privacy-statement'
// 	},
// 	{
// 		footerItem     : 'Security',
// 		footerItemLink : 'https://github.com/security'
// 	},
// 	{
// 		footerItem     : 'Status',
// 		footerItemLink : 'https://twitter.com/githubstatus'
// 	},
// 	{
// 		footerItem     : 'Help',
// 		footerItemLink : 'https://support.github.com/'
// 	},
// 	{
// 		footerItem     : 'Contact GitHub',
// 		footerItemLink : 'https://support.github.com/request'
// 	},
// 	{
// 		footerItem     : 'Pricing',
// 		footerItemLink : 'https://github.com/pricing'
// 	},
// 	{
// 		footerItem     : 'API',
// 		footerItemLink : 'https://docs.github.com/en/rest/overview/libraries'
// 	},
// 	{
// 		footerItem     : 'Training',
// 		footerItemLink : 'https://lab.github.com/'
// 	},
// 	{
// 		footerItem     : 'Blog',
// 		footerItemLink : 'https://pages.github.com/'
// 	},
// 	{
// 		footerItem     : 'About',
// 		footerItemLink : 'https://github.com/about'
// 	}
// ];

//#endFooter

const PrintProfile = () => {
	let developerFormForm = ` `;

	PrintToDom('#profile-container', developerFormForm);
};
const PrintNavBar = () => {
	let navBar = ` `;

	PrintToDom('#nav-container', navBar);
};

const PrintPinnedCards = () => {
	let pinnedCards = `  `;

	arrRepositories.forEach((card) => {

		if (card.pinned === true) {
			pinnedCards += `
					<div class="card text-white bg-dark pinned-card" id="${card.repoID}" style="width: 27rem; height: 10em; margin: .2em">
						<div class="card-body" id="overview-card-body">
								<h6 class="card-title"><img src="${card.repoPinnedIcon}" style="width: 1em">${card.repoTitle}</h6>
								<p class="overview-card-text">${card.repoDescription}</p>
								<hr>
								<div class="repoCardBottomContainer">
									<div>
										<img src="${card.repoLanguageIcon}" id="pinned-icons">${card.repoLanguage}
										<img src="${card.repoStarIcon}" id="pinned-icons">${card.starsCount}
										<img src="${card.repoForkedIcon}" id="pinned-icons">${card.reposForked}
									</div>
								</div>
						</div>
					</div>`;
		}
		
	});

	PrintToDom('#pinned-cards', pinnedCards);
};

const PrintRepoCardsWithSearchBar = () => {
	// add search bar to the top of the page

	// add search bar to the top of the page
	let repoCardsWithSearchBar = ``;

	arrRepositories.forEach((card) => {
		//Each Repo card is here
		repoCardsWithSearchBar += `
              <div class="card overview-card" id="${card.repoID}">
                <div class="card-body" id="overview-card-body">
                  <h6 class="card-title">${card.repoTitle}</h6>
                  <p class="overview-card-text">${card.repoDescription}</p>
                  <p class="buttons-container">${makeRepoButtons(card)}</p>
                  <p class="repoCardBottomContainer"> ${card.repoLanguage} ${card.starsCount} ${card.issuesNeedHelp} issues needs help ${card.repoLastUpdate} Updated days ago
                  </p>
                </div>
              </div> `;
	});

	PrintToDom('#repo-top-row', repoCardsWithSearchBar);
};

const makeRepoButtons = (repoCard) => {
	let repoButtons = ``;
	// let indexOfRepoID = arrRepositories.findindex(cardRepoID);

	// arrRepositories[indexOfRepoID].arrListOfButtons.forEach((button, i) => {
	repoCard.arrListOfButtons.forEach((button, i) => {
		repoButtons += `
                       <a href="#" class="btn btn-secondary btn-sm" style="padding: .5em; margin: .5em" id="${i}">${button}</a>
                       `;
	});
	return repoButtons;
};

const PrintProjectsFormWithSearchBar = () => {
	// add search bar to the top of the page
	let projectCardsWithSearchBar = ` `;

	arrProjects.forEach((card) => {
		projectCardsWithSearchBar += `<div class="card project-card" id="project-card">
        <div class="card-body" id="overview-card-body">
          <h6 class="card-title">${card.projectName}</h6>
          <p class="overview-card-text" ><img src="${card.projectLastUpdate}" id="timeUpdated">${card.projectDescription}</p>
          <a href="${card.projectLink}" class="btn btn-secondary btn-sm" id="overview-btn">Learn More</a>
        </div>
      </div>`;
	});

	PrintToDom('#projects-top-row', projectCardsWithSearchBar);
};

const PrintPackagesCards = () => {
	let packageCards = `  `;
	arrPackages.forEach((card) => {
		//Each Package card is here
		if (card.packageIcon === '') {
			packageCards += `
        <div class="card package-card" id="${card.packagesID}" style="flex: 0 0 25%; width: 16.8em; margin: .5em 1em">
        <div class="card-body" id="overview-card-body">
          <h6 class="card-title">${card.packageType}</h6>
          <p class="overview-card-text">${card.packagesDescription}</p>
          <button type="button" class="btn btn-danger btn-sm" id="${card.packagesID}">Delete</button>
        </div>
      </div>`;
		}
		else {
			packageCards += `
      <div class="card package-card" id="${card.packagesID}" style="flex: 0 0 25%; width: 16.8em; margin: .5em 1em;">
        <div class="card-body" id="overview-card-body">
          <h6 class="card-title"><img src="${card.packageIcon}" id="packages-icons" alt="${card.packageType} icon"> ${card.packageType}</h6>
          <p class="overview-card-text">${card.packagesDescription}</p>
          <a href="${card.packagesLink}" class="btn btn-secondary btn-sm" id="overview-btn">Learn More</a>
          <button type="button" class="btn btn-danger btn-sm" id="${card.packagesID}">Delete</button>
        </div>
      </div>`;
		}
	});

	PrintToDom('#packages-card-container', packageCards);
};

// Print to DOM HERE
// Print output to DOM = Document Object Model
// divID = targeted ID to print to
// textToPrint = the text we want to output to the specified ID
const PrintToDom = (divID, textToPrint) => {
	const selectedDiv = document.querySelector(divID);
	selectedDiv.innerHTML = textToPrint;
};

// Add new package card from form
const getPackageFormInfo = (e) => {
	e.preventDefault();

	let packagesID = packagesCount++;
	const packageType = document.querySelector('#packagesInputRepositoryName').value;
	const packagesDescription = document.querySelector('#packages-textarea').value;

	const formInputObject = {
		packagesID,
		packageIcon         : '',
		packageType,
		packagesDescription,
		packagesLink        : '',
		packagesAlpha       : ''
	};

	arrPackages.push(formInputObject);
	PrintPackagesCards();

	document.querySelector('.packages-form').reset();
};

const deletePackage = (e) => {
	const targetType = e.target.type;
	const targetIdNumber = parseInt(e.target.id);

	if (targetType === 'button') {
		let indexOfPackages = arrPackages.findIndex(
			(package) => package.packagesID === targetIdNumber
		);
		if (indexOfPackages !== -1) {
			arrPackages.splice(indexOfPackages, 1);
		}
	}

	PrintPackagesCards();
};

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
	document.querySelector('#packages-form-btn').addEventListener('click', getPackageFormInfo);
	document.querySelector('#packages-card-container').addEventListener('click', deletePackage);
};

// init call()

const init = () => {
	let x = location.pathname;
	
	if (x === '/index.html') {
		PrintPinnedCards();
	}
	else if (x === '/repo.html') {
		PrintRepoCardsWithSearchBar();
	}
	else if (x === '/projects.html') {
		PrintProjectsFormWithSearchBar();
	}
	else if (x === '/packages.html') {
		PrintPackagesCards();
	}
	ButtonEvents();
};

init();
