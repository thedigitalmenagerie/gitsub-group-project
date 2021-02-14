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

let packagesCount = 6;
const arrPackages = [
	{
		packagesID          : 0,
		packageIcon         : './images/docker.webp',
		packageType         : 'Docker',
		packagesDescription :'A software platform used for building applications based on containers -- small and lightweight execution environments.',
		packagesLink        :'https://www.docker.com/?utm_source=google&utm_medium=cpc&utm_campaign=dockerhomepage&utm_content=namer&utm_term=dockerhomepage&utm_budget=growth&gclid=Cj0KCQiAgomBBhDXARIsAFNyUqP7IuAWd7M9yGrY-D87ikBbLpSR4Mzd2RQtHIDalzpNadyjAlyg4kYaAoT_EALw_wcB',
		packagesAlpha       : true
	},
	{
		packagesID          : 1,
		packageIcon         : './images/apache maven (feather).webp',
		packageType         : 'Apache Maven',
		packagesDescription : 'A default package manager used for the Java programming language and the Java runtime environment.',
		packagesLink        : 'https://maven.apache.org/',
		packagesAlpha       : true
	},
	{
		packagesID          : 2,
		packageIcon         : './images/nuget-256.webp',
		packageType         : 'NuGet',
		packagesDescription : 'A free and open source package manager used for Microsoft development platforms uncluding .NET.',
		packagesLink        : 'https://www.nuget.org/',
		packagesAlpha       : true
	},
	{
		packagesID          : 3,
		packageIcon         : './images/ruby.webp',
		packageType         : 'RubyGems',
		packagesDescription : 'A standard format for distributing Ruby programs and libraries used for the Ruby programming language.',
		packagesLink        : 'https://rubygems.org/',
		packagesAlpha       : true
	},
	{
		packagesID          : 4,
		packageIcon         : './images/npm.webp',
		packageType         : 'npm',
		packagesDescription : 'A package manager for JavaScript included with Node.js npm makes it easy for developers to share and reuse code.',
		packagesLink        : 'https://www.nuget.org/',
		packagesAlpha       : true
	},
	{
		packagesID          : 5,
		packageIcon         : './images/docker.webp',
		packageType         : 'Containers',
		packagesDescription : 'A single place for your team to manage Docker images and decide who can see and access your images.',
		packagesLink        : 'https://www.docker.com/resources/what-container?gclid=Cj0KCQiAgomBBhDXARIsAFNyUqMwxmzuSjtAKHOeyuUainBg3qxEksx9tDeBia3gWtnVAslZoQS32kAaApuBEALw_wcB',
		packagesAlpha       : false
	}
];

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


let projectCount = 6;
const arrProjects = [
	{
		projectID          : 0,
		projectName        : 'Sorting Hat',
		projectDescription : 'Lindsey Satterfield',
		projectLink        : 'https://github.com/lindseysatterfield/sorting-hat/projects/1',
		projectLastUpdate  : './images/clock-256.webp',
	},
	{
		projectID          : 1,
		projectName        : 'Gitsub',
		projectDescription : 'Group',
		projectLink        :
			'https://github.com/nss-evening-cohort-14/gitsub-e14-1-devs-to-ever-dev/projects',
		projectLastUpdate  : './images/clock-256.webp',
	},
	{
		projectID          : 2,
		projectName        : 'Sorting Hat',
		projectDescription : 'Honey-Rae Swan',
		projectLink        : 'https://github.com/thedigitalmenagerie/sorting-hat/projects/1',
		projectLastUpdate  : './images/clock-256.webp',
	},
	{
		projectID          : 3,
		projectName        : 'Sorting Hat',
		projectDescription : 'Dani Crosby',
		projectLink        : 'https://github.com/danicrosby/sorting-hat/projects',
		projectLastUpdate  : './images/clock-256.webp',
	},
	{
		projectID          : 4,
		projectName        : 'My Goals',
		projectDescription : 'Honey-Rae Swan',
		projectLink        : 'https://github.com/users/thedigitalmenagerie/projects/1',
		projectLastUpdate  : './images/clock-256.webp',
	},
	{
		projectID          : 5,
		projectName        : 'Pet Adoption',
		projectDescription : 'Dani Crosby',
		projectLink        : 'https://github.com/danicrosby/pet-adoption/projects',
		projectLastUpdate  : './images/clock-256.webp',
	}
];


