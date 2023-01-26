export const handleMouseUp = (hook ,event) => {

    hook(event.target.textContent);
    console.log(event)
}