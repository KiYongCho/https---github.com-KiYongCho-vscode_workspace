$(e => {

    $('#btn').on('click', e => {

        const xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = e => {
            if (xhr.readyState==4 && xhr.status==200) {
                const xmldoc = xhr.responseXML;
                const persons = xmldoc.getElementsByTagName('persons');
                let html = '<ul>';
                for (let person of persons[0].children) {
                    console.log(person);                    
                    html += `<li>
                        PID:${person.getAttribute('pid')},
                        이름:${person.getElementsByTagName('name')[0].textContent}, 
                        나이:${person.getElementsByTagName('age')[0].textContent}, 
                        주소:${person.getElementsByTagName('address')[0].textContent}
                    </li>`;
                }
                html += '</ul>';
                $('#result').html(html);
            }
        };

        xhr.open('GET', 'persons.xml', true);
        xhr.send();

    });

});