const PrintProjectProfile = () => {
	let developerFormForm = ` <div class="container text-white bg-dark profile-container" id="profile-container">
 <img src="./images/dr.t recent.jpeg" id="profile-pic"alt="Photo of Dr. T.">
	 <h>Dr. T.</h>
	 <h6 id="handle">NSS</h6>
	 <p id="profile-bio">Hello, My name is Dr. T. I'm a teacher at Nashville Software School, currently teaching E14.<p>
 <div class="container" id="profile-buttons">
	 <a href="#" class="btn btn-warning btn-sm" id="follow-btn">Follow</a>
	 <a href="#" class="btn btn-warning btn-sm" id="sponsor-btn">Sponsor</a>
	 <a href="#" class="btn btn-warning btn-sm" id="more-btn">...</a>
	 <br>
 </div>
 <a href="https://www.visitmusiccity.com/" style="color: white"><img src="./images/location-icon-256.webp" id="packages-icon-images">Nashville, TN</a>
 <a href="#" style="color: white"><img src="./images/email light.webp" id="packages-icon-images">DrT@gmail.com</a>
 <a href="https://www.drteresavasquez.com/" style="color: white"><img src="./images/link light.webp" id="packages-icon-images">drteresavasquez.com</a>
 <a href="https://twitter.com/home" style="color: white"><img src="./images/twitter light.webp" id="packages-icon-images">Twitter</a>
 <br>
	 <h6>Highlights</h6>
	 <a href="#" style="color: white"><img src="./images/_snowflake-256.webp" id="projects-icon-images">Arctic</a>
	 <a href="#" style="color: white"><img src="./images/yellow star.webp" id="projects-icon-images">Github</a>
	 <a href="#" style="color: white"><img src="./images/pro star light.webp" id="packages-icon-images">Pro</a>
	 <br>
	 <h6>Organizations</h6>
	<div class="container" id="organization-profiles">
	 <a href="https://github.com/nashville-software-school"><img src="./images/NSS-Logo.png" id="organization-icon-images" alt="NSS-Logo"></a>
	 <a href="https://github.com/Urban-Green-Lab"><img src="./images/urban-green-icon.png" id="organization-icon-images" alt="urban-green-icon"></a>
	 <a href="https://github.com/Autism-Possisble"><img src="./images/autism-possible.png" id="organization-icon-images" alt="autism-possible"></a>
	 <a href="https://github.com/nss-evening-cohort-14"><img src="./images/cohort14.jpeg" id="organization-icon-images" alt="autism-possible"></a>
	</div>
		 <h6>Sponsors</h6>
		<div class="container" id="sponsor-profiles">
			<div class="sponsor-top-row">
			 <img src="./images/honey-rae.jpeg" id="sponsor-icon-images" alt="placeholder image">
			 <img src="./images/dani.jpeg" id="sponsor-icon-images" alt="placeholder image">
			 <img src="./images/juan.jpeg" id="sponsor-icon-images" alt="placeholder image">
			 <img src="./images/lindsey.jpeg" id="sponsor-icon-images" alt="placeholder image">
		 </div>
		 <div class="sponsor-bottom-row">
			 <img src="./images/trinity.jpeg" id="sponsor-icon-images" alt="placeholder image">
			 <img src="./images/Aja.jpeg" id="sponsor-icon-images" alt="placeholder image">
			 <img src="./images/steve.png" id="sponsor-icon-images" alt="placeholder image">
			 <img src="./images/wonder-woman.jpg" id="sponsor-icon-images" alt="placeholder image">
		 </div>
	 </div>
`;

	PrintToDom('#left-container', developerFormForm);
};

const PrintProjectNavBar = () => {
	let projectNavBar = `<section id="nav-container">
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark"><a class="navbar-brand" href="index.html">Overview</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav">
				<li class="nav-item active"><a class="nav-link" href="repo.html">Repositories</a></li>
				<li class="nav-item"><a class="nav-link" href="projects.html">Projects <span class="sr-only"><img src="./images/github-cat4.webp" alt="github icon" id="navbar-icon"></a></span></a></li>
				<li class="nav-item"><a class="nav-link" href="packages.html">Packages</a></li></ul></div></nav>
</section>`;

	PrintToDom('#project-nav-container', projectNavBar);
};

const PrintProjectFooter = () => {
	let footer = `<ul><li><a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" style="color: lightgray">Terms</a></li>
	<li><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" style="color:lightgray"></a>Privacy</li>
	<li><a href="https://github.com/security" style="color: lightgray">Security</a></li>
	<li><a href="https://twitter.com/githubstatus" style="color: white">Status</a></li>
	<li><a href="https://support.github.com/" style="color: lightgray"></a>Help</li>
	<li><a href="https://github.com/"><img src="./images/github-cat4.webp" alt="github icon" id="github-icon"></a></li>
	<li><a href="https://support.github.com/request" style="color: lightgray">Contact</a></li>
	<li><a href="https://github.com/pricing" style="color: lightgray">Pricing</a></li>
	<li><a href="https://docs.github.com/en/rest/pinned/libraries" style="color: lightgray"></a>API</li>
	<li><a href="https://lab.github.com/" style="color: lightgray">Training</a></li>
	<li><a href="https://pages.github.com/" style="color: lightgray"></a>Blog</li>
	<li><a href="https://github.com/about" style="color: lightgray"></a>About</li>
</ul>`;

	PrintToDom('#footer-container', footer);
}

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

