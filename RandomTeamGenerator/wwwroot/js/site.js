document.getElementById('BonsaiNamesButton').addEventListener('click', function(){
    
    fetch('/files/bonsai.txt')
        .then(response => response.text())
        .then(data => {
            const bonsaiNames = data.split('\n').map(name => name.trim()).filter(Boolean);;
            const teamList = document.getElementById('teamList');
            teamList.innerHTML = "";

            bonsaiNames.forEach((name, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `Team ${index + 1}: ${name}`;
                teamListElement.appendChild(listItem);
            });
        });
});