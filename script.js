const leftAlignBtn = document.getElementById('left'),
    justifyAlignBtn = document.getElementById('justify'),
    whiteThemeBtn = document.getElementById('white-theme'),
    sepiaThemeBtn = document.getElementById('sepia-theme'),
    blackThemeBtn = document.getElementById('black-theme'),
    paragraphs = document.getElementsByClassName('ordinary-text'),
    contentBlock = document.getElementById('content'),
    mainBlock = document.getElementById('main'),
    settingsBlock = document.getElementById('settings'),
    mainBackground = document.getElementById('all-main-wrapper'),
    h2 = document.querySelector("#main > h2"),
    links = document.getElementsByClassName('content-link'),
    smallerBtn = document.getElementById('smaller'),
    biggerBtn = document.getElementById('bigger'),
    arialFont = document.getElementById('Arial'),
    verdanaFont = document.getElementById('Verdana'),
    georgiaFont = document.getElementById('Georgia'),
    contentTitle = document.querySelector("#content-title"),
    settingsTitle = document.querySelector("#settings > h3"),
    settingBlock = document.querySelector("#settings-block"),
    defaultFontSize = 16;

let newFontSize = defaultFontSize,
    whiteTheme = true,
    sepiaTheme = false,
    blackTheme = false;





leftAlignBtn.addEventListener('click', leftAlign);
justifyAlignBtn.addEventListener('click', justifyAlign);
whiteThemeBtn.addEventListener('click', makeWhiteTheme);
sepiaThemeBtn.addEventListener('click', makeSepiaTheme);
blackThemeBtn.addEventListener('click', makeBlackTheme);
biggerBtn.addEventListener('click', increaseFont);
smallerBtn.addEventListener('click', reduceFont);
arialFont.addEventListener('click', makeArialFont);
verdanaFont.addEventListener('click', makeVerdanaFont);
georgiaFont.addEventListener('click', makeGeorgiaFont);


contentTitle.addEventListener('click', function() {
    contentBlock.classList.toggle('show');
    contentTitle.classList.toggle('fixed-title');
});

settingsTitle.addEventListener('click', function() {
    settingBlock.classList.toggle('show');
    settingsTitle.classList.toggle('fixed-title');
});



for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('mouseover', function() {
        link.style.color = 'white';
    })

}

for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('mouseout', function() {
        if (whiteTheme) {
            link.style.color = 'black';
        } else if (sepiaTheme) {
            link.style.color = '#6e422f';
        } else if (blackTheme) {
            link.style.color = 'white';
        }

    })

}


function leftAlign(argument) {
    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];
        paragraph.style.textAlign = 'left';

    }
}

function justifyAlign() {
    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];
        paragraph.style.textAlign = 'justify';

    }
}

function makeWhiteTheme() {
    h2.style.color = 'black';
    mainBackground.style.backgroundColor = 'white';
    mainBackground.style.color = 'black';
    justifyAlignBtn.style.fill = 'black';
    leftAlignBtn.style.fill = 'black';
    smallerBtn.style.color = 'black';
    biggerBtn.style.color = 'black';
    arialFont.style.color = 'black';
    verdanaFont.style.color = 'black';
    georgiaFont.style.color = 'black';



    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.style.color = 'black';

    }

    whiteTheme = true;
    sepiaTheme = false;
    blackTheme = false;


}

function makeSepiaTheme() {
    h2.style.color = '#6e422f';
    mainBackground.style.backgroundColor = '#f5efdd';
    mainBackground.style.color = '#6e422f';

    justifyAlignBtn.style.fill = 'black';
    leftAlignBtn.style.fill = 'black';
    smallerBtn.style.color = 'black';
    biggerBtn.style.color = 'black';
    arialFont.style.color = '#6e422f';
    verdanaFont.style.color = '#6e422f';
    georgiaFont.style.color = '#6e422f';

    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.style.color = '#6e422f';

    }

    whiteTheme = false;
    sepiaTheme = true;
    blackTheme = false;
}

function makeBlackTheme() {
    h2.style.color = 'white';
    mainBackground.style.backgroundColor = 'black';
    mainBackground.style.color = 'white';
    justifyAlignBtn.style.fill = '#9a938d';
    leftAlignBtn.style.fill = '#9a938d';
    blackThemeBtn.style.borderColor = 'white';
    smallerBtn.style.color = 'white';
    biggerBtn.style.color = 'white';
    arialFont.style.color = 'white';
    verdanaFont.style.color = 'white';
    georgiaFont.style.color = 'white';


    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.style.color = 'white';

    }

    whiteTheme = false;
    sepiaTheme = false;
    blackTheme = true;

}

function increaseFont() {
    newFontSize += 2;
    newFontSize = newFontSize.toString();
    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];

        paragraph.style.fontSize = newFontSize + 'px';

    }
    newFontSize = Number(newFontSize);
}

function reduceFont() {
    newFontSize -= 2;
    newFontSize = newFontSize.toString();
    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];

        paragraph.style.fontSize = newFontSize + 'px';

    }
    newFontSize = Number(newFontSize);
}


function makeArialFont() {
    h2.style.fontFamily = 'Arial, Helvetica, sans-serif';

    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];

        paragraph.style.fontFamily = 'Arial, Helvetica, sans-serif';

    }

}

function makeVerdanaFont() {
    h2.style.fontFamily = '"Verdana Regular", sans-serif';

    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];

        paragraph.style.fontFamily = '"Verdana Regular", sans-serif';

    }

}

function makeGeorgiaFont() {
    h2.style.fontFamily = '"Georgia Regular", serif';

    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];

        paragraph.style.fontFamily = '"Georgia Regular", serif';

    }

}