const PrintProjectsFormWithSearchBar = (arrProjects) => {
	let projectCardsWithSearchBar = `<div class="sticky"><input id="projectSearchbar" onkeyup="searchProject" class= "my2" type="text" name="search" placeholder="Search projects.."	<div class="dropdown">
  <label for="sort">
  </label>
  <select id="sort">
    <option value="title">Title</option>
    <option value="author">Author</option>
    <option value="newest">Newest</option>
  </select>
</div>
</div>`;

	arrProjects.forEach((card) => {
		projectCardsWithSearchBar += `<div class="card project-card text-white bg-dark border-warning" id="${card.projectID}">
        <div class="card-body" id="overview-card-body">
          <h4 class="card-title" style="color: white">${card.projectName}</h4>
					<a href="${card.projectLink}" style="color:lightgray" class="mb-4">View</a>
          <p class="overview-card-text"><img src="${card.projectLastUpdate}" id="timeUpdated">  ${card.projectDescription}</p>
					<div class="btn-group mr-2" role="group"><button type="button" class="btn btn-danger btn-sm" class="mt-1" id="${card.projectID}">Delete</button></div>
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


const PrintToDom = (divID, textToPrint) => {
	const selectedDiv = document.querySelector(divID);
	selectedDiv.innerHTML = textToPrint;
};


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

const newProjectFormCard = (e) => {
	let projectFormCard = `<form class="projects-form pb-4">
	<h3 id="h3-title">Create Project</h3>
	<div class="form-group col-md-6 mb-1">
		<label for="inputProjectName" class="mb-1 text-warning" id="form-label-name">Project Title</label>
		<input type="text" class="form-control text-warning" id="inputProjectName" required></div>
		<label for="inputProjectDescription" class="mb-1 text-warning" id="form-label-name">Author Name</label>
		<input type="text" class="form-control" id="inputProjectDescription" required>
		<label for="inputProjectLink" class="mb-1 text-warning" id="form-label-name">Project</label>
		<input type="text" class="form-control" id="inputProjectLink" required>
	<button type="submit" class="btn btn-danger my-3" id="projects-form-btn">Create Project</button>
	</div>
</form>`;

	PrintToDom('#create-project-container', projectFormCard);
}

const getCreateNewProjectInfo = (e) => {
	e.preventDefault();

	let projectID = projectCount++;
	const projectName = document.querySelector('#inputProjectName').value;
	const projectDescription = document.querySelector('#inputProjectDescription').value;
	const projectLink = document.querySelector('#inputProjectLink').value;
	const projectLastUpdate = './images/last updated (clock).webp';

	const projectObj = {
		projectID,
		projectName,
		projectDescription,
		projectLink,
		projectLastUpdate,
	}

	arrProjects.push(projectObj);
	PrintProjectsFormWithSearchBar();

}


const sortProjectSortButton = (e) => {
	// const targetId = e.target.id;

	let targetId = document.querySelector('#sort').value;

	if (targetId === 'title') {
		arrProjects.sort((a, b) => (a.projectName.toUpperCase() < b.projectName.toUpperCase() ? -1 : 1));
	} else if (targetId === 'author') {
		arrProjects.sort((a, b) => (a.projectDescription.toUpperCase() < b.projectDescription.toUpperCase() ? -1 : 1));
	} else if(targetId === 'newest') {
		arrProjects.sort((a, b) => (a.projectID.toUpperCase() < b.projectID.toUpperCase() ? -1 : 1));
	}

	PrintProjectsFormWithSearchBar(arrProjects);
};

const searchProjectsSearchBar = (e) => {
	const input = document.querySelector('#projectSearchbar').value
	input = input.toLowerCase();
	let x = document.querySelector(`${card.projectName}`).value

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = "none";
		} else { 
			x[i].style.dispay = `${card.projectName}`
		}
	}
}


const deleteProject = (e) => {
	e.preventDefault();
	const targetType = e.target.type;
	const targetId = Number(e.target.id);

	if (targetType === 'button') {
		const indexOfProject = arrProjects.findIndex((project) => project.projectID === targetId);
		if (indexOfProject !== -1) {
			arrProjects.splice(indexOfProject, 1);
		}
		
	}

	PrintProjectsFormWithSearchBar();
};


const ButtonEvents = () => {

	let x = location.pathname;

	if (x === '/projects.html') {
		document.querySelector('#projects-top-row').addEventListener('click', sortProjectSortButton);
		document.querySelector('#projects-form-btn').addEventListener('click', getCreateNewProjectInfo);
		document.querySelector('#projects-top-row').addEventListener('click', deleteProject);
		document.querySelector('#projectSearchbar').addEventListener('keyup', searchProjectsSearchBar);
	}
	else if (x === '/packages.html') {
		document.querySelector('#packages-form-btn').addEventListener('click', getPackageFormInfo);
		document.querySelector('#packages-card-container').addEventListener('click', deletePackage);
	}
	
	

};


const init = () => {

	let x = location.pathname;

	if (x === '/index.html') {
		PrintPinnedCards();
	}
	else if (x === '/repo.html') {
		PrintRepoCardsWithSearchBar();
	}
	else if (x === '/projects.html') {
		PrintProjectNavBar();
		PrintProjectProfile();
		PrintProjectFooter();
		PrintProjectsFormWithSearchBar(arrProjects);
		newProjectFormCard();
	}
	else if (x === '/packages.html') {
		PrintPackagesCards();
	}

	ButtonEvents();

};

init();
