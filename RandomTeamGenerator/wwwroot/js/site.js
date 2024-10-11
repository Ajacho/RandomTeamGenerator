document.getElementById('BonsaiNamesButton').addEventListener('click', function(){
    
    fetch('/files/bonsai.txt')
        .then(response => response.text())
        .then(bonsaiText => {

            console.log('Bonsai Names Text:', bonsaiText);
            
            var bonsaiNames = bonsaiText.split('\n').map(name => name.trim());

            console.log('Bonsai Names List:', bonsaiText);

            var teamListHead = document.querySelectorAll('.team-heading');

            console.log('Team List Headings:', teamListHead);

            teamListHead.forEach((heading, index) => {
                if (index < bonsaiNames.length){
                    heading.textContent = bonsaiNames[index];
                }
                
            });
        })
        .catch(error => console.error('Error fetching bonsai names:', error));
});