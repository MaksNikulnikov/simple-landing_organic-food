const form = document.forms[0];

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('я отработала')
})