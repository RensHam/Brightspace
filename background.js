function cleanPage(e) {
    let header = document.getElementsByTagName('header')[0];
    header.style = 'display: none';
    document.getElementById('restoreHeader').style = '';
    let content = document.getElementById('ContentView').parentNode;
    let childs = content.childNodes;
    childs[childs.length - 1].style = 'display: none';
    let quiz = document.getElementsByTagName('iframe')[0];
    quiz.height = quiz.contentWindow.document.body.scrollHeight + 'px';
    quiz.style = 'height: ' + quiz.height + ' !important';
    quiz.scrolling = 'no';
    document.body.style = '';
}

function toggleHeader(e) {
    let header = document.getElementsByTagName('header')[0];
    if (header.style.display === 'none') {
        header.style = '';
        document.getElementById('restoreHeader').style = 'display: none';
    } else {
        header.style = 'display: none';
        document.getElementById('restoreHeader').style = '';
    }
}

let listMenu = document.getElementsByTagName('header')[0].querySelector('div[role="list"]');
let button =  document.createElement('div');
button.classList.add('d2l-navigation-s-item');
button.onclick = cleanPage;
button.innerText = 'Quiz layout';
listMenu.appendChild(button);

let toggleHeaderButttonInHeader =  document.createElement('div');
toggleHeaderButttonInHeader.innerText = 'Hide menu';
toggleHeaderButttonInHeader.onclick = toggleHeader;
listMenu.appendChild(toggleHeaderButttonInHeader);

let toggleHeaderButtton =  document.createElement('button');
toggleHeaderButtton.innerText = 'Show menu';
toggleHeaderButtton.onclick = toggleHeader;
toggleHeaderButtton.id = 'restoreHeader';
toggleHeaderButtton.style = 'display: none';
document.body.insertBefore(toggleHeaderButtton,document.body.firstChild);