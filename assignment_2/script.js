let btn = document.querySelector('button');
btn.addEventListener('click' , ()=>{
    create();
})
let labe = document.querySelector('#label');
let checkk = document.querySelector('#tick')
checkk.addEventListener('change', (e) => {
        setTimeout(()=>{
            if(e.target.checked){
            labe.remove();
        }
        } , 100)
});
let lists = document.querySelector('#inputs');
function create(){
    let lab = document.createElement("label");
    lab.classList.add('.container');
    let inp = document.createElement('input');
    inp.id = 'tasktext';
    inp.placeholder = "Add Task"
    let check = document.createElement('input')
    check.type = 'checkbox';
    check.id = 'tick'
    lab.appendChild(inp)
    lab.appendChild(check)
    lists.appendChild(lab);
    check.addEventListener('change', (e) => {
        setTimeout(()=>{
            if(e.target.checked){
            lab.remove();
        }
        } , 100)
});
}