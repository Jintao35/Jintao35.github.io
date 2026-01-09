function renderDongmanList(dataList, containerId) {
    const container = document.getElementById(containerId);
    let colIndex = 0;
    let rowIdIndex = 0;
    let div1 = document.createElement('div');
    div1.id = 'row0';
    dataList.forEach(itemData => {
        let name = itemData['name']
        let webUrl = itemData['url']
        if(colIndex==6){
            rowIdIndex++;
            colIndex=0;
            container.appendChild(div1);
            div1 = document.createElement('div');
            div1.id = 'row'+rowIdIndex;
            if(rowIdIndex>14){
                div1.style.display = "none";
            }
        }
        colIndex++;
        div1.className = 'row mar-top-20';
        const div2 = document.createElement('div');
        div2.className = 'col-md-2';
        const a = document.createElement('a');
        a.target = '_blank';
        a.href = webUrl;
        if(name.length>18){
            name = name.substring(0,9)+'...';
        }
        var textNode = document.createTextNode(name);
        a.appendChild(textNode);
        div2.appendChild(a);
        div1.appendChild(div2);
        if((rowIdIndex*6+colIndex)==dataList.length){
            container.appendChild(div1);
        }
    });
}

function loadMenu() {
    fetch('./theme/js/dianshiju.json')
        .then(response => response.json())
        .then(data => {
            renderDongmanList(data['data']['list2024'], 'dianshiju2024');
            renderDongmanList(data['data']['list2025'], 'dianshiju2025');
        })
        .catch(error => console.error('Error:', error));
}
loadMenu();