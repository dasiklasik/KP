/*Объявляем константы, нельзя менять*/
const leftAlignBtn = document.getElementById('left') /*левое выравнивание */ ,
    justifyAlignBtn = document.getElementById('justify') /*правое выравнивание */ ,
    whiteThemeBtn = document.getElementById('white-theme') /*кнопка белой темы */ ,
    sepiaThemeBtn = document.getElementById('sepia-theme') /*кнопка сепия темы */ ,
    blackThemeBtn = document.getElementById('black-theme') /*кнопка черной темы */ ,
    paragraphs = document.getElementsByClassName('ordinary-text') /*все абзацы */ ,
    contentBlock = document.getElementById('content') /*блок с содержанием */ ,
    settingsBlock = document.getElementById('settings') /*блок с настройками */ ,
    mainBackground = document.getElementById('all-main-wrapper') /*фон стр кроме шапки и подвала */ ,
    h2 = document.querySelector("#main > h2") /*заголовок 2 уровня */ ,
    h3 = document.querySelectorAll("#main > h3") /*заголовок 2 уровня */ ,
    h4 = document.querySelector("#main > h4") /*заголовок 2 уровня */ ,
    h5 = document.querySelectorAll("#main > h5") /*заголовок 2 уровня */ ,
    links = document.getElementsByClassName('content-link') /*пункты содержания */ ,
    smallerBtn = document.getElementById('smaller') /*кнопка уменьшения размера шрифта */ ,
    biggerBtn = document.getElementById('bigger') /*кнопка увеличения размера шрифта */ ,
    arialFont = document.getElementById('Arial') /*шрифт Arial */ ,
    verdanaFont = document.getElementById('Verdana') /*шрифт Verdana */ ,
    georgiaFont = document.getElementById('Georgia') /*шрифт Georgia */ ,
    lists = document.querySelectorAll('#main > li') /*списки в тексте */ ,
    activeLink = document.querySelector('#active > a') /*активный пункт меню */ ,
    defaultFontSize = 16 /*размер шрифта по умолчанию*/ ;

/*объявляем переменные, можно менять*/
let newFontSize = defaultFontSize /*сюда будет задаваться новый размер шрифта*/ ,
    whiteTheme = true /*3 переменные, показывающие, какая сейчас тема активна*/ ,
    sepiaTheme = false,
    blackTheme = false;




/*навешиваем обработчик события, т. е. говорим, что при клике на объект что-то происходит*/
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




/*тоже обработчик события, только теперь при наведении мыши. При наведении мыши пункты меню содержания становятся белыми*/
for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('mouseover', function() {
        link.style.color = 'white';
    })

}

/*тоже обработчик события, только теперь в случае, когда мышь больше не наведена на объект. В зависимости от темы, которая сейчас активна, цвет пунктов меню будет разный*/
for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('mouseout', function() {
        if (whiteTheme) {
            link.style.color = 'black';
            activeLink.style.color = 'white';
        } else if (sepiaTheme) {
            link.style.color = '#6e422f';
            activeLink.style.color = 'white';
        } else if (blackTheme) {
            link.style.color = 'white';
            activeLink.style.color = 'white';
        }

    })

}

/*функция левого выравнивания*/
function leftAlign() {
    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];
        paragraph.style.textAlign = 'left';

    }
}

/*функция выравнивания по ширине */
function justifyAlign() {
    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];
        paragraph.style.textAlign = 'justify';

    }
}

/*функция белой темы*/
function makeWhiteTheme() {
    h2.style.color = 'black';
    h4.style.color = 'black';
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

    for (let i = 0; i < lists.length; i++) {
        let list = lists[i];
        list.style.color = 'black';

    }

    for (let i = 0; i < h3.length; i++) {
        let h3One = h3[i];
        h3One.style.color = 'black';

    }

    for (let i = 0; i < h5.length; i++) {
        let h5One = h5[i];
        h5One.style.color = 'black';

    }
    activeLink.style.color = 'white';


    whiteTheme = true;
    sepiaTheme = false;
    blackTheme = false;

}

/*функция сепия темы*/
function makeSepiaTheme() {
    h2.style.color = '#6e422f';
    h4.style.color = '#6e422f';
    mainBackground.style.backgroundColor = '#f5efdd';
    mainBackground.style.color = '#6e422f';

    justifyAlignBtn.style.fill = 'black';
    leftAlignBtn.style.fill = 'black';
    smallerBtn.style.color = 'black';
    biggerBtn.style.color = 'black';
    arialFont.style.color = '#6e422f';
    verdanaFont.style.color = '#6e422f';
    georgiaFont.style.color = '#6e422f';
    activeLink.style.color = 'white';


    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.style.color = '#6e422f';

    }

    for (let i = 0; i < lists.length; i++) {
        let list = lists[i];
        list.style.color = '#6e422f';

    }

    for (let i = 0; i < h3.length; i++) {
        let h3One = h3[i];
        h3One.style.color = '#6e422f';

    }

    for (let i = 0; i < h5.length; i++) {
        let h5One = h5[i];
        h5One.style.color = '#6e422f';

    }
    activeLink.style.color = 'white';

    whiteTheme = false;
    sepiaTheme = true;
    blackTheme = false;
}

/*функция черной темы*/
function makeBlackTheme() {
    h2.style.color = 'white';
    h4.style.color = 'white';
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
    activeLink.style.color = 'white';



    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.style.color = 'white';

    }

    for (let i = 0; i < lists.length; i++) {
        let list = lists[i];
        list.style.color = 'white';

    }

    for (let i = 0; i < h3.length; i++) {
        let h3One = h3[i];
        h3One.style.color = 'white';

    }

    for (let i = 0; i < h5.length; i++) {
        let h5One = h5[i];
        h5One.style.color = 'white';

    }


    whiteTheme = false;
    sepiaTheme = false;
    blackTheme = true;

}

/*функция увеличения шрифта*/
function increaseFont() {
    newFontSize += 2;
    newFontSize = newFontSize.toString();
    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];

        paragraph.style.fontSize = newFontSize + 'px';

    }



    for (let i = 0; i < h5.length; i++) {
        let h5One = h5[i];
        h5One.style.fontSize = newFontSize + 'px';

    }

    newFontSize = Number(newFontSize);
}

/*функция уменьшения шрифта*/
function reduceFont() {
    newFontSize -= 2;
    newFontSize = newFontSize.toString();
    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];

        paragraph.style.fontSize = newFontSize + 'px';

    }



    for (let i = 0; i < h5.length; i++) {
        let h5One = h5[i];
        h5One.style.fontSize = newFontSize + 'px';

    }
    newFontSize = Number(newFontSize);
}

/*функция изменения шрифта*/
function makeArialFont() {
    h2.style.fontFamily = 'Arial, Helvetica, sans-serif';

    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];

        paragraph.style.fontFamily = 'Arial, Helvetica, sans-serif';

    }

}

/*функция изменения шрифта*/
function makeVerdanaFont() {
    h2.style.fontFamily = '"Verdana Regular", sans-serif';

    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];

        paragraph.style.fontFamily = '"Verdana Regular", sans-serif';

    }

}

/*функция изменения шрифта*/
function makeGeorgiaFont() {
    h2.style.fontFamily = '"Georgia Regular", serif';

    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];

        paragraph.style.fontFamily = '"Georgia Regular", serif';

    }

}