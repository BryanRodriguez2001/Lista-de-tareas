const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');
const container = document.querySelector('.container')



addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== '') {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;
        localStorage.setItem("lista de tareas", ul.innerHTML );
        //li.classList.add('no-check')
        
        li.appendChild(addCheckBtn());
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
        
    
        

        input.value = "";
        empty.style.display = "none"
       
    }

    
});

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            empty.style.display = "block";
        }
        localStorage.setItem("lista de tareas", ul.innerHTML );
    });
    return deleteBtn;
    

};

function addCheckBtn() {
    const checkBtn = document.createElement('button');
    checkBtn.textContent = "Listo"
    checkBtn.className = "btn-check";

    checkBtn.addEventListener('click', (e) => {
        const li = e.target.parentElement;
        li.classList.toggle('check')

        const lis = document.querySelectorAll('li');
        
        localStorage.setItem("lista de tareas", ul.innerHTML );
       
    });
    return checkBtn;
};

(() => {
    const locaList = localStorage.getItem("lista de tareas");
    ul.innerHTML = locaList;
})();



        




