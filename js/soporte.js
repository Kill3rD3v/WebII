document.querySelectorAll('.expand__button').forEach(button =>{
button.addEventListener('click', () =>{
const expandContent = button.nextElementSibling;

button.classList.toggle('expand__button--active');
if(button.classList.contains('expand__button--active')){
    expandContent.style.maxHeight = expandContent.scrollHeight + 'px';

}else{
    expandContent.style.maxHeight = 0;
}
});
});