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
			locationAddress :
				'https://www.google.com/maps?q=nashville+tn&um=1&ie=UTF-8&sa=X&ved=2ahUKEwia5sSqu93uAhVIo1kKHZS8BdgQ_AUoAXoECBsQAw'
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
		packagesDescription :
			'A software platform used for building applications based on containers -- small and lightweight execution environments.',
		packagesLink        :
			'https://www.docker.com/?utm_source=google&utm_medium=cpc&utm_campaign=dockerhomepage&utm_content=namer&utm_term=dockerhomepage&utm_budget=growth&gclid=Cj0KCQiAgomBBhDXARIsAFNyUqP7IuAWd7M9yGrY-D87ikBbLpSR4Mzd2RQtHIDalzpNadyjAlyg4kYaAoT_EALw_wcB',
		packagesAlpha       : true
	},
	{
		packagesID          : 1,
		packageIcon         : './images/apache maven (feather).webp',
		packageType         : 'Apache Maven',
		packagesDescription :
			'A default package manager used for the Java programming language and the Java runtime environment.',
		packagesLink        : 'https://maven.apache.org/',
		packagesAlpha       : true
	},
	{
		packagesID          : 2,
		packageIcon         : './images/nuget-256.webp',
		packageType         : 'NuGet',
		packagesDescription :
			'A free and open source package manager used for Microsoft development platforms uncluding .NET.',
		packagesLink        : 'https://www.nuget.org/',
		packagesAlpha       : true
	},
	{
		packagesID          : 3,
		packageIcon         : './images/ruby.webp',
		packageType         : 'RubyGems',
		packagesDescription :
			'A standard format for distributing Ruby programs and libraries used for the Ruby programming language.',
		packagesLink        : 'https://rubygems.org/',
		packagesAlpha       : true
	},
	{
		packagesID          : 4,
		packageIcon         : './images/npm.webp',
		packageType         : 'npm',
		packagesDescription :
			'A package manager for JavaScript included with Node.js npm makes it easy for developers to share and reuse code.',
		packagesLink        : 'https://www.nuget.org/',
		packagesAlpha       : true
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
		repoDescription  :
			"A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/tack-1.png',
		repoLanguageIcon : '../images/yellow-square.png',
		repoStarIcon     : './images/star-2.png',
		repoForkedIcon   : './images/fork-2.png',
		repo3DotIcon     : './images/3-dot-icon.webp ',
		repoLanguage     : 'javascript',
		starsCount       : 168,
		pinned           : false,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : 7,
		reposForked      : 10,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		]
	},
	{
		repoID           : 1,
		repoTitle        : 'how-many-days-until',
		repoLink         : 'https://github.com/thedigitalmenagerie/pet-adoption',
		repoDescription  : 'A React countdown app of days between today and next year.',
		repoPinnedIcon   : './images/tack-1.png',
		repoLanguageIcon : '../images/yellow-square.png',
		repoStarIcon     : './images/star-2.png',
		repoForkedIcon   : './images/fork-2.png',
		repo3DotIcon     : './images/3-dot-icon.webp ',
		repoLanguage     : 'javascript',
		starsCount       : 491,
		pinned           : false,
		repoMITLicense   : true,
		issuesNeedHelp   : 0,
		repoLastUpdate   : 1,
		reposForked      : 21,
		arrListOfButtons : [
			'react',
			'countdown',
			'hacktoberfest'
		]
	},
	{
		repoID           : 2,
		repoTitle        : 'httriri',
		repoLink         : 'https://github.com/lindseysatterfield/sorting-hat ',
		repoDescription  : 'HTTRiRi - HTTP Status Codes as Portrayed by Rihanna Gifs',
		repoPinnedIcon   : './images/tack-1.png',
		repoLanguageIcon : './images/blue-square-2.jpg',
		repoStarIcon     : './images/star-2.png',
		repoForkedIcon   : './images/fork-2.png',
		repo3DotIcon     : './images/3-dot-icon.webp ',
		repoLanguage     : 'TypeScript',
		starsCount       : 37,
		pinned           : false,
		repoMITLicense   : true,
		issuesNeedHelp   : 4,
		repoLastUpdate   : 6,
		reposForked      : 12,
		arrListOfButtons : [
			'http',
			'status-codes',
			'gifts',
			'rihanna',
			'hacktoberfest'
		]
	},
	{
		repoID           : 3,
		repoTitle        : 'ambition-found-website',
		repoLink         : 'https://github.com/lindseysatterfield/pet-adoption',
		repoDescription  :
			'Website for www.ambition.cor, micro-grant program to provide support for underrepresented people who need financial assistance purging professional development opportunities in the technology...',
		repoPinnedIcon   : './images/tack-1.png',
		repoLanguageIcon : '../images/yellow-square.png',
		repoStarIcon     : './images/star-2.png',
		repoForkedIcon   : './images/fork-2.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'javascript',
		starsCount       : 32,
		pinned           : false,
		repoMITLicense   : true,
		issuesNeedHelp   : 3,
		repoLastUpdate   : 2,
		reposForked      : 45,
		arrListOfButtons : [
			'donation',
			'landing-page'
		]
	},
	{
		repoID           : 4,
		repoTitle        : 'honey-rae-sorting-hat',
		repoLink         : 'https://github.com/thedigitalmenagerie/sorting-hat',
		repoDescription  :
			"A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/tack-1.png',
		repoLanguageIcon : './images/red-square.png',
		repoStarIcon     : './images/star-2.png',
		repoForkedIcon   : './images/fork-2.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'HTML',
		starsCount       : 76,
		pinned           : true,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : 5,
		reposForked      : 11,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		]
	},
	{
		repoID           : 5,
		repoTitle        : 'ls-sorting-hat',
		repoLink         : 'https://github.com/lindseysatterfield/sorting-hat',
		repoDescription  :
			"A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/tack-1.png',
		repoLanguageIcon : './images/blue-square-2.jpg',
		repoStarIcon     : './images/star-2.png',
		repoForkedIcon   : './images/fork-2.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'Typescript',
		starsCount       : 21,
		pinned           : false,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : 7,
		reposForked      : 51,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		]
	},
	{
		repoID           : 6,
		repoTitle        : 'lindsey-pet-adoption',
		repoLink         : 'https://github.com/lindseysatterfield/pet-adoption',
		repoDescription  :
			"A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/tack-1.png',
		repoLanguageIcon : './images/red-square.png',
		repoStarIcon     : './images/star-2.png',
		repoForkedIcon   : './images/fork-2.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'HTML',
		starsCount       : 103,
		pinned           : true,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : 10,
		reposForked      : 7,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		]
	},
	{
		repoID           : 7,
		repoTitle        : 'dc-personal-bio-site',
		repoLink         : 'https://github.com/danicrosby/personal-bio-site',
		repoDescription  :
			"A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/tack-1.png',
		repoLanguageIcon : '../images/yellow-square.png',
		repoStarIcon     : './images/star-2.png',
		repoForkedIcon   : './images/fork-2.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'javascript',
		starsCount       : 42,
		pinned           : true,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : 5,
		reposForked      : 11,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		]
	},
	{
		repoID           : 8,
		repoTitle        : 'dani-sorting-hat',
		repoLink         : 'https://github.com/danicrosby/sorting-hat',
		repoDescription  :
			"A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/tack-1.png',
		repoLanguageIcon : './images/red-square.png',
		repoStarIcon     : './images/star-2.png',
		repoForkedIcon   : './images/fork-2.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'HTML',
		starsCount       : 16,
		pinned           : false,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : 2,
		reposForked      : 16,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		]
	},
	{
		repoID           : 9,
		repoTitle        : 'juan-sorting-hat',
		repoLink         : 'https://github.com/JuanDavila1101/sorting-hat',
		repoDescription  :
			"A lorem generator with medical terms and words from the show Grey's Anatomy.",
		repoPinnedIcon   : './images/tack-1.png',
		repoLanguageIcon : './images/blue-square-2.jpg',
		repoStarIcon     : './images/star-2.png',
		repoForkedIcon   : './images/fork-2.png',
		repo3DotIcon     : './images/3-dot-icon.webp',
		repoLanguage     : 'Typescript',
		starsCount       : 12,
		pinned           : true,
		repoMITLicense   : false,
		issuesNeedHelp   : 1,
		repoLastUpdate   : 7,
		reposForked      : 60,
		arrListOfButtons : [
			'netlify',
			'Jamstack',
			'Lorem-ipsum-generator',
			'medical',
			'serverless',
			'react'
		]
	}
];

