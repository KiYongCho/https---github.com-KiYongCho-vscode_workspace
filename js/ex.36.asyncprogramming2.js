// JSON서버를 활용한 REST 실습 (jQuery로 구현)

// 파일
// 1. ex.36.asyncprogramming2.html
// 2. ex.36.asyncprogramming2.js
// 3. todos.json
//     {
//          "todos": [
//               {"id":1, "todo":"할일1", "completed":true},
//               {"id":2, "todo":"할일2", "completed":false}
//          ]
//     }

// (필수 구현)
// 1. 목록버튼 클릭시 할일 목록을 테이블에 표시
// 2. 번호를 입력하고 보기버튼 클릭시 번호에 해당하는 할일을 테이블에 표시
// 3. 할일과 완료여부를 등록하고 등록버튼 클릭시 목록에 할일을 등록
// 4. 할일과 완료여부를 수정하고 수정버튼 클릭시 할일정보를 수정
// 5. 삭제버튼 클릭시 할일정보를 삭제

// (선택 구현)
// 1. localStorage 활용
// 2. 할일 검색
// 3. 완료/미완료 검색

$(e => {

    const todosUrl = 'http://localhost:7777/todos';

    const todoApp = {};

    todoApp.init = () => {

        $.ajax({
            url: todosUrl
        }).done(response => {
            localStorage.setItem('todos', JSON.stringify(response));
            todoApp.list();
        });    

        $('#listBtn').on('click', e => { todoApp.list(e); });
        $('#cpBtn').on('click', e => { todoApp.list(e); });
        $('#ncpBtn').on('click', e => { todoApp.list(e); });
        $('#searchBtn').on('click', e => { todoApp.list(e); });    

    }; // todoApp.init

    todoApp.list = e => {
        let todos = JSON.parse(localStorage.getItem('todos'));
        if (e) {
            switch (e.target.id) {
                case 'cpBtn': todos = todos.filter(todo => todo.completed); break;
                case 'ncpBtn': todos = todos.filter(todo => !todo.completed); break;
                case 'searchBtn': todos = todos.filter(todo => {
                    return todo.todo.indexOf($('#keyword').val()) > -1;
                });
            }        
        }
        todoApp.render(todos);
    };

    todoApp.write = e => {
        
        if (!$('#id').val() || !$('#todo').val()) {
            alert('아이디와 할일을 입력해 주세요!');
            return false;
        }

        let todos = JSON.parse(localStorage.getItem('todos'));
        
        let isDuplicated = false;
        todos.forEach(todo => {
            if (todo.id == $('#id').val()) {
                alert('중복된 아이디입니다!');
                isDuplicated = true;
            }
        });
        if (isDuplicated) return false;

        $.ajax({
            url: todosUrl,
            type: 'POST',
            data: JSON.stringify({
                id: $('#id').val(),
                todo: $('#todo').val(),
                completed: false
            }),
            contentType: 'application/json; charset=utf-8'
        }).done(response => {
            todoApp.list();
        }); 
    };

    todoApp.modify = e => {
        if (!window.confirm('수정하시겠습니까?')) return;
        const id = e.target.dataset.id;
        $.ajax({
            url: `${todosUrl}/${id}`,
            type: 'PUT',
            data: JSON.stringify({
                todo: $('#txt'+id).val(),
                completed: $('#sel'+id).val()==='true'
            }),
            contentType: 'application/json; charset=utf-8'
        }).done(response => {
            todoApp.list();
        }); 
    };

    todoApp.delete = e => {
        if (!window.confirm('삭제하시겠습니까?')) return;
        const id = e.target.dataset.id;
        $.ajax({
            url: `${todosUrl}/${id}`,
            type: 'DELETE'
        }).done(response => {
            todoApp.list();
        }); 
    };

    todoApp.render = todos => {
        $('body table').remove();
        let table = $('<table></table>');
        table.append(`
            <tr>
                <td><input id='id' type='text' placeholder='id'></td>
                <td><input id='todo' type='text' placeholder='todo'></td>
                <td><button id='writeBtn'>등록</button>
            </tr>
        `);
        for (let todo of todos) {
            let tr = $('<tr></tr>');
            tr.append(`
                <td>${todo.id}</td>
                <td><input id='txt${todo.id}' type='text' value='${todo.todo}'></td>
                <td>
                    <select id='sel${todo.id}'>
                        <option value='true' ${todo.completed ? 'selected' : ''}>완료</option>
                        <option value='false' ${!todo.completed ? 'selected' : ''}>미완료</option>
                    </select>
                </td>
                <td><button class='modifyBtn' data-id='${todo.id}'>수정</button></td>
                <td><button class='deleteBtn' data-id='${todo.id}'>삭제</button></td>`
            );
            table.append(tr);
        }
        $('body').append(table);

        $('#writeBtn').on('click', e => { todoApp.write(e); });           
        $('.modifyBtn').on('click', e => { todoApp.modify(e); });    
        $('.deleteBtn').on('click', e => { todoApp.delete(e); });             

    };

    todoApp.init();

});