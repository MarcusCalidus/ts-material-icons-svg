items = document.getElementsByClassName('icon-image-preview');
toDownload = [];
for (let item of items) {
toDownload.push('wget https://material.io/tools/icons/static/icons/' + item.classList[0] + '-24px.svg');
} 
copy(toDownload.join('\n'));