let projectCount = 6;
const arrProjects = [
	{
		projectID          : 0,
		projectName        : 'Sorting Hat',
		projectDescription : 'Lindsey Satterfield',
		projectLink        : 'https://github.com/lindseysatterfield/sorting-hat/projects/1',
		projectLastUpdate  : './images/clock-256.webp'
	},
	{
		projectID          : 1,
		projectName        : 'Gitsub',
		projectDescription : 'Group',
		projectLink        :
			'https://github.com/nss-evening-cohort-14/gitsub-e14-1-devs-to-ever-dev/projects',
		projectLastUpdate  : './images/clock-256.webp'
	},
	{
		projectID          : 2,
		projectName        : 'Sorting Hat',
		projectDescription : 'Honey-Rae Swan',
		projectLink        : 'https://github.com/thedigitalmenagerie/sorting-hat/projects/1',
		projectLastUpdate  : './images/clock-256.webp'
	},
	{
		projectID          : 3,
		projectName        : 'Sorting Hat',
		projectDescription : 'Dani Crosby',
		projectLink        : 'https://github.com/danicrosby/sorting-hat/projects',
		projectLastUpdate  : './images/clock-256.webp'
	},
	{
		projectID          : 4,
		projectName        : 'My Goals',
		projectDescription : 'Honey-Rae Swan',
		projectLink        : 'https://github.com/users/thedigitalmenagerie/projects/1',
		projectLastUpdate  : './images/clock-256.webp'
	},
	{
		projectID          : 5,
		projectName        : 'Pet Adoption',
		projectDescription : 'Dani Crosby',
		projectLink        : 'https://github.com/danicrosby/pet-adoption/projects',
		projectLastUpdate  : './images/clock-256.webp'
	}
];

