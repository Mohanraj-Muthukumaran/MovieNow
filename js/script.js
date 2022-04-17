const NOW_SHOWING = 'nowshowing';
const COMING_SOON = 'comingsoon';
const TABS = [NOW_SHOWING, COMING_SOON];

const ALL = 'All';
const TAMIL = 'Tamil';
const ENGLISH = 'English';
const HINDI = 'Hindi';
const OTHERS = 'Others';

const LANGUAGES = [ALL, TAMIL, ENGLISH, HINDI, OTHERS];

const NOW_SHOWING_MOVIES = [
    {
        'title': 'RRR',
        'type': '2D',
        'language': TAMIL,
        'certificate': 'U/A',
        'genre': 'Historical Action Drama',
        'duration': '3 hrs 07 mins',
        'actors': ['Jr. NTR', 'Alia Bhatt', 'Daisy' ,'EdgarJones', 'Nithya Menen', 'Ram Charan', 'Teja'],
        'director': 'SS Rajamouli',
        'Music': ['M. M. Keeravani'],
        'Synopsis': "RRR is a fictional story about India's freedom fighters, Alluri Sitaramaraju and Komaram Bheem who fought against the British Raj and Nizam of Hyderabad respectively.",
        'imageURL': './assets/images/movies/rrr.webp',
        'imagealt': 'RRR logo starring Jr. NTR, Ram charan, Alia Bhat in the background'
    },
    {
        'title': 'Jersey',
        'type': '2D',
        'language': HINDI,
        'certificate': 'U/A',
        'genre': 'Sports Drama',
        'duration': '2 hrs 54 mins',
        'actors': ['Shahid Kapoor', 'Mrunal Thakur'],
        'director': 'Guatham Thinnanoori',
        'Music': ['Sachet Parampara', 'Anirudh Ravichandhar'],
        'Synopsis': "A sports drama film written and directed by Gowtam Tinnanur, starring Shahid Kapoor in the lead role.",
        'imageURL': './assets/images/movies/jersey.webp',
        'imagealt': 'Jersey logo starring shahid kapoor with a stadium in the background'
    },
    {
        'title': 'Selfie',
        'type': '2D',
        'language': TAMIL,
        'certificate': 'U/A',
        'genre': 'Action',
        'duration': '2 hrs 08 mins',
        'actors': ['G. V. Prakash Kumar', 'Varsha Bollamma', 'Guatham Vasudev Menon'],
        'director': 'Mathi Maran',
        'Music': ['G. V. Prakash Kumar'],
        'Synopsis': "An action film directed by Mathi Maran, starring G V Prakash Kumar and Gautham Menon in the lead roles.",
        'imageURL': './assets/images/movies/selfie.webp',
        'imagealt': 'Selfie logo starring G V Prakashkumar, Gautham Vasudev Menon in the background'
    },
    {
        'title': 'The Kashmir Files: Genocide',
        'type': '2D',
        'language': ENGLISH,
        'certificate': 'A',
        'genre': 'HISTORICAL THRILLER DRAMA',
        'duration': '2 hrs 50 mins',
        'actors': ['Anupam Kher', 'Mithun Chakraborty', 'Darshan Kumaar', 'Pallavi Joshi'],
        'director': 'Vivek Agnihotri',
        'Music': ['-'],
        'Synopsis': "The Kashmir Files' is a story, based on video interviews of the first generation victims of the Genocide of Kashmiri Pandit Community In 1990.",
        'imageURL': './assets/images/movies/kashmirfiles.webp',
        'imagealt': 'Kashmir files logo starring the movie crew in the background'
    } 
];

const COMING_SOON_MOVIES = [
    {
        'title': 'KGF2',
        'type': '2D',
        'language': TAMIL,
        'certificate': 'U/A',
        'genre': 'Action Drama',
        'duration': '3 hrs 07 mins',
        'actors': ['Yash', 'Srinidhi Shetty'],
        'director': 'Prasanth Neel',
        'Music': ['Ravi Basrur'],
        'Synopsis': "An upcoming action drama film directed by Prashanth Neel, starring Yash, Sanjay Dutt, Srinidhi Shetty in the lead roles. A drama film directed by Prashanth Neel.",
        'imageURL': './assets/images/movies/kgf2.webp',
        'imagealt': 'KGF 2 logo starring yash in a stylish look in the background'
    },
    {
        'title': 'King Richard',
        'type': '2D',
        'language': ENGLISH,
        'certificate': 'U/A',
        'genre': 'Biography Sports Drama',
        'duration': '2 hrs 25 mins',
        'actors': ['Will Smith', 'Jon Bernthal', 'Tony Goldwyn', 'Aunjanue Ellis'],
        'director': 'Reinaldo Marcus Green',
        'Music': ['Kris Bowers'],
        'Synopsis': "Based on a true story, King Richard centers on Richard Williams, a hardscrabble but iron-willed father of Venus and Serena Williams who had a plan to make his daughters the greatest tennis players in the world.",
        'imageURL': './assets/images/movies/kingrichard.webp',
        'imagealt': 'King Richard logo starring Will Smith with two kids in the background'
    }
];

const switchTab = (button ,tabIndex) => {
    let i, tabContent, tablinks; 
    if(TABS[tabIndex]){
        tabContent = document.getElementsByClassName('tabcontent');
        for(i=0; i<tabContent.length; i++){
            tabContent[i].style.display = 'none';
        }

        tablinks = document.getElementsByClassName('tablink');
        for(i=0; i<tablinks.length; i++){
            tablinks[i].removeAttribute('id');
        }
        document.getElementById(TABS[tabIndex]).style.display = "block";
        button.id = 'active';
    }
}

// default tab
switchTab(document.getElementById('active'), 0);