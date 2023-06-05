
export function suffixImg(s) {
    return $U.getBasePath() + `/attach/f-${type(s)}.png`
}

function type(s) {
    let type = 'unknow'
    if (s == '') {
        type = 'unknow'
    } else if (s == '.jpg' || s == '.jpeg') {
        type = 'jpg'
    } else if (s == '.png') {
        type = 'png'
    } else if (s == '.gif') {
        type = 'gif'
    } else if (s == '.svg') {
        type = 'svg'
    } else if (s == '.doc' || s == '.docx' || s == '.rtf') {
        type = 'doc'
    } else if (s == '.xls' || s == '.xlsx') {
        type = 'xls'
    } else if (s == '.ppt' || s == '.pptx') {
        type = 'ppt'
    } else if (s == '.pdf') {
        type = 'pdf'
    } else if (s == '.txt') {
        type = 'txt'
    } else if (s == '.apk') {
        type = 'apk'
    } else if (s == '.ai') {
        type = 'ai'
    } else if (s == '.avi') {
        type = 'avi'
    } else if (s == '.eps') {
        type = 'eps'
    } else if (s == '.html') {
        type = 'html'
    } else if (s == '.mp3') {
        type = 'mp3'
    } else if (s == '.mp4') {
        type = 'mp4'
    } else if (s == '.psd') {
        type = 'psd'
    } else if (s == '.ttf') {
        type = 'ttf'
    } else if (s == '.zip') {
        type = 'zip'
    }
    return type
}