const PrintProfile = () => {
	let developerForm = `<div class="container text-white bg-dark profile-container" id="profile-container">
  <img src="./images/Dr. T..jpg" id="profile-pic" alt="Photo of Dr. T.">
  <h>Dr. T.</h>
  <h7 id="handle">dope-2021</h7>
  <p id="profile-bio">Hello, My name is Dr. T. I'm the best teacher at Nashville Software School.<p>
          <div class="container" id="profile-buttons">
              <a href="https://github.com/drteresavasquez?tab=followers" class="btn btn-secondary btn-sm" id="follow-btn">Follow</a>
              <a href="#" class="btn btn-secondary btn-sm" id="sponsor-btn">Sponsor</a>
              <a href="#" class="btn btn-secondary btn-sm" id="more-btn">...</a>
              <br>
          </div>

          <div class="container" id="follow-links">
              <a href="" style="color: white"><img src="./images/followers-1.webp" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%">followers</a>
              <a href="" style="color: white"><img src="./images/star-2.png" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%">329</a>
          </div>

          <hr>
          <a href="#" style="color: white"><img src="./images/locations-3.webp" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%" > Tennessee, USA</a>
          <a href="dr.teresavasquez@gmail.com" style="color: white"><img src="./images/email-2.webp" style="background-color: lightgrey; border-radius: 50%" id="pinned-icons"> dr.teresavasquez@gmail.com</a>
          <a href="https://www.drteresavasquez.com/" style="color: white"><img src="./images/link-2.webp" style="background-color: lightgrey; border-radius: 50%" id="pinned-icons"> drteresavasquez.com/</a>
          <a href="https://twitter.com/drteresavasquez" style="color: white"><img src="./images/twitter.webp" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%" > twitter.com/drteresavasquez</a>

         <hr>
          <h7>Highlights</h7>
          <a href="#" style="color: white"><img src="images/Arctic Code Vault.webp" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%" >Arctic Code Vault Contributor</a>
          <a href="#" style="color: white"><img src="images/Star (Filled in).webp" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%" >Github Star</a>
          <a href="#" style="color: white"><img src="images/Star.webp" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%" >Pro</a>

         <hr>
          <h7>Organizations</h7>
          <div class="container" id="organization-profiles">
              <a href="https://github.com/nashville-software-school"><img src="./images/NSS-Logo.png" id="organization-icon-images" alt="NSS-Logo"></a>
              <a href="https://github.com/Urban-Green-Lab"><img src="./images/urban-green-icon.png" id="organization-icon-images" alt="urban-green-icon"></a>
              <a href="https://github.com/Autism-Possisble"><img src="./images/autism-possible.png" id="organization-icon-images" alt="autism-possible"></a>
              <a href="https://github.com/nss-evening-cohort-14"><img src="./images/cohort14.jpeg" id="organization-icon-images" alt="autism-possible"></a>
          </div>

         <hr>
          <h7>Sponsors</h7>
          <div class="container" id="sponsor-profiles">
              <div class="sponsor-top-row">
                  <a href="https://github.com/lindseysatterfield"><img src="./images/lindsey.jpeg" id="sponsor-icon-images" alt="Lindsey Photo"></a>
                  <a href="https://github.com/JuanDavila1101"></a><img src="./images/juan.jpeg" id="sponsor-icon-images" alt="Juan Photo">
                  <a href="https://github.com/thedigitalmenagerie"><img src="./images/honey-rae.jpeg" id="sponsor-icon-images" alt="Honey-Rae Photo"></a>
                  <a href="https://github.com/danicrosby"><img src="./images/dani.jpeg" id="sponsor-icon-images" alt="Dani Photo"></a>
              </div>

              <div class="sponsor-bottom-row">
                  <a href="https://github.com/TrinityChristiana"><img src="./images/trinity.jpeg" id="sponsor-icon-images" alt="Trinity Photo"></a>
                  <a href="https://github.com/ajawashington"><img src="./images/Aja.jpeg" id="sponsor-icon-images" alt="Aja Photo"></a>
                  <a href="https://wonder-woman.fandom.com/wiki/Nubia"><img src="./images/nubia-wonderwoman.jpg" id="sponsor-icon-images" alt="placeholder image"></a>
                  <a href="https://github.com/stevebrownlee"><img src="./images/steve.png" id="sponsor-icon-images" alt="Steve Photo"></a>
              </div>
        </div>
  </div>`;

	PrintToDom('#left-container', developerForm);
};

