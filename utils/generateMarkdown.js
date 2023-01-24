// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	const badge = "";
	switch (license) {
		case "Apache":
			badge = "Apache_2.0-blue";
			break;
		case "Boost":
			badge = "Boost_1.0-lightblue";
			break;
		case "BSD":
			badge = "BSD_3--Clause-blue";
			break;
		case "Creative Commons Zero v1.0 Universal":
			badge = "CC0_1.0-lightgrey";
			break;
		case "Creative Commons Attribution 4.0 International":
			badge = "CC_BY_4.0-lightgrey";
			break;
		case "Creative Commons Attribution Share Alike 4.0 International":
			badge = "CC_BY--SA_4.0-lightgrey";
			break;
		case "Eclipse Public License 2.0":
			badge = "EPL_1.0-red";
			break;
		case "GNU General Public License v3.0":
			badge = "GPLv3-blue";
			break;
		case "ISC":
			badge = "ISC-blue";
			break;
		case "MIT":
			badge = "MIT-yellow";
			break;
		case "Mozilla":
			badge = "MPL_2.0-brightgreen";
			break;
		case "Open Data Commons (ODbL)":
			badge = "ODbL-brightgreen";
			break;
		case "SIL Open Font License 1.1":
			badge = "OFL_1.1-lightgreen";
			break;
		case "Unlicense":
			badge = "Unlicense-blue";
			break;
		case "Zlib":
			badge = "Zlib-lightgrey";
			break;
		default:
			return "";
	}
	return `[![License](https://img.shields.io/badge/License-${badge}.svg](https://choosealicense.com/licenses/${renderLicenseLink(
		license
	)}/)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	const link = "";
	switch (license) {
		case "Apache":
			link = "apache-2.0";
			break;
		case "Boost":
			link = "bsl-1.0";
			break;
		case "BSD":
			link = "bsd-3-clause";
			break;
		case "Creative Commons Zero v1.0 Universal":
			link = "cc0-1.0";
			break;
		case "Creative Commons Attribution 4.0 International":
			link = "cc-by-4.0";
			break;
		case "Creative Commons Attribution Share Alike 4.0 International":
			link = "cc-by-sa-4.0";
			break;
		case "Eclipse Public License 2.0":
			link = "epl-2.0";
			break;
		case "GNU General Public License v3.0":
			link = "gpl-3.0";
			break;
		case "ISC":
			link = "isc";
			break;
		case "MIT":
			link = "mit";
			break;
		case "Mozilla":
			link = "mpl-2.0";
			break;
		case "Open Data Commons (ODbL)":
			link = "odbl-1.0";
			break;
		case "SIL Open Font License 1.1":
			link = "ofl-1.1";
			break;
		case "Unlicense":
			link = "unlicense";
			break;
		case "Zlib":
			link = "zlib";
			break;
		default:
			link = "";
			break;
	}
	return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license != "None") {
		return `[${license}](https://choosealicense.com/licenses/${renderLicenseLink(license)}/)`;
	} else {
		return "";
	}
}

function renderUsageImage(imagePath) {
	if (imagePath != null) {
		return `[usage image](${imagePath})`;
	} else {
		return "";
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}

## Description

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

${renderUsageImage(data.usageImage)}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

## Questions
[Checkout my GitHub.](https://github.com/${data.github})
Alternatively, you can email me at [${data.email}](mailto: ${data.email})

`;
}

module.exports = generateMarkdown;
