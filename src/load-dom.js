const domThings = (() => {

    const newProjectInput = (() => {

        const input = document.createElement('input');
        const button = document.createElement('button');
    
        const load = () => {
    
            input.placeholder = 'New Project';
            input.id = 'project-input';
            button.textContent = '+';
            button.id = 'new-project';
    
            document.querySelector('main').append( input, button );
    
        }
    
        return { input, button, load };
    
    })();

    function newProject (title) {

        const container = document.createElement('div');
        const header = document.createElement('h3');
        const deleteBtn = document.createElement('button');
        const addTodoBtn = document.createElement('button');
        const navBtn = document.createElement('button');
    
        header.textContent = title;
        deleteBtn.textContent = 'X';
        addTodoBtn.textContent = 'New Task';
        navBtn.textContent = title;
    
        container.classList.add('project');
        deleteBtn.classList.add('delete-project');
        addTodoBtn.classList.add('new-todo');
    
        container.append( header, deleteBtn, addTodoBtn );
        document.querySelector('main').appendChild(container);
        document.querySelector('nav').appendChild(navBtn);
    
        return { container, deleteBtn, addTodoBtn, navBtn };
    
    }

    function todoInput () {

        const container = document.createElement('div');
        const title = document.createElement('input');
        const date = document.createElement('input');
        const description = document.createElement('input');
        const priority = (() => {

            const notImportant = document.createElement('input');
            const important = document.createElement('input');
            const veryImportant = document.createElement('input');
            notImportant.setAttribute('type', 'radio');
            notImportant.setAttribute('name', 'priority');
            important.setAttribute('type', 'radio');
            important.setAttribute('name', 'priority');
            veryImportant.setAttribute('type', 'radio');
            veryImportant.setAttribute('name', 'priority');

            function getInput () {
                switch(true) {
                    case notImportant.checked:
                        return notImportant.value;
                        break;
                    case important.checked:
                        return important.value;
                        break;
                    case veryImportant.checked:
                        return veryImportant.value;
                        break;
                }
            }

            return { notImportant, important, veryImportant, getInput };

        })();
        const acceptBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        const load = (projContainer) => {

            title.placeholder = 'Title...';
            date.placeholder = 'dd/mm/yyyy';
            description.placeholder = 'Description...';
            acceptBtn.textContent = '✓';
            cancelBtn.textContent = 'cancel';
            deleteBtn.textContent = 'X';
            priority.notImportant.value = 'not-important';
            priority.important.value = 'important';
            priority.veryImportant.value = 'very-important';

            title.classList.add('todo-title');
            date.classList.add('todo-date');
            description.classList.add('todo-description');
            priority.notImportant.classList.add('priority');
            priority.important.classList.add('priority');
            priority.veryImportant.classList.add('priority');

            container.append(

                title,
                date,
                description,
                priority.notImportant,
                priority.important,
                priority.veryImportant,
                acceptBtn,
                cancelBtn,
                deleteBtn

            );
            projContainer.appendChild(container);

        };

        return {

            container,
            title,
            date,
            description,
            priority,
            acceptBtn,
            cancelBtn,
            deleteBtn,
            load

        }

    };

    function newTodo (title, date, description, priority, project) {

        const bigContainer = document.createElement('div');
        const container = document.createElement('div');
        const titleH = document.createElement('h4');
        const dateH = document.createElement('h4');
        const descriptionP = document.createElement('p');
        const doneBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
    
        titleH.textContent = title;
        dateH.textContent = date;
        descriptionP.textContent = description;
        doneBtn.textContent = 'DONE';
        editBtn.textContent = 'EDIT';
        deleteBtn.textContent = 'DELETE';
    
        bigContainer.classList.add('task');
        container.classList.add('task-card');
        doneBtn.classList.add('task-done');
        editBtn.classList.add('task-edit');
        deleteBtn.classList.add('task-delete');
        container.classList.add(priority);
    
        container.append(titleH, dateH, descriptionP);
        bigContainer.append(container, editBtn, doneBtn, deleteBtn, deleteBtn);
        project.appendChild(bigContainer);

        return { bigContainer, container, editBtn };
    
    }

    return { newProjectInput, newProject, todoInput, newTodo };
    
})();

export { domThings };