const PrintNavBar = () => {
	let NavBar = `<section id="nav-container">
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark"><a class="navbar-brand" href="index.html">Overview</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav">
				<li class="nav-item active"><a class="nav-link" href="repo.html">Repositories</a></li>
				<li class="nav-item"><a class="nav-link" href="projects.html">Projects </a></li>
				<li class="nav-item"><a class="nav-link" href="packages.html">Packages</a></li></ul></div></nav>
</section>`;

	PrintToDom('#nav-card-container', NavBar);
};

const PrintFooter = () => {
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
};

const PrintAboutMe = () => {
	let about = `<div class="card text-white bg-dark" style="width: 54rem; font-size: 10px">
	<div class="card-header p-2"><img src="./images/github-cat3.webp" alt="" style="width: 2em">  Dr.T / README.md</div>
	<div class="info-card text-center" ><img src="./images/Dr.T-Pinned-Pic.png"alt="" style="width: 100%"></div>
	<div class="card-body">
			<p class="card-text">
					"I hold a master’s degree in business administration and a doctorate of education with an emphasis in assistive technology and adult education.
					My passion is studying how user and business needs collide into amazing opportunities for designers, developers, and users and how this 
					collaborative relationship can inspire creativity and innovation. Especially for autistic users in the Black community."</p>
	 
	 <div class="container collaborate-container d-flex justify-content-center" style="height: 1.5em"id="collaborate-container">
			<a href="https://github.com/drteresavasquez" style="color: hotpink; height: 1.5em; font-size: 14px"><p>. . : : : Collaborate With Me : : : . </p></a>
	</div>
</div>
</div>`;

	PrintToDom('#pinned-repo-container', about);
};

const PrintPinnedCards = () => {
	let pinnedCards = `  `;

	arrRepositories.forEach((card) => {
		if (card.pinned === true) {
			pinnedCards += `
					<div class="card text-white bg-dark pinned-card" id="${card.repoID}" style="width: 27rem; height: 10em; margin: .2em">
						<div class="card-body" id="overview-card-body">
								<h6 class="card-title" style="font-size: 1em"><img src="${card.repoPinnedIcon}"  style="width: 2em; margin-right: 1em">${card.repoTitle}</h6>
								<p class="overview-card-text">${card.repoDescription}</p>
								<hr>
								<div class="repoCardBottomContainer" style="font-size: .8em">
									<div>
										<img src="${card.repoLanguageIcon}" id="pinned-icons" style="border-radius: 50%">${card.repoLanguage}
										<img src="${card.repoStarIcon}" id="pinned-icons" style="margin-left: 2em">${card.starsCount}
										<img src="${card.repoForkedIcon}" id="pinned-icons" style="margin-left: 2em">${card.reposForked}
									</div>
									<button type="button" class="btn btn-danger btn-sm" style="width: 6em; height: 3em; margin-left: 9em" id="${card.repoID}">Delete</button>
								</div>
						</div>
					</div>`;
		}
	});

	PrintToDom('#pinned-cards', pinnedCards);
};

const PrintRepoCardsWithSearchBar = () => {
	// add search bar to the top of the page

	let repoCardsWithSearchBar = `<div class="sticky"><input id="repoSearchbar" onkeyup="searchRepos" type="text" name="search" placeholder="Find a repository..."
																	<div class="sticky"><button type="button" class="btn btn-secondary btn-sm" id="searchButton">Search</button></div>`;

	arrRepositories.forEach((card) => {
		//Each Repo card is here
		repoCardsWithSearchBar += `
								<div class="card overview-card" id="${card.repoID}">
									<div class="card-body" id="overview-card-body">
										<h6 class="card-title">${card.repoTitle}</h6>
										<p class="overview-card-text">${card.repoDescription}</p>
										<p class="buttons-container">${makeRepoButtons(card)}</p>
										<div class="repoCardBottomContainer"> 
										<div>
											<img src="${card.repoLanguageIcon}" id="repo-icons" style="border-radius: 50%"> ${card.repoLanguage}
											<img src="${card.repoStarIcon}" style="margin-left: 1em" id="repo-icons"> ${card.starsCount}
											<img src="${card.repoForkedIcon}" style="margin-left: 1em" id="repo-icons">   ${card.reposForked} 
											Updated ${card.repoLastUpdate} days ago
											<img src="./images/github-graph.png" style="width: 12em; margin-left: 16em">
										</div>
									</div>
								</div>
							</div>  `;
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
	let projectCardsWithSearchBar = `<div class="sticky"><input id="projectSearchbar" onkeyup="searchProject" class= "my2" type="text" name="search" placeholder="Search projects.."	<div class="dropdown">
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
        <div class="card package-card text-white bg-dark" id="${card.packagesID}"style="flex: 0 0 25%; width: 16.8em; margin: .5em 1em;">
        <div class="card-body" id="overview-card-body">
          <h6 class="card-title">${card.packageType}</h6>
          <p class="overview-card-text">${card.packagesDescription}</p>
          <button type="button" class="btn btn-danger btn-sm" id="${card.packagesID}">Delete</button>
        </div>
      </div>`;
		}
		else {
			packageCards += `
      <div class="card package-card text-white bg-dark" id="${card.packagesID}" style="flex: 0 0 25%; width: 16.8em; margin: .5em 1em;">
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

const newPackageFormCard = (e) => {
	let packageFormCard = `<form class="packages-form pb-4">
  <h3 id="h3-title">Create a new project</h3>
  <div class="form-group col-md-6 mb-1">
    <label for="inputRepositoryName" class="mb-1" id="form-label-name">Project Board</label>
    <input type="text" class="form-control" id="packagesInputRepositoryName" required></div>
    <p id="form-text">Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</p>
    <div class="form-group col-md-9 mb-1">
    <label for="inputDescription" class="mb-1" id="form-description-title">Description (optional)</label>
    <textarea class="form-control" id="packages-textarea" rows="5"></textarea></div>
  <button type="submit" class="btn btn-success mb-1" id="packages-form-btn">Create Project</button>
</form>`;

	PrintToDom('#create-project-container', packageFormCard);
};

// Search for Package
// const packageSearch = () => {
// 	const PackagesSearchBar = document.querySelector('#packagesSearchBar');
// 	let packages = arrPackages;
// 	PackagesSearchBar.addEventListener('keyup', (e) => {
// 		const searchString = e.target.value;
// 		const filteredPackages = packages.filter((package) => {
// 			return package.packageType.includes(searchString);
// 		});
// 	});
// 	console.log(filteredPackages);
// 	console.log(searchString);
// };

// packageSearch();

// Add New Project
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
};

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
		projectLastUpdate
	};
	console.log(projectName);
	arrProjects.push(projectObj);
	PrintProjectsFormWithSearchBar();
};

const sortProjectSortButton = (e) => {
	// const targetId = e.target.id;

	let targetId = document.querySelector('#sort').value;

	if (targetId === 'title') {
		arrProjects.sort(
			(a, b) => (a.projectName.toUpperCase() < b.projectName.toUpperCase() ? -1 : 1)
		);
	}
	else if (targetId === 'author') {
		arrProjects.sort(
			(a, b) =>
				a.projectDescription.toUpperCase() < b.projectDescription.toUpperCase() ? -1 : 1
		);
	}
	else if (targetId === 'newest') {
		arrProjects.sort(
			(a, b) => (a.projectID.toUpperCase() < b.projectID.toUpperCase() ? -1 : 1)
		);
	}

	PrintProjectsFormWithSearchBar();
};

const searchProjectsSearchBar = (e) => {
	const input = document.querySelector('#projectSearchbar').value;
	input = input.toLowerCase();
	let x = document.querySelector(`${card.projectName}`).value;

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = 'none';
		}
		else {
			x[i].style.dispay = `${card.projectName}`;
		}
	}
};

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

const deleteRepo = (e) => {
	const targetType = e.target.type;
	const targetIdNumber = parseInt(e.target.id);

	if (targetType === 'button') {
		let indexOfRepos = arrRepositories.findIndex((repo) => repo.repoID === targetIdNumber);
		if (indexOfRepos !== -1) {
			arrRepositories.splice(indexOfRepos, 1);
		}
	}
	PrintPinnedCards();
};

const ButtonEvents = () => {
	let x = location.pathname;

	if (x === '/projects.html') {
		document
			.querySelector('#projects-top-row')
			.addEventListener('click', sortProjectSortButton);
		document
			.querySelector('#projects-form-btn')
			.addEventListener('click', getCreateNewProjectInfo);
		document.querySelector('#projects-top-row').addEventListener('click', deleteProject);
		document
			.querySelector('#projectSearchbar')
			.addEventListener('keyup', searchProjectsSearchBar);
	}
	else if (x === '/packages.html') {
		document.querySelector('#packages-form-btn').addEventListener('click', getPackageFormInfo);
		document.querySelector('#packages-card-container').addEventListener('click', deletePackage);
	}
	else if (x === '/' || x === '/index.html') {
		document.querySelector('.repo-top-row').addEventListener('click', deleteRepo);
	}
};

const init = () => {
	let x = location.pathname;

	if (x === '/' || x === '/index.html') {
		PrintNavBar();
		PrintProfile();
		PrintAboutMe();
		PrintPinnedCards();
		PrintFooter();
	}
	else if (x === '/repo.html') {
		PrintNavBar();
		PrintProfile();
		PrintRepoCardsWithSearchBar();
		PrintFooter();
	}
	else if (x === '/projects.html') {
		PrintNavBar();
		PrintProfile();
		PrintFooter();
		PrintProjectsFormWithSearchBar();
		newProjectFormCard();
	}
	else if (x === '/packages.html') {
		PrintNavBar();
		PrintProfile();
		newPackageFormCard();
		PrintPackagesCards();
		PrintFooter();
	}

	ButtonEvents();
};

init();
